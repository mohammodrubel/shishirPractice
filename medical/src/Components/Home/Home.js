import React from 'react';
import Doctor from '../Doctor/Doctor';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <div >
            <Slider></Slider>
            <Service></Service>
            <Doctor></Doctor>
        </div>
    );
};

export default Home;