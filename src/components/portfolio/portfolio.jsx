import React, {Component} from 'react';
import './portfolio.css';

class Portfolio extends Component {

    constructor(props){
        super(props);

        this.state={
            restaurants:[
                {
                    title: "Inland",
                    img: require('../../images/templates/restaurant-3.png'),
                    released: true,
                },          
                {
                    title: "Joy",
                    img: require('../../images/templates/joy-2.png'),
                    released: true,
                },  
                {
                    title: "minimal",
                    img: require('../../images/templates/minimal-2.png'),
                    released: true,
                },
                {
                    title: "Fumes",
                    img: require('../../images/templates/fumes.png'),
                    released: false,
                },          
                {
                    title: "Cosmopolitan",
                    img: require('../../images/templates/cosmopolitan.png'),
                    released: false,
                },  
                {
                    title: "Fuego",
                    img: require('../../images/templates/fuego.png'),
                    released: false,
                },
            ]
        }
    }

    render(){
        return(
            <div id="web_templates" className="portfolio-container">
                
                <h1 className="portfolio-title">Web templates</h1>
                
                <div className="template-container">
                    <div className="template-img-container">
                        {this.state.restaurants.map((template, index) => {
                            return (
                                <div key={index} className="restaurant-img-name-container">
                                    <div className="restaurant-img-container"> 
                                        <img className="restaurant-img-item" src={template.img} alt={template.title + " template"}/>
                                    </div>
                                    <h5 className="template-name">{template.title}</h5>
                                    {template.released ? "" : <div className="coming-soon">coming soon</div>}
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