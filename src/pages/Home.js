import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>ESTHER BERGMAN</h1>
          <h2>Full Stack Developer</h2>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">
              Download my CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
