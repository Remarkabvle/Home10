"use client";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { addItem } from '@/lib/features/cart/cartSlice';
import './ProductDetail.css';

const DetailProduct = ({ data, loading }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addItem({ ...data, quantity }));
  };

  if (loading) {
    return (
      <div className="spinner">
        <div></div>
      </div>
    );
  }

  return (
    <div className="productDetail">
      <div className="productDetailContainer">
        <div className="productDetailLeft">
          <Image src={data.thumbnail} alt={data.title} width={400} height={400} />
          <p>{data.description}</p>
        </div>
        <div className="productDetailRight">
          <h1 className="productName">{data.title}</h1>
          <p className="productPrice">${data.price}</p>
          <div className="quantityControl">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <div className="subscription">
            <label>
              <input type="radio" name="purchaseOption" value="one-time" />
              One-time purchase
            </label>
            <label>
              <input type="radio" name="purchaseOption" value="subscribe" defaultChecked />
              Subscribe and deliver every
              <select>
                <option value="4">4 weeks</option>
                <option value="8">8 weeks</option>
              </select>
            </label>
          </div>
          <div className="productDetailText">{data.description}</div>
          <div className="details">
            <p>Wax: {data.wax}</p>
            <p>Fragrance: {data.fragrance}</p>
            <p>Burning Time: {data.burningTime}</p>
            <p>Dimension: {data.dimension}</p>
            <p>Weight: {data.weight}</p>
          </div>
          <button className="addToCart" onClick={handleAddToCart}>
            Add to cart
          </button>
          <div className="freeShipping">🚚 FREE SHIPPING</div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
