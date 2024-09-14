import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/SideBar';
import About from './components/About';
import './styles/tailwind.css';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="ml-20 p-5 w-full bg-background text-text">
                    <div id="about" className="min-h-screen flex flex-col justify-center">
                        <About />
                    </div>
                    <div id="experiences" className="min-h-screen flex flex-col justify-center">
                        <Experiences />
                    </div>
                    <div id="projects" className="min-h-screen flex flex-col justify-center p-5 bg-background text-text">
                        <Projects />
                    </div>
                    <div id="contact" className="min-h-screen flex flex-col justify-center p-5 bg-background text-text">
                        <ContactMe />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;