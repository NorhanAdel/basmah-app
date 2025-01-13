import React from 'react'
import { services } from '../../constant/our_service';
import "./OurService.scss"
function OurService() {
  return (
    <div className="Services">
      <h2>خدماتنا</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="serviceCard" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurService