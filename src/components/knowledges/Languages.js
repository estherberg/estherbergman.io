import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        Languages: [
            {id:1, value:"Javascript", xp:1.4},
            {id:2, value:"HTML/CSS", xp:2},
            {id:3, value:"C++", xp:1.7},
            {id:4, value:"Php", xp:1.5}
        ],
        frameworks: [
            {id:1, value:"React", xp:1.4},
            {id:2, value:"Bootstrap", xp:1},
            {id:3, value:"Sass", xp:1.5},
            {id:4, value:"Angular", xp:0.5}
        ]
    }
    render() {
        let {Languages, frameworks} = this.state;
        return (
            <div className='languagesFrameworks'>
                <ProgressBar
                Languages={Languages}
                className="languagesDisplay"
                title="languages"         
                />
                <ProgressBar
                Languages={frameworks}
                title="frameworks & library"
                className="frameworksDisplay"
                
                /> 
                
            </div>
        );
    }
}

export default Languages;
