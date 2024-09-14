import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useInterscetionObserver';

function ContactMe() {
    const ref = useRef();
    const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

    const email = 'taf.uth.hoq@gmail.com';
    const subject = 'Contacting You';
    const body = 'Hello, I would like to get in touch with you regarding...';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div
            ref={ref}
            id="contact"
            className={`min-h-screen p-10 bg-background text-text flex flex-col items-center justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <h1 className="text-6xl md:text-8xl font-heading mb-8 text-center">Contact Me</h1>
            <p className="text-lg md:text-2xl mb-8 text-center">Feel free to reach out to me via email.</p>
            <a href={mailtoLink} className="bg-primary text-white px-8 py-4 rounded-lg shadow-md hover:text-accent transition-colors duration-300 text-lg md:text-xl">
                Contact Me
            </a>
        </div>
    );
}

export default ContactMe;