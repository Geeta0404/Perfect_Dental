import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const hero = [
  {
    id: 1,
    title: 'Take The Best Quality Dental Treatment',
    subtitle: 'KEEP YOUR TEETH HEALTHY',
    button1: 'Appointment',
    button2: 'Contact Us',
    image: '../hero1.jpeg',
  },
  {
    id: 2,
    title: 'Advanced Dental Care for Everyone',
    subtitle: 'YOUR SMILE MATTERS',
    button1: 'Appointment',
    button2: 'Contact Us',
    image: '../hero1.jpeg',
  },
  {
    id: 3,
    title: 'Personalized Dental Solutions',
    subtitle: 'A HEALTHY SMILE STARTS HERE',
    button1: 'Appointment',
    button2: 'Contact Us',
    image: '../hero1.jpeg',
  },
  {
    id: 4,
    title: 'Your Trusted Family Dentist',
    subtitle: 'CONFIDENCE BEGINS WITH A SMILE',
    button1: 'Appointment',
    button2: 'Contact Us',
    image: '../hero1.jpeg',
  },
  {
    id: 5,
    title: 'Comprehensive Dental Services',
    subtitle: 'BRINGING SMILES TO LIFE',
    button1: 'Appointment',
    button2: 'Contact Us',
    image: '../hero1.jpeg',
  },
];

const HeroSection = () => {
  return (
    <section className="hero-section text-light position-relative d-flex align-items-center justify-content-center" style={{ backgroundColor: '#1a1d29', height: '100vh' }}>
    <div id="heroCarousel" className="carousel slide w-100" data-bs-ride="carousel">
      <div className="carousel-inner">
        {hero.map((heros, index) => (
          <div key={heros.id} className={`carousel-item ${index === 0 ? 'active' : ''}`} style={{ height: '100vh' }}>
            <img src={heros.image} className="d-block w-100 h-100" alt={heros.title} style={{ opacity: 0.5, objectFit: 'cover' }} />
            <div className="carousel-caption top-50 start-50 translate-middle text-center" style={{position:"absolute", right:"0"}}>
              <h5 className="text-uppercase small mb-2">{heros.subtitle}</h5>
              <h1 className="display-2 fw-bold mb-4">{heros.title}</h1>
              <div>
                <button className="btn btn-primary me-2">{heros.button1}</button>
                <button className="btn btn-danger">{heros.button2}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  );
};

export default HeroSection;
