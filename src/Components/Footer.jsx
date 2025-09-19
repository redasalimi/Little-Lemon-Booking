import React from "react";
import { Link } from "react-router-dom";
import secondaryLogo from "/assets/imgs/secondaryLogo.png";

const Footer = () => {
  return (
    <footer className="container-fluid bg-secondary text-light">
        <div className="container pt-5">
            <div className="row text-center text-md-start gy-4 justify-content-center">
                <div className="col-6 col-md-3 d-flex justify-content-center justify-content-md-start">
                    <img 
                        src={secondaryLogo} 
                        alt="Little Lemon Logo" 
                        className="img-fluid" 
                        style={{ maxWidth: "150px" }}
                    />
                </div>

                <div className="col-6 col-md-3 ">
                    <h4>Navigation</h4>
                    <ul className="list-unstyled d-flex flex-column" >
                        <Link to="/" className="link-light">Home</Link>
                        <Link to="/about" className="link-light">About</Link>
                        <Link to="/menu" className="link-light">Menu</Link>
                        <Link to="/reservations" className="link-light">Reservations</Link>
                        <Link to="/booking" className="link-light">Order Online</Link>
                        <Link to="/login" className="link-light">Login</Link>
                    </ul>
                </div>

                <div className="col-6 col-md-3">
                    <h4>Contact</h4>
                    <ul className="list-unstyled d-flex flex-column">
                        <li><p>69 Vico Araratiano</p></li>
                        <li><p>(709)879-4459</p></li>
                        <li><a href="mailto:salimir38@gmail.com" className="link-light">Email Us</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md-3">
                    <h4>Socials</h4>
                    <ul  className="list-unstyled d-flex flex-column">
                        <li><a href="https://www.facebook.com" className="link-light" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.twitter.com" className="link-light" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.instagram.com" className="link-light" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row text-center mt-5 pb-2">
            <p className="col">2025 © Little Lemon</p>
        </div>
    </footer>
  );
};

export default Footer;
