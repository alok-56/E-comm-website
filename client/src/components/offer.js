import React from 'react';
import './style.css'

function Offer() {
    return (
        <div>
            <div className='container mt-5'>
                <div className='row text-center '>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-12' id='sup'>
                        <i class="fa-solid fa-truck" style={{ color: "black", fontSize: "30px" }}></i>
                        <span style={{marginLeft:"10px",fontSize:"15px"}}>FREE DELIVERY</span>

                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-12' id='sup'>
                        <i class="fa-solid fa-money-check-dollar" style={{ color: "black", fontSize: "30px" }}></i>
                        <span style={{marginLeft:"10px",fontSize:"15px"}}>CASH ON DELIVERY</span>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-12' id='sup'>
                    <i class="fa-solid fa-headset"  style={{ color: "black", fontSize: "30px" }}></i>
                    <span style={{marginLeft:"10px",fontSize:"15px"}}>CUSTUMBER SUPPORT</span>
                        
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-12' id='sup'>
                    <i class="fa-solid fa-person-walking-arrow-loop-left"  style={{ color: "black", fontSize: "30px" }}></i>
                    <span style={{marginLeft:"10px",fontSize:"15px"}}>EASY RETURN</span>
                    </div>
                </div>
            </div>
        </div>
      
    )
}

export default Offer;