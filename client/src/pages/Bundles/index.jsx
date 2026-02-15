import { useQuery } from '@apollo/client';
import React, { useEffect, useRef } from 'react';
import{ Link } from "react-router-dom"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { QUERY_SINGLE_CATEGORY } from '../../utils/queries';


const Bundles = () => {
      const { loading, data, error } = useQuery(QUERY_SINGLE_CATEGORY, {variables: {name: "Mixed Bundle"}
    });

    if (loading) return <p>Loading ...</p>
    if (error) return <p>Um ... so this is awkward ...</p>

    const categories = data?.categories || [];

    return (
        <section className="bundles-container">
            <div>
                {categories.map((cat) => (
                   <Link
                        to={`/shop/${cat.name}`}
                        key={cat._id}
                        className='category-card'
                   >
                        <h3>{cat.name}</h3>
                        <div className="cat-img">
                            <img src={cat.image} alt={cat.name} />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )

};

export default Bundles;