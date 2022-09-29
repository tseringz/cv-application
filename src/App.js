import React, { Component } from 'react';
import About from './components/About';
import Qualification from './components/Qualification';
import Project from './components/Project';
import Work from './components/Work';
import Contact from './components/Contact';
import './styles/App.css';


const initialStyle = {
  style: 'editForm',
  style2: 'editForm',
  style3: 'editForm',
  style4: 'editForm',
  style5: 'editForm',
  }

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

      },

      initialStyle: {
        style: 'editForm',
        style2: 'editForm',
        style3: 'editForm',
        style4: 'editForm',
        style5: 'editForm',
      }

    };
    
    this.onEdit = this.onEdit.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  
  onEdit(e) {
    const { name, value } = e.target;
    this.setState({
      initialStyle: {
        ...this.state.initialStyle,
        [name]: value,
      }
    })
  }

  onClose(e) {
    const name = e.target.name;
    this.setState({
      initialStyle: {
      ...this.state.initialStyle,
      [name]: 'editForm',
      }
    })
  }

  

  render() {
    const { about, education, work, project, contact, initialStyle } = this.state;

    return (
      <div className="Resume">
        <About onEdit={this.onEdit} onClose={this.onClose} initialStyle={initialStyle} aboutHeading="About" about={about} />
        <main>
          <div className="Education-wrapper">
          <Qualification  onEdit={this.onEdit} onClose={this.onClose} initialStyle={initialStyle} education={education} educationHeading="Education"/>
          <Work  onEdit={this.onEdit} onClose={this.onClose} initialStyle={initialStyle} work={work} workHeading="Work"/>
          </div>
          <div className="Project-wrapper">
          <Project onEdit={this.onEdit} onClose={this.onClose} initialStyle={initialStyle} project={project} projectHeading="Project"/>
          <Contact onEdit={this.onEdit} onClose={this.onClose} initialStyle={initialStyle} contact={contact} contactHeading="Contact"/>
          </div>
        </main>
      </div>
    )
  }
}


export default App;
