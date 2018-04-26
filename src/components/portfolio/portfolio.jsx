import React, {Component} from 'react';
import './portfolio.css';

class Portfolio extends Component {

    constructor(props){
        super(props);

        this.state={
            restaurants:[
                {
                    title: "Joy",
                    img: require('../../images/templates/joy-1.png')
                },
                {
                    title: "Restaurants",
                    img: require('../../images/templates/restaurant-1.png')
                },            
                {
                    title: "minimal",
                    img: require('../../images/templates/minimal-1.png')
                },
                
            ]
        }
    }

    render(){
        return(
            <div className="portfolio-container">
                
                <h1 className="portfolio-title">Web templates</h1>
                
                <div className="template-container">
                    <div className="template-img-container">
                        {this.state.restaurants.map((template, index) => {
                            return (
                                <div key={index} className="restaurant-img-container">
                                    <img className="restaurant-img-item" src={template.img} alt={template.title + " template"}/>
                                    <h5 className="template-name">{template.title}</h5>
                                </div>
                            )
                        })}      
                    </div>
         
                </div>


            </div>
        )
    }
}

export default Portfolio;