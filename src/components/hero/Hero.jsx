"use client";
import React from "react";
import Link from "next/link";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero container">
      <div className="hero-content">
        <Link className="logoText" href="/">
          Candleaf
        </Link>
        <h1 className="hero-title">The nature candle</h1>
        <p className="hero-subtitle">
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments.
        </p>
        <Link className="hero-button" href="/discovery">
          Discovery our collection
        </Link>
      </div>
    </div>
  );
}

export default Hero;