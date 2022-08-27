import React, { Component } from 'react';
import homedata from '../../data/homedata.json';

class Preface extends Component {
  render() {
   let publicUrl = process.env.PUBLIC_URL
   let imgattr = 'image'
   return (
      <section id="preface" className="p-80px-b">
         <div className="container">
            <div className="row">
               <div className="col-sm-8 offset-sm-2">
                  <div className="section-title text-center m-50px-b">
                     <h2>{homedata.preface.sectiontitle}</h2>
                  </div>
               </div>
            </div>
            <div className="row align-items-center">
               <div className="col-md-6">
                  <div className="position-relative md-m-50px-b">
                     <div className="bordered-circle"></div>
                     <img className="moveUpDown" src={publicUrl+homedata.preface.imgurl} alt={imgattr}/>
                  </div>
               </div>
               <div className="col-md-6">
                  <h3 className="m-15px-b">{homedata.preface.title}</h3>
                  <p className="m-25px-b">{homedata.preface.content}</p>
                  <div className="apps-buttons">
                     <a href={homedata.preface.btn1url} className="btn btn-default btn-filled  animated-btn"><i className="icofont-brand-android-robot"></i> <span dangerouslySetInnerHTML={{__html: homedata.preface.btn1label}}></span></a>
                     <a href={homedata.preface.btn2url} className="btn btn-default  btn-filled animated-btn"><i className="icofont-brand-apple"></i> <span dangerouslySetInnerHTML={{__html: homedata.preface.btn2label}}></span></a>
                  </div>
               </div>
            </div>
         </div>
      </section>

   );
  }
}

export default Preface;
