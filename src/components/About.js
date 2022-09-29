import React, { Component } from 'react';


class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Elanor Fitzgerald', 
            aboutMe: `Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.`,
    }

        this.onEdit = this.onEdit.bind(this);
        this.onClose = this.onClose.bind(this);
        this.handleChangeAbout = this.handleChangeAbout.bind(this);
    }

    onEdit(e) {
        this.props.onEdit(e);
    }

    onClose(e) {
        this.props.onClose(e);
    }

    handleChangeAbout(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
      }

   
    render() {
        const { aboutHeading, initialStyle } = this.props;
        const { name, aboutMe } = this.state;

        
        return (
            <div className="About"> 
            <div className="Hover-area" onMouseEnter={(e) => {
                e.target.childNodes[0].style.display = "flex";
            }} onMouseLeave={(e) => {
                e.target.childNodes[0].style.display = "none";
            }}>
                <button type="button" className="Edit" name="style" value="editForm2" onClick={this.onEdit.bind(this)}>Edit</button>
            </div>
            <form className={initialStyle.style}>
             <label>Name:</label>
             <input type="text" className="name" name="name" value={name} placeholder = "Name" onChange={this.handleChangeAbout} ></input>
             <textarea type="text" className="aboutMe" row="4" col="50" name="aboutMe" value={aboutMe} placeholder='About Yours ...' onChange={this.handleChangeAbout}></textarea>
             <div className="button-wrapper">
             <button name="style" type="button" onClick={this.onClose.bind(this)}>Close</button>
             </div>
            </form>
                <h1>{name}</h1>
            <div className="About-wrapper">
                <h2>{aboutHeading}</h2>
                <h5 className="lightType">{aboutMe}</h5>
            </div>
            </div>
        )
    }

}

export default About;