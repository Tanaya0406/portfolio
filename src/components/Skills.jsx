
import React from 'react';
import './skills.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJsSquare,  } from 'react-icons/fa';


const Skills = () => {
  return (
    <section id="experience">
      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__content">
          {/* Skill - HTML */}
          <article className="experience__details">
            <FaHtml5 className="experience__details-icon html-icon" />
            <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          {/* Skill - CSS */}
          <article className="experience__details">
            <FaCss3Alt className="experience__details-icon css-icon" />
            <div>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          {/* Skill - JavaScript */}
          <article className="experience__details">
            <FaJsSquare className="experience__details-icon js-icon" />
            <div>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          {/* Skill - Bootstrap */}
          <article className="experience__details">
            <FaBootstrap className="experience__details-icon bootstrap-icon" />
            <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          {/* Skill - React */}
          <article className="experience__details">
            <FaReact className="experience__details-icon react-icon" />
            <div>
              <h4>ReactJs</h4>
              <small className="text-light">Beginner</small>
            </div>
          </article>

          
        </div>
      </div>
    </section>
  );
};

export default Skills;

  
