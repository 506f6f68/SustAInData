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
            <a className="navbar-brand" href="index.html">
              <span>sustAIn data</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/chatbot">Chatbot</a>
                </li>
                <form className="form-inline">
                  <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
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
                      <h1>Data Center <br />Consulting</h1>
                      <p>Our chatbot provides expert advice on building and managing data centers, ensuring efficiency and reliability. Get personalized recommendations and support for your data center projects.</p>
                      <div className="btn-box">
                        <a href="" className="btn1">Let's Chat!</a>
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
            {/* Repeat for other carousel items */}
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>Our <span>Services</span></h2>
              <p>We offer a range of services to help you build and manage your data center efficiently.</p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s1.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Data Center Design</h5>
                    <p>Get expert advice on designing a data center that meets your needs and maximizes efficiency.</p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s2.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Security Solutions</h5>
                    <p>Implement robust security measures to protect your data center from threats and vulnerabilities.</p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>24/7 Support</h5>
                    <p>Our team is available around the clock to provide support and ensure your data center runs smoothly.</p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="">View All</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>About <span>Us</span></h2>
            <p>We are a team of experts dedicated to providing top-notch consulting services for data center projects.</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h3>We Are sustAIn data</h3>
                <p>With years of experience in the industry, we offer comprehensive consulting services to help you build and manage your data center effectively. Our chatbot is designed to provide you with the best advice and support, tailored to your specific needs.</p>
                <a href="">Read More</a>
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
                <h5>Expert Management</h5>
                <p>Our team of experts ensures that your data center is managed efficiently and effectively, providing you with peace of mind.</p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Secure Investment</h5>
                <p>We help you make informed decisions to secure your investment and ensure the long-term success of your data center.</p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w3.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Instant Support</h5>
                <p>Our chatbot provides instant support and answers to your questions, helping you resolve issues quickly and efficiently.</p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w4.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Happy Clients</h5>
                <p>We pride ourselves on our high client satisfaction rate, with many happy clients who trust us with their data center needs.</p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">Read More</a>
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
                    <h5>Joseph Brown</h5>
                    <p>Data Center Architect</p>
                  </div>
                  <div className="social_box">
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box">
                  <div className="img-box">
                    <img src="images/team-2.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Nancy White</h5>
                    <p>Security Specialist</p>
                  </div>
                  <div className="social_box">
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box">
                  <div className="img-box">
                    <img src="images/team-3.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Earl Martinez</h5>
                    <p>Support Engineer</p>
                  </div>
                  <div className="social_box">
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box">
                  <div className="img-box">
                    <img src="images/team-4.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Josephine Allard</h5>
                    <p>Project Manager</p>
                  </div>
                  <div className="social_box">
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Location</span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call +01 1234567890</span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>demo@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="info_social">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>We provide comprehensive consulting services for data center projects, ensuring efficiency and reliability.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <a className="active" href="index.html">Home</a>
                  <a className="" href="about.html">About</a>
                  <a className="" href="service.html">Services</a>
                  <a className="" href="why.html">Why Us</a>
                  <a className="" href="team.html">Team</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <h4>Subscribe</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;