import React, {Component} from 'react';
import './portfolio.css';

class Portfolio extends Component {

    constructor(props){
        super(props);

        this.state={
            toggleScreenshot: null,
            restaurants:[
                {
                    title: "Inland",
                    img: require('../../images/templates/restaurant-3.png'),
                    screenshot: require('../../images/templates_screenshots/inland.png'),
                    released: true,
                },          
                {
                    title: "Joy",
                    img: require('../../images/templates/joy-2.png'),
                    screenshot: require('../../images/templates_screenshots/inland.png'),
                    released: true,
                },  
                {
                    title: "minimal",
                    img: require('../../images/templates/minimal-2.png'),
                    screenshot: require('../../images/templates_screenshots/inland.png'),
                    released: true,
                },
                {
                    title: "Fumes",
                    img: require('../../images/templates/fumes.png'),
                    screenshot: require('../../images/templates_screenshots/inland.png'),
                    released: false,
                },          
                {
                    title: "Cosmopolitan",
                    img: require('../../images/templates/cosmopolitan.png'),
                    screenshot: require('../../images/templates_screenshots/inland.png'),
                    released: false,
                },  
                {
                    title: "Fuego",
                    img: require('../../images/templates/fuego.png'),
                    screenshot: require('../../images/templates_screenshots/inland.png'),
                    released: false,
                },
            ]
        }

        this.toggleScreenshot = this.toggleScreenshot.bind(this);
        this.closeViewer = this.closeViewer.bind(this);
    }

    toggleScreenshot(el){
        let template = el.target.id;
        console.log('yooo', template)
        this.setState({toggleScreenshot: template})
    }

    closeViewer(e){
        let element = e.target.className;
        if(element != "template-view-img") {
            this.setState({toggleScreenshot:null})
        } else {
            return
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
                                    <div onClick={this.toggleScreenshot} className="restaurant-img-container"> 
                                        <img id={template.title} className="restaurant-img-item" src={template.img} alt={template.title + " template"}/>
                                    </div>
                                    <h5 className="template-name">{template.title}</h5>
                                    {template.released ? "" : <div className="coming-soon">coming soon</div>}
                                </div>
                            )
                        })}      
                    </div>
         
                </div>
                {
                    this.state.toggleScreenshot != null 
                        ?<div onClick={this.closeViewer} className={"template-view-outer-container"}>
                            <div className="template-view-container">
                                <img className="template-view-img" src={require(`../../images/templates_screenshots/${this.state.toggleScreenshot}.png`)} alt=""/>
                            </div>
                        </div>
                        : null
                }

            </div>
        )
    }
}

export default Portfolio;