import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assest/logo.png'
import cart_icon from '../Assest/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const{getTotalCartitem } = useContext(ShopContext)
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='' />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-manu'>
                <li onClick={() => { setMenu("shop") }}> <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>  {menu === 'shop' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("men") }}> <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link> {menu === 'men' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("women") }}> <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link> {menu === 'women' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}> <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link> {menu === 'kids' ? <hr /> : <></>}</li>

            </ul>

            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'>  <img src={cart_icon} alt='bv' /></Link>

                <div className='nav-cart-cout'>{getTotalCartitem ()}</div>
            </div>
        </div>
    )
}
