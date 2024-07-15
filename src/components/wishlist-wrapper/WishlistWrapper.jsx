"use client"
import React from 'react'
import { useSelector } from 'react-redux'


const WishlistWrapper = () => {
    const wishlist = useSelector(state => state.wishlist.value)
    console.log(wishlist);
  return (
    <div>
      <div>Wishlist Wrapper</div>
    </div>
  )
}

export default WishlistWrapper
