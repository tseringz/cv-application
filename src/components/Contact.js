import React, { Component } from 'react';


class Contact extends Component {

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

        const { contactHeading, contact, style5 } = this.props;


        return (
            <div className="Contact">
                 <div className="Hover-area" onMouseEnter={(e) => {
                e.target.childNodes[0].style.display = "flex";
            }} onMouseLeave={(e) => {
                e.target.childNodes[0].style.display = "none";
            }}>
                <button type="button" name="style5" value="editForm2" className="Edit" onClick={this.onEdit.bind(this)}>Edit</button>
            </div>
             <div className="contactWrapper">
                <button className="Edit">Edit</button>
            <form className={style5}>
             <label>Year:</label>
             <input type="number" className="year" placeholder = "Year" ></input>
             <input type="text" className="projectName" placeholder = "Project name" ></input>
             <textarea type="text" className="aboutProject" row="4" col="50" placeholder='About your project ...'></textarea>
             <div className="button-wrapper">
             <button name="style5" type="button" onClick={this.onClose.bind(this)}>Close</button>
             <button type="submit">Submit</button>
             </div>
           </form>

                <h2>{contactHeading}</h2>
                <div>
                <h5 className="lightType">{contact.email}</h5>
                <h5 className="lightType">{contact.website}</h5>
                <h5 className="lightType">{contact.phone}</h5>
                </div>
             </div>
          </div>
        );
    }
}

export default Contact;