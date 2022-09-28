import React, { Component } from 'react';

class Work extends Component { 
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

        const {  work, workHeading, style3 } = this.props;
        

        return (
            <div className="Work">
                 <div className="Hover-area" onMouseEnter={(e) => {
                e.target.childNodes[0].style.display = "flex";
            }} onMouseLeave={(e) => {
                e.target.childNodes[0].style.display = "none";
            }}>
                <button type="button" name="style3" value="editForm2" className="Edit" onClick={this.onEdit.bind(this)}>Edit</button>
            </div>
                <div className={"workWrapper"}>
                <form className={style3}>
                <label>Year:</label>
                <input type="number" className="year" placeholder = "Year" ></input>
                <input type="text" className="projectName" placeholder = "Project name" ></input>
                <input></input>
                <div className="button-wrapper">
                <button name="style3" type="button" onClick={this.onClose.bind(this)}>Close</button>
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

export default Work;