import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import ca3 from './images/ca2.jpg'
import ca4 from './images/ca3.jpg'
import ca5 from './images/ca1.jpg'
import "./style.css";

function Catogries() {
    const navigate=useNavigate()
    const[women,setWomen]=useState('women')
    const[men,setMen]=useState('boy')
    const[children,setChildren]=useState('children')
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <Card className="bg-dark text-white" id="cat">
                            <Card.Img src={ca3} alt="Card image" style={{ height: "300px" }} />
                            <Card.ImgOverlay>
                                <Card.Title className="text-center " id="tex">WOMEN FASHION</Card.Title>
                                <button className="btn btn-danger mt-1 " id="bt" onClick={()=>navigate('/Productcat/'+ women)}>Shop Now</button>
                                <Card.Text>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mt-lg-0 mt-md-0 mt-sm-0 mt-4" >
                        <Card className="bg-dark text-white" id="cat">
                            <Card.Img src={ca4} alt="Card image" style={{ height: "300px" }} />
                            <Card.ImgOverlay>
                                <Card.Title className="text-center " id="tex">MEN FASHION</Card.Title>
                                <button className="btn btn-danger mt-1 " id="bt"  onClick={()=>navigate('/productcat/'+ men)}>Shop Now</button>
                                <Card.Text>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>

                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-lg-0 mt-md-0 mg-sm-0 mt-4">
                        <Card className="bg-dark text-white" id="cat">
                            <Card.Img src={ca5} alt="Card image" style={{ height: "300px" }} />
                            <Card.ImgOverlay>
                                <Card.Title className="text-center " id="tex">Kid's FASHION</Card.Title>
                                <button className="btn btn-danger mt-1 " id="bt"  onClick={()=>navigate('/productcat/'+ children)}>Shop Now</button>
                                <Card.Text>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>

                    </div>
                </div>
            </div>
            

        </div>
        
    )
   
}

export default Catogries;