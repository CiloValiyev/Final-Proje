import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../blog/blog.scss"
const BlogDetails = () => {
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
             {topButton && (
        <button style={{
          position: "fixed",
          bottom: '50px',
          right: "50px",
          width: "50px",
          height:"50px",
          fontSize:'20px',
          border:'none',
          borderRadius:"50%",
          color:"white",
          background:"#89b927"
        }} onClick={scrollUp}><i class="fa-solid fa-chevron-up"></i></button>
      )}
            {/* Section1 */}
            <section className='contact-us-wrapper1'>
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="banner-title">
                            <h2>BLOG DETAILS</h2>
                            <div className="line"> <span></span></div>
                        </div>
                        <ul className="inner-breadcrumb">
                            <li><Link to='/' >Home </Link></li>
                            <li className='slash'>Pages</li>
                            <li className='slash'><NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to='/blogdetails'>Blog Details</NavLink> </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* Section2 */}
            <section className='blog-details'>
                <div style={{ paddingTop: "50px" }} className="container">
                    <div className="row">
                        <div className="col-9">
                            <div>
                            </div>
                        </div>

                        <div className="col-md-9 col-xs-12">
                            <article className="post format-image bg-white">
                                <div className="post-preview">
                                    <a href="#">
                                        <img style={{ width: "100%", marginTop: "100px" }} src="http://sbtechnosoft.com/recruitepro/images/blog-big.jpg" alt="" />
                                    </a> </div>
                                <div className="post-content post-no-pad">
                                    <h2 className="post-title"><a href="#">Lorem Ipsum is simply dummy text of the printing </a></h2>
                                    <ul className="post-meta">
                                        <li>April 20, 2017</li>
                                        <li>By <a href="#">Normal Theme</a></li>
                                    </ul>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                                    <p></p>
                                </div>
                            </article>
                            <div className="comments">
                                <h3>20 Comments</h3>
                                <div className="comment">
                                    <div className="comment-avatar"> <img src="http://sbtechnosoft.com/recruitepro/images/post-img1.png" alt="" /> </div>
                                    <div className="comment-tools"> <a href="#" title="October 24, 2015"><i className="fa fa-clock-o"></i></a> <a href="#" className="smoothscroll"><i className="fa fa-reply" aria-hidden="true"></i></a> </div>
                                    <div className="comment-content">
                                        <h5><a href="#">Michael Thomas</a></h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                    </div>
                                </div>
                                <div id="comment-2" className="comment comment-reply">
                                    <div className="comment-avatar"> <img src="http://sbtechnosoft.com/recruitepro/images/post-img2.png" alt="" /> </div>
                                    <div className="comment-tools"> <a href="#" title="October 24, 2015"><i className="fa fa-clock-o"></i></a> <a href="#comment-form" className="smoothscroll"><i className="fa fa-reply" aria-hidden="true"></i></a> </div>
                                    <div className="comment-content">
                                        <h5><a href="#">Adam Hines</a></h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                    </div>
                                </div>
                                <div id="comment-3" className="comment">
                                    <div className="comment-avatar"> <img src="	http://sbtechnosoft.com/recruitepro/images/post-img3.png" alt="" /> </div>
                                    <div className="comment-tools"> <a href="#" title="October 24, 2015"><i className="fa fa-clock-o"></i></a> <a href="#" className="smoothscroll" data-toggle="tooltip"><i className="fa fa-reply" aria-hidden="true"></i></a> </div>
                                    <div className="comment-content">
                                        <h5><a href="#">Robert Fields</a></h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-form">
                                <h3>Leave a comment</h3>
                                <form id="comment-form">
                                    <div className="form-group">
                                        <input id="name" className="form-control" placeholder="Name" name="name" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <input id="email" className="form-control" placeholder="E-mail" name="email" type="email" />
                                    </div>
                                    <div className="form-group">
                                        <textarea id="message" name="message" className="form-control" placeholder="Message" rows="6"></textarea>
                                    </div>
                                    <button className="btn-one">Post Comment</button>
                                </form>
                            </div>
                        </div>

                        <div style={{ marginTop: "100px" }} className="col-md-3 col-xs-12">
                            <div className="widget">
                                <form className="search-form">
                                    <input className="form-control" placeholder="Search..." type="text" />
                                    <button><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                            <div className="widget">
                                <h6 className="text-uppercase widget-title">Categories</h6>
                                <ul className="icons-list">
                                    <li><a href="#">Journey <span className="pull-right">112</span></a></li>
                                    <li><a href="#">Development <span className="pull-right">86</span></a></li>
                                    <li><a href="#">Sport <span className="pull-right">10</span></a></li>
                                    <li><a href="#">Photography <span className="pull-right">144</span></a></li>
                                    <li><a href="#">Symphony <span className="pull-right">18</span></a></li>
                                </ul>
                            </div>
                            <div className="widget">
                                <h6 className="text-uppercase widget-title">Simple Text</h6>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna posuere.</p>
                            </div>
                            <div className="widget">
                                <h6 className="text-uppercase widget-title">Recent Posts</h6>
                                <ul className="recent-posts">
                                    <li>
                                        <div className="widget-posts-image"> <a href="#"><img src="http://sbtechnosoft.com/recruitepro/images/post-img1.png" alt="" /></a> </div>
                                        <div className="widget-posts-body">
                                            <h6 className="widget-posts-title"><a href="#">Little Heart</a></h6>
                                            <div className="widget-posts-meta">September 18, 2015 </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="widget-posts-image"> <a href="#"><img src="http://sbtechnosoft.com/recruitepro/images/post-img2.png" alt="" /></a> </div>
                                        <div className="widget-posts-body">
                                            <h6 className="widget-posts-title"><a href="#">The Notebook</a></h6>
                                            <div className="widget-posts-meta"><p>November 24, 2015</p> </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="widget-posts-image"> <a href="#"><img src="http://sbtechnosoft.com/recruitepro/images/post-img3.png" alt="" /></a> </div>
                                        <div className="widget-posts-body">
                                            <h6 className="widget-posts-title"><a href="#">Specimen Book</a></h6>
                                            <div className="widget-posts-meta">December 28, 2015 </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget">
                                <h6 className="text-uppercase widget-title">Categories</h6>
                                <ul className="tags">
                                    <li><a href="#">Recruitment</a></li>
                                    <li><a href="#">Consulting</a></li>
                                    <li><a href="#">Staffing</a></li>
                                    <li><a href="#">Training</a></li>
                                    <li><a href="#">ERP Solutions</a></li>
                                    <li><a href="#">Tag</a></li>
                                    <li><a href="#">Blog Tag</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogDetails