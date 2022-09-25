import React, { Component } from 'react';
import About from './components/About';
import Qualification from './components/Qualification';
import ProjectAndSkills from './components/ProjectsAndSkills';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      counter: 0,
    };
  }


  render() {
    return (
      <div className="Resume">
        <About />
        <Qualification />
        <ProjectAndSkills />
      </div>
    )
  }
}

export default App;
