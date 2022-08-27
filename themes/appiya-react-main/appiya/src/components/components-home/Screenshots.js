import React, { Component } from 'react';
import homedata from '../../data/homedata.json';
class Screenshots extends Component {
  render() {
   let imgattr = 'screenshot'
    return (

      <section id="screenshots" className="p-80px-tb position-relative">
         <div className="circle x1"></div>
         <div className="circle x2"></div>
         <div className="circle x3"></div>
         <div className="circle x4"></div>
         <div className="circle x7"></div>
         <div className="circle x8"></div>
         <div className="circle x9"></div>
         <div className="circle x10"></div>
         <div className="container">
            <div className="row">
               <div className="col-sm-8 offset-sm-2">
                  <div className="section-title text-center m-50px-b">
                     <h2>{homedata.screenshots.sectiontitle}</h2>
                  </div>
               </div>
            </div>
            <div className="row swiper-container screenshot-swiper p-50px-b">
               <div className="swiper-wrapper">
                  {
                     homedata.screenshots.images.map( ( img, i ) => {
                        return <div key={i} className="swiper-slide col-sm-4">
                        <img src={process.env.PUBLIC_URL + img} alt={imgattr}/>
                     </div>
                     } )
                  }
               </div>
               <div className="swiper-pagination"></div>
               <div className="swiper-button-next">
                  <i className="icofont-stylish-right"></i>
               </div>
               <div className="swiper-button-prev">
                  <i className="icofont-stylish-left"></i>
               </div>
            </div>
         </div>
      </section>

    );
  }
}

export default Screenshots;
