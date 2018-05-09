import React, {Component} from 'react';
import './contact.css';
import AutosizeInput from 'react-input-autosize';


class Contact extends Component {
    constructor(props){
        super(props);

        this.state={
            name: "",
            lastName: "",
            message: "",
            email: ""
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        // This method will be reusable 
        // In multiple input fields
        // Make sure that the the input fields
        // Have and id == to the state they connect

        let targetId = e.target.id;
        let targetValue = e.target.value;
        let prevState = this.state;

        // Iterate through the state
        // If the id of the current target
        // Matches any key in the state
        // It will update the state
        for(var id in prevState) {
            if(targetId === id) {
                this.setState({
                    [id]: e.target.value
                })
            }
        }

    }

    render(){
        return(
            <div className="contact-container">
                <div className="contact-title">Contact us</div>

                <div className="contact-form-container">

                    <div className="contact-form-title">
                        Get in touch with us
                    </div>

                    <div className="input-fields-container">

                        <AutosizeInput
                            id="name"
                            name="form-field-name"
                            className="name-field"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleInput}
                        /> 

                        <br/>    

                        <AutosizeInput
                            id="lastName"
                            name="form-field-last-name"
                            className="lastName-field"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={this.handleInput}
                        />  

                        <br/>
                        
                        <AutosizeInput
                            id="email"
                            name="form-field-last-email"
                            className="email-field"
                            placeholder="Email"
                            value={this.state.lastName}
                            onChange={this.handleInput}
                        />     
                        
                        <textarea 
                            id="message"
                            name="form-field-message"
                            className="message-field"
                            placeholder="Tell us what you are looking for and we will get back to you in 24h."
                            value={this.state.message}
                            onChange={this.handleInput}
                        />

                        <br/>

                        <div className="submit-button-container">
                            <div className="submit-button">
                                send
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;