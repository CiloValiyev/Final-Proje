import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div style={{ margin: "0 auto", textAlign: 'center' }}>
            <h1 style={{ fontSize: "40px", color: "green", marginTop: "70px",marginBottom: "20px", textAlign: 'center' }}>LOGIN</h1>
            <div style={{display:"flex",flexDirection:"column",margin:"0 auto",textAlign:"center",justifyContent:"center",alignItems:"center"}}>
                <input style={{ border: "1px solid green", padding: "10px", height: "50px", width: "350px",marginBottom:"30px" }} type="text" placeholder='Zəhmət olmasa adınızı və ya emaili daxil edin ' />
                <input style={{ border: "1px solid green", padding: "10px", height: "50px", width: "350px" ,marginBottom:"30px"}} type="text" placeholder='Zəhmət olmasa şifrənizi daxil edin ' />
                <button style={{ border: "none", background: "yellowgreen", color: "white", height: "50px", width: "200px" }}>Login</button>
                <button style={{ border: "none", background: "yellowgreen", color: "white", height: "50px", width: "200px",marginTop:"20px" }} className='go-to-home'><Link style={{textDecoration:"none",color:"white",marginTop:"20px"}} to='/'>GO TO HOME</Link></button>
            </div>
        </div>
    )
}

export default Login