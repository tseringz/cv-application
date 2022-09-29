
import React, { Component } from 'react';
import uniqid from "uniqid";


class Qualification extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            education: {
            id: uniqid(),
            year: '2022',
            degree: 'Bachelors of Design',
            school: 'Drogpa Studio',
            },
            educations: [
                {
                    id: uniqid(),
                    year: '2022',
                    degree: 'Bachelors of Design',
                    school: 'Drogpa Studio',
                    },
            ],
    }


        this.onEdit = this.onEdit.bind(this);
        this.onClose = this.onClose.bind(this);
        this.handleChangeEducation = this.handleChangeEducation.bind(this);
        this.onSubmitEducation = this.onSubmitEducation.bind(this);

    }

    onEdit(e) {
        this.props.onEdit(e);
    }

    onClose(e) {
        this.props.onClose(e);
    }

    handleChangeEducation(event) {
        const { name, value } = event.target;
        this.setState({
            education: {
                ...this.state.education,
                [name]: value,
            }
        })
      }

      onSubmitEducation(e) {
        e.preventDefault();
        this.setState({
            educations: this.state.educations.concat(this.state.education),
            education: {
                id: uniqid(),
                year: '',
                degree: '',
                school: '',
                },
        })
      }

     
    render() {

        const { educationHeading, initialStyle } = this.props;
        const { education, educations } = this.state;

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
                <form className={initialStyle.style2} onSubmit={this.onSubmitEducation}>
                <label>Year:</label>
                <input type="number" name="year" value={education.year} className="year" placeholder = "Year" onChange={(this.handleChangeEducation)}></input>
                <input type="text" name="degree" value={education.degree} className="degreeName" placeholder = "Degree name" onChange={(this.handleChangeEducation)}></input>
                <input type="text" name="school" value={education.school} className="schoolName" placeholder = "School name" onChange={(this.handleChangeEducation)}></input>
                <div className="button-wrapper">
                <button name="style2" type="button" onClick={this.onClose.bind(this)}>Close</button>
                <button name="style2" type="submit" onClick={this.onClose.bind(this)}>Submit</button>

             </div>
                </form>
                    <h2>{educationHeading}</h2>
                    <div>
                    {educations.map((education) => {
                        return <div className = "elementWrapper" key={education.id}>
                            <h5 className="lightType">{education.year}{education.year < 2022 ? ' - pass' : ' - present'}</h5> 
                            <h5>{education.degree}</h5>
                            <h5 className="lightType">{education.school}</h5>
                        </div>
                    })}
                    </div>
                </div>
            </div>
        );
    }

}

export default Qualification;