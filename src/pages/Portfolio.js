import React from 'react';
import Navigation from '../components/Navigation';
import Projectlist from '../components/Portfolio/ProjectList';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Navigation/>
            <Projectlist/>
        </div>
    );
};

export default Portfolio;