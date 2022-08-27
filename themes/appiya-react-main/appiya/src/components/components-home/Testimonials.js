import React, { Component } from 'react';
import homedata from '../../data/homedata.json';

class Testimonials extends Component {
  render() {
   let publicUrl = process.env.PUBLIC_URL
   let imgattr = 'image'
   return (
      <section id="testimonials" className="p-175px-tb md-p-80px-tb position-relative testimonials">
         <div className="container">
            <div className="row">
               <div className="rotate-heading">
                  <h2>Clients<br/>Review</h2>
               </div>
               <div className="col-lg-8 offset-lg-2 swiper-container testimonialSwiper p-50px-b">
                  <div className="swiper-wrapper">
                     { homedata.testimonial.map( ( data, i ) => {

                     return <div key={i} className="single-testimonial swiper-slide">
                        <div className="row">
                           <div className="col-lg-2 col-md-3">
                              <img className="rounded-circle" src={publicUrl+data.imgurl} alt={imgattr}/>
                           </div>
                           <div className="col-lg-10 col-md-9">
                              <p>{data.content}</p>
                              <h5>{data.client}</h5>
                              <p className="designation">{data.designation}</p>
                              <p className="ratings">
                                 <i className="icofont-ui-rating"></i>
                                 <i className="icofont-ui-rating"></i>
                                 <i className="icofont-ui-rating"></i>
                                 <i className="icofont-ui-rating"></i>
                                 <i className="icofont-ui-rating"></i>
                              </p>
                           </div>
                        </div>
                     </div>
                     } ) }

                  </div>
                  <div className="swiper-pagination"></div>
               </div>
            </div>
         </div>
      </section>
   );
  }
}

export default Testimonials;
