import {  MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:devdecodess@gmail.com" data-cursor="disable">
               devdecodess@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>BSc in Information & Technology</p>
          </div>
          
            
            
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rajesh Chityal</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
