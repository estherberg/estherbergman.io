import React, { Component } from 'react';

class Project extends Component {
    state={
        showInfo:false
    }

    handleInfo= () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }


    render() {
        let {name, languagesIcons, source,website, info, picture}=this.props.item;




        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon =>
                        <i className={icon} key={icon}></i>
                        )}                    
                    </div>
                    <h3>{name}</h3>
                    <img src={picture} alt="" onClick={this.handleInfo}/>
                    <span className="infos" onClick={this.handleInfo}>
                        <i className="fas fa-plus-circle"></i>
                        </span>

                        {
                            this.state.showInfo && (
                              <div className="showInfos">
                                  <div className="infosContent">
                                  <div className="head">
                                      <h2>{name}</h2>
                                      <div className="sourceCode">
                                          <a href={source} rel="noopener noreferrer"
                                          className="button" target="_blank">Source code</a></div>
                                      </div>
                                      <div className="Website online">
                                          <a href={website} rel="noopener noreferrer"
                                          className="button1" target="_blank">Website online</a>
                                      </div> 
                                      <p className="text">{info}</p>

<div className="button return" onClick={this.handleInfo}>Go back to the page</div>

                                      </div>
                                      </div>
                            )
                        }
            </div>
        );
    }
}

export default Project;
