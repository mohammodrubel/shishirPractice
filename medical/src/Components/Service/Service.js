import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleService from './../SingleService/SingleService';

const Service = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('./custom.json')
        .then(Response => Response.json())
        .then(data => setProducts(data))
        
    },[])

    return (
        <div>
          <Container>
          <div className="col-md-5 mx-auto mt-5 mb-5 text-center"><h3 style={{textAlign:'center',color:'tomato'}}>Our Service</h3></div>
              <Row xs={1} lg={4} md={2} className="g-4">
                  
                {
                    products.map(product => <SingleService product={product} key={product.key}></SingleService>)
                }
              </Row>
          </Container>
        </div>
    );
};

export default Service;