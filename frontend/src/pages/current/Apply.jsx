import React from 'react';
import "../current/current.scss";
import { NavLink, Link } from 'react-router-dom';
const Apply = () => {
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
        <div class="inner-page-wrapper2 apply-jobs-wrapper1">
          <div class="container">
            <div class="row">
                <div class="row">
                  <form>
                    <div class="col-sm-5">
                      <input class="form-control" id="name" placeholder="Your Name" required="" type="text" />
                      <input class="form-control" id="phone" placeholder="Your Phone number" required="" type="text" />
                      <input class="form-control" id="email" placeholder="Enter Your E-Mail" required="" type="email" />
                    </div>
                    <div class="col-sm-5">
                      <textarea class="form-control" id="comment" placeholder="Comment here..." required=""></textarea>
                      <span class="btn btn-file"> Browse Your Resume
                        <input type="file" />
                      </span> </div>
                  </form>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <button type="submit" class="btn-one">Submit</button>
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