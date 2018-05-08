import React, {Component} from 'react';
import './home.css';

class Home extends Component {

    render() {
        return (
            <div className="home-container">
                <div className="logo-container">
                    <img className="intro-logo" src={require('../../images/logo-4.png')} alt="logo"/>
                </div>
            </div>
        )
    }
}

export default Home;