import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/SideBar';
import About from './components/About';
import './styles/tailwind.css';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <Router>
            <div className="flex">
                <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                <div className="ml-20 p-5 w-full bg-background text-text dark:bg-dark-background dark:text-dark-text">
                    <div id="about" className="min-h-screen flex flex-col justify-center">
                        <About />
                    </div>
                    <div id="experiences" className="min-h-screen flex flex-col justify-center">
                        <Experiences />
                    </div>
                    <div id="projects" className="min-h-screen flex flex-col justify-center p-5 bg-background text-text dark:bg-dark-background dark:text-dark-text">
                        <Projects />
                    </div>
                    <div id="contact" className="min-h-screen flex flex-col justify-center p-5 bg-background text-text dark:bg-dark-background dark:text-dark-text">
                        <ContactMe />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;