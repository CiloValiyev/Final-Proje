import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom';
import "../contact/contact.scss"
const Contact = () => {
  let activeStyle = {
    color: "#89b927"
  };
  const [topButton, settopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        settopButton(true)
      }
      else {
        settopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      {topButton && (
        <button style={{
          position: "fixed",
          bottom: '50px',
          right: "50px",
          width: "50px",
          height: "50px",
          fontSize: '20px',
          border: 'none',
          borderRadius: "50%",
          color: "white",
          background: "#89b927",
          zIndex: "999999999999999"
        }} onClick={scrollUp}><i className="fa-solid fa-chevron-up"></i></button>
      )}
      {/* Section1 */}
      <section className='contact-us-wrapper1'>
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="banner-title">
              <h2>CONTACT US</h2>
              <div className="line"> <span></span></div>
            </div>
            <ul className="inner-breadcrumb">
              <li><Link to='/' >Home </Link></li>
              <li className='slash'>Pages</li>
              <li className='slash'><NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } to='/contact'>CONTACT US</NavLink> </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="contactus-txt">
                <h2>Get in touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
              <div className="contact-address">
                <div className="contact-left"> <i className="fa"><img src="	http://sbtechnosoft.com/recruitepro/images/contact-icon1.jpg" alt="" /></i>
                  <div className="address">
                    <h3>Los Angeles</h3>
                    Porto Blvd, Suite 100 <span>Los Angeles/CA</span> <span>Phone: 123-456-7890</span> </div>
                </div>
                <div className="contact-right"> <i className="fa"><img src="	http://sbtechnosoft.com/recruitepro/images/contact-icon2.jpg" alt="" /></i>
                  <div className="address">
                    <h3>New York</h3>
                    Porto Blvd, Suite 100 <span>Los Angeles/CA</span> <span>Phone: 123-456-7890</span> </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 hidden-sm">
              <img src="http://sbtechnosoft.com/recruitepro/images/contact-img.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Section2 */}
      <section className='contact-us1'>
        <div className="inner-page-wrapper10 contacts-wrapper">
          <div className="container">

            <div className="form-bg">
              <div className="row">
                <div className="col-sm-8">
                  <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <div className="row">
                      <form>
                        <div className="col-md-4 col-sm-12">
                          <div className="form-group">
                            <input className="form-control" id="name" placeholder="Your Name"  type="text" />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <div className="form-group">
                            <input className="form-control" id="phone" placeholder="Your Phone number"  type="text" />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <div className="form-group">
                            <input className="form-control" id="email" placeholder="Enter Your E-Mail" type="email" />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group">
                            <textarea className="form-control" id="comment" placeholder="Comment here..." ></textarea>
                          </div>
                        </div>
                        <div className="col-sm-12 text-right">
                          <button type="submit" className="btn-one">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="why-us">
                    <h2>Why Us?</h2>
                    <ul>
                      <li>Accounting</li>
                      <li>Finance</li>
                      <li>Staffing</li>
                      <li>Finance</li>
                      <li>Staffing</li>
                    </ul>
                    <ul>
                      <li>Accounting</li>
                      <li>Finance</li>
                      <li>Staffing</li>
                      <li>Finance</li>
                      <li>Staffing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12152.455126418954!2d49.82256545!3d40.4063301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1676317278165!5m2!1sen!2s" style={{ position: "relative", bottom: "-90px", width: "100%", height: "350px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </div>
  )
}

export default Contact;