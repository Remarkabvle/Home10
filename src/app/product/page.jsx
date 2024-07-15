import ProductWrapper from '@/components/product/ProductWrapper'
import React from 'react'
import {getData} from '../../api/fetchData'



const Product = async () => {
    let data = await getData('/products')
  return (
    <div>
      Product
      <ProductWrapper data={data} />
    </div>
  )
}

export default Product
