import React, { Component } from 'react';
import homedata from '../../data/homedata.json';

class FeatureOne extends Component {
  render() {
   let publicUrl = process.env.PUBLIC_URL
    return (
      <section id="feature1" className="p-100px-tb featured-1 position-relative">
         <div className="bordered-circle2"></div>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-sm-6 md-m-50px-b">
                  <img className="moveUpDown" src={publicUrl+homedata.feature1.imgurl1} alt=""/>
               </div>
               <div className="col-sm-6">
                  <div className="section-title">
                     <h2 className="tlt1">{homedata.feature1.title}</h2>
                  </div>
                  <p>{homedata.feature1.content}</p>
                  <a href={homedata.feature1.btn1url} className="btn btn-default btn-filled animated-btn">{homedata.feature1.btn1label}</a>
               </div>
            </div>
         </div>
      </section>

    );
  }
}

export default FeatureOne;
