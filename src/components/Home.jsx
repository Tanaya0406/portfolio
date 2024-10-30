import './Home.css';
import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
// import CV from '../../assets/Shishir-24feb.pdf';
import me from '../imagess/profile.jpeg';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <>
      <header id="home">
        <div className="container header__container">
          <h3>Hello, I'm</h3>
          <h1>Tanaya Apurva</h1>
          <h5 className="text-light">Computer Science PostGraduate</h5>

          {/* CTA Section */}
          <div className="cta">
            {/* <a href={CV} download className="btn">Download CV</a> */}
            <Link to ="/contact" className="btn btn-primary">Contact Me</Link>
          </div>

          {/* Social Links Section */}
          <div className="header__socials">
            <a href="https://www.linkedin.com/in/tanaya-apurva-8b6a33259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/Tanaya0406" target="_blank" rel="noreferrer"><BsGithub /></a>
          </div>

          {/* Profile Image */}
          <div className="me">
            <img src={me} alt="tanaya apurva" />
          </div>

         
        </div>
      </header>
    </>
  );
}

export default Home;

