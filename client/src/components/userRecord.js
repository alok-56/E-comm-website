import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './style.css'

function UserRecord() {
    const [users,setusers] = useState('')
    const[contact,setContact]=useState('')
    const[load,SetLoad]=useState(false)

    useEffect(() => {
        getdata();
        getcontact();
    },[])

    async function getdata(){
        let result = await fetch('http://localhost:4500/userlist');
        result = await result.json();
        setusers(result)
    }

    async function getcontact(){
        let result=await fetch('http://localhost:4500/contact');
        result=await result.json();
        setContact(result);
    }

    async function deleteuser(id){
        let result=await fetch(`http://localhost:4500/deleteuser/${id}`,{
            method:'delete'
        })
       if(result){
        getdata()
        SetLoad(true)
       }
    }

    async function deletecontact(id){
        let result=await fetch(`http://localhost:4500/contact/${id}`,{
            method:'delete'
        })
        if(result){
            getcontact();
        }
    }
    return (
        <div className='table-responsive'>
            <h1 className='text-center'>user details</h1>
            <Table className='table-bordered table-light mt-3 text-center'>
                <thead>
                {
                    load?<h3 id='del'>deleted</h3>:null
                }
                    <tr id="head">
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>update</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users &&
                        users.length>0 ? users.map((item, index) => (
                            <tr id='body'>
                                <td>{index +1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td><Link to={'/updateuser/'+item._id}><i class="fa-solid fa-pen-to-square"></i></Link></td>
                                <td><i onClick={()=>deleteuser(item._id)} class="fa-solid fa-trash-can"></i></td>
                            </tr>
                        )):<h1>no user found</h1>
                    }
                </tbody>


            </Table>


            <h1 className='text-center'>uses messgage</h1>
            <Table className='table-bordered table-light mt-3 text-center'>
                <thead>
                {/* {
                    load?<h3 id='del'>deleted</h3>:null
                } */}
                    <tr id="head">
                        <th>S.no</th>
                        <th>User id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contact &&
                        contact.length>0 ? contact.map((item, index) => (
                            <tr id='body'>
                                <td>{index +1}</td>
                                <td>{item.userId}</td>
                                <td>{item.userName}</td>
                                <td>{item.userEmail}</td>
                                <td>{item.message}</td>
                                <td><i onClick={()=>deletecontact(item._id)} class="fa-solid fa-trash-can"></i></td>
                            </tr>
                        )):<h1>no message found</h1>
                    }
                </tbody>


            </Table>




        </div>
    )
}

export default UserRecord;