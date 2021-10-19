import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid footers">
            <div className="row">
                <div className="col-md-4 text-center">
                    <h1>RDX Medical</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nulla similique nam saepe impedit voluptatem quibusdam aut voluptate voluptates,</p>
                </div>
                <div className="col-md-4 text-center">
                    <ul>
                        <li className="list-inline"><Link to="/home">Home</Link></li>
                        <li className="list-inline"><Link to="/service">Service</Link></li>
                        <li className="list-inline"><Link to="/blog">Blog</Link></li>
                        <li className="list-inline"><Link to="/aboutus">About Us</Link></li>
                        <li className="list-inline"><Link to="/doctor">Doctor</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 text-center mt-5">
                <ul className="list-inline">
                        <li className="list-inline-item "><i className="fab comonSocialMedia fa-facebook"></i></li>
                        <li className="list-inline-item "><i className="fab comonSocialMedia fa-instagram"></i></li>
                        <li className="list-inline-item "><i className="fab comonSocialMedia fa-twitter"></i></li>
                        <li className="list-inline-item "><i className="fas comonSocialMedia fa-envelope"></i></li>
                        <li className="list-inline-item "><i className="fab comonSocialMedia fa-linkedin"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;