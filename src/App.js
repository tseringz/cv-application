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
      theme: 'default',
      initialStyle: {
        style: 'editForm',
        style2: 'editForm',
        style3: 'editForm',
        style4: 'editForm',
        style5: 'editForm',
      },


    };
    
    this.onEdit = this.onEdit.bind(this);
    this.onClose = this.onClose.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
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

  changeTheme(e) {
    const newTheme = e.target.value;
    this.setState({
      theme: newTheme,
    })
  }

  render() {
    const {  initialStyle, theme } = this.state;
    const btnStyleDefault = {
      backgroundColor: '#1d9552',
      width: '16px',
      height: '16px',
      border: 'none',
      marginLeft: '0',
    }

    const btnStyleBlue = {
      backgroundColor: '#3AB0FF',
      width: '16px',
      height: '16px',
      border: 'none',
      marginLeft: '-10px',
    }

    return (
      <div className="Resume" data-theme={theme}>
        <div className="btn-wrapper">
          <p style={{marginTop: '4px', marginRight: '8px'}}>Theme:</p>
        <button value="default" className="default" style={btnStyleDefault}onClick={this.changeTheme}></button>
        <button value="blue" className="blue" style={btnStyleBlue} onClick={this.changeTheme}></button>
        </div>
        <About onEdit={this.onEdit} onClose={this.onClose} initialStyle={initialStyle} aboutHeading="About" />
        <main>
          <div className="Education-wrapper">
          <Qualification  onEdit={this.onEdit} onClose={this.onClose} initialStyle={initialStyle}  educationHeading="Education"/>
          <Work  onEdit={this.onEdit} onClose={this.onClose} initialStyle={initialStyle} workHeading="Work"/>
          </div>
          <div className="Project-wrapper">
          <Project onEdit={this.onEdit} onClose={this.onClose} initialStyle={initialStyle}  projectHeading="Project"/>
          <Contact onEdit={this.onEdit} onClose={this.onClose} initialStyle={initialStyle}  contactHeading="Contact"/>
          </div>
        </main>
      </div>
    )
  }
}


export default App;
