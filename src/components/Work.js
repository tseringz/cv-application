import React, { Component } from 'react';

class Work extends Component { 
 constructor(props) {
    super(props);


    this.onEdit3 = this.onEdit3.bind(this);

 }

    onEdit3() {
        this.props.onEdit3();
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
                <button type="button" className="Edit" onClick={this.onEdit3.bind(this)}>Edit</button>
            </div>
                <div className={"workWrapper"}>
                <form className={style3}>
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

export default Work;