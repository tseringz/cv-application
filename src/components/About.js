import React, { Component } from 'react';


class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Tsering Dhondup',
            description: 'This is fucking cool as fuck and we do care about it.',
        }

    };


    render() {
        
        const { name, description } = this.props;

        return (
            <div> 
                <h1>{name}</h1>
            <div>
                <h2>About</h2>
                <h5>{description}</h5>
            </div>
            </div>
        )
    }

}

export default About;