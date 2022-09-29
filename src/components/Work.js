import React, { Component } from 'react';
import uniqid from 'uniqid';
class Work extends Component { 
 constructor(props) {
    super(props);

    this.state = {
        work:{
            id: uniqid(),
            year: '2022',
            occupation: 'Graphic Designer',
            company: 'Drogpa Studio',
          }, 

        works: [
            {
              year: '2022',
              occupation: 'Graphic Designer',
              company: 'Drogpa Studio',
            }, 
            
          ],
    };

    this.onEdit = this.onEdit.bind(this);
    this.onClose = this.onClose.bind(this);
    this.handleChangeWork = this.handleChangeWork.bind(this);
    this.onSubmitWork = this.onSubmitWork.bind(this);

 }

    onEdit(e) {
        this.props.onEdit(e);
    }

    onClose(e) {
        this.props.onClose(e);
    }

    handleChangeWork(event) {
        const { name, value } = event.target;
        this.setState({
            work: {
                ...this.state.work,
                [name]: value,
            }
        })
      }

      onSubmitWork(e) {
        e.preventDefault();
        this.setState({
            works: this.state.works.concat(this.state.work),
            work: {
                id: uniqid(),
                year: '2022',
                occupation: 'Graphic Designer',
                company: 'Drogpa Studio',

                },
        })
      }


    render() {

        const {  workHeading, initialStyle } = this.props;
        const { work, works } = this.state;
        

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
                <form className={initialStyle.style3} onSubmit={this.onSubmitWork}>
                <label>Year:</label>
                <input type="number" name="year" value={work.year} className="year" placeholder = "Year" onChange={this.handleChangeWork} ></input>
                <input type="text" name="occupation" value={work.occupation} className="projectName" placeholder = "Project name" onChange={this.handleChangeWork}></input>
                <input type="text" name="company" value={work.company} className="projectName" placeholder = "Company name" onChange={this.handleChangeWork}></input>
                <div className="button-wrapper">
                <button name="style3" type="button" onClick={this.onClose.bind(this)}>Close</button>
                <button name="style3" type="submit" onClick={this.onClose.bind(this)}>Submit</button>
             </div>
                </form>
                    <h2>{workHeading}</h2>
                    <div>
                        {works.map((work) => {
                        return <div className = "elementWrapper" key={work.id}>
                            <h5 className="lightType">{work.year}{work.year < 2022 ? ' - pass' : ' - present'}</h5> 
                            <h5>{work.occupation}</h5>
                            <h5 className="lightType">{work.company}</h5>
                        </div>
                    })}
                    </div>
                </div>
            </div>
        );
    }

}

export default Work;