import React, { useEffect } from "react";
import "./Contact.css";
import {
  FaMobileAlt,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("c-container");

    const handleSignUpClick = () => {
      if (container) {
        container.classList.add("right-panel-active");
      }
    };

    const handleSignInClick = () => {
      if (container) {
        container.classList.remove("right-panel-active");
      }
    };

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener("click", handleSignUpClick);
      signInButton.addEventListener("click", handleSignInClick);
    }

    return () => {
      if (signUpButton && signInButton && container) {
        signUpButton.removeEventListener("click", handleSignUpClick);
        signInButton.removeEventListener("click", handleSignInClick);
      }
    };
  }, []);

  return (
    <section className="contact-section">
      <div className="contact-bg">
        <h2>Contact Us</h2>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="c-text">
          Embark with unwavering confidence. Reach out to us today for
          unparalleled excellence in ship hull cleaning services, ensuring
          smooth sailing and optimal vessel performance.
        </p>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <div className="c-info">
            <span className="fas">
              <FaMapMarkerAlt />
            </span>
            <span>Address</span>
            <span className="c-text">
              2939 Patrick Street, Victoria TX, United States
            </span>
          </div>
          <div className="c-info">
            <span className="fas">
              <FaMobileAlt />
            </span>
            <span>Phone No.</span>
            <span className="c-text">1-2392-23928-2</span>
          </div>
          <div className="c-info">
            <span className="fas">
              <FaEnvelopeOpen />
            </span>
            <span>E-mail</span>
            <span className="c-text">mail@company.com</span>
          </div>
          <div className="c-info">
            <span className="fas">
              <FaClock />
            </span>
            <span>Opening Hours</span>
            <span className="c-text">Monday - Friday (9:00 AM to 5:00 PM)</span>
          </div>
        </div>
        <div className="cc-form">
          <div className="c-container" id="c-container">
            <div className="form-container sign-up-container">
              <form action="#" className="c-form-content">
                <h1>Send Your Message</h1>
                <div className="social-container">
                  <a href="#" className="social">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="social">
                    <FaFacebookF />
                  </a>
                </div>
                <span></span>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Company " />
                <input type="text" placeholder="Phone No" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button className="c-button">Send</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form action="#" className="c-form-content">
                <h1>Send Your Message</h1>
                <div className="social-container">
                  <a href="#" className="social">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="social">
                    <FaFacebookF />
                  </a>
                </div>
                <span></span>
                <input type="text" placeholder=" Name" />
                <input type="text" placeholder="Company " />
                <input type="text" placeholder="Phone No" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button className="c-button">Send</button>
              </form>
            </div>
            <div className="c-overlay-container">
              <div className="c-overlay">
                <div className="c-overlay-panel c-overlay-left">
                  <h1>Contact Now </h1>
                  <p>
                    To stay connected with us, please login with your personal
                    info
                  </p>
                  <button className="ghost c-button" id="signIn">
                    Contact
                  </button>
                </div>
                <div className="c-overlay-panel c-overlay-right">
                  <h1>Want to Collaborate</h1>
                  <p>
                    Enter your personal details and start the journey with us
                  </p>
                  <button className="ghost c-button" id="signUp">
                    Collaborate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
