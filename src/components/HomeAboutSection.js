import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './custom.css'; // Custom styles
import about1 from "../assets/about3.jpg"
import about2 from "../assets/about4.jpg"

const AboutSection = () => {
  return (
    <section className="container py-5">
      <div className="row  align-items-center">
        {/* Left Side - Images */}
        <div className="col-md-12 col-lg-5 position-relative text-center about-sec">
          <img src={about2} alt="Pregnant Woman" className="img-fluid rounded shadow-lg w-50 position-absolute start-0 top-0" />
          <img src={about1} alt="Smiling Woman" className="img-fluid rounded shadow-lg w-50 position-relative" style={{ marginTop: '100px' }} />
        </div>

        {/* Right Side - Text & Features */}
        <div className="col-md-12 col-lg-6 mt-lg-0 mt-5 ps-4">
          <h6 className="" style={{color:"#ee6401"}}>WELCOME TO THE PERFECT SMILE DENTAL CLINIC</h6>
          <h1 className="display-6 fw-bold space-letter-5"  style={{ letterSpacing: "1px" }}>We Create Beautiful Smiles</h1>
          <p>
          A genuine smile comes from the heart but a healthy smile needs good dental care. Now is the time to stop getting intimidated and reach out to us at the PERFECT SMILE DENTAL CLNIC, on Karve Road, Kothrud, Pune.At our clinic,you will definitely get a different experience, one that will change your opinion. We bring to you advanced dental treatments which will give you the esthetics you always wanted with utmost precision. We believe we were created to create your beautiful smiles. We provide the most advanced dental treatments with almost precision & esthetics.
          </p>
        
{/* <div className="row">
  <h6 className='mb-3'>The highlights of our clinic are:</h6>
  <div className="col-md-12 col-lg-12">
    <p>
      <span className="icon-bg">
        <FontAwesomeIcon icon={faCheckCircle} className="text-white" />
      </span>
      Treatment plan is customised as per patient needs
    </p>
    <p>
      <span className="icon-bg">
        <FontAwesomeIcon icon={faCheckCircle} className="text-white" />
      </span>
      Treatment is provided by using advanced instruments & materials
    </p>
    
  </div>
  <div className="col-md-12 col-lg-12">
    <p>
      <span className="icon-bg">
        <FontAwesomeIcon icon={faCheckCircle} className="text-white" />
      </span>
      
      Easy on the pocket services
    </p>
    <p>
      <span className="icon-bg">
        <FontAwesomeIcon icon={faCheckCircle} className="text-white" />
      </span>
      Prudent appointments which save times for patients
    </p>
  
  </div>
  <div className="col-md-12 col-lg-12">
  <p>
      <span className="icon-bg">
        <FontAwesomeIcon icon={faCheckCircle} className="text-white" />
      </span>
      Advanced dental treatment procedures are provide by well qualified and specialised dental practitioners
    </p>
   
  
  </div>
</div> */}
          {/* <button className="btn btn-primary mt-3">Find Out More</button> */}
          <button className="btn more-services-btn">View More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
