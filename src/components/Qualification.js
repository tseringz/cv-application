
import React, { Component } from 'react';


class Qualification extends Component { 

    render() {

        const { education, educationHeading, work, workHeading } = this.props;

        return (
            <div>
                <h2>{educationHeading}</h2>
                <div>
                    <h5 className="lightType">{education[0].year}</h5> 
                    <h5>{education[0].degree}</h5>
                    <h5 className="lightType">{education[0].school}</h5>
                </div>
                <div>
                    <h2>{workHeading}</h2>
                    <div>
                        <h5 className="lightType">{work[0].year}</h5>
                        <h5>{work[0].occupation}</h5>
                        <h5 className="lightType">{work[0].company}</h5>
                    </div>
                </div>
            </div>
        );
    }

}

export default Qualification;