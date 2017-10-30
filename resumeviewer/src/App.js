import React, { Component } from 'react';
import './App.css';

import Header from './Component/Header';
import About from './Component/About';
import Resume from './Component/Resume';
import Portfolio from './Component/Portfolio';
import Testimonial from './Component/Testimonial';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
