"use client";
import React from 'react';
import { useSelector } from 'react-redux';

const CartWrapper = () => {
  const cart = useSelector(state => state.cart.items);
  console.log(cart);
  
  return (
    <div>
      <div>Cart Wrapper</div>
    </div>
  );
};

export default CartWrapper;
