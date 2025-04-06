import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import logo from '../../../public/images/logo.png'
import './style.css';

function Home() {

    useEffect(() => {
        // initialize ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // ScrollTrigger for each container
        gsap.utils.toArray(".home-container").forEach(container => {
            gsap.from(container, {
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom-=100',
                    end: 'bottom top',
                    toggleActions: 'play none none reverse', 
                },
                opacity: 0,
                y: 100,
                duration: 1,
            });
        });
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };  

    return (
        <section className="home-page">
            <Container>
                <div><h1>Third Eye Designs</h1></div>
                <div id="logo-box">
                    <img src={logo} />
                </div>
                <div>
                    <Button variant="primary">Explore</Button>
                </div>
            </Container>
        </section>
    )
}

export default Home;