import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ image, title, description, technologies, githubLink, liveLink }) {
    return (
        <div className="bg-white border-2 border-gray-500 rounded-lg shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center items-center mb-4 bg-gray-100 rounded-lg" style={{ height: '300px' }}>
                <img src={image} alt={title} className="rounded-lg max-w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-primary">{title}</h3>
            <p className="text-lg mb-4 text-secondary">{description}</p>
            <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                    {technologies.map((tech, index) => (
                        <span key={index} className="text-sm bg-gray-200 rounded-full px-2 py-1">{tech}</span>
                    ))}
                </div>
                <div className="flex space-x-4">
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="w-6 h-6 text-secondary hover:text-accent transition-colors" />
                        </a>
                    )}
                    {liveLink && (
                        <a href={liveLink} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt className="w-6 h-6 text-secondary hover:text-accent transition-colors" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;