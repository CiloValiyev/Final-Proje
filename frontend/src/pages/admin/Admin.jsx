import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../admin/admin.scss"
const Admin = () => {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState({ image: "", categories: "" });
  function handleChange(e) {
    setData1({
      ...data1, [e.target.name]: e.target.value
    })
  }
  function handleCLick() {
    let URL = "http://localhost:8080/categories";
    axios.post(URL, data1)
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
    <div className='admin-page'>
      <section className='admin'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">Categories</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((d) => (
              <tr key={d._id} >
                <th scope="row">{d._id}</th>
                <td scope="col">{d.image}</td>
                <td scope="col">{d.categories}</td>
                <button onClick={(id) => handleDelete(d._id)} style={{ border: "none", background: "none" }}><i style={{ color: "#89b927", fontSize: "20px" }} className="fa-solid fa-trash"></i></button>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className='add-input'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <input name='image' onChange={(e) => handleChange(e)} type="text" placeholder='Image...' />
              <input name='categories' onChange={(e) => handleChange(e)} type="text" placeholder='Categories...' />
              <p><button onClick={() => handleCLick()}>Add</button></p>
              <button className='go-to-home'><Link to='/'>GO TO HOME</Link></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admin