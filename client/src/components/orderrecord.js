import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function Orderrecored(){
    const[product,setProduct]=useState('')
    useEffect(()=>{
        getproduct()
    },[])

    async function getproduct(){
        let result=await fetch('http://localhost:4500/orderrecord');
        result=await result.json()
        setProduct(result)
    }
    return(
        <div className='table-responsive'>
              <h1 className='text-center'>order details</h1>
            <Table className='table-bordered table-light mt-3 text-center'>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>User-id</th>
                        <th>product-id</th>
                        <th>order-id</th>
                        <th>productName</th>
                        <th>email</th>
                        <th>number</th>
                        <th>price + quantity</th>
                        <th>Order date</th>
                        <th>delivery date</th>
                        <th>status</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product && product.length>0 ? product.map((item,index)=>(
                            <tr>
                        <th>{index +1}</th>
                        <th>{item.userId}</th>
                        <th>{item.productid}</th>
                        <th>{item._id}</th>
                        <th>{item.productname}</th>
                        <th>{item.useremail}</th>
                        <th>{item.usernumber}</th>
                        <th>{item.productprice} & {item.productQuantity}</th>
                        <th>{item.orderdate}</th>
                        <th>{item.deliverydate}</th>
                        <th>{item.orderstatus}</th>
                        <th><Link to={'/orderupdate/'+item._id}><i class="fa-solid fa-pen-to-square"></i></Link></th>
                    </tr>

                        )):<h1>no order placed</h1>
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Orderrecored;