import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import cat1 from './images/ca1.jpg'
import Productbuy from './productbuy';
import Product from './products';
import './style.css';

function Singleproduct() {
    const[name,setName]=useState('');
    const[price,Setprice]=useState('');
    const[quan,setQuan]=useState('1');
    const[image,setImage]=useState('');
    const[total,setTotal]=useState('');
    const[product,setProduct]=useState('')
    const[size,setSize]=useState('S')
    const params = useParams();
    const navigate=useNavigate()
    useEffect(()=>{
        getproduct()
    },[])

    async function getproduct(){
        let result=await fetch(`http://localhost:4500/singleproduct/${params.id}`);
        result=await result.json();
        setName(result.name)
        setImage(result.image)
        Setprice(result.price)
        setProduct(result._id);
        console.log(product)
    }
    function sized(e){
        setSize(e.target.value)
    }
    function quantity(e){
       setQuan(e.target.value);
       setTotal(price*quan)
    }
    localStorage.setItem('productsize',JSON.stringify(size));
    localStorage.setItem('productquan',JSON.stringify(quan));
     
    
    
   
    
    
    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 text-center' id="img">
                        <img className='img-fluid ' src={image} alt="img" />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 text-center mt-5'>
                        <h3 style={{ color: "orange", fontFamily: " 'DynaPuff', cursive " }}>******</h3>
                        <h3>{name}</h3>
                        <p style={{ fontFamily: " 'DynaPuff', cursive " }}>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                        <h3 style={{marginBottom:"15px",color:"red"}}>price:{price}</h3>
                        <label for="quantity">Select Size</label>
                        <select name="quantity" style={{ marginLeft: "5px" }}onChange={sized}>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                        </select>
                        <br />
                        <label for="quantity" style={{ marginTop: "5px" }}>Select quantity</label>
                        <select name="quantity" style={{ marginLeft: "5px" }} onChange={quantity}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <h2>{size}</h2>
                        <h4 style={{marginTop:"5px"}}>quantity:{quan}</h4>
                        <div style={{ display: 'flex', justifyContent: "center" }} className="mt-4" id='txt'>
                            <h3>Total:{total}</h3>
                            <button type="submit" onClick={()=>navigate('/Productbuy/'+product)}>buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singleproduct;