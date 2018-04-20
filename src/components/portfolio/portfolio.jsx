import React, {Component} from 'react';
import './portfolio.css';

class Portfolio extends Component {

    constructor(props){
        super(props);

        this.state={
            mockups_1: ["restaurant-1.png", "restaurant-2.png", "restaurant-4.png", "restaurant-3.png", "minimal-1.png", "minimal-2.png", "minimal-3.png", "joy-1.png"],
            mockups_2: [ "joy-2.png", "joy-3.png", "design-1.png", "design-2.png", "portfolio-1.png", "portfolio-2.png", "sfcoffeeshop.png"]
        }
    }

    render(){
        return(
            <div className="portfolio-container">
                
                <h1 className="portfolio-title">Previous Work</h1>
                
                <div className="mockups-scroll-container">
                    <div className="mockups-container">
                        {this.state.mockups_1.map((image, index)=>{
                            return <img key={index} className="portfolio-img-item" src={require("../../images/mockups/" + image)} alt=""/>
                        })}
                    </div>
                </div>

                <div className="mockups-scroll-container">
                    <div className="mockups-container">
                        {this.state.mockups_2.map((image, index)=>{
                            return <img key={index} className="portfolio-img-item" src={require("../../images/mockups/" + image)} alt=""/>
                        })}
                    </div>
                </div>

            </div>
        )
    }
}

export default Portfolio;