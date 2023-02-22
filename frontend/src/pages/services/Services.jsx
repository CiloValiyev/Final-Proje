import React from 'react';
import "../services/service.scss";
import { Link, NavLink } from "react-router-dom"
const Services = () => {
  let activeStyle = {
    color: "#89b927"
};
  return (
    <div>
      {/* Section1 */}
      <section>
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="banner-title">
              <h2>Services</h2>
              <div className="line"> <span></span></div>
            </div>
            <ul className="inner-breadcrumb">
              <li><Link to='/' >Home </Link></li>
              <li className='slash'>Pages</li>
              <li className='slash'><NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } to='/services'>SERVICES</NavLink> </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Section2 */}
     <section className='services-categories'>
     <div className="container">
          <div className="row">
            <div className="col-md-2 col2">
              <img src="http://sbtechnosoft.com/recruitepro/images/icon1.png" alt="img" />
              <h3>Accounting / Finance</h3>
            </div>
            <div className="col-md-2 col2">
              <img src="http://sbtechnosoft.com/recruitepro/images/icon1.png" alt="img" />
              <h3>Accounting / Finance</h3>
            </div>
            <div className="col-md-2 col2">
              <img src="http://sbtechnosoft.com/recruitepro/images/icon1.png" alt="img" />
              <h3>Accounting / Finance</h3>
            </div>
            <div className="col-md-2 col2">
              <img src="http://sbtechnosoft.com/recruitepro/images/icon1.png" alt="img" />
              <h3>Accounting / Finance</h3>
            </div>
            <div className="col-md-2 col2">
              <img src="http://sbtechnosoft.com/recruitepro/images/icon1.png" alt="img" />
              <h3>Accounting / Finance</h3>
            </div>
            <div className="col-md-2 col2">
              <img src="http://sbtechnosoft.com/recruitepro/images/icon1.png" alt="img" />
              <h3>Accounting / Finance</h3>
            </div>
            <div className="col-md-2 col2">
              <img src="http://sbtechnosoft.com/recruitepro/images/icon1.png" alt="img" />
              <h3>Accounting / Finance</h3>
            </div>
            <div className="col-md-2 col2">
              <img src="http://sbtechnosoft.com/recruitepro/images/icon1.png" alt="img" />
              <h3>Accounting / Finance</h3>
            </div>
            
            <div className="col-12 col12">
              <button>BROWSE ALL CATEGORIES</button>
            </div>
          </div>
        </div>
     </section>
    </div>
  )
}

export default Services