import React, { useEffect, useState } from 'react';
import "../current/current.scss";
import { NavLink, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Apply = () => {
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
        <title>Apply</title>
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
              <h2>APPLY JOB</h2>
              <div className="line"> <span></span></div>
            </div>
            <ul className="inner-breadcrumb">
              <li><Link to='/' >Home </Link></li>
              <li className='slash'>Pages</li>
              <li className='slash'><NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } to='/apply'>APPLY JOB</NavLink> </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Section2 */}
      <section>
        <div className="inner-page-wrapper2 apply-jobs-wrapper1">
          <div className="container">
            <div className="row">
              <div className="row">
                <form>
                  <div className="col-sm-5">
                    <input className="form-control" id="name" placeholder="Your Name" required="" type="text" />
                    <input className="form-control" id="phone" placeholder="Your Phone number" required="" type="text" />
                    <input className="form-control" id="email" placeholder="Enter Your E-Mail" required="" type="email" />
                  </div>
                  <div className="col-sm-5">
                    <textarea className="form-control" id="comment" placeholder="Comment here..." required=""></textarea>
                    <span className="btn btn-file"> Browse Your Resume
                      <input type="file" />
                    </span> </div>
                </form>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button type="submit" className="btn-one">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Apply