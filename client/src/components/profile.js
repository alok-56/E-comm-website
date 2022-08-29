import React, { useEffect, useState } from 'react';
import './style.css'

function Profile() {
    let userId = JSON.parse(localStorage.getItem('user'))._id;
    let username = JSON.parse(localStorage.getItem('user')).name;
    const [order, setOrder] = useState('')
    const [toogle, setToogle] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        getorderdata();
    }, [])

    async function getorderdata() {
        let result = await fetch(`http://localhost:4500/profile/${userId}`);
        result = await result.json();
        setOrder(result)
    }
    
    async function cancel(id) {
        let result = await fetch(`http://localhost:4500/deleteorder/${id}`, {
            method: 'delete'
        })
        result = await result.json();
        console.log(result)
        if(result){
            getorderdata();
            setError(true)
        }


    }


    return (
        <div>
            <h3 className='mt-3'>Hey.. {username}</h3>
            <div className='container mt-3'>
                <div className='row'>
                    <button onClick={() => setToogle(true)} style={{ backgroundColor: "aqua", fontWeight: "bold" }}>Click to See Your Order</button>
                    {error? <span style={{ color: "red", fontWeight: "bold" }}>Cancelled your order</span>:null}
                    {

                        toogle ? order && order.length > 0 ? order.map((item) => (
                            <div className='col-lg-6 col-md-6 col-sm-12 col-12 text-center mt-3'>
                                <div>
                                    <img src={item.productimage} className="img-fluid" style={{ width: "400px", height: "250px", borderRadius: "5px" }} alt="" />
                                </div>
                                <div id="det">
                                    <h3>{item.productname} </h3>
                                    <h3>price:{item.productprice}</h3>
                                    <h3>Quantity:{item.productQuantity}</h3>
                                    <h3>Order date:{item.orderdate}</h3>
                                    <h3>expected delivery date:{item.deliverydate}</h3>
                                    <h3>Status:{item.orderstatus}</h3>
                                    <h2 onClick={() => cancel(item._id)}>Cancel order</h2>
                                </div>
                            </div>
                        )) : <h1>No Recent order</h1>
                            : null
                    }
                </div>
            </div>

        </div>
    )
}
export default Profile;