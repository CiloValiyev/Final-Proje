import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../pages/app"
const Faq = () => {
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
        <div class="inner-page-wrapper5 faqs-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-12">

                <button class="accordion">
                  <button> <i className="fa-solid fa-greater-than"></i> </button>
                  <span>Lorem Ipsum Is Simply Dummy Text?</span>
                </button>
                <div className="panel">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                </div>
                <button class="accordion">
                  <button className='icon'> <i className="fa-solid fa-greater-than"></i> </button>
                  <span>Lorem Ipsum Is Simply Dummy Text?</span>
                </button>
                <div className="panel1">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                </div>
                <button class="accordion">
                  <button> <i className="fa-solid fa-greater-than"></i> </button>
                  <span>Lorem Ipsum Is Simply Dummy Text?</span>
                </button>
                <div className="panel">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                </div>
                <button class="accordion">
                  <button> <i className="fa-solid fa-greater-than"></i> </button>
                  <span>Lorem Ipsum Is Simply Dummy Text?</span>
                </button>
                <div className="panel">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                </div>
                <button class="accordion">
                  <button> <i className="fa-solid fa-greater-than"></i> </button>
                  <span>Lorem Ipsum Is Simply Dummy Text?</span>
                </button>
                <div className="panel">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                </div>
                <button class="accordion">
                  <button> <i className="fa-solid fa-greater-than"></i> </button>
                  <span>Lorem Ipsum Is Simply Dummy Text?</span>
                </button>
                <div className="panel">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                </div>
                <button class="accordion">
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
                    <div class="row clearfix">
                      <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="form-group">
                          <input name="username" value="" placeholder="Name" required="" aria-required="true" type="text" />
                        </div>
                        <div class="form-group">
                          <input name="email" value="" placeholder="Email" required="" aria-required="true" type="email" />
                        </div>
                        <div class="form-group">
                          <input name="Phone" value="" placeholder="Phone" type="text" />
                        </div>
                        <div class="form-group">
                          <input name="subject" value="" placeholder="Subject" type="text" />
                        </div>
                        <div class="form-group">
                          <textarea name="message" placeholder="Message" required="" aria-required="true"></textarea>
                        </div>
                      </div>
                      <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <button type="submit" class="btn-one">send Message</button>
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