import React, { Component } from 'react';
import $ from 'jquery';

import './App.css';
import Header from './Component/Header';
import About from './Component/About';
import Resume from './Component/Resume';
import Portfolio from './Component/Portfolio';
import Testimonial from './Component/Testimonial';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      resumeData :{}
    }

  }

  getResumeData(){
    $.ajax({
      url:"http://localhost:3000/resumeData.json",
      dataType:'json',
      success: (data) => {
          this.setState({resumeData:data});
      },
      error:(error) => {
        console.log(error);
      }
    })
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    console.log(this.state.resumeData);
    return (
      <div className="App">
        <Header data = {this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data= {this.state.resumeData.portfolio}/>
        <Testimonial data={this.state.resumeData.testimonials}/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
