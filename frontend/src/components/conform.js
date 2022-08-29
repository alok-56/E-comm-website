import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import './style.css'

function Conform(){
    const params=useParams();
    const[name,setName]=useState('')
    const[quan,setQuan]=useState('')
    const[price,setPrice]=useState('')
    const navigate=useNavigate();
  
    useEffect(()=>{
        getorderdata();
    },[])

    async function getorderdata(){
        let result=await fetch(`http://localhost:4500/orderconform/${params.id}`);
        result=await result.json();
        setName(result.productname)
        setPrice(result.productprice)
        setQuan(result.productQuantity)
    }
    return(
        <div>
             <div id="form" style={{height:"100%"}}>
              <h3>Thanks..Your order {name} is succesfully placed</h3>
              <h6>order id:{params.id}</h6>
              <h6>Quantity:{quan}</h6>
              <h6>price:{price}</h6>
              <h4>Your product is deliverd within 7 working Days</h4>
              <button className='btn btn-primary' onClick={()=>navigate('/profile')}>Track Order</button>
            </div>
        </div>
    )
}

export default Conform;