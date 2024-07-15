import React from 'react'
import {getData} from '../../../api/fetchData'
import DetailProduct from '@/components/product/DetailProduct'


const Detail = async ({params}) => {
    const {proID} = params 
    let detailData = await getData(`/products/${proID}`)
    console.log(detailData);
  return (
    <div>
        <h2>Detail</h2>
        <DetailProduct data={detailData} />
    </div>
  )
}

export default Detail
