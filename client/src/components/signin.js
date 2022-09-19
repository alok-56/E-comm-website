import React,{ useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './style.css';

function Signin() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState(false)
    const navigate =useNavigate()

    async function getdata(){
        if(!name || !email || !password){
            setError(true)
            return false
        }
        let result = await fetch('http://localhost:4500/signin',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'content-type':'application/json'
            }
        })
       result = await result.json()
       if(result){
        navigate('/login');
        alert('sign in sucessfully')
       }
        console.log(result)
    }
    return (
        <div>
            <div id="form" style={{height:"100%"}}>
                <h4> Welcome To Apna Dukan</h4>

                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter Name"></input>
                {error && !name && <span>Empty name</span>}
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter Email"></input>
                {error && !email && <span>Empty email</span>}
                <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter Password"></input>
                {error && !password && <span>Empty password</span>}
                <button className="btn btn-primary" onClick={getdata} >Sign in</button>

                <div style={{ marginTop: "30px" }}>
                    <span >Already Resistred</span><Link to="/Login" style={{ marginLeft: "5px" }}>Login</Link>
                </div>

            </div>

s
        </div>
    )
}
export default Signin;