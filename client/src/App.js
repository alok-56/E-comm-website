
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Heading from './components/Nav';
import Home from './components/home';
import Catogries from './components/cateogeries';
import Product from './components/products';
import Offer from './components/offer';
import Footer from './components/footer';
import Login from './components/Login';
import Signin from './components/signin';
import Privatecom from './components/privatecom';
import Adwin from './components/adwin';
import Singleproduct from './components/singleproduct';
import AdwinPrivate from './adwinprivate';
import Addproduct from './components/Addproduct';
import UserRecord from './components/userRecord';
import Updateuser from './components/updateuser';
import Productbuy from './components/productbuy';
import Conform from './components/conform';
import Profile from './components/profile';
import Orderrecored from './components/orderrecord';
import Orderupdate from './components/orderupdate';
import  Productcat from './components/productcat';
import Productlist from './components/productlist';
import Updateproduct from './components/updateproduct';
import Contact from './components/contact';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route element={<Privatecom />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Catogeries' element={<Catogries />}></Route>
            <Route path='/product' element={<Product />}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/singleproduct' element={<Singleproduct />}></Route>
            <Route path='/singleproduct/:id' element={<Singleproduct />}></Route>
            <Route path='/Productbuy/:id' element={<Productbuy />}></Route>
            <Route path='/orderconform/:id' element={<Conform />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/Productcat/:id' element={<Productcat/>}></Route>
          </Route>

          <Route element={<AdwinPrivate />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Catogeries' element={<Catogries />}></Route>
            <Route path='/product' element={<Product />}></Route>
            <Route path='/productlist' element={<Productlist />}></Route>
            <Route path='/updateproduct/:id' element={<Updateproduct />}></Route>
            <Route path='/user' element={<UserRecord />}></Route>
            <Route path='/addproduct' element={<Addproduct />}></Route>
            <Route path='/updateuser/:id' element={<Updateuser />}></Route>
            <Route path='/orderrecord' element={<Orderrecored />}></Route>
            <Route path='/orderupdate/:id' element={<Orderupdate />}></Route>
          </Route>

          < Route path='/adwin' element={<Adwin />}></Route>
          < Route path='/login' element={<Login />}></Route>
          < Route path='/signin' element={<Signin />}></Route>

        </Routes>
      </BrowserRouter>
      <Offer />
      <Footer />
    </div >
  );
}

export default App;
