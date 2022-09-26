import React, { Component } from 'react';

class ProjectAndSkills extends Component {

    render() {

        const { contactHeading, projectHeading, contact, project } = this.props;

        return (
            <div>
             <h2>{projectHeading}</h2>
             <div>
                <h5 className="lightType">{project[0].year}</h5>
                <h5>{project[0].projectName}</h5>
                <h5 className="lightType">{project[0].description}</h5>
             </div>
             <div>
                <h2>{contactHeading}</h2>
                <h5 className="lightType">{contact.email}</h5>
                <h5 className="lightType">{contact.website}</h5>
                <h5 className="lightType">{contact.mobile}</h5>
             </div>
            </div>
        );
    }
}

export default ProjectAndSkills;