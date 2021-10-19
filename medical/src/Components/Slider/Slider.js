
import './Slider.css'
import React from 'react';
import im1 from '../img/01.png'
import im2 from '../img/02.png'
import im3 from '../img/03.png'


const Slider = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <img src={im1}   className="d-block w-100"/>
                <div className="carousel-caption d-none d-md-block">
                    <h1 style={{color:'black'}}>Dental</h1>
                    <p style={{color:'black'}}>The hospital shall not be responsible for reports not collected within 30 days after the tests were done. Report Delivery Room is also located in the hospital’s atrium, and is open on working days (Saturday-Thursday) from 8.00 am to 8.30 pm, and on Fridays and holidays from 9.00 am to 5.00 pm.You will not be able to collect your investigation reports without your receipt of payment.</p>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={im2}   className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h1 style={{color:'white'}}>Ophthalmologist</h1>
                    <p style={{color:'black'}}>OphthalmologyOphthalmologists are physicians specializing in the comprehensive medical and surgical care of the eyes and vision. Ophthalmologists are the only practitioners medically trained to diagnose and treat all eye and visual problems including vision services (glasses and contacts) and provide treatment and prevention of medical disorders of the eye including surgery.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={im3}   className="d-block w-100" />
                <div className="carousel-caption d-none d-md-block">
                    <h1 style={{color:'white'}}>"IMPORTANT POINTS ABOUT TESTS/PROCEDURES/SURGERIES</h1>
                    <p style={{color:'black'}}>"The hospital shall not be responsible for reports not collected within 30 days after the tests were done. Report Delivery Room is also located in the hospital’s atrium, and is open on working days (Saturday-Thursday) from 8.00 am to 8.30 pm, and on Fridays and holidays from 9.00 am to 5.00 pm.You will not be able to collect your investigation reports without your receipt of payment.The hospital shall not be responsible for reports not collected within 30 days after the tests were done. Report Delivery Room is also located in the hospital’s atrium, and is open on working days (Saturday-Thursday) from 8.00 am to 8.30 pm, and on Fridays and holidays from 9.00 am to 5.00 pm.You will not be able to collect your investigation reports without your receipt of payment."</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    );
};

export default Slider;