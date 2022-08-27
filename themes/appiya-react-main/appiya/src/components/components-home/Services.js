import React, { Component } from 'react';
import homedata from '../../data/homedata.json';

class Services extends Component {
  render() {
    return (
      <section id="services" className="p-100px-tb sm-p-50px-b">
         <div className="container">
            <div className="row justify-content-md-center">
               { homedata.services.map( ( service, i ) => {
                  return <div key={i} className="col-lg-4 col-md-6">
                     <div className="service-box text-center p-60px lg-p-40px md-p-30px sm-p-20px m-10px-t m-10px-b">
                        <i className={service.icon}></i>
                        <h4>{service.title}</h4>
                        <p>{service.content}</p>
                     </div>
                  </div>
               } ) }
            </div>
         </div>
      </section>

    );
  }
}

export default Services;
