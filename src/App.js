import React, { Component } from 'react';
import About from './components/About';
import Qualification from './components/Qualification';
import ProjectAndSkills from './components/ProjectsAndSkills';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <div className="Resume">
        <About name="Tsering Dhondup" description="this is fucking awesome and we are doing good" />
        <Qualification />
        <ProjectAndSkills />
      </div>
    )
  }
}

export default App;
