import React from 'react';
import { FaGithub, FaLinkedin, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiReact, SiTailwindcss } from 'react-icons/si';
import logo from '../assets/Uccio (League).jpeg';

function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-background text-text dark:bg-dark-background dark:text-dark-text fade-in">
            <div className="flex flex-col items-center text-center">
                <div className="w-60 h-60 bg-gray-300 mb-6">
                    <img src={logo} alt="Profile"/>
                </div>
                <h1 className="text-5xl font-heading mb-4">Hello! I'm Tafshi Uthshow Hoque</h1>
                <p className="text-2xl font-body mb-6 flex items-center justify-center">
                    Full Stack Developer: 
                    <FaJava className="w-10 h-10 mx-2 text-secondary" />
                    <SiSpringboot className="w-10 h-10 mx-2 text-secondary" />
                    <SiReact className="w-10 h-10 mx-2 text-secondary" />
                    <SiTailwindcss className="w-10 h-10 mx-2 text-secondary" />
                </p>
            </div>
            <div className="flex space-x-6 mt-6">
                <a href="https://github.com/Draxgter1001" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-10 h-10 text-secondary hover:text-accent transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/tafshi-uthshow-h-187095142/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-10 h-10 text-secondary hover:text-accent transition-colors" />
                </a>
            </div>
            <hr className="w-full border-t-2 border-secondary my-6" />
        </div>
    );
}

export default About;