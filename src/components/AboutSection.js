import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutSection = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img 
            src="https://via.placeholder.com/500" 
            alt="Dental Clinic" 
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text Column */}
        <div className="col-md-6">
          <h2 className="display-4 fw-bold mb-4" style={{color:"#ee6401"}}>WELCOME TO THE PERFECT SMILE DENTAL CLINIC</h2>
          <h4 className="mb-3">We Create Beautiful Smiles</h4>
          <p>A genuine smile comes from the heart but a healthy smile needs good dental care. Now is the time to stop getting intimidated and reach out to us at the PERFECT SMILE DENTAL CLINIC, on Karve Road, Kothrud, Pune. At our clinic, you will definitely get a different experience, one that will change your opinion. We bring to you advanced dental treatments which will give you the aesthetics you always wanted with utmost precision. We believe we were created to create your beautiful smiles.</p>
          <p>We provide the most advanced dental treatments with almost precision & aesthetics.</p>
          
          <h5 className="text-orange mt-4">The highlights of our clinic are:</h5>
          <ul>
            <li>Advanced dental treatment procedures provided by well-qualified and specialized dental practitioners</li>
            <li>Treatment is provided using advanced instruments & materials</li>
            <li>Treatment plan is customized as per patient needs</li>
            <li>Easy on the pocket services</li>
            <li>Prudent appointments which save time for patients</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
