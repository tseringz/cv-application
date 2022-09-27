
import React, { Component } from 'react';


class Qualification extends Component { 
    constructor(props) {
        super(props);

        this.onEdit2 = this.onEdit2.bind(this);

    }

    onEdit2() {
        this.props.onEdit2();
    }

    render() {

        const { education, educationHeading, style2 } = this.props;
        
        


        return (
            <div className="Qualification">
                 <div className="Hover-area" onMouseEnter={(e) => {
                e.target.childNodes[0].style.display = "flex";
            }} onMouseLeave={(e) => {
                e.target.childNodes[0].style.display = "none";
            }}>
                <button type="button" className="Edit" onClick={this.onEdit2.bind(this)}>Edit</button>
            </div>
                <div className="educationWrapper">
                <form className={style2}>
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
            </div>
        );
    }

}

export default Qualification;