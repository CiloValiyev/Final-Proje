import React from 'react';
import "../current/current.scss";
import { NavLink, Link } from 'react-router-dom';
const Current = () => {
  let activeStyle = {
    color: "#89b927"
  };
  return (
    <div>
      {/* Section1 */}
      <section style={{height:"450px"}} className='contact-us-wrapper1'>
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="banner-title">
              <h2>CURRENT JOB</h2>
              <div className="line"> <span></span></div>
            </div>
            <ul className="inner-breadcrumb">
              <li><Link to='/' >Home </Link></li>
              <li className='slash'>Pages</li>
              <li className='slash'><NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } to='/current'>CURRENT JOB</NavLink> </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Section2 */}
      <section>
        <div class="inner-page-wrapper latest-jobs-wrapper">
          <div class="container">

            <div class="single-jobs">
              <div class="job-heading">
              <i class="fa fa-users"></i>
                <div>
                <h3>Recruite Pro Job Title Comes Here</h3>
                <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div class="our-location color1"> 
              <span class="fa fa-calendar" aria-hidden="true"></span>
                <div class="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div class="single-jobs">
              <div class="job-heading">
              <i class="fa fa-users"></i>
                <div>
                <h3>Recruite Pro Job Title Comes Here</h3>
                <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div class="our-location color1"> 
              <span class="fa fa-calendar" aria-hidden="true"></span>
                <div class="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div class="single-jobs">
              <div class="job-heading">
              <i class="fa fa-users"></i>
                <div>
                <h3>Recruite Pro Job Title Comes Here</h3>
                <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div class="our-location color1"> 
              <span class="fa fa-calendar" aria-hidden="true"></span>
                <div class="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div class="single-jobs">
              <div class="job-heading">
              <i class="fa fa-users"></i>
                <div>
                <h3>Recruite Pro Job Title Comes Here</h3>
                <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div class="our-location color1"> 
              <span class="fa fa-calendar" aria-hidden="true"></span>
                <div class="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div class="single-jobs">
              <div class="job-heading">
              <i class="fa fa-users"></i>
                <div>
                <h3>Recruite Pro Job Title Comes Here</h3>
                <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div class="our-location color1"> 
              <span class="fa fa-calendar" aria-hidden="true"></span>
                <div class="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div class="single-jobs">
              <div class="job-heading">
              <i class="fa fa-users"></i>
                <div>
                <h3>Recruite Pro Job Title Comes Here</h3>
                <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div class="our-location color1"> 
              <span class="fa fa-calendar" aria-hidden="true"></span>
                <div class="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div class="single-jobs">
              <div class="job-heading">
              <i class="fa fa-users"></i>
                <div>
                <h3>Recruite Pro Job Title Comes Here</h3>
                <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div class="our-location color1"> 
              <span class="fa fa-calendar" aria-hidden="true"></span>
                <div class="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div class="single-jobs">
              <div class="job-heading">
              <i class="fa fa-users"></i>
                <div>
                <h3>Recruite Pro Job Title Comes Here</h3>
                <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div class="our-location color1"> 
              <span class="fa fa-calendar" aria-hidden="true"></span>
                <div class="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div class="single-jobs">
              <div class="job-heading">
              <i class="fa fa-users"></i>
                <div>
                <h3>Recruite Pro Job Title Comes Here</h3>
                <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div class="our-location color1"> 
              <span class="fa fa-calendar" aria-hidden="true"></span>
                <div class="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div class="single-jobs">
              <div class="job-heading">
              <i class="fa fa-users"></i>
                <div>
                <h3>Recruite Pro Job Title Comes Here</h3>
                <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div class="our-location color1"> 
              <span class="fa fa-calendar" aria-hidden="true"></span>
                <div class="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <ul class="pagination">
              <li><a href="#"><i class="fa fa-angle-left" aria-hidden="true"></i></a></li>
              <li><a href="#">1</a></li>
              <li class="active"><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Current