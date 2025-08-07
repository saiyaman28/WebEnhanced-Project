import React from 'react'
import viteLogo from '/vite.svg'
import './assets/css/App.css'
import { Header, Main, Section } from './exporter/component_exporter'

export default function App() {

  return (
    <>
    <Header />
    <Main>
  {/* <section class="hero">
    <div class="hero-text">
      <h1>Discover Your Next Favorite Movie</h1>
      <p>Explore trending films, classics, and hidden gems.</p>
      <a href="#" class="btn">Start Watching</a>
    </div>
  </section> */}
  <Section Title={`Featured Movies`} Class={`featured`} >
    <div class="movie-grid">
      <div class="movie-card">
        <img src="https://via.placeholder.com/300x450?text=Movie+1" alt="Movie 1"/>
        <h3>Movie Title 1</h3>
      </div>
      <div class="movie-card">
        <img src="https://via.placeholder.com/300x450?text=Movie+2" alt="Movie 2"/>
        <h3>Movie Title 2</h3>
      </div>
      <div class="movie-card">
        <img src="https://via.placeholder.com/300x450?text=Movie+3" alt="Movie 3"/>
        <h3>Movie Title 3</h3>
      </div>
      <div class="movie-card">
        <img src="https://via.placeholder.com/300x450?text=Movie+4" alt="Movie 4"/>
        <h3>Movie Title 4</h3>
      </div>
    </div>
  </Section>
  </Main>
    </>
  )
}
