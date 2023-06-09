import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
  const RenderContactSection = () => {
    const [isIsrael, setIsIsrael] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      const checkIfIsrael = async () => {
        try {
          const response = await fetch('https://ipapi.co/json/');
          if (response.ok) {
            const data = await response.json();
            setIsIsrael(data.country === 'IL');
          } else {
            setError('Erreur lors de la récupération des informations de localisation.');
          }
        } catch (error) {
          setError('Erreur lors de la récupération des informations de localisation : ' + error.message);
        }
      };

      checkIfIsrael();
    }, []);

    if (error) {
      return (
        <div className="contactBox">
          <h1>Erreur de localisation</h1>
          <p>{error}</p>
        </div>
      );
    } else if (isIsrael === null) {
      return null;
    } else if (isIsrael) {
      return (
        <div className="contactBox">
          <h1>Contact-Me</h1>
          <ul>
            <li>
              <i className='fas fa-map-marker-alt'></i> 
              <span>Jerusalem</span>
            </li>
            <li>
              <i className='fas fa-mobile-alt'></i>
              <CopyToClipboard text="+972539309450">
                <span className='clickInput' onClick={()=> {alert('Téléphone copié !');}}>+972 (0)53 930 9450</span>
              </CopyToClipboard>
            </li>
            <li>
              <i className='far fa-envelope'></i>
              <CopyToClipboard text="estherbergman16@gmail.com">
                <span className='clickInput' onClick={()=> {alert('E-mail copié !');}}>estherbergman16@gmail.com</span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="contactBox">
          <h1>Contact-Me</h1>
          <ul>
            <li>
              <i className='fas fa-map-marker-alt'></i> 
              <span>Paris</span>
            </li>
            <li>
              <i className='fas fa-mobile-alt'></i>
              <CopyToClipboard text="+33695443075">
                <span className='clickInput' onClick={()=> {alert('Téléphone copié !');}}>+33 (0)6 95 44 30 75</span>
              </CopyToClipboard>
            </li>
            <li>
              <i className='far fa-envelope'></i>
              <CopyToClipboard text="estherbergman16@gmail.com">
                <span className='clickInput' onClick={()=> {alert('E-mail copié !');}}>estherbergman16@gmail.com</span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <RenderContactSection />
        <div className='socialNetwork'>
          <ul>
            <a href='https://www.linkedin.com/in/esther-elbaz-373725202/' target="_blank" rel="noopener noreferrer">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
