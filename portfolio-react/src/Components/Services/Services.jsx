import React from 'react';
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
    return (
        <div id="services" className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='services-container'>
                {Services_Data.map((service, index) => (
                    <a key={index} href={service.wikipedia_link} target="_blank" rel="noopener noreferrer" className="service-link">
                        <div className="services-format">
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className="services-readmore">
                                <span>Read More</span>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Services;
