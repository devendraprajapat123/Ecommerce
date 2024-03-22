import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assest/breadcrum_arrow.png'

export const Beadcrums = (props) => {
    const { product } = props
    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt=''></img> SHOP <img src={arrow_icon} alt=''></img> {product.category} <img src={arrow_icon} alt='' />{product.name}
        </div>
    )
}
