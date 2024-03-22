import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import { Beadcrums } from '../Components/Breadcrums/Beadcrums'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'


export const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams()
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div >

      <Beadcrums product={product}></Beadcrums>
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProduct/>

    </div>
  )
}
