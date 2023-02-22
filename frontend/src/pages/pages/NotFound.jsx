import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NotFound = () => {
  let activeStyle = {
    color: "#89b927"
  };
  return (
    <div>
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
        <div class="inner-page-wrapper1 oops-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <div class="not-found-icon"> <i class="fa-solid fa-signs-post"></i> </div>
              </div>
              <div class="col-sm-6">
                <div class="not-found-text">
                  <h1>404</h1>
                  <h2>Not Found</h2>
                  <button class="btn-one"><Link to='/'>Back To Home</Link></button>
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