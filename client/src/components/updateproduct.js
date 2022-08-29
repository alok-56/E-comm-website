import React, { useEffect, useState } from 'react';
import { useNavigate, useParams,Link } from 'react-router-dom';
import './style.css'

function Updateproduct(){
    const[image,setImage]=useState('')
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[discount,setDiscount]=useState('')
    const[ catogery,setCatogery]=useState('')
    const params=useParams();
    const navigate=useNavigate();


    useEffect(()=>{
        getdata();

    },[])

    async function getdata(){
        let result=await fetch(`http://localhost:4500/updateproduct/${params.id}`);
        result=await result.json();
        setImage(result.image)
        setName(result.name)
        setDiscount(result.discount)
        setPrice(result.price)
        setCatogery(result.catogery)
    }
    async function updatedata(){
        console.log(image,name,price,discount,catogery)
        let result=await fetch(`http://localhost:4500/updateproduct/${params.id}`,{
            method:'put',
            body:JSON.stringify({image,name,price,discount,catogery}),
            headers:{
                'content-type':'application/json'
            }
        })
        result=await result.json();
        if(result)
        {
            navigate('/productlist')
        }
    }

   
    return(
        <div>
              <div id="form">
                <input type="file" name="files" onChange={(e) => setImage(e.target.files)}  placeholder="insert image"></input>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter name"></input>
                <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} placeholder="Enter price"></input>
                <input type="text" onChange={(e) => setDiscount(e.target.value)} value={discount} placeholder="Enter discount"></input>
                <input type="text" onChange={(e) => setCatogery(e.target.value)} value={catogery} placeholder="Enter catogery"></input>
                <button className="btn btn-primary" onClick={updatedata} >update product</button>

            </div>
        </div>
    )
}

export default Updateproduct;