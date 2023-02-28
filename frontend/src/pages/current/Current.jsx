import React, { useEffect, useState } from 'react';
import "../current/current.scss";
import { NavLink, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Current = () => {
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
        <title>Current</title>
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
      <section style={{ height: "450px" }} className='contact-us-wrapper1'>
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
        <div className="inner-page-wrapper latest-jobs-wrapper">
          <div className="container">

            <div className="single-jobs">
              <div className="job-heading">
                <i className="fa fa-users"></i>
                <div>
                  <h3>Recruite Pro Job Title Comes Here</h3>
                  <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div className="our-location color1">
                <span className="fa fa-calendar" aria-hidden="true"></span>
                <div className="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div className="single-jobs">
              <div className="job-heading">
                <i className="fa fa-users"></i>
                <div>
                  <h3>Recruite Pro Job Title Comes Here</h3>
                  <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div className="our-location color1">
                <span className="fa fa-calendar" aria-hidden="true"></span>
                <div className="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div className="single-jobs">
              <div className="job-heading">
                <i className="fa fa-users"></i>
                <div>
                  <h3>Recruite Pro Job Title Comes Here</h3>
                  <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div className="our-location color1">
                <span className="fa fa-calendar" aria-hidden="true"></span>
                <div className="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div className="single-jobs">
              <div className="job-heading">
                <i className="fa fa-users"></i>
                <div>
                  <h3>Recruite Pro Job Title Comes Here</h3>
                  <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div className="our-location color1">
                <span className="fa fa-calendar" aria-hidden="true"></span>
                <div className="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div className="single-jobs">
              <div className="job-heading">
                <i className="fa fa-users"></i>
                <div>
                  <h3>Recruite Pro Job Title Comes Here</h3>
                  <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div className="our-location color1">
                <span className="fa fa-calendar" aria-hidden="true"></span>
                <div className="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div className="single-jobs">
              <div className="job-heading">
                <i className="fa fa-users"></i>
                <div>
                  <h3>Recruite Pro Job Title Comes Here</h3>
                  <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div className="our-location color1">
                <span className="fa fa-calendar" aria-hidden="true"></span>
                <div className="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div className="single-jobs">
              <div className="job-heading">
                <i className="fa fa-users"></i>
                <div>
                  <h3>Recruite Pro Job Title Comes Here</h3>
                  <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div className="our-location color1">
                <span className="fa fa-calendar" aria-hidden="true"></span>
                <div className="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div className="single-jobs">
              <div className="job-heading">
                <i className="fa fa-users"></i>
                <div>
                  <h3>Recruite Pro Job Title Comes Here</h3>
                  <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div className="our-location color1">
                <span className="fa fa-calendar" aria-hidden="true"></span>
                <div className="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div className="single-jobs">
              <div className="job-heading">
                <i className="fa fa-users"></i>
                <div>
                  <h3>Recruite Pro Job Title Comes Here</h3>
                  <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div className="our-location color1">
                <span className="fa fa-calendar" aria-hidden="true"></span>
                <div className="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <div className="single-jobs">
              <div className="job-heading">
                <i className="fa fa-users"></i>
                <div>
                  <h3>Recruite Pro Job Title Comes Here</h3>
                  <p>Job Descripiton Comes Here</p>
                </div>
              </div>
              <div className="our-location color1">
                <span className="fa fa-calendar" aria-hidden="true"></span>
                <div className="location-content">
                  <h3>19 Aug, 2016</h3>
                  <a href="#">Apply Now</a> </div>
              </div>
            </div>
            <ul className="pagination">
              <li><a href="#"><i className="fa fa-angle-left" aria-hidden="true"></i></a></li>
              <li><a href="#">1</a></li>
              <li className="active"><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Current