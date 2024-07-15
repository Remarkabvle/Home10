"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  clearCart,
  updateQuantity,
  loadCart,
  addItem,
} from "@/lib/features/cart/cartSlice";
import "./Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    dispatch(loadCart(savedCartItems));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const handleRemoveItem = (productId) => {
    dispatch(removeItem({ id: productId }));
  };

  const handleIncrement = (productId, currentQuantity) => {
    dispatch(updateQuantity({ id: productId, quantity: currentQuantity + 1 }));
  };

  const handleDecrement = (productId, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(
        updateQuantity({ id: productId, quantity: currentQuantity - 1 })
      );
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart Items</h1>
      <Link href="/" className="back-to-shopping">
        Back to shopping
      </Link>
      <div className="cart-wrapper">
        {cart.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((product) => (
                <div key={product.id} className="cart-item">
                  <div className="cart-item-image">
                    <Image
                      src={product.thumbnail}
                      alt={product.name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="cart-item-details">
                    <Link href={`/product/${product.id}`}>
                      <p className="cart-item-name">{product.name}</p>
                    </Link>
                    <button
                      className="cart-item-remove"
                      onClick={() => handleRemoveItem(product.id)}
                    >
                      Remove
                    </button>
                    <p className="cart-item-price">
                      ${product.price.toFixed(2)}
                    </p>
                    <div className="cart-item-quantity">
                      <button
                        onClick={() =>
                          handleDecrement(product.id, product.quantity)
                        }
                      >
                        -
                      </button>
                    
                      <span>{
                        console.log(product)
                      // product?.quantity
                      }</span>
                      <button onClick={() => dispatch(addItem(product))}>
                        +
                      </button>
                    </div>
                    <p className="cart-item-total">
                      ${(product.price * product.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
