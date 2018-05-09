import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {

    render() {
        return(
            <div className="footer-container">
                <div className="footer-content">
                    <i class="fab fa-facebook footer-icons"></i>
                    <i class="fab fa-instagram footer-icons"></i>
                </div>
            </div>
        )
    }

}

export default Footer;