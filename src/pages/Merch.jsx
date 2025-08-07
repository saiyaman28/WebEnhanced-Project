import React from 'react'
import '../assets/css/App.css'
import { Header, Main, Section } from '../exporter/component_exporter'

export default function App() {

  return (
    <>
    <Header />
      <section class="merch-hero">
    <h1>Official MovieVerse Merch</h1>
    <p>Get your hands on exclusive gear and collectibles!</p>
  </section>

  <section class="merch-store">
    <div class="product-grid">
      <div class="product-card">
        <img src="https://via.placeholder.com/300x300?text=T-Shirt" alt="T-Shirt"/>
        <h3>MovieVerse T-Shirt</h3>
        <p>$19.99</p>
        <a href="#" class="buy-btn">Buy Now</a>
      </div>
      <div class="product-card">
        <img src="https://via.placeholder.com/300x300?text=Hoodie" alt="Hoodie"/>
        <h3>Official Hoodie</h3>
        <p>$39.99</p>
        <a href="#" class="buy-btn">Buy Now</a>
      </div>
      <div class="product-card">
        <img src="https://via.placeholder.com/300x300?text=Mug" alt="Mug"/>
        <h3>MovieVerse Mug</h3>
        <p>$14.99</p>
        <a href="#" class="buy-btn">Buy Now</a>
      </div>
      <div class="product-card">
        <img src="https://via.placeholder.com/300x300?text=Poster" alt="Poster"/>
        <h3>Movie Poster</h3>
        <p>$9.99</p>
        <a href="#" class="buy-btn">Buy Now</a>
      </div>
    </div>
  </section>
    </>
  )
}