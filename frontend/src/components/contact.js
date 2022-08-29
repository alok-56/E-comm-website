import React, { useState } from 'react';
import './style.css'

function Contact(){
    const[message,setMessage]=useState('')
    const[load,setLoad]=useState(false)
    const[error,setError]=useState(false)

     async function senddata(){
        let userName=JSON.parse(localStorage.getItem('user')).name;
        let userEmail=JSON.parse(localStorage.getItem('user')).email;
        let userId=JSON.parse(localStorage.getItem('user'))._id;

        if(!message){
            setError(true)
            return false;
        }
        let result=await fetch('http://localhost:4500/contact',{
            method:'post',
            body:JSON.stringify({userId,userName,userEmail,message}),
            headers:{
                'content-type':'application/json'
            }
        })
        result=await result.json();
        console.log(result)
        if(result){
            setLoad(true)
            setMessage('')
        }
    
    }
    return (
        <div className="connect">
            <div className="container pt-5">
                <div className="row" style={{color:"black"}}>
                    <div className="col">
                        <h2
                            style={{fontWeight:"bold", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; color: black"}}>
                            Contact For Any query</h2>
                        <h4
                            style={{ fontWeight: "bold", color: "black" }}>
                            Leave message 
                        </h4>
                    </div>
                </div>
                <div className="row pt-3">
                  {load?<span style={{color:"red"}}>message send sucessfully</span>:null}
                  {error && !message &&<span style={{color:"red"}}>empty message...please full the message</span>}
                  <div className="col-md-8 col-sm-12 col-12">
                       <input onChange={(e)=>setMessage(e.target.value)} value={message} type="text" style={{ width: "100%", padding: "20px", borderRadius: "10px" }}
                        placeholder="Write Your Message" id="inp" />
                  </div>
                 <div className="col-12 col-md-4 col-sm-4 pt-md-0 pt-sm-0 pt-2">
                    <button  className="btn btn-primary" style={{ width: "100%", borderRadius: " 10px",marginTop:"8px" }} onClick={senddata}>Send me</button>
                  </div>
              </div>
          </div>
      </div>

    )

}

export default Contact;