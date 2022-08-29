import React from 'react';
import './style.css';

function Footer(){
    return(
        <div id='footer'>
            <div className='container mt-5'>
                <h3 style={{marginTop:"100px",paddingTop:'30px',fontWeight:"bold"}}>Apna dukan</h3>
                <div className='row mt-4'>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-4'>
                        <p>Sell online</p>
                        <p>Features</p>
                        <p>Shopping cart</p>
                        <p>Store builder</p>

                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-4'>
                        <p>Mobile commerce</p>
                        <p>Dropshipping</p>
                        <p>Website development</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-4 mt-sm-5 mt-md-0 mt-2'>
                        <p>Point of sale</p>
                        <p>Hardware</p>
                        <p>Software</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-12 '>
                        <p style={{fontWeight:"bold"}}>Contact Info</p>
                        <i class="fa-solid fa-location-dot"></i><span>203 Fake St. Mountain View, San Francisco, California, USA</span><br/>
                        <i class="fa-solid fa-phone"  style={{marginTop:'5px'}}></i><span>91+ 8340175751</span><br/>
                        <i class="fa-solid fa-message"  style={{marginTop:'5px'}}></i><span>Alokkumar11746@gmail.com</span><br/>
                        <input type="text" Placeholder="suscribe"  style={{marginTop:'5px'}}></input>
                        <button className='btn btn-warning'>Send</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;