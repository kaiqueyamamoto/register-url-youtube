import React, { Component } from 'react';


class HeaderBottom extends Component {
  render() {
   let HeaderTitle = this.props.headertitle;
    return (
      <section id="page-header" className="p-150px-t  p-80px-b sm-p-100px-t sm-p-40px-b">
         <div className="container">
            <div className="row">
               <div className="col text-center">
                  <h2 className="white-text">{HeaderTitle}</h2>
               </div>
            </div>
         </div>
      </section>

    );
  }
}

export default HeaderBottom;
