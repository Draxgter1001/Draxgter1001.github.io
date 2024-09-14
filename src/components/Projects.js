import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import footballClubAppImage from '../assets/Football Club App.png';
import guessTheFlagImage from '../assets/Guess The Flag App.png';
import pokedexClientImage from '../assets/PokedexClient.png';
import useIntersectionObserver from '../hooks/useInterscetionObserver';

function Projects() {
    const ref = useRef();
    const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

    const projectData = [
        {
            image: footballClubAppImage,
            title: 'Football Club App',
            description: 'A simple android app where user can view and add football leagues or search for jerseys from different football teams.',
            technologies: ['Kotlin', 'Jetpack Compose', 'Room'],
            githubLink: 'https://github.com/Draxgter1001/Football_Club_App',
        },
        {
            image: guessTheFlagImage,
            title: 'Guess the Flag App',
            description: "A simple android app where the user needs to guess the correct country's flag. It has different game modes and an hard mode for those who wants an extra challenge.",
            technologies: ['Kotlin', 'Jetpack Compose', 'Room'],
            githubLink: 'https://github.com/Draxgter1001/GuessTheFlag2.0',
        },
        {
            image: pokedexClientImage,
            title: 'Pokedex',
            description: "A simple pokedex where you can view all of your favourites pokemon up to gen 7.",
            technologies: ['Java', 'Spring Boot', 'React', 'Postgresql'],
            githubLink: 'https://github.com/Draxgter1001/pokedex_client',
            liveLink: 'https://draxgter1001.github.io/pokedex_client/',
        },
    ];

    return (
        <div
            ref={ref}
            id="projects"
            className={`min-h-screen p-5 bg-background text-text transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <h1 className="text-6xl font-heading mb-8 text-center">Projects</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {projectData.map((project, index) => (
                    <div key={index} className="w-full md:w-6/12 lg:w-5/12">
                        <ProjectCard
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                        />
                    </div>
                ))}
            </div>
            <hr className="w-full border-t-2 border-secondary my-6" />
        </div>
    );
}

export default Projects;