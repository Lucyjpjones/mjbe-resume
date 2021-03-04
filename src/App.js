import React from 'react';
import { Container } from 'react-bootstrap';
// import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Experience from './components/pages/Experience';
import Images from './components/pages/Images';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import './App.css';

function App() {

  return (
    <Container fluid>
        <Home />
        <About />
        <Experience />
        <Images />
        <Contact />
        <Footer />
    </Container>
  );
}

export default App;



