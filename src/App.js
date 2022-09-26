import React, { Component } from 'react';
import About from './components/About';
import Qualification from './components/Qualification';
import ProjectAndSkills from './components/ProjectsAndSkills';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: {
        name: 'Elanor Fitzgerald',
        aboutMe: `Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.`,

      },

      education: [
        {
          year: '2022 - present',
          degree: 'Bachelors of Design',
          school: 'Drogpa Studio',
        }, 
        {
          year: '2022 - present',
          degree: 'High School',
          school: 'Drogpa Studio',
        }, 

      ],

      work: [
        {
          year: '2022 - present',
          occupation: 'Graphic Designer',
          company: 'Drogpa Studio',
        }, 
        {
          year: '2022 - present',
          occupation: 'Graphic Designer',
          company: 'Drogpa Studio',
        }, 
        {
          year: '2022 - present',
          occupation: 'Graphic Designer',
          company: 'Drogpa Studio',
        }, 

      ],

      project: [
        {
          year: '2022 - present',
          projectName: 'Graphic Designer',
          description: `Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.`,
        }, 

        {
          year: '2022 - present',
          project: 'Graphic Designer',
          description: `Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.`,
        }, 
      ],

      contact: {
        email: 'hello@odinproject.com',
        website: 'www.odinproject.com',
        phone: '+123-456-1234',

      }
    };
  }


  render() {
    const { about, education, work, project, contact } = this.state;
    return (
      <div className="Resume">
        <About aboutHeading="About" about={about}  />
        <main>
          <div className="Education-wrapper">
          <Qualification  work={work} education={education} educationHeading="Education" workHeading="Work"/>
          </div>
          <div className="Project-wrapper">
          <ProjectAndSkills project={project} contact={contact} projectHeading="Project" contactHeading="Contact"/>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
