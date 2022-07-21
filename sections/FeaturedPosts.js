import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FeaturedPostCard } from '../components';
import { getFeaturedPosts } from '../services';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

const FeaturedPosts = () => {
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getFeaturedPosts().then((result) => {
            setFeaturedPosts(result);
            setDataLoaded(true);
        });
    }, []);
    
    const customLeftArrow = (
        <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-white rounded-full pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black w-full" fill="none" viewBox="0 0 24 24" stroke="purple">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
        </div>
    );

    const customRightArrow = (
        <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-white rounded-full pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black w-full" fill="none" viewBox="0 0 24 24" stroke="purple">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </div>
    );

    return (
        <div className="mb-8">
            <div className="flex text-center rounded-lg mb-8 bg-yellow-300 bg-opacity-50">
                <div className="px-4 py-8 banner-text h-10">
                    <div className="py-2">
                        <h1 className="text-white text-4xl">Authentic Thai Food</h1>
                    </div>
                    <div className="py-2">
                        <h3 className="text-white italic text-xl">Discover New Flavours Around Thailand!</h3>
                    </div>
                </div>
                <div className='banner w-full flex h-10'>
                    
                </div>
            </div>

            <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="px-4">
                {dataLoaded && featuredPosts.map((post, index) => (
                    <FeaturedPostCard key={index} post={post} />
                ))}
            </Carousel>
        </div>
    );
};

export default FeaturedPosts;