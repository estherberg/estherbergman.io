import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

class Projectlist extends Component {
    state = {
        projects:portfolioData,
        radio : [
            {id:1, value:"react"},
            {id:2, value:"css"},
            {id:3, value:"html"},
            {id:4, value:"javascript"},
            {id:5, value:"php"},
            {id:6, value:"C"},
            {id:7, value:"Mendix"}
           
        ],
        selectedRadio : "css"
    };

handleRadio = (event) => {
    let radio=event.target.value;
    this.setState({selectedRadio:radio})
}

    render() {
        let {projects,radio,selectedRadio} = this.state;
        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
{radio.map((radio) => {
    return (
    <li key={radio.id}>
       <input type="radio" name="radio" checked={radio.value===selectedRadio} value={radio.value}
       id={radio.value} onChange={this.handleRadio}/>
       <label htmlFor={radio.value}>{radio.value}</label>
        </li>
        
    )}

)}

</ul>
                   
             <div className="projects">
                 {
                     projects
                     .filter(item =>item.languages.includes(selectedRadio))
                     .map(item => {

                     return(
                        <Project key={item.id} item={item}/>
                     )
                 })
                }
                 </div>
            </div>
        );
    }
}

export default Projectlist;
