import React from 'react';
import {Outlet, Navigate } from 'react-router-dom';


function Privatecom(){
   const aut=localStorage.getItem('user')
   const adwin=localStorage.getItem('adwin')
   return (
      adwin?<Outlet/>:aut?<Outlet/>:<Navigate to="/login"/>
   )
}

export default Privatecom;