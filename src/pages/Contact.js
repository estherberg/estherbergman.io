import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                    <div className="contactBox">
                        <h1>Contact-Me</h1>
                        <ul>
                            <li>
                               <i className='fas fa-map-marker-alt'></i> 
                               <span>Charenton-Le-Pont</span>
                            </li>
                            
                            <li>
                                <i className='fas fa-mobile-alt'></i>
                                <CopyToClipboard text="0033695443075"><span className='clickInput' onClick={()=> {alert('Téléphone copié !');}}>0033695443075</span></CopyToClipboard>
                                                            </li>
                                                                                  
                                                            <li>
                                <i className='far fa-envelope'></i>
                                <CopyToClipboard text="estherbergman16@gmail.com"><span className='clickInput' onClick={()=> {alert('E-mail copié !');}}>estherbergman16@gmail.com</span></CopyToClipboard>
                                                            </li>
                                                                                                                        
                        </ul>
                        </div>
                        <div className='socialNetwork'>
                            <ul>
                                <a href='https://www.linkedin.com/in/esther-elbaz-bergman-373725202/' target="_blank" rel="noopener noreferrer">
                                    <h4>LinkedIn</h4>
                                    <i className='fab fa-linkedin'></i>
                                    </a>
                                    <a href='https://github.com/estherberg?tab=repositories' target="_blank" rel="noopener noreferrer">
                                    <h4>github</h4>
                                    <i className='fab fa-github'></i>
                                    </a>
                                    <a href='https://api.whatsapp.com/send/?phone=%2B33695443075' target="_blank" rel="noopener noreferrer">
                                    <h4>whatsapp</h4>
                                    <i className='fab fa-whatsapp'></i>
                                    </a>
                                    {/* <a href='http://www.google.com' target="_blank" rel="noopener noreferrer">
                                    <h4>CodePen</h4>
                                    <i className='fab fa-codepen'></i>
                                    </a> */}
                            </ul>
                            
                            </div>
                            
                    </div>
                </div>
        
    );
};

export default Contact;