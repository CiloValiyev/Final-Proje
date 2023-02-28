import React, { useEffect, useState } from 'react';
import axios from "axios";
import Swipper from '../../components/swipper/Swipper';
import "../home/home.scss";
import SwipperOne from '../../components/swipperMessage/SwipperOne';
import {Helmet} from "react-helmet";
const Home = () => {
  const [data, setData] = useState([]);
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

  function getData() {
    const URL = "http://localhost:8080/categories/";
    axios.get(URL).then((res) => setData(res.data))
  }

  useEffect(() => {
    getData()
  }, [])

  async function handleDelete(id) {
    await axios.delete(`http://localhost:8080/categories/${id}`)
    getData()
  }
  return (
    <div>
      <Helmet>
        <title>Home - Recruite Pro</title>
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
      <section className='swipper'>
        <Swipper />
      </section>
      {/* Section2 */}
      <section className='category-api'>
        <div className='search-get'>
          <div className='search-for-professionals'>
            <h2>SEARCH FOR PROFESSIONALS</h2>
            <div className="container">
              <div className="row">
                <div className="col-3"><input type="text" placeholder='healthcare' /></div>
                <div className="col-3"><input type="text" placeholder='healthcare' /></div>
                <div className="col-3"><input type="text" placeholder='healthcare' /></div>
                <div className="col-3"><button><i className="fa-solid fa-magnifying-glass"></i></button></div>
              </div>
            </div>
          </div>
          <div className='get-a-job'>
            <h1>We Can Help You <span>Get A Job</span></h1>
            <p>If the job is online, you will find it on RecruitePro</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {data && data.map((d) => (
              <div key={d.id} className="col-md-2 col2">
                <img src={d.image} alt="img" />
                <h3>{d.categories}</h3>
                <button onClick={(id) => handleDelete(d._id)} style={{ border: "none", background: "none" }}><i style={{ color: "#89b927", fontSize: "20px" }} className="fa-solid fa-trash"></i></button>
              </div>
            ))}
            <div className="col-12 col12">
              <button>BROWSE ALL CATEGORIES</button>
            </div>
          </div>
        </div>
      </section>
      {/* Section3 */}
      <section className='register-total-awesome'>
        <div className="container">
          <div className="row">
            <div className="col-3 col3">
              <div className='icon-8000'>
                <img src="http://sbtechnosoft.com/recruitepro/images/counter-icon1.png" alt="img" />
                <div>
                  <h3>8000</h3>
                  <p>Registered Members</p>
                </div>
              </div>
            </div>
            <div className="col-3 col3">
              <div className='icon-90000'>
                <img src="http://sbtechnosoft.com/recruitepro/images/counter-icon2.png" alt="img" />
                <div>
                  <h3>90000</h3>
                  <p>Total Jobs Posted Members</p>
                </div>
              </div>
            </div>
            <div className="col-3 col_4">
              <div className='icon-54127'>
                <img src="http://sbtechnosoft.com/recruitepro/images/counter-icon3.png" alt="img" />
                <div>
                  <h3>54127</h3>
                  <p>Awesome Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* Section4 */}
      <section className='full-time'>
        <div className='latest-jobs'>
          <h1>Latest <span>Jobs</span></h1>
          <h3>Here you can see</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 col6">
              <div className='icon-senior'>
                <i className="fa-brands fa-twitter"></i>
                <div>
                  <h3>Senior front-end developer</h3>
                  <p>Datebase Management Company, Permanent - New York</p>
                </div>
              </div>
            </div>
            <div className="col-6 col6-end">
              <div className='map-fulltime'>
                <i className="fa-solid fa-location-dot"></i>
                <span>Menlo park, CA</span>
                <p>
                  <button>FULL-TIME</button>
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 col6">
              <div className='icon-senior'>
                <i style={{ background: "#3a5ba0" }} className="fa-brands fa-facebook-f"></i>
                <div>
                  <h3>Senior front-end developer</h3>
                  <p>Datebase Management Company, Permanent - New York</p>
                </div>
              </div>
            </div>
            <div className="col-6 col6-end">
              <div className='map-fulltime'>
                <i style={{ color: "#3a5ba0" }} className="fa-solid fa-location-dot"></i>
                <span>Menlo park, CA</span>
                <p>
                  <button>FULL-TIME</button>
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 col6">
              <div className='icon-senior'>
                <i style={{ background: "#dc4a38" }} className="fa-brands fa-google-plus-g"></i>
                <div>
                  <h3>Senior front-end developer</h3>
                  <p>Datebase Management Company, Permanent - New York</p>
                </div>
              </div>
            </div>
            <div className="col-6 col6-end">
              <div className='map-fulltime'>
                <i style={{ color: "#dc4a38" }} className="fa-solid fa-location-dot"></i>
                <span>Menlo park, CA</span>
                <p>
                  <button>FULL-TIME</button>
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 col6">
              <div className='icon-senior'>
                <i style={{ background: "#0e76a8" }} className="fa-brands fa-linkedin-in"></i>
                <div>
                  <h3>Senior front-end developer</h3>
                  <p>Datebase Management Company, Permanent - New York</p>
                </div>
              </div>
            </div>
            <div className="col-6 col6-end">
              <div className='map-fulltime'>
                <i style={{ color: "#0e76a8" }} className="fa-solid fa-location-dot"></i>
                <span>Menlo park, CA</span>
                <p>
                  <button>FULL-TIME</button>
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 col6">
              <div className='icon-senior'>
                <i style={{ background: "#00aff0" }} className="fa-brands fa-skype"></i>
                <div>
                  <h3>Senior front-end developer</h3>
                  <p>Datebase Management Company, Permanent - New York</p>
                </div>
              </div>
            </div>
            <div className="col-6 col6-end">
              <div className='map-fulltime'>
                <i style={{ color: "#00aff0" }} className="fa-solid fa-location-dot"></i>
                <span>Menlo park, CA</span>
                <p>
                  <button>FULL-TIME</button>
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
      {/* Section5 */}
      <section className='wrapper-video'>
        <div className="video-wrapper">
          <div className="container">
            <div className="title">
              <h2>Watch Our Video</h2>
              <h3>Here you can see</h3>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 col-xs-offset-0">
                <p className='video-text'> Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. <span> Vestibulum congue posuere lacus, id tincidunt nisi porta sit amet. Suspendisse et sapien varius, </span> pellentesque dui non, semper orci.</p>
                <a href="https://www.youtube.com/watch?v=MWjk8asP2e8" className="btn btn-default" data-popup="video"><i className="fa fa-play"></i></a> </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section6 */}
      <section>
        <div className="popular-search-wrapper">
          <div className="container">
            <div className="title">
              <h2>Popular <span>Searches</span></h2>
              <h3>Here you can see</h3>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-12">
                <div className="browse-category">
                  <h3>BROWSE BY CATEGORIES</h3>
                  <ul>
                    <li>Marketing (174)</li>
                    <li>Engineering (174)</li>
                  </ul>
                  <ul>
                    <li>Teaching &amp; Education (174)</li>
                    <li>Software &amp; Web (174)</li>
                  </ul>
                  <ul>
                    <li>Writing (174)</li>
                    <li>Sales &amp; BD (174)</li>
                  </ul>
                  <ul>
                    <li>Telemarketing (174)</li>
                    <li>Customer Service (174)</li>
                  </ul>
                  <ul>
                    <li>Administration (174)</li>
                    <li>Creative Design (174)</li>
                  </ul>
                  <ul>
                    <li>Creative Design (174)</li>
                    <li>Accounts &amp; Finance (174)</li>
                  </ul>
                  <ul className="last">
                    <li>SEO (174)</li>
                    <li>Web Design (174)</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2 hidden-xs hidden-sm">
                <div className="popular-search-img">
                  <img src="http://sbtechnosoft.com/recruitepro/images/popular-search-img.png" alt="" />
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
                <div className="browse-city">
                  <h3>BROWSE BY CITIES</h3>
                  <ul>
                    <li>New York</li>
                    <li>Bessemer</li>
                    <li>Dothan</li>
                  </ul>
                  <ul>
                    <li>Alexander City</li>
                    <li>Birmingham</li>
                    <li>Enterprise</li>
                  </ul>
                  <ul>
                    <li>Enterprise</li>
                    <li>Chickasaw</li>
                    <li>Eufaula</li>
                  </ul>
                  <ul>
                    <li>Anniston</li>
                    <li>Clanton</li>
                    <li>Anchorage</li>
                  </ul>
                  <ul>
                    <li>Athens</li>
                    <li>Cullman</li>
                    <li>Cordova</li>
                  </ul>
                  <ul>
                    <li>Atmore</li>
                    <li>Decatur</li>
                    <li>Fairbanks</li>
                  </ul>
                  <ul className="last">
                    <li>Auburn</li>
                    <li>Demopolis</li>
                    <li>Haines</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn-one">Browse All Categories</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Message */}
      <section>
        <SwipperOne />
      </section>
      {/* Section7 */}
      <section style={{ paddingTop: "100px" }}>
        <div className="app-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col__12">
                <div>
                  <img src="http://sbtechnosoft.com/recruitepro/images/app-img.png" alt="img" />
                </div>
                <div className="app-text">
                  <h2 style={{
                    color: "#2d2e2e",
                    fontSize: "45px",
                    fontWeight: 700,
                    margin: "5px 0",
                    padding: 0,
                    position: "relative"
                  }}>The <span style={{ color: "#89b927" }}>Jobee App</span></h2>
                  <h3>A world of oppertunity in your hand</h3>
                  <p>Pellentesque et pulvinar orci. Suspendisse sed euismod purus. Pellentesque nunc ex, ultrict	es eu enim non, consectetur interdum nisl. Nam congue interdum mauris, sed ultrices augue lacinia in. Praesent turpis purus, faucibus in tempor vel, dictum ac eros. Pellentesque et pulvinar orci. Suspendisse sed euismod purus. Pellentesque nunc ex, ultrices eu enim non, consectetur interdum nisl. Nam congue interdum mauris, sed ultrices augue lacinia in. Praesent turpis purus, faucibus in tempor vel, dictum ac eros.</p>
                  <div className="app-buttons">
                    <button className="btn-one space"><i className="fa-brands fa-apple"></i>Download</button>
                    <button className="btn-one"><i className="fa-solid fa-robot"></i>Download</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* Section8 */}
      <section>
        <div className="subscribe-wrapper">
          <div className="container">
            <div className="title">
              <h2>Subscribe</h2>
              <h3>Get weekly top new jobs delivered to your inbox</h3>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="form">
                  <div className="form-group">
                    <input placeholder="Enter your Email" id="exampleInputName" className="form-control first" type="text" />
                  </div>
                  <button className="bttn">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section9 */}
      <section>
        <div className="blog-wrapper">
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
    </div >
  )
}

export default Home