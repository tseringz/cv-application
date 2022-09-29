import React, { Component } from 'react';
import uniqid from  'uniqid';

class ProjectAndSkills extends Component {
constructor(props) {
  super(props);

  this.state = {
    project:{
      year: '2022',
      projectName: 'Website Design',
      description: `Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua.`,
    },
    projects: [
        {
          year: '2022',
          projectName: 'Website Design',
          description: `Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.`,
        }, 


    ]
  }

  this.onEdit = this.onEdit.bind(this);
  this.onClose = this.onClose.bind(this);
  this.handleChangeProject = this.handleChangeProject.bind(this);
  this.onSubmitProject = this.onSubmitProject.bind(this);

}

  onEdit(e) {
   this.props.onEdit(e);
  }

  onClose(e) {
    this.props.onClose(e);
   }

   handleChangeProject(event) {
    const { name, value } = event.target;
    this.setState({
        project: {
            ...this.state.work,
            [name]: value,
        }
    })
  }

  onSubmitProject(e) {
    e.preventDefault();
    this.setState({
        projects: this.state.projects.concat(this.state.project),
        project: {
          id: uniqid(),
          year: '2022',
          projectName: 'Website Design',
          description: `Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.`,

            },
    })
  }

    render() {

        const { projectHeading, initialStyle } = this.props;
        const { project, projects } = this.state;

      
        return (
            <div className="Project">
               <div className="Hover-area" onMouseEnter={(e) => {
                e.target.childNodes[0].style.display = "flex";
            }} onMouseLeave={(e) => {
                e.target.childNodes[0].style.display = "none";
            }}>
                <button type="button" name="style4" value="editForm2" className="Edit" onClick={this.onEdit.bind(this)}>Edit</button>
            </div>
             <div className="projectWrapper">
              <form className={initialStyle.style4} onSubmit={this.onSubmitProject}>
             <label>Year:</label>
             <input type="number" name="year" value={project.year} className="year" placeholder = "Year" onChange={this.handleChangeProject}></input>
             <input type="text" name="projectName" value={project.projectName} className="projectName" placeholder = "Project name" onChange={this.handleChangeProject}></input>
             <textarea type="text" name="description" value={project.description} className="aboutProject" row="4" col="50" placeholder='About your project ...' onChange={this.handleChangeProject}></textarea>
             <div className="button-wrapper">
             <button name="style4" type="button" onClick={this.onClose.bind(this)}>Close</button>
             <button name="style4" type="submit" onClick={this.onClose.bind(this)}>Submit</button>
             </div>
              </form>
                <h2>{projectHeading}</h2>
              <div>
              {projects.map((project) => {
                        return <div className = "elementWrapper" key={project.id}>
                            <h5 className="lightType">{project.year}{project.year < 2022 ? ' - pass' : ' - present'}</h5> 
                            <h5>{project.projectName}</h5>
                            <h5 className="lightType">{project.description}</h5>
                        </div>
                    })}
              </div>
            </div>
          </div>
        );
    }
}

export default ProjectAndSkills;