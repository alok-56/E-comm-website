import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import './style.css'

function Product() {
    const [products, setProducts] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        getproduct();
    },[])

    async function getproduct() {
        let result = await fetch('http://localhost:4500/productlist');
        result = await result.json()
        setProducts(result);
    }
    
    return (
        <div>
            <div className="container mt-5">
                <h2 style={{ textAlign: "center", fontFamily: "cursive", color: "coral" }}>PRODUCTS</h2>
                <h3 style={{ textAlign: "center", fontFamily: "cursive" }}>Trending Product of the Week</h3>
                <div className="row">
                    
                    {
                     products &&
                      products.length>0 ? products.map((item,index) => (
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-lg-5 mt-md-5 mt-sm-4 mt-2 ">
                        <Card className="bg-dark text-white" id="product" >
                            <Card.Img src={item.image} alt="Card image" style={{ height: "300px" }} />
                            <Card.ImgOverlay>
                                <div>
                                    <h5>{item.discount}%OFF</h5>
                                </div>
                                <div className='icons'>
                                    <button className="btn btn-light mt-1" onClick={() => navigate('/card')} id="pro"><i class="fa-solid fa-cart-plus"></i></button>
                                    <button className="btn btn-light mt-1" onClick={() => navigate('/singleproduct/'+item._id)} id="pro"><i class="fa-solid fa-eye"></i></button>
                                    <button className="btn btn-light mt-1" onClick={() => navigate('/singleproduct/'+item._id)} id="pro"><i class="fa-solid fa-heart"></i></button>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                        <div className='pro-detail'>
                            <h4 style={{ textAlign: "center", fontFamily: "'DynaPuff', cursive" }}>{item.name}</h4>
                            <p style={{ textAlign: "center", fontFamily: "'DynaPuff', cursive", fontSize: "20px" }}>{item.price}</p>
                            <p style={{ textAlign: "center", fontFamily: "'DynaPuff', cursive", fontSize: "30px", color: "yellow" }}>*****</p>

                        </div>

                    </div>
                    )): <h1>processing product please wait....</h1>
             }
                </div>
            </div>
          
            


        </div>

    )
}

export default Product;