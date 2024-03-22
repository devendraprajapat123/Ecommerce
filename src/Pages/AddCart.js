import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../Components/Assest/cart_cross_icon.png'
import './Css/AddCart.css'


const AddCart = () => {
    const { all_product, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext)
    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Titel</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {
                all_product.map((e) => {

                    if (cartItems[e.id] > 0)
                    {
                        return  <div>
                        <div className='cartitems-format cartitems-format-main'>
                            <img src={e.image} alt='' className='carticon-product-icon'></img>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=''></img>
        
                        </div>
                        <hr/>
                    </div>
                    }
                    return null

                })}
                <div className='cartitem-down'>
                    <div className='cartitem-total'>
                        <h1>Cart Totals</h1>
                        <div>
                            <div className='cartitem-total-item'>
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr></hr>
                            <div className='cartitem-total-item'>
                            <p>Shiping Free</p>
                            <p>Free</p>
                            </div>
                            <hr/>
                            <div className='cartitem-total-item'>
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className='cartitems-promocode'>
                        <p>If you have promo code, Enter it here</p>
                        <div className='cartitem-promobox'>
                            <input type='text' placeholder='Promo Code'></input>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default AddCart