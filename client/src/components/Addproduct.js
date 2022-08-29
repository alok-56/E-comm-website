import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

function Addproduct() {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const[catogery,setCatogery]=useState('');
    const navigate = useNavigate()


    async function handle(e) {

        const files = e.target.files;
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", 'vsqmoxq9')
        const res = await fetch('https://api.cloudinary.com/v1_1/dxlmwq61j/image/upload', {
            method: 'post',
            body: data
        })
        const file = await res.json()
        setImage(file.url);
        console.log(file.url)
        alert("product image uplodad proceed to add product")

    }


    async function addproduct() {
        let result = await fetch('http://localhost:4500/product', {
            method: "post",
            body: JSON.stringify({image,name,price,discount,catogery}),
            headers: {
                'content-type': 'application/json'
            }
        });

        result = await result.json()
        if (result) {
            navigate('/product')
        }
    }
    return (
        <div>
            <div id="form" style={{height:"100%"}}>
                <h4> ADWIN LOGIN</h4>
                <input type="file" onChange={handle} name="image" placeholder="Enter Image" />
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter name"></input>
                <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} placeholder="Enter price"></input>
                <input type="text" onChange={(e) => setDiscount(e.target.value)} value={discount} placeholder="Enter Discount"></input>
                <input type="text" onChange={(e) => setCatogery(e.target.value)} value={catogery} placeholder="Enter catogery"></input>
                <button className="btn btn-primary" onClick={addproduct}>ADD Product</button>

            </div>

        </div>
    )
}
export default Addproduct;