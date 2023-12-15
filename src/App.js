import React from 'react';
import Header from './component/Header'
import Main from './component/Main';
import Facility from './component/Facility';
import Counter from './component/Counter';
import Navbar from './component/Navbar';
import Gallery from './component/Gallery';
import Image from './component/Image';
import Contact from './component/Contact';
import About from './component/About';
import Footer from './component/Footer';

function App() {
  return (
    <div >
      <Header />
      <Navbar/>
      <Main/>
      <Facility/>
      <Counter />
      <Image/>
      <Gallery/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;



