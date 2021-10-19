import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Topbar.css'

const Topbar = () => {
    return (
        <div className="container-fluid bg-light">
            <div className="container ">
            <Row >
                <Col className="col-md-4  d-flex align-items-center">
                <i class="far comonicon fa-clock"></i>
                    <div>
                        <p className="mx-1 top_p">Monday-Friday 08:00-19:00</p>
                        <p className="mx-1 top_p">saturday and sunday - CLOSED</p> 
                    </div>
                </Col>


                <Col className="col-md-4 col-md-4 d-flex align-items-center">
                    <i class="fas comonicon fa-mobile-alt"></i>
                    <p className="mx-1 top_p">+88 01907626234 <br/>
                        rdx@gmail.com</p>
                </Col>


                <Col className="col-md-4 text-center col-md-4 d-flex align-items-center">
                    <i class="fas comonicon fa-map-marker-alt"></i>
                    <p  className="mx-1 top_p" >27th Avenue <br/>
                        New York w2 3xE</p>

                </Col>
            </Row>
        </div>
        </div>
    );
};

export default Topbar;