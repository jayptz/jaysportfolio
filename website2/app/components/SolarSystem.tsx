'use client'
import React from 'react'
import Image from 'next/image'
// import './SolarSystem.css'; // Temporarily commented out

const SolarSystem = () => {
  // Use deterministic values for star positions to avoid hydration mismatch
  const stars = Array.from({ length: 100 }).map((_, i) => {
    // Create deterministic "random" values based on index
    const seed = i * 16807 % 2147483647; // Linear congruential generator
    const top = (seed % 100) + (seed % 10) / 10;
    const left = ((seed * 16807) % 2147483647 % 100) + ((seed * 16807) % 2147483647 % 10) / 10;
    const fontSize = 5 + (seed % 10) + (seed % 10) / 10;
    
    return (
      <div
        key={i}
        className="fa-solid fa-star"
        style={{
          top: `${top}vh`,
          left: `${left}vw`,
          fontSize: `${fontSize}px`,
          ['--i' as string]: i,  // for animation delay
        }}
      ></div>
    );
  });

  return (
    <div style={{ 
      width: '100%', 
      height: '100vh', 
      position: 'relative', 
      overflow: 'hidden',
      border: '2px solid red',
      backgroundColor: 'rgba(255, 0, 0, 0.1)'
    }}>
      {/* Test text to see if component is rendering */}
      <div style={{ position: 'absolute', top: '10px', left: '10px', color: 'white', zIndex: 9999 }}>
        Solar System Test
      </div>
      
      <div style={{ position: 'absolute', top: '50px', left: '10px', color: 'white', zIndex: 9999 }}>
        Stars: {stars.length}
      </div>
      
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {stars}
      </div>
      
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <div className="fa-solid fa-star" style={{ position: 'absolute', top: '10%', left: '20%', fontSize: '12px', color: 'yellow' }}></div>
        <div className="fa-solid fa-star" style={{ position: 'absolute', top: '30%', left: '50%', fontSize: '8px', color: 'yellow' }}></div>
        <div className="fa-solid fa-star" style={{ position: 'absolute', top: '50%', left: '80%', fontSize: '15px', color: 'yellow' }}></div>
        <div className="fa-solid fa-star" style={{ position: 'absolute', top: '70%', left: '10%', fontSize: '5px', color: 'yellow' }}></div>
        <div className="fa-solid fa-star" style={{ position: 'absolute', top: '90%', left: '40%', fontSize: '10px', color: 'yellow' }}></div>
        <div className="fa-solid fa-star" style={{ position: 'absolute', top: '15%', left: '75%', fontSize: '20px', color: 'yellow' }}></div>
        <div className="fa-solid fa-star" style={{ position: 'absolute', top: '5%', left: '30%', fontSize: '7px', color: 'yellow' }}></div>
        <div className="fa-solid fa-star" style={{ position: 'absolute', top: '25%', left: '60%', fontSize: '9px', color: 'yellow' }}></div>
      </div>
      
      <div style={{ 
        margin: '0 auto', 
        width: '100%', 
        height: '100%', 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ 
          height: '120px', 
          width: '120px', 
          marginTop: '-60px', 
          marginLeft: '-60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1000
        }}>
          <Image 
            src="/panda.gif" 
            alt="Panda" 
            width={64}
            height={64}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16"
          />
        </div>
      </div>
    </div>
  );
};

export default SolarSystem; 