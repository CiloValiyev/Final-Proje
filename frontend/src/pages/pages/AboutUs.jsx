import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../pages/pages.scss";
import "../pages/about";
const AboutUs = () => {
    let activeStyle = {
        color: "#89b927"
    };
    return (
        <div>
            {/* Section1 */}
            <section style={{ paddingBottom: "150px" }} className='contact-us-wrapper1'>
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="banner-title">
                            <h2>ABOUT US</h2>
                            <div className="line"> <span></span></div>
                        </div>
                        <ul className="inner-breadcrumb">
                            <li><Link to='/' >Home </Link></li>
                            <li className='slash'>Pages</li>
                            <li className='slash'><NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to='/pages/aboutus'>ABOUT US</NavLink> </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section2 */}
            <section>
                <div className="inner-page-wrapper">
                    <div className="container">
                        <div className="title">
                            <h2>Why <span>RecruitePro</span> ?</h2>
                            <h3>If the job is online, you will find it on RecruitePro</h3>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12">
                                <div className="about-section">
                                    <div className="recruitepro-img"><img src="http://sbtechnosoft.com/recruitepro/images/recruitepro-img.jpg" alt="img" /></div>
                                    <div className="question-img"><img src="http://sbtechnosoft.com/recruitepro/images/question-img.jpg" alt="img" /></div>
                                    <div className="green-bg">JANGO is the ultimate tool to power any of your projects. Corporate, ecommerce, SAAS, CRM and much more.</div>
                                    <div className="explore">Explore</div>
                                </div>
                            </div>
                            <div style={{ marginLeft: "100px" }} className="col-md-5 col-sm-12">

                                <button className="accordion-one">Lorem Ipsum is simply dummy text of the printing? <span style={{ marginLeft: "30px", fontSize: "20px" }}>+</span></button>
                                <div className="panel-one">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>

                                <button className="accordion">Lorem Ipsum is simply dummy text of the printing? <span style={{ marginLeft: "30px", fontSize: "20px" }}>+</span></button>
                                <div className="panel">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>

                                <button className="accordion">Lorem Ipsum is simply dummy text of the printing? <span style={{ marginLeft: "30px", fontSize: "20px" }}>+</span></button>
                                <div className="panel">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>

                                <button className="accordion">Lorem Ipsum is simply dummy text of the printing? <span style={{ marginLeft: "30px", fontSize: "20px" }}>+</span></button>
                                <div className="panel">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section3 */}
            <section>
                <div className="business-performance-wrapper">
                    <div className="container">
                        <div className="title">
                            <h2>We drive <span>Business Performance </span> ?</h2>
                            <h3>If the job is online, you will find it on RecruitePro</h3>
                        </div>
                    </div>
                    <div className="container">
                        <div className="passionate-wrapper">
                            <div className="passionate-inner">
                                <div className="passionate-text">
                                    <h2>Passionate Specialists</h2>
                                    <h3>If the job is online, you will find it on RecruitePro</h3>
                                    <span className="line"></span>
                                    <p>Elementum nec viverra amet felis habitasse
                                        suspendisse luctus a fames non a bibendum odio
                                        sem nibh suspendisse parturient parturient scelerisque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section4 */}
            <section>
                <div className="creative-wrapper1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12">
                                <div className="creative-text bor">
                                    <h2>Creative</h2>
                                    <span className="line"></span>
                                    <h3>COPYWRITER</h3>
                                    <p>Consectetur ac nisi venenatis consequat varius vestibulum phasellus nisi netus ad parturient ultrices laoreetvel posuere nam suscipit nullam a iaculis.A inceptos justo a tincidunt facilisis praesent in convallis accumsan adipiscing leo a eleifend senectus condimentum diam proin nibh a auctor sed.Suspendisse a parturient.</p>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-12 pull-right">
                                <div className="creative-img"><img className='img-first' src="http://sbtechnosoft.com/recruitepro/images/creative-img1.jpg" alt="" /></div>
                            </div>

                            <div className="col-md-7 col-sm-12">
                                <div className="creative-img"><img src="http://sbtechnosoft.com/recruitepro/images/creative-img2.jpg" alt="" /></div>
                            </div>
                            <div className="col-md-5 col-sm-12">
                                <div className="creative-text bor1">
                                    <h2>Planning &amp; Strategy</h2>
                                    <span className="line"></span>
                                    <h3>COPYWRITER</h3>
                                    <p>Consectetur ac nisi venenatis consequat varius vestibulum phasellus nisi netus ad parturient ultrices laoreetvel posuere nam suscipit nullam a iaculis.A inceptos justo a tincidunt facilisis praesent in convallis accumsan adipiscing leo a eleifend senectus condimentum diam proin nibh a auctor sed.Suspendisse a parturient.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs