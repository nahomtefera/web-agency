import React, {Component} from 'react';
import './services.css';

class Services extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="services-container">
                <div className="services-title">Services</div>

                <div className="services-boxes-container">
                    <div className="services-boxes">
                        <h4 className="services-boxes-title">Web Design</h4>
                        <img className="services-img-logo" src={require('../../images/services-web-design.png')} alt=""/>
                    </div>

                    <div className="services-boxes">
                        <h4 className="services-boxes-title">Social Media</h4>
                        <img className="services-img-logo" src={require('../../images/services-social-media.png')} alt=""/>
                        {/* <img className="services-img-logo services-social-media-icon" src={require('../../images/services-instagram.png')} alt=""/> */}

                    </div>

                    <div className="services-boxes">
                        <h4 className="services-boxes-title">Analitycs</h4>
                        <img className="services-img-logo" src={require('../../images/services-analitycs.png')} alt=""/>

                    </div>
                </div>
            </div>
        )
    }
}

export default Services;