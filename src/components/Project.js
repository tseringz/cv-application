import React, { Component } from 'react';

class ProjectAndSkills extends Component {
constructor(props) {
  super(props);

  this.onEdit4 = this.onEdit4.bind(this);
}

  onEdit4() {
   this.props.onEdit4();
  }

    render() {

        const { projectHeading, project, style4 } = this.props;

      
        return (
            <div className="Project">
               <div className="Hover-area" onMouseEnter={(e) => {
                e.target.childNodes[0].style.display = "flex";
            }} onMouseLeave={(e) => {
                e.target.childNodes[0].style.display = "none";
            }}>
                <button type="button" className="Edit" onClick={this.onEdit4.bind(this)}>Edit</button>
            </div>
             <div className="projectWrapper">
              <form className={style4}>
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
          </div>
        );
    }
}

export default ProjectAndSkills;