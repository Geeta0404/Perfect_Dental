// src/components/Footer.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">

          {/* Follow Us & Pay Online */}
          <div className="col-md-3">
            <h5>Follow us on</h5>
            <div className="d-flex gap-2 mb-4">
              <a href="#" className="btn btn-outline-light btn-sm"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="btn btn-outline-light btn-sm"><i className="fab fa-instagram"></i></a>
              <a href="#" className="btn btn-outline-light btn-sm"><i className="fab fa-x-twitter"></i></a>
              <a href="#" className="btn btn-outline-light btn-sm"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="btn btn-outline-light btn-sm"><i className="fab fa-paypal"></i></a>
            </div>

            <h5>Pay Online</h5>
            <a href="#" className="btn btn-outline-light btn-sm">
              <i className="fab fa-paypal"></i>
            </a>
          </div>

          {/* Our Forte */}
          <div className="col-md-3">
            <h5>Our Forte</h5>
            <ul className="list-unstyled">
              <li>Restorative Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Dental Emergencies</li>
              <li>Preventive Treatments</li>
              <li>Laser Assisted Dentistry</li>
              <li>Oral Surgeries</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="col-md-3">
            <h5>Why Choose Us</h5>
            <ul className="list-unstyled">
              <li>Our Work</li>
              <li>Smilekrafters</li>
              <li>Patient Experiences</li>
              <li>Infrastructure</li>
              <li>Safety & Quality Assurance</li>
              <li>Fees & Cost Analysis</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>Google Reviews</li>
              <li>Privacy Policy</li>
              <li>Safety Processes</li>
              <li>COVID19 Disclosure & Consent Form</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <hr className="border-light mt-4" />
        <p className="small text-center">
          <strong>Candid Disclaimer from the dentist:</strong> Please ignore the usage of terms such as Best dentist / dental hospital / clinic in Pune, India, etc. as they are used in accordance with the online search requirements for the website. We will only and always insist our patients and everyone else to judge us based on our work and the results we deliver. 
          <br />
          We also apologise for the few under construction pages in the website, but since we are constantly upgrading and improving, such pages would exist only to reveal something better.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
