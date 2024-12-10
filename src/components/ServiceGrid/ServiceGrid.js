import React from 'react'
import './style.css'
// import Image from '../../media/menu-Icon.png'

function ServiceGrid(props) {
  return (
    <>
      <div className="container">
        <div className="service-grid-container">
          {
            props.services.map((service, index) => (
              <div key={index} className="service-grid-item">
                <img className='services-icon-box-icon' src={service.image} alt="" />
                <h3 className='services-icon-box-title'>{service.text}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default ServiceGrid