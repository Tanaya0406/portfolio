import React from 'react';
import './Projects.css';
import port from '../imagess/portfolioss.jpeg';
import tic from '../imagess/tictacss.png';
import ecom from '../imagess/ecommercess.png';
import people from '../imagess/peopless.png';

const Projects = () => {
  return (
    <section id="projects">
        <h3 style={{textAlign:"center"}}>My Recent Works</h3>
        <h1 style={{textAlign:"center",fontSize:'2.5rem'}}>Projects</h1>
      <div className="container portfolio__container">
        

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={tic} alt="Tic Tac Toe" />
          </div>
          <h3>Tic Tac Toe</h3>
          <small className="text-light">HTML | CSS</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Tanaya0406/Tic-tac-toe" target="_blank" rel="noreferrer" className="btn">Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ecom} alt="E-commerce website" />
          </div>
          <h3>E-commerce Website</h3>
          <small className="text-light">ReactJS | Bootstrap</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Tanaya0406/e-commerce" target="_blank" rel="noreferrer" className="btn">Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port} alt="Portfolio website" />
          </div>
          <h3>My Portfolio (This Website)</h3>
          <small className="text-light">ReactJS</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Tanaya0406/portfolio" target="_blank" rel="noreferrer" className="btn">Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={people} alt="PEOPLE.CO project" />
          </div>
          <h3>PEOPLE.CO</h3>
          <small className="text-light">ReactJS | CSS | Bootstrap</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Tanaya0406/people" target="_blank" rel="noreferrer" className="btn">Github</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
