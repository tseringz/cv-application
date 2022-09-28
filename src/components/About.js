import React, { Component } from 'react';


class About extends Component {

    constructor(props) {
        super(props);

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
        this.props.handleChangeAbout(event);
      }
   
    render() {
        const { about, aboutHeading, style } = this.props;

        
        return (
            <div className="About"> 
            <div className="Hover-area" onMouseEnter={(e) => {
                e.target.childNodes[0].style.display = "flex";
            }} onMouseLeave={(e) => {
                e.target.childNodes[0].style.display = "none";
            }}>
                <button type="button" className="Edit" name="style" value="editForm2" onClick={this.onEdit.bind(this)}>Edit</button>
            </div>
            <form className={style}>
             <label>Name:</label>
             <input type="text" className="name" placeholder = "Name" onChange={this.handleChangeAbout.bind(this)} ></input>
             <textarea type="text" className="aboutMe" row="4" col="50" placeholder='About Yours ...' onChange={this.handleChangeAbout.bind(this)}></textarea>
             <div className="button-wrapper">
             <button name="style" type="button" onClick={this.onClose.bind(this)}>Close</button>
             <button type="submit">Submit</button>
             </div>
            </form>
                <h1>{about.name}</h1>
            <div className="About-wrapper">
                <h2>{aboutHeading}</h2>
                <h5 className="lightType">{about.aboutMe}</h5>
            </div>
            </div>
        )
    }

}

export default About;