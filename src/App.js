import React, { Component } from 'react';
import About from './components/About';
import Qualification from './components/Qualification';
import Project from './components/Project';
import Work from './components/Work';
import Contact from './components/Contact';
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

      },

      style: 'editForm',
      style2: 'editForm',
      style3: 'editForm',
      style4: 'editForm',
      style5: 'editForm',

    };
    
    this.onEdit = this.onEdit.bind(this);
    this.onEdit2 = this.onEdit2.bind(this);
    this.onEdit3 = this.onEdit3.bind(this);
    this.onEdit4 = this.onEdit4.bind(this);
    this.onEdit5 = this.onEdit5.bind(this);
  }

  onEdit() {
    this.setState({
      style: 'editForm2',
    })
  }

  onEdit2() {
    this.setState({
      style2: 'editForm2',
    })
  }
  
  onEdit3() {
    this.setState({
      style3: 'editForm2',
    })
  }

  onEdit4() {
    this.setState({
      style4: 'editForm2',
    })
  }
  onEdit5() {
    this.setState({
      style5: 'editForm2',
    })
  }
  render() {
    const { about, education, work, project, contact, style, style2, style3, style4, style5} = this.state;
    
    return (
      <div className="Resume">
        <About onEdit={this.onEdit} style={style} aboutHeading="About" about={about}  />
        <main>
          <div className="Education-wrapper">
          <Qualification  onEdit2={this.onEdit2} style2={style2} education={education} educationHeading="Education"/>
          <Work  onEdit3={this.onEdit3} style3={style3} work={work} workHeading="Work"/>
          </div>
          <div className="Project-wrapper">
          <Project onEdit4={this.onEdit4} style4={style4} project={project} projectHeading="Project"/>
          <Contact onEdit5={this.onEdit5} contact={contact} style5={style5} contactHeading="Contact"/>
          </div>
        </main>
      </div>
    )
  }
}


export default App;
