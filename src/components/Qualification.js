
import React, { Component } from 'react';


class Qualification extends Component { 

    render() {

        const { year, course, school, work, company } = this.props;

        return (
            <div>
                <h2>Education</h2>
                <div>
                    <h5>{year}</h5> 
                    <h5>{course}</h5>
                    <h5>{school}</h5>
                </div>
                <div>
                    <h2>Work</h2>
                    <div>
                        <h5>{year}</h5>
                        <h5>{work}</h5>
                        <h5>{company}</h5>
                    </div>
                </div>
            </div>
        );
    }

}

export default Qualification;