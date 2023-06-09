import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../index.css";

function Footer() {
  return (
    <>
      <div>
        <footer className="footer-container">
          <div className="adress">
            <h3>Contact Details :</h3>
            <p>
              IronFinder
              <br />
              3 rue Maillard,
              <br />
              75011 Paris,
              <br />
              France
              <br />
              +33 (0) 619 193 088
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047744348!2d2.3354330160472316!3d48.87456857928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sIronhack!5e0!3m2!1sen!2ses!4v1495208746099"
            className="map-frame"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            title="Google Maps"
          ></iframe>
        </footer>
      </div>
    </>
  );
}

export default Footer;
