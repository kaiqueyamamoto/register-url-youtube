import React, { Component } from 'react';
import homedata from '../../data/homedata.json';

class Pricing extends Component {
  render() {
    return (
      <section id="pricing" className="p-80px-tb parallax bg-overlay opacity-5" style={{backgroundImage: 'url(./assets/img/pricing-bg.jpg)'}}>
         <div className="container">
            <div className="row">
               <div className="col-sm-8 offset-sm-2">
                  <div className="section-title text-center m-50px-b">
                     <h2>{homedata.pricingtable.sectiontitle}</h2>
                  </div>
               </div>
            </div>
            <div className="row justify-content-md-center">
               { homedata.pricingtable.tables.map( ( data, i ) => {
                  return <div key={i} className="col-lg-4 col-md-6">
                     <div className="single-pricing text-center m-10px-tb">
                        <div className="pricing-head p-60px-lr lg-p-30px-lr">
                           <div className="pricing-head-text">
                              <div className="package-price">
                                 <span className="price">{data.currency}{data.price}</span><span className="validity">{data.duration}</span>
                              </div>
                              <div className="package-name">
                                 <h5>{data.title}</h5>
                              </div>
                           </div>
                           <span className="wave"></span>
                           <span className="wave"></span>
                           <span className="wave"></span>
                        </div>
                        <div className="pricing-body p-60px-lr lg-p-30px-lr">
                           <ul>
                              {data.features.map( ( feature, i  ) =>
                                 <li key={i}>{feature}</li>
                               )}
                           </ul>
                        </div>
                        <div className="pricing-footer p-60px-lr lg-p-30px-lr">
                           <a href={data.url} className="btn btn-default btn-filled animated-btn">Purchase Now</a>
                        </div>
                     </div>
                  </div>
               } ) }

            </div>
         </div>
      </section>
    );
  }
}

export default Pricing;
