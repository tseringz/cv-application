import React, { Component } from 'react';


class About extends Component {
   
    render() {
        const {about, aboutHeading } = this.props;
        return (
            <div className="About"> 
            <button className="Edit">Edit</button>
            <form id="editForm">
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