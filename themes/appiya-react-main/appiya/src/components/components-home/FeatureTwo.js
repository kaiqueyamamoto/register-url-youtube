import React, { Component } from 'react';
import homedata from '../../data/homedata.json';

class FeatureTwo extends Component {
  render() {
   let publicUrl = process.env.PUBLIC_URL
   let imgattr = 'image'
    return (
      <section id="feature2" className="p-100px-tb sm-p-50px-tb featured-2 position-relative">
         <div className="bordered-circle2"></div>
         <div className="container">
            <div className="row">
               <div className="col-sm-6">
                  <h2>{homedata.feature2.title}</h2>
                  <p>{homedata.feature2.content}</p>
                  <div className="apps-buttons">
                     <a href={homedata.feature2.btn1url} className="btn btn-default btn-filled  animated-btn"><i className="icofont-brand-android-robot"></i> <span dangerouslySetInnerHTML={{__html: homedata.feature2.btn1label}}></span></a>
                     <a href={homedata.feature2.btn2url} className="btn btn-default  btn-filled animated-btn"><i className="icofont-brand-apple"></i> <span dangerouslySetInnerHTML={{__html: homedata.feature2.btn2label}}></span></a>
                  </div>
               </div> 
               <div className="col-sm-6">
                  <div className="position-relative featured-mockup2">
                     <img className="phone-1" src={publicUrl+homedata.feature2.imgurl1} alt={imgattr}/>
                     <img className="phone-2" src={publicUrl+homedata.feature2.imgurl2} alt={imgattr}/>
                  </div>
               </div>
            </div>
         </div>
      </section>

    );
  }
}

export default FeatureTwo;
