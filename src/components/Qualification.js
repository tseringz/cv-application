
import React, { Component } from 'react';


class Qualification extends Component { 
    constructor(props) {
        super(props);

        this.onEdit = this.onEdit.bind(this);
        this.onClose = this.onClose.bind(this);

    }

    onEdit(e) {
        this.props.onEdit(e);
    }

    onClose(e) {
        this.props.onClose(e);
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
                <button type="button"  className="Edit" name="style2" value="editForm2" onClick={this.onEdit.bind(this)}>Edit</button>
            </div>
                <div className="educationWrapper">
                <form className={style2}>
                <label>Year:</label>
                <input type="number" className="year" placeholder = "Year" ></input>
                <input type="text" className="projectName" placeholder = "Project name" ></input>
                <input></input>
                <div className="button-wrapper">
                <button name="style2" type="button" onClick={this.onClose.bind(this)}>Close</button>
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