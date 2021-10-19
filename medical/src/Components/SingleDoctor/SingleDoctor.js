import React from 'react';
import './SingleDoctor.css'

const SingleDoctor = (props) => {
    const {doctorIMg,doctorName,Country} = props.doctor
    return (
        <div>
              <div className="col">
                <div className="card h-100">
                <img src={doctorIMg} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title" style={{color:'tomato'}}>{doctorName}</h5>
                    <b>{Country}</b>
                    <ul className="list-inline">
                        <li className="list-inline-item "><i className="fab comonSocial fa-facebook"></i></li>
                        <li className="list-inline-item "><i className="fab comonSocial fa-instagram"></i></li>
                        <li className="list-inline-item "><i className="fab comonSocial fa-twitter"></i></li>
                        <li className="list-inline-item "><i className="fas comonSocial fa-envelope"></i></li>
                        <li className="list-inline-item "><i className="fab comonSocial fa-linkedin"></i></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDoctor;