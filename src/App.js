import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Particles from 'react-tsparticles';

function App() {
  return (
    <>
      <Particles 
        // id="tsparticles"
        className='particle-canvas'
        options={{
          particles: {
            shape: {
              type: "circle",
              stroke: {
                width: 3,
                color: "#f9ab00"
              }
            },
            links: {
              color: "#ffffff",
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
            }
          }
        }}
        
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
