import React, { Component } from 'react';

class ProjectAndSkills extends Component {

    render() {

        const { year, title, description, email, website, mobile } = this.props;

        return (
            <div>
             <h2>Projects</h2>
             <div>
                <h2>{year}</h2>
                <h2>{title}</h2>
                <h2>{description}</h2>
             </div>
             <div>
                <h2>Contact</h2>
                <h2>{email}</h2>
                <h2>{website}</h2>
                <h2>{mobile}</h2>
             </div>
            </div>
        );
    }
}

export default ProjectAndSkills;