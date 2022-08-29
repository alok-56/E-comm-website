import React from 'react';
import bac1 from './images/bac1.jpg'
import bac2 from './images/bac2.jpg'
import bac4 from './images/bac4.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate= useNavigate();
    return (
        <div>
            <Carousel fade >
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={bac1}
                        alt="First slide"
                        style={{ height: "500px" }}
                    />
                    <Carousel.Caption>
                        <div>
                            <h2 style={{ color: "red", marginBottom: "0px", fontFamily: "'DynaPuff', cursive" }}>Fashion sale</h2>
                            <h1 style={{ color: "black", marginBottom: "", fontFamily: "'DynaPuff', cursive" }}>Minimal Menz Style </h1>
                            <p style={{ color: "black", marginBottom: "", fontFamily: "'DynaPuff', cursive" }}>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                            <button style={{ marginBottom: "200px", fontSize: "25px" }} onClick={()=>navigate('/product')} className='btn btn-warning'>SHOP NOW</button>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bac2}
                        alt="Second slide"
                        style={{ height: "500px" }}
                    />

                    <Carousel.Caption>


                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bac4}
                        alt="Third slide"
                        style={{ height: "500px" }}
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>


    );
}

export default Header;