import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { Link, NavLink } from 'react-router-dom';
import './SingleSerice.css'

const SingleService = (props) => {
    const {key,service,serviceDecription,doctorName} = props.product

    return (
        <div>
             <Col>
                <Card >
                    <img src=""/>
                    <Card.Body>
                    <Card.Title className="serciceName">{service.toUpperCase()}</Card.Title>
                    <b >{doctorName}</b>
                    <Card.Text>
                        <p>{serviceDecription.slice(0,43)}</p>
                    </Card.Text>
                    </Card.Body>
                    <NavLink className="comonLink" to={`/singleservice/servicediscription${key}`}>Show More Details</NavLink>
                </Card>
            </Col>
        </div>
    );
};

export default SingleService;