import React, {Component} from 'react';
import './intro.css';

class Intro extends Component {

    render() {
        return (
            <div className="intro-container">
                <img className="intro-logo" src={require('../../images/logo.png')} alt="logo"/>
                <div className="intro-text-container">
                    <h3 className="intro-title">We craft beautiful websites</h3>
                    <h3 className="intro-text">It's time to get the best out of your restaurant, give your website a new look and start atracting customers</h3>
                </div>
                <div className="intro-img-container">
                    <img className="intro-img" src={require("../../images/intro-img-mockup.png")} alt="intro"/>
                </div>
            </div>
        )
    }
}

export default Intro;