import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import dropdown_icon from '../Components/Assest/dropdown_icon.png'

import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'

export const Shopcategory = (props) => {
    const {all_product } = useContext(ShopContext)
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt=''></img>
            <div className='shopcategory-indexsort'>
                <p>
                    <span>Showing 1-12</span> out of 36 product
                </p>
                <div className='shopcategory-sort'>
                Sort by <img src={dropdown_icon} alt=''></img>
                </div>
            </div>
            <div className='shopcategory-product'>
                {all_product.map((item,i)=>{
                    if (props.category===item.category) {
                        return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }else{
                        return null
                    }
                })}
            </div>
            <div className='shopcategory-loadmore'>Explore More</div>
        </div>
    )
}
