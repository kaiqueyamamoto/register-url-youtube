import React, { Component } from 'react';
import homedata from '../../data/homedata.json';


class Feature extends Component {
  render() {
   let publicUrl = process.env.PUBLIC_URL
   let imgattr = 'image'
    return (
      <section id="feature" className="p-80px-tb position-relative">
         <div className="filled-circle"></div>
         <div className="container">
            <div className="row">
               <div className="col-sm-8 offset-sm-2">
                  <div className="section-title text-center m-50px-b">
                     <h2>{homedata.features.sectiontitle}</h2>
                  </div>
               </div>
            </div>
            <div className="row align-items-center">
               <div className="col-lg-6 col-md-12  md-p-50px-b">
                  <div className="row">
                     {homedata.features.featurescontent.map( ( feature, i ) => 
                        <div key={i} className="col-sm-6">
                           <div className="single-feature">
                              <i className={feature.icon}></i>
                              <h4>{feature.title}</h4>
                              <p>{feature.content}</p>
                           </div>
                        </div>
                     )}                
                  </div>
               </div>
               <div className="col-lg-6 col-md-12">
                  <div className="position-relative featured-mockup">
                     <div className="bordered-box"></div>
                     <img className="phone-1" src={publicUrl+homedata.features.imgurl1} alt={imgattr}/>
                     <img className="phone-2" src={publicUrl+homedata.features.imgurl2} alt={imgattr}/>
                  </div>
               </div>
            </div>
         </div>
      </section>

    );
  }
}

export default Feature;
