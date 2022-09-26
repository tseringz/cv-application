import React, { Component } from 'react';

class ProjectAndSkills extends Component {

    render() {

        const { contactHeading, projectHeading, contact, project } = this.props;

        return (
            <div className="projects">
             <div className="projectWrapper">
                <button className="Edit">Edit</button>
              <form id="editForm">
             <label>Year:</label>
             <input type="number" className="year" placeholder = "Year" ></input>
             <input type="text" className="projectName" placeholder = "Project name" ></input>
             <textarea type="text" className="aboutProject" row="4" col="50" placeholder='About your project ...'></textarea>
             <div className="button-wrapper">
             <button type="button">Close</button>
             <button type="submit">Submit</button>
             </div>
              </form>
                <h2>{projectHeading}</h2>
              <div>
                <h5 className="lightType">{project[0].year}</h5>
                <h5>{project[0].projectName}</h5>
                <h5 className="lightType">{project[0].description}</h5>
              </div>
            </div>
             <div className="contactWrapper">
                <button className="Edit">Edit</button>
            <form id="editForm">
             <label>Year:</label>
             <input type="number" className="year" placeholder = "Year" ></input>
             <input type="text" className="projectName" placeholder = "Project name" ></input>
             <textarea type="text" className="aboutProject" row="4" col="50" placeholder='About your project ...'></textarea>
             <div className="button-wrapper">
             <button type="button">Close</button>
             <button type="submit">Submit</button>
             </div>
           </form>

                <h2>{contactHeading}</h2>
                <div>
                <h5 className="lightType">{contact.email}</h5>
                <h5 className="lightType">{contact.website}</h5>
                <h5 className="lightType">{contact.phone}</h5>
                </div>
             </div>
          </div>
        );
    }
}

export default ProjectAndSkills;