import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assest/cart_cross_icon.png'

export const CartItem = () => {
    const { all_product, cartItem, removeFromCart } = useContext(ShopContext)
    return (
        <div className='cartitems'>
            <div className='cartitems-fromat-main'>
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
                    if (cartItem[e.id] > 0) {
                        return <div>
                            <div className='cartitem-format'>
                                <img src={e.image} alt='' className='carticon-product-icon'>
                                </img>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                                <p>{e.new_price * cartItem[e.id]}</p>
                                <img src={remove_icon} alt='' onClick={() => { removeFromCart(e.id) }}></img>
                            </div>
                            <hr />
                        </div>
                    }
                })
            }
        </div>
    )
}
