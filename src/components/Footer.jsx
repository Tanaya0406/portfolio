import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
        <Link to="/" className='footer__logo'>TANAYA</Link>
        <ul className="permalinks">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Experience</Link></li>
            <li><Link to="/projects">My Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li> {/* Added Contact link */}
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/tanaya-apurva-8b6a33259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><BsLinkedin/></a>
          <a href="https://github.com/Tanaya0406" target="_blank" rel="noreferrer"><BsGithub/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Tanaya Apurva. All rights reserved.</small>
        </div>
    </footer>
  );
}

export default Footer;
