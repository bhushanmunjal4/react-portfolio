import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Contact />
    </>
  )
}

export default App;

