import React, { Component } from 'react';
import homedata from '../../data/homedata.json';

class Howitworks extends Component {
  render() {
    return (
      <section id="how-it-works" className="p-80px-tb gray-bg">
         <div className="container">
            <div className="row">
               <div className="col-sm-8 offset-sm-2">
                  <div className="section-title text-center m-50px-b">
                     <h2>{homedata.howitworks.sectiontitle}</h2>
                  </div>
               </div>
            </div>
            <div className="row align-items-center">
               { homedata.howitworks.features.map( ( feature, i ) => {
                  return <div key={i} className="col-lg-4">
                        <div className="how-it-box text-center p-15px-lr p-50px-tb m-10px-t m-10px-b">
                           <i className={feature.icon}></i>
                           <h4>{feature.title}</h4>
                           <p>{feature.content}</p>
                        </div>
                     </div>
                 } )
               }
            </div>
         </div>
      </section>

    );
  }
}

export default Howitworks;
