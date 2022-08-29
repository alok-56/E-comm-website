import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, NavLink } from 'react-router-dom';
import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Heading() {
    const navigate = useNavigate()
    const aut = localStorage.getItem('user');
    const adwin = localStorage.getItem('adwin');
    
    function logout() {
        localStorage.clear();
        Navigate('/login')
    }
    function logoutadwin(){
        localStorage.clear();
        navigate('/login')
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" >
                <Container>
                    <Navbar.Brand id="companyname">Apna dukan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto " id="nav">
                            <Nav.Link ><NavLink to="/">Home</NavLink></Nav.Link>
                          {aut? <Nav.Link><NavLink to="/Catogeries">catogries</NavLink></Nav.Link>:null}
                            <Nav.Link><NavLink to="/product">product</NavLink></Nav.Link>
                            {
                                aut? <Nav.Link><NavLink to="/profile">profile</NavLink></Nav.Link>:null
                            }
                       
                            {
                                adwin?<Nav> 
                                 <Nav.Link><NavLink to="/addproduct">ADD product</NavLink></Nav.Link>
                                     <Nav.Link><NavLink to="/productlist">product record</NavLink></Nav.Link>
                                     <Nav.Link><NavLink to="/user">user record</NavLink></Nav.Link>
                                     <Nav.Link><NavLink to="/orderrecord">order record</NavLink></Nav.Link>
                                     <Nav.Link><NavLink to="/login" onClick={logoutadwin} style={{ textDecloration: "none", color: "red", fontSize: "20px", fontWeight: "bold", border: "none" }}>LogoutAdwin</NavLink></Nav.Link>
                                </Nav>
                               : aut ? <NavLink to="/login" onClick={logout} style={{ textDecloration: "none", color: "red", fontSize: "20px", fontWeight: "bold", border: "none",marginTop:"7px",marginLeft:"3s0px" }}>Logout</NavLink>
                                    : <NavDropdown title="Login" id="collasible-nav-dropdown" >
                                        <NavDropdown.Item ><NavLink to="/adwin" style={{ textDecoration: "none" }}>Adwin</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item ><NavLink to="/login" style={{ textDecoration: "none" }}>User</NavLink> </NavDropdown.Item>
                                    </NavDropdown>
                            }
                           

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Heading;

