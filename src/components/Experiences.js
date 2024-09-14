import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useInterscetionObserver';

function Experiences() {
    const ref = useRef();
    const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

    return (
        <div
            ref={ref}
            id="experiences"
            className={`min-h-screen p-5 bg-background text-text dark:bg-dark-background dark:text-dark-text flex flex-col justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <h1 className="text-6xl font-heading mb-8 text-center">Experiences</h1>
            <div className="space-y-6">
                <div className="p-8 bg-white dark:bg-dark-cardBackground rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-2 text-primary dark:text-dark-titleText">Digital Marketing Intern</h2>
                    <p className="text-xl font-semibold text-secondary dark:text-dark-cardText mb-4">Europass Teacher Academy</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li className="text-lg">
                            <span className="font-semibold text-primary dark:text-dark-titleText">Website Usability Enhancement:</span> Worked with a cross-functional team to improve website usability, boosting user engagement by 20%.
                        </li>
                        <li className="text-lg">
                            <span className="font-semibold text-primary dark:text-dark-titleText">Content Creation & Marketing:</span> Produced over 15 blog posts and 10 newsletters, increasing site traffic by 25% and subscribers by 30%.
                        </li>
                        <li className="text-lg">
                            <span className="font-semibold text-primary dark:text-dark-titleText">Email Campaign Execution:</span> Launched targeted email campaigns with a 35% open rate and 10% click-through rate, enhancing customer engagement.
                        </li>
                    </ul>
                </div>
                <div className="p-8 bg-white dark:bg-dark-cardBackground rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-2 text-primary dark:text-dark-titleText">Core Member</h2>
                    <p className="text-xl font-semibold text-secondary dark:text-dark-cardText mb-4">Google Developer Student Club at University of Westminster</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li className="text-lg">
                            <span className="font-semibold text-primary dark:text-dark-titleText">Planning and Organization:</span> Plan and organize events such as Hackathons.
                        </li>
                        <li className="text-lg">
                            <span className="font-semibold text-primary dark:text-dark-titleText">Communcation:</span> Act as a point of contact between the core team.
                        </li>
                        <li className="text-lg">
                            <span className="font-semibold text-primary dark:text-dark-titleText">Supporting Member:</span>  Provide support to other team members who require assistance during an event.
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="w-full border-t-2 border-secondary my-6" />
        </div>
    );
}

export default Experiences;