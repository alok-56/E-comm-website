import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './style.css'

function Orderupdate(){
    const[deliverydate,setdeliveryDate]=useState('')
    const[orderstatus,setorderStatus]=useState('')
    const params =useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        getdata();
    },[])

    async function getdata(){
        let result=await fetch(`http://localhost:4500/orderupdate/${params.id}`);
        result=await result.json();
        setdeliveryDate(result.deliverydate)
        setorderStatus(result.orderstatus)
    }
    async function setdata(){
        let result=await fetch(`http://localhost:4500/orderupdate/${params.id}`,{
            method:'put',
            body:JSON.stringify({deliverydate,orderstatus}),
            headers:{
                'content-type':'application/json'
            }
        })
        result=await result.json()
        if(result)
        {
            navigate('/orderrecord')

        }

    }
  
    return(
        <div>
             <div id="form">
                <h4>update order</h4>

                <input type="text" onChange={(e) => setdeliveryDate(e.target.value)} value={deliverydate} placeholder="Enter delivery date"></input>
                <input type="text" onChange={(e) => setorderStatus(e.target.value)} value={orderstatus} placeholder="Enter Status"></input>
                <button className="btn btn-primary" onClick={setdata}>update</button>

            </div>
        </div>

    )
}

export default Orderupdate;