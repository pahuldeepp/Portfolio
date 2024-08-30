import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/Aboutme'; // Corrected component name
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About /> {/* Corrected component name */}
      <Services />
      <Contact/>
    </div>
  );
};

export default App;
