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
            email: "",
            submit_message: false
        }

        this.handleInput = this.handleInput.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
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

    submitMessage() {
        let state = this.state;
        let state_fields = [];
        this.setState({
            submit_message: true
        })
        console.log(state_fields)
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

                        <span className={this.state.name === "" && this.state.submit_message == true ? "show-warning" : "hide-warning"}>
                            * Please enter your Name.
                        </span>
                        <AutosizeInput
                            id="name"
                            name="form-field-name"
                            className={this.state.name === "" && this.state.submit_message == true ? "empty-input" : ""}
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleInput}
                        /> 
                        <br/>    
                        <span className={this.state.lastName === "" && this.state.submit_message == true ? "show-warning" : "hide-warning"}>
                            * Please enter your Last Name.
                        </span>
                        <AutosizeInput
                            id="lastName"
                            name="form-field-last-name"
                            className={this.state.lastName === "" && this.state.submit_message == true ? "empty-input" : ""}
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={this.handleInput}
                        />  
                        <br/>
                        <span className={this.state.email === "" && this.state.submit_message == true ? "show-warning" : "hide-warning"}>
                            * Please enter your email.
                        </span>       
                        <AutosizeInput
                            id="email"
                            name="form-field-last-email"
                            className={this.state.email === "" && this.state.submit_message == true ? "empty-input" : ""}
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInput}
                        />     
                        <br/>
                        <br/>
                        <span className={this.state.message === "" && this.state.submit_message == true ? "show-warning" : "hide-warning"}>
                            * Please enter your message.
                        </span>
                        <textarea 
                            id="message"
                            name="form-field-message"
                            className={this.state.message === "" && this.state.submit_message == true ? "empty-textarea" : ""}
                            placeholder="Tell us what you are looking for and we will get back to you in 24h."
                            value={this.state.message}
                            onChange={this.handleInput}
                        />

                        <br/>

                        <div className="submit-button-container">
                            <div className="submit-button" onClick={this.submitMessage}>
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