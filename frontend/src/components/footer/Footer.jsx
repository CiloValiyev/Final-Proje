import React from 'react';
import "../footer/footer.scss";
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Subscribe Our Newsletter</h3>
              <input className='input-enter' type="text" placeholder='Enter your Email' />
              <input className='input-btn-subscribe' type="text" placeholder='SUBSCRİBE' />
            </div>
            <div className="col-md-4 colmd4">
              <h3>Follow us on</h3>
              <ul>
                <li><a href="https://www.facebook.com/" ><i className="fa-brands fa-facebook-f"></i></a> </li>
                <li><a href="https://twitter.com/" ><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/" ><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="https://www.google.com/" ><i className="fa-brands fa-google"></i></a></li>
                <li><a href="https://www.youtube.com/" ><i className="fa-brands fa-youtube"></i></a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Need Help ?</h3>
              <p><i className="fa-solid fa-phone"></i> <span> CALL US : 1800-0000-1234</span></p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="single-section-two"> <img style={{ paddingBottom: "20px" }} src="	http://sbtechnosoft.com/recruitepro/images/logo.png" alt="" />
                <p>Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi.</p>
              </div>
            </div>
            <div className="col-sm-3 col-md-2">
              <div className="single-section-two white">
                <h3 style={{ color: "white", paddingBottom: "30px" }}>Company</h3>
                <ul style={{ listStyle: "none" }}>
                  <li style={{ paddingBottom: "20px", fontSize: "18px" }}> <Link to='pages/aboutus' style={{ color: "white", textDecoration: "none" }}><button></button> About Us</Link></li>
                  <li style={{ paddingBottom: "20px", fontSize: "18px" }}><span></span><Link style={{ color: "white", textDecoration: "none" }}> <button></button>Help Center</Link></li>
                  <li style={{ paddingBottom: "20px", fontSize: "18px" }}><Link to='blog' style={{ color: "white", textDecoration: "none" }}> <button></button>Blog</Link></li>
                  <li style={{ paddingBottom: "20px", fontSize: "18px" }}><Link style={{ color: "white", textDecoration: "none" }}><button></button>Careers</Link></li>
                  <li style={{ paddingBottom: "20px", fontSize: "18px" }}><Link to='contact' style={{ color: "white", textDecoration: "none" }}><button></button>Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 col-md-2">
              <div className="single-section-two white">
                <h3 style={{ color: "white", paddingBottom: "30px" }}>Quick Links</h3>
                <ul style={{ listStyle: "none" }}>
                  <li style={{ paddingBottom: "20px", fontSize: "18px" }}><Link style={{ color: "white", textDecoration: "none" }}><button></button>How It Works</Link></li>
                  <li style={{ paddingBottom: "20px", fontSize: "18px" }}><Link style={{ color: "white", textDecoration: "none" }}><button></button>Add Listing</Link></li>
                  <li style={{ paddingBottom: "20px", fontSize: "18px" }}><Link style={{ color: "white", textDecoration: "none" }}><button></button>Popular Categor</Link></li>
                  <li style={{ paddingBottom: "20px", fontSize: "18px" }}><Link style={{ color: "white", textDecoration: "none" }}><button></button>Popular Places</Link></li>
                  <li style={{ paddingBottom: "20px", fontSize: "18px" }}><Link to='pages/faq' style={{ color: "white", textDecoration: "none" }}><button></button>FAQ</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="single-section-two">
                <h3 style={{ paddingBottom: "30px" }}>Get In Touch</h3>
                <div className="form">
                  <div className="form-group">
                    <input placeholder="Enter your Name" id="exampleInputName2" className="form-control first" type="text" />
                  </div>
                  <div className="form-group">
                    <input placeholder="Enter your Email" id="exampleInputEmail" className="form-control first" type="text" />
                  </div>
                  <div className="form-group">
                    <input placeholder="Enter your Message" id="exampleInputMessage" className="form-control first message" type="text" />
                    <input className="bttn" value="Subscribe" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer >
      {/* Section */}
      <section>
        <div className="copyright-wrapper">
          <div className="container">
            <p>© Copyright
              <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script type="text/javascript">
                var d=new Date();
                document.write(d.getFullYear());
              </script>2023
              Recruite Pro | All Rights Reserved.</p>
          </div>
        </div>
      </section>
    </div >
  )
}

export default Footer