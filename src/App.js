import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-tsparticles';
import MyParticle from './components/MyParticle';

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about-me/About';
import Interest from './components/interest/Interest';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <>
      <MyParticle />
      <Navbar />
      <Header />
      <About />
      <Interest />
      <Portfolio />
    </>
  );
}

export default App;
