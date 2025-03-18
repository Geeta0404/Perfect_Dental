import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.jpg';

const Footer = () => {
  return (
    <header>
      {/* Top Section with Map and Contact Info */}
      <div className="container-fluid p-0 position-relative">
        <div className="row g-0">
          {/* Map Section */}
          <div className="col-lg-12">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="container pt-5 position-relative" style={{ marginTop: '-150px', zIndex: 2 }}>
        <div className="row text-center">
          <div className="col-lg-4 mb-4 d-flex flex-column align-items-center shadow-lg p-4 rounded bg-white">
            <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
            <h5 className="mt-3">Visit us</h5>
            <p className="text-center">
            Perfect Smile Dental Clinic Office number 3, First floor, Suvidha corner building, Near Kimaya hotel, Sheelavihar colony, 298, Erandwane, Karve Road, Kothrud, Pune-411038</p>
          </div>
          <div className="col-lg-4 mb-4 d-flex flex-column align-items-center shadow-lg p-4 rounded bg-white">
            <i className="fas fa-phone-alt fa-2x text-primary"></i>
            <h5 className="mt-3">Phone us</h5>
            <p>+91-9607351425 <br /> +91-8329414837  <br /> +91-9923543003</p>
            {/* <p>Monday to Saturday: 10:30 AM - 6:00 PM</p> */}
          </div>
          <div className="col-lg-4 mb-4 d-flex flex-column align-items-center shadow-lg p-4 rounded bg-white">
            <i className="fas fa-envelope fa-2x text-primary"></i>
            <h5 className="mt-3">Email us</h5>
            <p><a href="mailto:drpriyank@smilekraftdentistry.com">dradityamjadhav@gmail.com</a></p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-dark text-light pb-2 pt-5" style={{ marginTop: '-150px', zIndex: 2 }}>
        <div className="container mt-5">
          <div className="row mt-5 pt-5">
            {/* Follow Us Section */}
            <div className="col-lg-3 mb-2  p-4 rounded">
              <h5>Follow us on</h5>
              <div className="d-flex gap-3">
                <a href="#" className="text-light"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-light"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-light"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-light"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>

            {/* Our Forte */}
            <div className="col-lg-3 mb-2  p-4 rounded">
              <h5>Our Forte</h5>
              <ul className="list-unstyled">
                <li>Restorative Dentistry</li>
                <li>Cosmetic Dentistry</li>
                <li>Dental Emergencies</li>
                <li>Preventive Treatments</li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="col-lg-3 mb-2  p-4 rounded">
              <h5>Why Choose Us</h5>
              <ul className="list-unstyled">
                <li>Our Work</li>
                <li>Smilekrafters</li>
                <li>Patient Experiences</li>
                <li>Infrastructure</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 mb-2  p-4 rounded">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>About</li>
                <li>Treatments</li>
                <li>Gallery</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </header>
  );
};

export default Footer;
