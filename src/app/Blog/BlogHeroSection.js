import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import BaseURL from '../../components/other/BaseURL';


function BlogHeroSection() {

    
    return (
        <div className='Blog_HeroSection'>
            <div className="container py-5">
                <h1 className='fw-bold py-md-4 py-2' style={{ textAlign: 'center' }}>LATEST BLOGS</h1>
                <div className="row">
                    <div className="col-md">
                        <img src={`${BaseURL}/media/2024/04/Marketing-on-a-Budget-wodo.digital.png `}style={{ maxWidth: '100%' }} alt="Marketing on a Budget" />
                    </div>
                    <div className="col-md col-12">
                        <div className='blog-hero'>
                            <div className='blog-hero-meta'>
                                <span><i className="fas fa-calendar"></i> April 20, 2024</span>
                            </div>
                            <div className='blog-hero-meta'>
                                <span><i className="far fa-clock"></i> 12:13 pm</span>
                            </div>
                            <div className='blog-hero-meta'>
                                <span><i className="fas fa-tags"></i> Marketing Guide</span>
                            </div>
                        </div>
                        <h1 className="py-2 gf_h3 text-light">Marketing on a Budget: Effective Strategies for Startups and Small Businesses</h1>
                        <p>Having a brilliant product or service is just the first step. For startups and small businesses, limited resources often present a challenge when it comes...</p>
                        <Link className='readmore_btn' to='/blogs/marketing-on-a-budget-effective-strategies-for-startups-and-small-businesses/'>Read More...</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogHeroSection;
