import React from 'react'
import Particles from "react-tsparticles";


const MyParticle = () => {
  return (
    <Particles
    className='particle-canvas'
    params={{
      style: {
        position: "absolute"
      },
      particles: {
        shape: {
          type: "circle",
          stroke: {
            width: 3,
            color: "#f9ab00"
          }
        },
        links: {
          color: "#39403b",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          value: 40,
          density: {
            enable: true,
            value_area: 900
          }
        },   
      }
    }}
    />
  )
}

export default MyParticle
