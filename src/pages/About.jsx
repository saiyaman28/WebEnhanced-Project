import React from 'react'
import { Header, Main, Section } from '../exporter/component_exporter'

export default function App() {

  return (
    <>
    <Header />
      <section class="about-hero">
    <h1>About MovieVerse</h1>
    <p>Your ultimate destination for movie magic.</p>
  </section>

  <section class="about-content">
    <div class="container">
      <h2>Who We Are</h2>
      <p>
        MovieVerse is a passion-driven platform created by movie lovers, for movie lovers.
        Whether you're into blockbuster hits or indie gems, we aim to be your trusted source
        for discovering films, exploring behind-the-scenes content, and grabbing exclusive merch.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to connect fans with films in a meaningful way — through curated content,
        engaging visuals, and a fun, welcoming community. We believe that every movie tells a story,
        and every fan deserves a platform to explore and celebrate that.
      </p>

      <h2>Meet the Team</h2>
      <div class="team-grid">
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1"/>
          <h3>Alex Rivera</h3>
          <p>Founder & Creative Director</p>
        </div>
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2"/>
          <h3>Jamie Chen</h3>
          <p>Content Curator</p>
        </div>
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 3"/>
          <h3>Riley Gomez</h3>
          <p>Lead Developer</p>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}