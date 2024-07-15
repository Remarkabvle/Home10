"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { toggleHeart } from '@/lib/features/wishlist/wishlistSlice';
import { toggleCart } from '@/lib/features/cart/cartSlice';
import "./ProductWrapper.css";

const ProductWrapper = ({ data }) => {
  const productsToShow = data && data.products ? data.products.slice(0, 8) : [];
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.items);
  const [clickedIcons, setClickedIcons] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (clickedIcons.length > 0) {
      const lastClicked = clickedIcons[clickedIcons.length - 1];
      if (isInCart(lastClicked)) {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
      }
    }
  }, [cart]);

  const handleCardClick = (e, productId) => {
    const target = e.target;
    if (
      !target.closest(".icon-card") &&
      !target.closest(".productName") &&
      !target.closest(".productDescription")
    ) {
      window.location.href = `/product/${productId}`;
    }
  };

  const handleCartClick = (product) => {
    setClickedIcons([...clickedIcons, product.id]);
    dispatch(toggleCart(product));
  };

  const handleLikeClick = (product) => {
    dispatch(toggleHeart(product));
  };

  const isLiked = (productId) => wishlist.find((item) => item.id === productId);
  const isInCart = (productId) => cart.find((item) => item.id === productId);
  const isClicked = (productId) => clickedIcons.includes(productId);

  return (
    <>
      {showMessage && <div className="cartMessage">Added to Cart</div>}
      <h1 className="title">Products</h1>
      <p className="subtitle">Order it for you or for your beloved ones.</p>
      <div className="productWrapper container">
        {productsToShow.map((product) => (
          <div
            key={product.id}
            className="productCard"
            onClick={(e) => handleCardClick(e, product.id)}
          >
            <div className="imgContainer">
              <Image
                src={product.thumbnail}
                alt={product.name}
                width={250}
                height={250}
                className="productImage"
              />
              <div className="overlay">
                <div className="iconContainer">
                  <FaCartPlus 
                    className={`icon-card ${isClicked(product.id) && isInCart(product.id) ? 'clicked' : ''}`} 
                    onClick={() => !isClicked(product.id) && handleCartClick(product)} 
                  />
                  {isLiked(product.id) ? (
                    <FaHeart
                      className="icon-card"
                      onClick={() => handleLikeClick(product)}
                    />
                  ) : (
                    <FaRegHeart
                      className="icon-card"
                      onClick={() => handleLikeClick(product)}
                    />
                  )}
                </div>
              </div>
            </div>
            <Link href={`/product/${product.id}`}>
              <p className="productDescription">{product.description}</p>
            </Link>
            <div className="productDetails">
              <Link href={`/product/${product.id}`}>
                <p className="productName">{product.name}</p>
              </Link>
              <p className="productPrice">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductWrapper;
