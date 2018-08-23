import React, {Component} from 'react';
import './services.css';

class Services extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="services" className="services-container">
                <div className="services-title">Services</div>
                {/* Services Boxes */}
                <div className="services-boxes-container">
                    <div className="services-boxes">
                        <h4 className="services-boxes-title">Basic</h4>
                        <img className="services-img-logo" src={require('../../images/services-web-design.png')} alt=""/>
                        <ul className="services-info">
                            <li>Choose between our wide range of web templates.</li>
                            <li>Carefully designed to meet your needs.</li>
                            <li>Your website will look good in every device.</li>
                            <li><b>Guaranteed Responsive Design.</b></li>
                        </ul>
                        <div className="service-box-price">$10/month</div>
                    </div>

                    <div className="services-boxes">
                        <h4 className="services-boxes-title">Unlimited Support</h4>
                        <img className="services-img-logo" src={require('../../images/services-social-media.png')} alt=""/>
                        <ul className="services-info">
                            <li>We offer Social Media integration.</li>
                            <li>If you already have social media accounts, we offer consultation.</li>
                            <li>Training on creating quality content to promote your business.</li>
                            <li><b>Facebook, Instagram, Google Analytics.</b></li>
                        </ul>
                        <div className="service-box-price">$25/month</div>
                    </div>

                    <div className="services-boxes">
                        <h4 className="services-boxes-title">Fixed Price</h4>
                        <img className="services-img-logo" src={require('../../images/services-analitycs.png')} alt=""/>
                        <ul className="services-info">
                            <li>Get a personalized Dashboard to check how you are doing amongst your audience.</li>
                            <li>We will train you on how to use the best analitycs tools</li>
                            <li><b>Google Analytics</b> and <b>Facebook Analytics</b> integration.</li>
                        </ul>
                        <div className="service-box-price">$500</div>
                    </div>
                </div>

                {/* GET STARTED */}
                {/* <div className="get-started-arrows-container">
                    <div className="arrow-left"></div>
                    <div className="second-arrow-left"></div>
                    <div className="get-started-container">
                        <h1 className="get-started-title">get started</h1>
                        <div className="get-started-button">CONTACT</div>
                    </div>
                    <div className="arrow-right"></div>
                    <div className="second-arrow-right"></div>
                </div> */}


            </div>
        )
    }
}

export default Services;