import React from 'react'
import Header from './Header';
import Catogries from './cateogeries';
import Product from './products';
import Contact from './contact';

function Home(){
    return(
        <div>
            <Header/>
            <Catogries/>
            <Product/>
            <Contact/>
        </div>
    )
}

export default Home;