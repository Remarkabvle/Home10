"use client"
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { defaultCounter } from '@/lib/features/counter/counterSlice'
import { defaultLike } from '@/lib/features/wishlist/wishlistSlice'

const DefaultValues = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(defaultCounter(+localStorage.getItem("counter")))
    dispatch(defaultLike(JSON.parse(localStorage.getItem("wishlist"))||[]))
  }, []) 
  return null
}

export default DefaultValues
