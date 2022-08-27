import React, { Component } from 'react';
import homedata from '../../data/homedata.json';

class Heroarea extends Component {
  render() {
    return (
      <section className="hero-area circle-wrap">
         <div className="circle x1"></div>
         <div className="circle x2"></div>
         <div className="circle x3"></div>
         <div className="circle x4"></div>
         <div className="circle x5"></div>
         <div className="circle x6"></div>
         <div className="circle x7"></div>
         <div className="circle x8"></div>
         <div className="circle x9"></div>
         <div className="circle x10"></div>
         <div className="container">
            <div className="row full-height align-items-center">
               <div className="col-md-6 p-100px-t p-50px-b md-p-10px-b">
                  <h2 className="text-capitalize m-25px-b">{homedata.heroarea.title}</h2>
                  <p className="m-25px-b">{homedata.heroarea.content}</p>
                  <div className="hero-btn-wrapper">
                     <a href={homedata.heroarea.btn1url} className="btn btn-default animated-btn">{homedata.heroarea.btn1label}</a>
                     <a className="btn btn-default btn-default-outline animated-btn" href={homedata.heroarea.btn2url}>{homedata.heroarea.btn2label}</a>
                  </div>
               </div>
               <div className="col-md-6 p-100px-t p-50px-b md-p-10px-t">
                  <img className="hero-mock" src={process.env.PUBLIC_URL+homedata.heroarea.imgurl1} alt="Hero mockup"/>
               </div>
            </div>
         </div>
      </section>
    );
  }
}

export default Heroarea;
