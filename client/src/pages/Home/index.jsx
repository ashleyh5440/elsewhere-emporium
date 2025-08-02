// Important for useQuery: We import the useQuery hook from @apollo/client
import { useQuery } from '@apollo/client';
import React, { useEffect, useRef } from 'react';
import{ Link } from "react-router-dom"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../Home/style.css'
import banner from '../../../public/banner.png'

const Home = () => {

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
   <section className="home-container">
    <div id='banner-box'>
      <p>Moonblood Studio</p>
      <p id="tagline">Magic Drawn</p>
    </div>
    {/* <Container className="features-section">
      <div className="feature">
        <h3>Fast Checkout</h3>
        <p>Secure payments powered by Stripe for quick, safe purchases.</p>
      </div>
      <div className="feature">
          <h3>Digital & Physical Goods</h3>
          <p>Browse a variety of products to suit your needs.</p>
      </div>
      <div className="feature">
          <h3>Easy Shipping</h3>
          <p>Quick delivery and easy order tracking.</p>
      </div>
    </Container> */}
    <Link to="/shop">
      <Button className="shop-button">Shop Now</Button>
    </Link>
    <Container className="features-section">
      <Row style={{paddingTop: "5%"}}>
        <Col sm={8}>
          <div id="home-about">
            <p>Moonblood Studio is a botique art shop conjured from deep roots, folklore, and fiece feminine magic. From creepy-cute witch familiars to mystical prints and coloring pages, everything is crafted with intent, spirit, and just the right amount of trouble.</p>
          </div>
        </Col>
        <Col>
          <p>picture here</p>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default Home;
