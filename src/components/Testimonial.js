// src/components/HeroSection.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Testimonial = () => {
    const slides = [
  {
    id: 1,
    title: 'The Best Dentist for you in Pune, India',
    description: `Greetings from Smilekraft Dentistry®! Welcome to our website, your clear window into our practice 
    and dental clinic in Pune, India. As you delve deeper into our site, you will discover the immense 
    effort we have dedicated to showcasing ourselves and our work.`,
    rating: '4.9',
    reviewText: 'Trusted by Millions of customers',
    reviewLink: '#'
  },
  {
    id: 2,
    title: 'Experience Unparalleled Dental Care',
    description: `Our unwavering commitment to being judged solely on our work and the unparalleled dental treatment 
    experience and results we offer serves as a testament to your quest for the best dental care.`,
    rating: '5.0',
    reviewText: 'Thousands of Happy Patients',
    reviewLink: '#'
  }
];
  return (



<section className="hero-section text-light py-5 position-relative" style={{ backgroundColor: '#1a1d29' }}>
  <button className="carousel-control-prev position-absolute start-0 translate-middle-y" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev" style={{ top: '50%', transform: 'translateX(-50%)' }}>
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>

  <div className="container p-5">
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {slides.map((slider, index) => (
          <div key={slider.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="row align-items-center">
              <div className="col-lg-8">
                <p className="text-uppercase small mb-2">Why work with Dr. Priyank Mathur?</p>
                <h1 className="display-4 fw-bold mb-4">{slider.title}</h1>
                <p className="lead">{slider.description}</p>
              </div>
              <div className="col-lg-4">
                <div className="card text-center text-light p-4" style={{ backgroundColor: '#3b3f54' }}>
                  <h1 className="display-3 fw-bold">{slider.rating}</h1>
                  <div className="mb-3">⭐⭐⭐⭐⭐</div>
                  <p>{slider.reviewText}</p>
                  <a href={slider.reviewLink} className="text-light text-decoration-underline">Leave a review</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <button className="carousel-control-next position-absolute end-0 translate-middle-y" type="button" data-bs-target="#heroCarousel" data-bs-slide="next" style={{ top: '50%', transform: 'translateX(50%)' }}>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</section>



  
  );
};

export default Testimonial;
