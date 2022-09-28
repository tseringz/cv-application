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
        style: 'editForm',
        style2: 'editForm',
        style3: 'editForm',
        style4: 'editForm',
        style5: 'editForm',

    };
    
    this.onEdit = this.onEdit.bind(this);
    this.onClose = this.onClose.bind(this);
    this.handleChangeAbout = this.handleChangeAbout.bind(this);
  }

  
  onEdit(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  onClose(e) {
    const name = e.target.name;
    this.setState({
      [name]: 'editForm'
    })
  }

  handleChangeAbout(event) {
    this.setState({
      about: {
        name: event.target.value,
        aboutMe: event.target.value,
      }
    })
  }

  render() {
    const { about, education, work, project, contact, initialStyle, style, style2, style3, style4, style5 } = this.state;


    
    return (
      <div className="Resume">
        <About onEdit={this.onEdit} onClose={this.onClose} style={style} aboutHeading="About" about={about}  handleChangeAbout={this.handleChangeAbout}/>
        <main>
          <div className="Education-wrapper">
          <Qualification  onEdit={this.onEdit} onClose={this.onClose} style2={style2} education={education} educationHeading="Education"/>
          <Work  onEdit={this.onEdit} onClose={this.onClose} style3={style3} work={work} workHeading="Work"/>
          </div>
          <div className="Project-wrapper">
          <Project onEdit={this.onEdit} onClose={this.onClose} style4={style4} project={project} projectHeading="Project"/>
          <Contact onEdit={this.onEdit} onClose={this.onClose} style5={style5} contact={contact} initialStyle={initialStyle} contactHeading="Contact"/>
          </div>
        </main>
      </div>
    )
  }
}


export default App;
