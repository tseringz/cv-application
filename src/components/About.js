import React, { Component } from 'react';


class About extends Component {
   
    render() {
        const {about, aboutHeading } = this.props;
        return (
            <div className="About"> 
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