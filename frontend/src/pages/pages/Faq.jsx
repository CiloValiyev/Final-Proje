import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom';
import "../pages/app"
const Faq = () => {
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
        <title>Faq</title>
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
          zIndex:"999999999999999"
        }} onClick={scrollUp}><i className="fa-solid fa-chevron-up"></i></button>
      )}
      {/* Section1 */}
      <section style={{height:"450px"}} className='contact-us-wrapper1'>
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="banner-title">
              <h2>FAQ</h2>
              <div className="line"> <span></span></div>
            </div>
            <ul className="inner-breadcrumb">
              <li><Link to='/' >Home </Link></li>
              <li className='slash'>Pages</li>
              <li className='slash'><NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } to='/pages/faq'>Faq</NavLink> </li>

            </ul>
          </div>
        </div>
      </section>
      {/* Section2 */}
      <section>
        <div className="inner-page-wrapper5 faqs-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">

                <button className="accordion">
                  <button> <i className="fa-solid fa-greater-than"></i> </button>
                  <span>Lorem Ipsum Is Simply Dummy Text?</span>
                </button>
                <div className="panel">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                </div>
                <button className="accordion">
                  <button className='icon'> <i className="fa-solid fa-greater-than"></i> </button>
                  <span>Lorem Ipsum Is Simply Dummy Text?</span>
                </button>
                <div className="panel1">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                </div>
                <button className="accordion">
                  <button> <i className="fa-solid fa-greater-than"></i> </button>
                  <span>Lorem Ipsum Is Simply Dummy Text?</span>
                </button>
                <div className="panel">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                </div>
                <button className="accordion">
                  <button> <i className="fa-solid fa-greater-than"></i> </button>
                  <span>Lorem Ipsum Is Simply Dummy Text?</span>
                </button>
                <div className="panel">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                </div>
                <button className="accordion">
                  <button> <i className="fa-solid fa-greater-than"></i> </button>
                  <span>Lorem Ipsum Is Simply Dummy Text?</span>
                </button>
                <div className="panel">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                </div>
                <button className="accordion">
                  <button> <i className="fa-solid fa-greater-than"></i> </button>
                  <span>Lorem Ipsum Is Simply Dummy Text?</span>
                </button>
                <div className="panel">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                </div>
                <button className="accordion">
                  <button> <i className="fa-solid fa-greater-than"></i> </button>
                  <span>Lorem Ipsum Is Simply Dummy Text?</span>
                </button>
                <div className="panel">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                </div>

              </div>
              <div className="col-md-6 col-sm-12">
                <div className="contact-form">
                  <form method="post" action="" id="contact-form" novalidate="">
                    <div className="row clearfix">
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <input name="username" value="" placeholder="Name" required="" aria-required="true" type="text" />
                        </div>
                        <div className="form-group">
                          <input name="email" value="" placeholder="Email" required="" aria-required="true" type="email" />
                        </div>
                        <div className="form-group">
                          <input name="Phone" value="" placeholder="Phone" type="text" />
                        </div>
                        <div className="form-group">
                          <input name="subject" value="" placeholder="Subject" type="text" />
                        </div>
                        <div className="form-group">
                          <textarea name="message" placeholder="Message" required="" aria-required="true"></textarea>
                        </div>
                      </div>
                      <div className="form-group col-md-12 col-sm-12 col-xs-12">
                        <button type="submit" className="btn-one">send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faq