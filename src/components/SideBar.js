import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
// Importing Heroicons for icons (v2)
import { UserIcon, BriefcaseIcon, FolderIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

function Sidebar() {
    return (
        <div className="fixed left-0 top-0 w-20 h-full bg-primary flex flex-col items-center justify-around fade-in">
            <ScrollLink to="about" smooth={true} duration={500} className="sidebar-item group cursor-pointer">
                <UserIcon className="icon w-12 h-12 text-white group-hover:text-accent transition-colors" />
                <span className="sidebar-tooltip group-hover:scale-100">About</span>
            </ScrollLink>
            <ScrollLink to="experiences" smooth={true} duration={500} className="sidebar-item group cursor-pointer">
                <BriefcaseIcon className="icon w-12 h-12 text-white group-hover:text-accent transition-colors" />
                <span className="sidebar-tooltip group-hover:scale-100">Experiences</span>
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="sidebar-item group cursor-pointer">
                <FolderIcon className="icon w-12 h-12 text-white group-hover:text-accent transition-colors" />
                <span className="sidebar-tooltip group-hover:scale-100">Projects</span>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="sidebar-item group cursor-pointer">
                <EnvelopeIcon className="icon w-12 h-12 text-white group-hover:text-accent transition-colors" />
                <span className="sidebar-tooltip group-hover:scale-100">Contact Me</span>
            </ScrollLink>
        </div>
    );
}

export default Sidebar;