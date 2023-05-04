import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/EE00260.jpg" alt="profil-pic" />
          <h3>Esther BERGMAN</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
          <NavLink exact to="/" activeClassName="navActive">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </NavLink>
          </li>
          <li>
          <NavLink exact to="/Knowledges" activeClassName="navActive">
            <i className="fas fa-mountain"></i>
            <span>Knowledges</span>
          </NavLink>
          </li>
          <li>
          <NavLink exact to="/portfolio" activeClassName="navActive">
            <i className="fas fa-images"></i>
            <span>Portfolio</span>
          </NavLink>
          </li>
          <li>
          <NavLink exact to="/Contact" activeClassName="navActive">
            <i className="fas fa-address-book"></i>
            <span>Contact</span>
          </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/esther-elbaz-373725202/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i></a>
          </li>
          <li>
            <a href="https://github.com/estherberg?tab=repositories" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github"></i></a>
          </li>
          <li>
            <a href="https://wa.me/+33695443075" target="_blank" rel="noopener noreferrer"> <i className="fab fa-whatsapp"></i></a>
          </li>
          {/* <li>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> <i className="fab fa-codepen"></i></a>
          </li> */}
        </ul>
        <div className="signature">
          <p>Esther Bergman - 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
