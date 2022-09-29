import React, { Component } from 'react';
class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: 'hello@odinproject.com',
            website: 'www.odinproject.com',
            phone: '+123-456-1234',
        }

        this.onEdit = this.onEdit.bind(this);
        this.onClose = this.onClose.bind(this);
        this.handleChangeContact = this.handleChangeContact.bind(this);

    }

    onEdit(e) {
        this.props.onEdit(e);
    }

    onClose(e) {
        this.props.onClose(e);
       }

       handleChangeContact(event) {
        const { name, value } = event.target;
        this.setState({
                [name]: value,
        })
      }


    render() {

        const { contactHeading, initialStyle } = this.props;
        const { email, website, phone } = this.state;


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
            <form className={initialStyle.style5}>
             <label>Year:</label>
             <input type="email" name="email" value={email} className="email" placeholder = "Your email" onChange={this.handleChangeContact}></input>
             <input type="text" name="website" value={website} className="website" placeholder = "Your website" onChange={this.handleChangeContact}></input>
             <input type="tel" name="phone" value={phone} className="phone"  placeholder='Your phone' onChange={this.handleChangeContact}></input>
             <div className="button-wrapper">
             <button name="style5" type="button" onClick={this.onClose.bind(this)}>Close</button>
             </div>
           </form>

                <h2>{contactHeading}</h2>
                <div>
                <h5 className="lightType">{email}</h5>
                <h5 className="lightType">{website}</h5>
                <h5 className="lightType">{phone}</h5>
                </div>
             </div>
          </div>
        );
    }
}

export default Contact;