import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './style.css'

function Productlist() {
    const [products, setProducts] = useState("");
    const[load,setLoad]=useState(false)
    

    useEffect(() => {
        getproduct();
    }, [])

    async function getproduct() {
        let result = await fetch('http://localhost:4500/productadwin');
        result = await result.json()
        setProducts(result);
        console.log(result)
    }

   async function deleteproduct(id){
        let result= await fetch(`http://localhost:4500/deleteproduct/${id}`,{
            method:"delete"
        });
        result=await result.json();
        if(result){
            getproduct();
            setLoad(true)
        }


    }
    const search=async (event)=>{
        let key=event.target.value;
       if(key){
        let result=await fetch(`http://localhost:4500/searchproduct/${key}`);
        result=await result.json();
        if(result){
            setProducts(result);
        }
       }
       else{
        getproduct();
       }
    }
    return (

        <div className='table-responsive'>
            
            <h1 className='text-center'>product list</h1>
            <input type="text" style={{marginLeft:'40px',width:"200px"}} placeholder="search from here" onChange={search}></input>
            <Table className='table-bordered table-light mt-3 text-center'>
                <thead>
                    {
                        load ? <h3 id='del'>deleted</h3> : null
                    } 
                    <tr id="head">
                        <th>S.no</th>
                        <th>image</th>
                        <th>product id</th>
                        <th>Name</th>
                        <th>price</th>
                        <th>cateogry</th>
                        <th>discount</th>
                        <th>Update</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products &&
                            products.length > 0 ? products.map((item, index) => (
                                <tr id='body'>
                                    <td>{index + 1}</td>
                                    <td style={{width:"100px"}}>
                                        <img className='img-fluid' src={item.image}></img>
                                    </td>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.catogery}</td>
                                    <td>{item.discount}%</td>
                                     <td><Link to={'/updateproduct/' + item._id}><i class="fa-solid fa-pen-to-square"></i></Link></td>
                                    <td><i onClick={()=>deleteproduct(item._id)} class="fa-solid fa-trash-can"></i></td> 
                                </tr>
                            )) : <h1>no user found</h1>
                    }
                </tbody>


            </Table>




        </div>
    )
}

export default Productlist;