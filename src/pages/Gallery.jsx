import React from 'react'
import '../assets/css/App.css'
import { Header, Main, Section } from '../exporter/component_exporter'

export default function App() {

  return (
    <>
    <Header />
    <section class="gallery">
  <h2>Gallery</h2>
  <div class="gallery-grid">
    <div class="gallery-item">
      <img src="https://via.placeholder.com/300x450?text=Movie+A" alt="Movie A"/>
      <div class="overlay">Movie A</div>
    </div>
    <div class="gallery-item">
      <img src="https://via.placeholder.com/300x450?text=Movie+B" alt="Movie B"/>
      <div class="overlay">Movie B</div>
    </div>
    <div class="gallery-item">
      <img src="https://via.placeholder.com/300x450?text=Movie+C" alt="Movie C"/>
      <div class="overlay">Movie C</div>
    </div>
    <div class="gallery-item">
      <img src="https://via.placeholder.com/300x450?text=Movie+D" alt="Movie D"/>
      <div class="overlay">Movie D</div>
    </div>
    <div class="gallery-item">
      <img src="https://via.placeholder.com/300x450?text=Movie+E" alt="Movie E"/>
      <div class="overlay">Movie E</div>
    </div>
  </div>
</section>

    </>
  )
}