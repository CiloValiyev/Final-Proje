import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom';
const NotFound = () => {
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
        <title>Not Found - 404  </title>
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
              <h2>404</h2>
              <div className="line"> <span></span></div>
            </div>
            <ul className="inner-breadcrumb">
              <li><Link to='/' >Home </Link></li>
              <li className='slash'>Pages</li>
              <li className='slash'><NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } to='/*'>404</NavLink> </li>

            </ul>
          </div>
        </div>
      </section>
      {/* Section2 */}
      <section>
        <div className="inner-page-wrapper1 oops-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="not-found-icon"> <i className="fa-solid fa-signs-post"></i> </div>
              </div>
              <div className="col-sm-6">
                <div className="not-found-text">
                  <h1>404</h1>
                  <h2>Not Found</h2>
                  <button className="btn-one"><Link to='/'>Back To Home</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound;