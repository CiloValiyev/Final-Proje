import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import "../blog/blog.scss"
const Blog = () => {
  let activeStyle = {
    color: "#89b927"
  };
  return (
    <div className='blog-wrapper'>
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