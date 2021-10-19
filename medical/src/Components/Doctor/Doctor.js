import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleDoctor from '../SingleDoctor/SingleDoctor';


const Doctor = () => {
    const [doctors,setDoctor] = useState([])

    useEffect(()=>{
        fetch('./custom.json')
        .then(Response => Response.json())
        .then(data => setDoctor(data))
    },[])
    return (
        <div>
            <Container>
                <h1 className="mt-5 mb-5" style={{textAlign:'center'}}>Our Doctors</h1>
                <Row className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-2">
                   {

                       doctors.map(doctor => <SingleDoctor doctor={doctor}></SingleDoctor>)
                
                   }
                </Row>
            </Container>
        </div>
    );
};

export default Doctor;


