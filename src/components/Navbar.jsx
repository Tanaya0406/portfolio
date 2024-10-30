import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import { GoChecklist } from 'react-icons/go';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Navbar = () => {
    const location = useLocation();
    const [activeNav, setActiveNav] = useState(location.pathname);

    return (
        <nav className="navbar">
            <Link to="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><AiOutlineHome /></Link>
            <Link to="/about" onClick={() => setActiveNav('/about')} className={activeNav === '/about' ? 'active' : ''}><BiUser /></Link>
            <Link to="/skills" onClick={() => setActiveNav('/skills')} className={activeNav === '/skills' ? 'active' : ''}><FaLaptopCode /></Link>
            <Link to="/projects" onClick={() => setActiveNav('/projects')} className={activeNav === '/projects' ? 'active' : ''}><GoChecklist /></Link>
            <Link to="/contact" onClick={() => setActiveNav('/contact')} className={activeNav === '/contact' ? 'active' : ''}><BiMessageSquareDetail /></Link>
        </nav>
    );
}

export default Navbar;
