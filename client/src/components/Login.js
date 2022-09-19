import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import "./style.css"


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    async function getdata() {
        let result = await fetch('http://localhost:4500/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'content-type': 'application/json'
            }
        })
        result = await result.json()
        if (result.email) {
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/')
        }
    }
    return (
        <div>
            <div id="form">
                <h4> Welcome To Apna Dukan</h4>

                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Email"></input>
                <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter password"></input>
                <button className="btn btn-primary" onClick={getdata}>Login in</button>

                <div style={{ marginTop: "30px" }}>
                    <span >New User</span><Link to="/signin" style={{ marginLeft: "5px" }}>Sign in</Link>
                    <p><Link to="/">Forgotton Password</Link></p>
                </div>
            </div>

        </div>
    )
}
export default Login;