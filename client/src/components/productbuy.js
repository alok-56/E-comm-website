import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import './style.css'

function Productbuy() {
    const [useremail, setuserEmail] = useState('')
    const [usernumber, setuserNumber] = useState('')
    const [useraddress, setuserAddress] = useState('')
    const [userpincode, setuserPincode] = useState('')
    const [productpayment, setproductPayment] = useState('cod')
    const[productimage,setproductImage]=useState('')
    const[productprice,setproductPrice]=useState('')
    const[productid,setproductId]=useState('')
    const[productname,setproductName]=useState('')
    const[deliverydate,setdeliveryDate]=useState('')
    const[orderstatus,setorderStatus]=useState('pending');
    const navigate=useNavigate();
    const[error,setError]=useState(false);

    
     
    


    let productSized = JSON.parse(localStorage.getItem('productsize'))
    let productQuantity = JSON.parse(localStorage.getItem('productquan'))
    let userId = JSON.parse(localStorage.getItem('user'))._id;

    const params = useParams();

    useEffect(() => {
        getdata();
    },[])

    async function getdata() {
        let data = await fetch(`http://localhost:4500/singleproduct/${params.id}`);
        data = await data.json();
        setproductImage(data.image);
        setproductPrice(data.price);
        setproductId(data._id)
        setproductName(data.name)
        localStorage.setItem('orderprice',JSON.stringify(data.productprice));
    }
     async function proced(){
        const orderdate=new Date();
        if(!useremail || !usernumber || !useraddress || !userpincode || !productpayment ){
            setError(true);
            return false;
        }
        let result=await fetch('http://localhost:4500/order',{
            method:'post',
            body:JSON.stringify({userId,useremail,usernumber,useraddress,userpincode,productid,productname,productimage,productprice,productSized,productQuantity,productpayment,orderdate,deliverydate,orderstatus}),
            headers:{
                'content-type':'application/json'
            }
        })

        result=await result.json();
        if(result){
            navigate('/orderconform/'+result._id)
        }
    
     }
    


    return (
        <div>
            <div id="form" style={{height:"100%"}}>
                <h4> Enter Your Detail</h4>
                <input type="email" onChange={(e) => setuserEmail(e.target.value)} value={useremail} placeholder="Enter Email"></input>
                {error && !useremail && <span>Empty email</span>}
                <input type="text" onChange={(e) => setuserNumber(e.target.value)} value={usernumber} placeholder="Enter Phone Number"></input>
                {error && !usernumber && <span>Empty number</span>}
                <input type="text" onChange={(e) => setuserAddress(e.target.value)} value={useraddress} placeholder="Enter your address"></input>
                {error && !useraddress && <span>Empty address</span>}
                <input type="text" onChange={(e) => setuserPincode(e.target.value)} value={userpincode} placeholder="Enter pincode"></input>
                {error && !userpincode && <span>Empty pincode</span>}
                <label for="quantity" style={{ marginTop: "5px" }} >Select payment option</label>
                <select name="quantity" style={{ marginLeft: "5px" }} onChange={(e)=>setproductPayment(e.target.value)}>
                            <option value="COD">COD</option>
                            <option value="Paytym">paytym</option>
                            <option value="Bank">Bank</option>
                        </select>
               
                <button className="btn btn-primary"onClick={proced}>proceed to payment</button>
            </div>
      
        </div>
    )
}

export default Productbuy;