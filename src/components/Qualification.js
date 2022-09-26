
import React, { Component } from 'react';


class Qualification extends Component { 

    render() {

        const { education, educationHeading, work, workHeading } = this.props;

        return (
            <div className="Qualification">
                <div className="educationWrapper">
                    <button className="Edit">Edit</button>
                <form id="editForm">
                <label>Year:</label>
                <input type="number" className="year" placeholder = "Year" ></input>
                <input type="text" className="projectName" placeholder = "Project name" ></input>
                <input></input>
                <div className="button-wrapper">
                <button type="button">Close</button>
                <button type="submit">Submit</button>
             </div>
                </form>
                    <h2>{educationHeading}</h2>
                    <div>
                    <h5 className="lightType">{education[0].year}</h5> 
                    <h5>{education[0].degree}</h5>
                    <h5 className="lightType">{education[0].school}</h5>
                    </div>
                </div>
                <div className="workWrapper">
                    <button className="Edit">Edit</button>
                <form id="editForm">
                <label>Year:</label>
                <input type="number" className="year" placeholder = "Year" ></input>
                <input type="text" className="projectName" placeholder = "Project name" ></input>
                <input></input>
                <div className="button-wrapper">
                <button type="button">Close</button>
                <button type="submit">Submit</button>
             </div>
                </form>
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