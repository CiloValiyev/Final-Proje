import React, { useEffect, useState } from 'react';
import "../services/service.scss";
import { Link, NavLink } from "react-router-dom"
import axios from 'axios';
import { Helmet } from 'react-helmet';
const Services = () => {
  let activeStyle = {
    color: "#89b927"
  };
  const [topButton, settopButton] = useState(false);
  const [data, setData] = useState([]);
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
        <title>Servives</title>
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
            {data && data.map((d) => (
              <div key={d._id} className="col-md-2 col2">
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
    </div>
  )
}

export default Services