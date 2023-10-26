import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb-footer section-padding">
        <div className="sb-footer-links">
          <div className="sb-footer-links-div">
            <h4>For Bussiness</h4>
            <a href="">
              <p>Employer</p>
            </a>
            <a href="">
              <p>Health plan</p>
            </a>
            <a href="">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Resources</h4>
            <a href="">
              <p>Resource center</p>
            </a>
            <a href="">
              <p>Testimonials</p>
            </a>
            <a href="">
              <p>STV</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
          <h4>Sponshor</h4>
            <a href="">
              <p>GG-Company</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
          <h4>Company</h4>
            <a href="">
              <p>About</p>
            </a>
            <a href="">
              <p>Press</p>
            </a>
            <a href="">
              <p>Career</p>
            </a>
            <a href="">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Socials</h4>
            <div className="socialmedia">
              <p><img src="linkedin1.png" alt=""></img></p>
              <p><img src="twitter.png" alt=""></img></p>
              <p><img src="facebook.png" alt=""></img></p>
              <p><img src="instagram.png" alt=""></img></p>
            </div>
          </div>
        </div> 

        <hr></hr>

        <div className="sb-footer-below">
           <div className="sb-footer-copyright">
            <p>
              @{new Date().getFullYear()} Mafkin Robotics. All Right reserved.
            </p>
           </div>
           <div className="sb-footer-below-links">
            <a href=""><div><p>Terms & Conditions</p></div></a>
            <a href=""><div><p>Privacy</p></div></a>
            <a href=""><div><p>Security</p></div></a>
            <a href=""><div><p>Cookie Declaration</p></div></a>

           </div>
        </div>


      </div>
    </div>
  );
};

export default Footer;
