import React from 'react';
import "../navbar/navbar.scss"
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    let activeStyle = {
        borderBottom: "2px solid #89b927"
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link to=''><img src="http://sbtechnosoft.com/recruitepro/images/logo.png" alt="recruitepro" /></Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to='' className="nav-item nav-link active">HOME</NavLink>
                            <div className="nav-item dropdown">
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to='pages' className="nav-link dropdown-toggle" data-bs-toggle="dropdown">PAGES</NavLink>
                                <div className="dropdown-menu">
                                    <Link to='pages/aboutus' className="dropdown-item">About Us</Link>
                                    <Link to='pages/faq' className="dropdown-item">Faq</Link>
                                    <Link to='commingsoon' className="dropdown-item">Comming Soon</Link>
                                    <Link to='*' className="dropdown-item">404</Link>
                                </div>
                            </div>
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to='services' className="nav-item nav-link">SERVICES</NavLink>
                            <div className="nav-item dropdown">
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to='current' className="nav-link dropdown-toggle" data-bs-toggle="dropdown">CURRENT JOBS</NavLink>
                                <div className="dropdown-menu">
                                    <Link to='current' className="dropdown-item">Current Jobs</Link>
                                    <Link to='apply' className="dropdown-item">Apply Job</Link>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : null
                                } to='blog' className="nav-link dropdown-toggle" data-bs-toggle="dropdown">BLOG</NavLink>

                                <div className="dropdown-menu">
                                    <Link to='blog' className="dropdown-item">Blog</Link>
                                    <Link to='blogdetails' className="dropdown-item">Blog Details</Link>
                                </div>
                            </div>
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to='contact' className="nav-item nav-link">CONTACT US</NavLink>
                        </div>
                    </div>
                </div>
                <div className="navbar-nav ms-auto">
                    <button className='login-sign '>LOGIN / SIGN UP</button>
                    <button className='user'><i className="fa-solid fa-user-tie"></i></button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;