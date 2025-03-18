import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {

  const hero = [
  
    {
      id: 1,
      title: 'Advanced Dental Care for Everyone',
      subtitle: 'YOUR SMILE MATTERS',
      button1: 'Appointment',
      button2: 'Contact Us',
      image: 'https://c4.wallpaperflare.com/wallpaper/293/182/382/teeth-wallpaper-preview.jpg'
    },
    {
      id: 2,
      title: 'Personalized Dental Solutions',
      subtitle: 'A HEALTHY SMILE STARTS HERE',
      button1: 'Appointment',
      button2: 'Contact Us',
      image: 'https://www.defactodentists.com/wp-content/uploads/2020/08/Burton-Dental-Care_3164_AT-600x400.jpg'
    },
    {
      id: 3,
      title: 'Your Trusted Family Dentist',
      subtitle: 'CONFIDENCE BEGINS WITH A SMILE',
      button1: 'Appointment',
      button2: 'Contact Us',
      image: 'https://toothbudsdentistry.ca/srcjhvbsx/uploads/2024/01/man-having-teeth-examined-at-dentists.jpg'
    },
    {
      id: 4,
      title: 'Comprehensive Dental Services',
      subtitle: 'BRINGING SMILES TO LIFE',
      button1: 'Appointment',
      button2: 'Contact Us',
      image: 'https://doc.vortala.com/childsites/uploads/2626/files/protect-and-restore.jpg'
    }
  ];

  return (
    <section className="hero-section text-light position-relative" style={{ backgroundColor: '#1a1d29', height: '100vh' }}>
    <div id="heroCarousell" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {hero.map((slide, index) => (
          <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''}`} style={{ height: '100vh' }}>
            <img 
              src={slide.image} 
              className="d-block w-100 h-100" 
              alt={slide.title} 
              style={{ objectFit: 'cover', opacity: 0.5 }}
            />
            {/* Centering the Text */}
            <div 
              className="carousel-caption d-flex flex-column align-items-center justify-content-center text-center w-100 h-100" 
              style={{ top: 0, left: 0 }}
            >
              <h5 className="text-uppercase small mb-2">{slide.subtitle}</h5>
              <h1 className="display-3 fw-bold mb-4">{slide.title}</h1>
              <div>
                {/* <button className="btn btn-primary me-2">{slide.button1}</button>
                <button className="btn btn-danger">{slide.button2}</button> */}
                 <button className="btn more-services-btn me-2">{slide.button1}</button>
                 <button className="btn bg-info more-services-btn">{slide.button2}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousell" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousell" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  
  );
};

export default HeroSection;
