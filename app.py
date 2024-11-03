# Standard library imports
import os
from typing import Sequence
from typing_extensions import Annotated, TypedDict

# Third-party library imports
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse, JSONResponse
from pydantic import BaseModel
from dotenv import load_dotenv

# LangChain imports
from langchain_community.document_loaders import PyPDFLoader
from langchain_community.document_loaders.csv_loader import CSVLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain.chains import create_history_aware_retriever, create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_chroma import Chroma
from langchain_ollama.chat_models import ChatOllama
from langchain_groq import ChatGroq
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_core.prompts import MessagesPlaceholder, ChatPromptTemplate
from langchain_core.messages import AIMessage, BaseMessage, HumanMessage
from langchain_core.documents import Document

# LangGraph imports
from langgraph.checkpoint.memory import MemorySaver
from langgraph.graph import START, StateGraph
from langgraph.graph.message import add_messages


load_dotenv()


def get_contextualize_q_system_prompt():
    return (
        "Given a chat history and the latest user question which might reference context in the chat history, "
        "formulate a standalone question which can be understood without the chat history."
        "Do NOT answer the question, just reformulate it if needed and otherwise return it as is."
    )


def get_system_prompt():
    return (
        "You are a consultant for question-answering tasks specializing in sustainable data center development. "
        "The first three lines of the input will be Tier of the data center, Client budget and number of servers. "
        "Use the following pieces of retrieved context to answer. Specifying the resource used in your response"
        "You should first search the provided content. If you cannot get the answer from the context, offer a relevant answer based on industry knowledge and best practices. "
        "Include considerations for scope 1, 2, and 3 emissions, water and land usage, and renewable energy sources"
        "For each question, you can provide multiple aspects related to the original question so the user can dive deeper into the topics they are interested in."
        "List out specific companies, technologies, or strategies that are mentioned in the retrieved context."
        "Be concise, but provide enough information to answer the question."
        "\n\n"
        "{context}"
    )


def get_summary_prompt():
    return (
        "You are tasked with summarizing the following chat history related to building a data center. "
        "Provide 3 different location and answer to the belowing questions in a concise manner."
        "You should first answer the location, and then provide the answer to the question based on the chosen location."
        "If you cannot get the answer from the context or from the chat history, offer a relevant answer based on industry knowledge and best practices."
        "1. Cooling technology: Describe optimal options based on budget, considering both building and IT equipment."
        "2. HVAC(Heating, Ventilation, AC cost), including basic cost(battery cost) and provide a list of specific suppliers"
        "3. Power supply and backup"
        "4. Energy options in that location"
        "5. Energy efficiency design of that location"
        "The summary should like a report, but do not mark the questions as questions, just provide the answers."
        "Seperate each answer with 10 '-' characters."
        "\n\n{context}"
        "\n\n"
    )


def parse_pdf(path):
    print(path)
    loader = PyPDFLoader(path)
    pages = []
    for page in loader.lazy_load():
        pages.append(page)
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=512, chunk_overlap=48, add_start_index=True)
    page_splits = text_splitter.split_documents(pages)
    return page_splits


def parse_txt(path):
    print(path)
    with open(path, "r", errors="ignore") as file:
        text = file.read()
    with open(f"{path}", "w") as file:
        file.write(text)
    loader = CSVLoader(path)
    data = loader.load()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=512, chunk_overlap=48, add_start_index=True)
    page_splits = text_splitter.split_documents(data)
    return page_splits


def parse_external_data():
    vector_store = Chroma(
        collection_name="data_center_collection",
        embedding_function=HuggingFaceEmbeddings(model_name="sentence-transformers/all-mpnet-base-v2", show_progress=True),
        persist_directory="./chroma_langchain_db",
    )
    file_dir = "data_src"
    docs = []
    pdf_paths = [os.path.join(file_dir, path) for path in os.listdir(file_dir) if path.endswith(".pdf")]
    # txt_paths = [os.path.join(file_dir, path) for path in os.listdir(file_dir) if path.endswith(".txt")]
    # print(f"starting to parse {len(txt_paths)} txts...")
    # parsed_docs = await asyncio.gather(*(parse_txt(path) for path in txt_paths))
    # docs = [page for pages in parsed_docs for page in pages]
    # print("finished parsing, starting to add to vector store...")
    # vector_store.add_documents(docs)

    print(f"starting to parse {len(pdf_paths)} pdfs...")
    parsed_docs = [parse_pdf(path) for path in pdf_paths]
    docs = [page for pages in parsed_docs for page in pages]
    print("finished parsing, starting to add to vector store...")
    vector_store.add_documents(docs)
    return vector_store


class State(TypedDict):
    input: str
    chat_history: Annotated[Sequence[BaseMessage], add_messages]
    context: str
    answer: str


def call_model(state: State):
    response = rag_chain.invoke(state)
    return {
        "chat_history": [
            HumanMessage(state["input"]),
            AIMessage(response["answer"]),
        ],
        "context": response["context"],
        "answer": response["answer"],
    }


class TextRequest(BaseModel):
    text: str


fastapi = FastAPI()
fastapi.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)


@fastapi.post("/process_text/")
async def process_text(input_data: dict):
    tier = input_data["tier"]
    budget = input_data["budget"]
    servers = input_data["servers"]
    text = input_data["text"]
    text = f"Tier: {tier}\nBudget($): {budget}\nnumber of Server: {servers}\n{text}"
    result = app.invoke({"input": text}, config=config)
    print(result["answer"])
    return {"answer": result["answer"]}


@fastapi.get("/summary/", response_class=HTMLResponse)
async def get_summary():
    chat_history = app.get_state(config).values["chat_history"]
    formatted_history = "\n".join(f"User: {msg.content}" if isinstance(msg, HumanMessage) else f"Bot: {msg.content}" for msg in chat_history)
    retriever = vector_store.as_retriever(search_type="similarity", search_kwargs={"k": 5})
    rag_context = retriever.get_relevant_documents(formatted_history)
    rag_text = "\n".join(doc.page_content for doc in rag_context)
    combined_context = f"Chat History:\n{formatted_history}\n\nRelevant Information:\n{rag_text}"
    summary_prompt_template = ChatPromptTemplate.from_messages([("system", get_summary_prompt()), ("human", combined_context)])
    summary_chain = create_stuff_documents_chain(llm, summary_prompt_template)
    combined_context = (Document(page_content=combined_context, metadata={"title": "chat_history"}),)
    summary = summary_chain.invoke({"context": combined_context})
    print(summary)
    return JSONResponse(content={"summary": summary})


if __name__ == "__main__":
    vector_store = parse_external_data()
    retriever = vector_store.as_retriever(search_type="similarity", search_kwargs={"k": 5})
    llm = ChatGroq(api_key=os.getenv("GROQ_API_KEY"), model="llama-3.1-8b-instant")
    # llm = ChatOllama(model='llama3.2')
    contextualize_q_prompt = ChatPromptTemplate.from_messages([("system", get_contextualize_q_system_prompt()), MessagesPlaceholder("chat_history"), ("human", "{input}")])
    history_aware_retriever = create_history_aware_retriever(llm, retriever, contextualize_q_prompt)
    qa_prompt = ChatPromptTemplate.from_messages([("system", get_system_prompt()), MessagesPlaceholder("chat_history"), ("human", "{input}")])
    question_answer_chain = create_stuff_documents_chain(llm, qa_prompt)
    rag_chain = create_retrieval_chain(history_aware_retriever, question_answer_chain)
    workflow = StateGraph(state_schema=State)
    workflow.add_node("model", call_model)
    workflow.add_edge(START, "model")
    memory = MemorySaver()
    app = workflow.compile(checkpointer=memory)
    config = {"configurable": {"thread_id": "abc123"}}

    uvicorn.run(fastapi, port=5000)
