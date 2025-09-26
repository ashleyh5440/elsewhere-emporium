// Important for useQuery: We import the useQuery hook from @apollo/client
import { useQuery } from '@apollo/client';
import React, { useEffect, useRef } from 'react';
import{ Link } from "react-router-dom"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { QUERY_CATEGORIES } from '../../utils/queries';

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../Home/style.css'

const Home = () => {

  useEffect(() => {
        // initialize ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // ScrollTrigger for each container
        gsap.utils.toArray(".section").forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
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

    const { loading, data, error } = useQuery(QUERY_CATEGORIES);
      if (loading) return <p>Loading ...</p>
      if (error) return <p>Um ... this is awkward but ...</p>
      const categories = data?.categories || [];

  return (
   <section className="home-container">
    <div id='banner-box'>
      <p>Moonblood Studio</p>
      <p id="tagline">Magic Drawn</p>
    </div>
    <Container className="section" id="features">
      {categories.map((cat) => (
        <Link 
          to={`/shop/${cat.name}`}
          key={cat._id}
          className='category-card' 
        >
          <h3>{cat.name}</h3>
          <div className="cat-img"><img src={cat.image}/></div>
        </Link>
      ))}
    </Container>
    <Link to="/shop">
      <Button className="shop-button">Shop Now</Button>
    </Link>
    <Container className="section">
      <Row style={{paddingTop: "5%"}}>
        <Col sm={8}>
          <div id="home-about">
            <p>Elsewhere Emporium is a botique shop conjured from deep roots, folklore, and fiece magic. From creepy-cute witch familiars to mystical prints and coloring pages, everything is crafted with intent, spirit, and just the right amount of trouble.</p>
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
