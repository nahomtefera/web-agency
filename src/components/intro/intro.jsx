import React, {Component} from 'react';
import './intro.css';

class Intro extends Component {

    render() {
        return (
            <div className="intro-container">
                <div className="intro-text-container">
                    <h3 className="intro-text">It's time to get the best out of your business</h3>
                </div>
                <div className="intro-img-container">
                    <img className="intro-img" src={require("../../images/intro-img.png")} alt="intro"/>
                </div>
            </div>
        )
    }
}

export default Intro;