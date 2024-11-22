import React from 'react';
import HeroImg from '../../../assets/hero.svg';
const Hero = () => {
  return (
    <div className='hero wrapper'>
      <div className="section1Text">
        <h1>Vytváříme světy, které si zamilujete.</h1>
        <p>Studio zaměřené na herní vývoj, zabýváme se tím již od roku 2020. Jsme skvělý tým který ví jak vás zabavit.</p>
        <button>Prohlednout práci</button>
      </div>
      <div className="section1Image">
        <img src={HeroImg} alt="" />
      </div>
    </div>
  )
}

export default Hero
