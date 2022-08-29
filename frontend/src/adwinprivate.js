import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function AdwinPrivate(){
    const adwin=localStorage.getItem('adwin');
    return(
        adwin?<Outlet/>:<Navigate to="/adwin"></Navigate>
        
    )
}

export default AdwinPrivate;