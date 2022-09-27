import React, { Component } from 'react';


class About extends Component {

    constructor(props) {
        super(props);

        this.onEdit = this.onEdit.bind(this);
    }

    onEdit() {
        this.props.onEdit();
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
                <button type="button" className="Edit" onClick={this.onEdit.bind(this)}>Edit</button>
            </div>
            <form className={style}>
             <label>Name:</label>
             <input type="text" className="name" placeholder = "Name" ></input>
             <textarea type="text" className="aboutMe" row="4" col="50" placeholder='About Yours ...'></textarea>
             <div className="button-wrapper">
             <button type="button">Close</button>
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