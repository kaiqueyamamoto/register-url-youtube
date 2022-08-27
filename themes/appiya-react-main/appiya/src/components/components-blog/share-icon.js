import React, { Component } from 'react';

class Shareicons extends Component {
  render() {
    let anchor = '#'
    return (
      <div className="row m-30px-tb">
         <div className="col-md-12 social-share">
            <p><strong>Share:</strong></p>
            <div className="social-network">
               <a href={anchor}><i className="social-icon icofont-facebook"></i></a>
               <a href={anchor}><i className="social-icon icofont-twitter"></i></a>
               <a href={anchor}><i className="social-icon icofont-google-plus"></i></a>
               <a href={anchor}><i className="social-icon icofont-dribbble"></i></a>
               <a href={anchor}><i className="social-icon icofont-linkedin"></i></a>
               <a href={anchor}><i className="social-icon icofont-instagram"></i></a>
               <a href={anchor}><i className="social-icon icofont-pinterest"></i></a>
            </div>
         </div>
      </div>
    );
  }
}

export default Shareicons;
