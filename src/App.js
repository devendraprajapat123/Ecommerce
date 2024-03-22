
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Shop } from './Pages/Shop';
import { Shopcategory } from './Pages/Shopcategory';
import { Product } from './Pages/Product';

import { LoginSignuppage } from './Pages/LoginSignuppage';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assest/banner_mens.png'
import women_banner from './Components/Assest/banner_women.png'
import kids_banner from './Components/Assest/banner_kids.png'
import AddCart from './Pages/AddCart';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/mens' element={<Shopcategory banner={men_banner} category='men' />}></Route>
          <Route path='/womens' element={<Shopcategory banner={women_banner} category='women' />}></Route>
          <Route path='/kids' element={<Shopcategory banner={kids_banner} category='kid' />}></Route>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}></Route>
          </Route>

          <Route path='/login' element={<LoginSignuppage />}></Route>
          <Route path='/cart' element={<AddCart />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
