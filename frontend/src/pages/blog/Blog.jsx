import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { NavLink, Link } from 'react-router-dom';
import "../blog/blog.scss"
const Blog = () => {
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
    <div className='blog-wrapper'>
        <Helmet>
        <title>Blog</title>
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
      <section className='contact-us-wrapper1'>
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="banner-title">
              <h2>BLOG</h2>
              <div className="line"> <span></span></div>
            </div>
            <ul className="inner-breadcrumb">
              <li><Link to='/' >Home </Link></li>
              <li className='slash'>Pages</li>
              <li className='slash'><NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } to='/blog'>Blog</NavLink> </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Section2 */}
      <section>
        <div className="blog-wrapper-section2">
          <div className="container">
            <div className="title">
              <h2>Latest <span>Blog</span></h2>
              <h3>Here you can see</h3>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-4 col-4-card1">
                <div className="blog-box">
                  <div className="blog-img">
                    <img src="http://sbtechnosoft.com/recruitepro/images/blog-img1.jpg  " alt="img" />
                  </div>
                  <div className="blog-caption">
                    <h3>
                      Tonsectetur adipiscing elit. Viva mus id interdum nibh, eu
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio condimentum, suscipit elit non,sodales mauris.</p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-4-card1">
                <div className="blog-box">
                  <div className="blog-img">
                    <img src="http://sbtechnosoft.com/recruitepro/images/blog-img2.jpg  " alt="img" />
                  </div>
                  <div className="blog-caption">
                    <h3>
                      Tonsectetur adipiscing elit. Viva mus id interdum nibh, eu
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio condimentum, suscipit elit non,sodales mauris.</p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-4-card1">
                <div className="blog-box">
                  <div className="blog-img">
                    <img src="http://sbtechnosoft.com/recruitepro/images/blog-img3.jpg" alt="img" />
                  </div>
                  <div className="blog-caption">
                    <h3>
                      Tonsectetur adipiscing elit. Viva mus id interdum nibh, eu
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio condimentum, suscipit elit non,sodales mauris.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn-one">Visit Our Blog</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog