import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import './style.css';

function Updateuser() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const params=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        getdata();
    },[])

    async function getdata(){
        let result=await fetch(`http://localhost:4500/updateuser/${params.id}`);
        result=await result.json()
        setName(result.name);
        setEmail(result.email);
        setPassword(result.password);
    }

    async function updatedata(){
        let result=await fetch(`http://localhost:4500/updateuser/${params.id}`,{
            method:'put',
            body:JSON.stringify({name,email,password}),
            headers:{
                'content-type':'application/json'
            }
        })

        result=await result.json();
        if(result){
            navigate('/user');
        }
    }
    return (
        <div>
             <div id="form">
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter Name"></input>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter Email"></input>
                <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter Password"></input>
                <button className="btn btn-primary" onClick={updatedata} >updateuser</button>

            </div>
        </div>
    )
}

export default Updateuser;