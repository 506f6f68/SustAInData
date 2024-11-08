import React from 'react';
import './css/bootstrap.css';
import './css/style.css';
import './css/responsive.css';
import 'owl.carousel/dist/assets/owl.carousel.css';

function HomePage() {
  return (
    <div className="hero_area">
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Data Center Consultant</title>
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="/images/hero-bg.png" alt="" />
        </div>
      </div>

      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="/">
              <span>sustAIn data</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link blue-text" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link blue-text" href="/chatbot">Chatbot</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link blue-text" href="/marketplace">MarketPlace</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <section className="slider_section">
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>Powering the <br /> sustainable future of AI</h1>
                      <p>Our chatbot provides expert advice on building and managing data centers, ensuring efficiency and reliability. Get personalized recommendations and support for your data center projects.</p>
                      <div className="btn-box">
                        <a href="/chatbot" className="btn1">Let's Chat!</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="service_section layout_padding2-bottom">
        <div className="service_container">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>Our <span>Services</span></h2>
              <p>Integrated, Future-Proof Data Center Sustainability Solutions</p>
              <p>Empowering data centers to meet today’s sustainability standards while preparing for tomorrow’s challenges. Our services are designed to address key pain points, from energy costs and carbon reduction to seamless scalability and regulatory compliance.</p>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="box">
                  <div className="img-box">
                    <img src="images/survey.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Strategic Site Selection</h5>
                    <p>Identify sites that align with your sustainability goals, maximizing access to renewable energy sources while meeting local regulatory requirements.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Operational Optimization</h5>
                    <p>With supplier datasets and AI-driven insights, our tool create solutions which optimize energy consumption, cooling efficiency, and carbon output.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                  <div className="img-box">
                    <img src="images/carbon-neutral.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Carbon Footprint Management</h5>
                    <p>Stay ahead in sustainability commitments with comprehensive carbon management solutions.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                  <div className="img-box">
                    <img src="images/speed.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Instant <br/> Suppliers List</h5>
                    <p>Get a comprehensive list of potential suppliers tailored to your project needs. Quickly evaluate different solutions through our dashboard. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>About <span>Us</span></h2>
            <p>Passionate about data and sustainability, we are dedicated to providing top-notch consulting services for data center products supporting a greener future
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/cms-14.jpg.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h3>We Are sustAIn data</h3>
                <p>With a deep background in Climate & Sustainability Engineering, we offer comprehensive consulting services that help you build and manage your data center effectively while addressing the existential threat of climate change. Our chatbot is designed to provide you with the best advice and support, tailored to your specific needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Why Choose <span>Us</span></h2>
          </div>
          <div className="why_container">
            <div className="box">
              <div className="img-box">
                <img src="images/w1.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Expertise Across All Phases of the Data Center Lifecycle</h5>
                <p>We understand the data center journey from start to operation, with tailored solutions that anticipate and solve common roadblocks. This complete, lifecycle-driven approach helps minimize risk and ensures efficient and sustainable outcomes at every phase.</p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Speed and Flexibility with MarketPlace </h5>
                <p>Our marketplace matches you with the retailers you need to implement actionable solutions, streamlining your research process. </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w4.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Regulatory and Carbon Compliance</h5>
                <p>With sustainability mandates evolving rapidly, our compliance tools make it easy to track and report on regulatory adherence, emissions reductions, and ESG performance. These tools reduce compliance burdens and protect against potential fines or penalties.</p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w3.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Tailored Strategies Aligned with Your Growth and ESG Goals</h5>
                <p>Our approach adapts to your specific growth trajectory and ESG mandates, allowing you to navigate complex sustainability requirements with ease. With a long-term focus, we ensure that solutions align with both immediate needs and future objectives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team_section layout_padding">
        <div className="container-fluid">
          <div className="heading_container heading_center">
            <h2 className="">Our <span> Team</span></h2>
          </div>
          <div className="team_container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="box">
                  <div className="img-box">
                    <img src="images/team-1.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Gabriel Sandoval</h5>
                    <p>Climate and Sustainability Engiereing</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box">
                  <div className="img-box">
                    <img src="images/team-2.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Nora Chang</h5>
                    <p>Climate and Sustainability Engineering</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box">
                  <div className="img-box">
                    <img src="images/team-3.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Howard Wu</h5>
                    <p>Fintech</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box">
                  <div className="img-box">
                    <img src="images/team-4.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Louis Luo</h5>
                    <p>Climate and Sustainability Engiereing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;