"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { toggleHeart } from '@/lib/features/wishlist/wishlistSlice';
import "../../components/product/ProductWrapper.css";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();

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

  const handleLikeClick = (product) => {
    dispatch(toggleHeart(product));
  };

  const isLiked = (productId) => wishlist.find((item) => item.id === productId);

  return (
    <div>
      <h1 className="title">Wishlist</h1>
      <div className="productWrapper container">
        {wishlist.map((product) => (
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
                  <FaCartPlus className="icon-card" />
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
    </div>
  );
};

export default Wishlist;
