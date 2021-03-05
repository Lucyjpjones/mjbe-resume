import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Experience from './components/pages/Experience';
import Images from './components/pages/Images';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import './App.css';

function App() {

  return (
    <Container fluid className="main-container">
      <Router basename={process.env.PUBLIC_URL}>
        <NavMenu />
        <Home />
        <About />
        <Experience />
        <Images />
        <Contact />
        <Footer />
      </Router>
    </Container>
  );
}

export default App;



