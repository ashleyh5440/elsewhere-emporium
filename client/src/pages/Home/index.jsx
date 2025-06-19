import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import logo from '../../../public/images/logo.png'
import './style.css';

// color theme
// rgb(4, 20, 33)
// rgb(4, 38, 48)
// rgb(76, 114, 115)
// rgb(134, 185, 176)
// rgb(208, 214, 214)

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
                {/* <div><h1>Third Eye Designs</h1></div> */}
                <div id="logo-box">
                    <img src={logo} />
                </div>
                <div id="options-bar">
                    <Button variant="primary">Digital Prints</Button>
                    <Button variant="primary">Tarot</Button>
                    <Button variant="primary">Accessories</Button>
                    <Button variant="primary">Bookmarks & Stickers</Button>
                </div>
                <Row>
                    <Col sm={8}>
                        <div id="home-about">
                            <p>Third Eye Designs is a botique art shop conjured from deep roots, folklore, and fiece feminine magic. From creepy-cute witch familiars to mystical prints and coloring pages, everything is crafted with intent, spirit, and just the right amount of trouble.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="box">
                            <div className="diamond"></div>
                            <div className="square"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;