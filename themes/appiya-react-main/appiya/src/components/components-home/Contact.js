import React, { Component } from 'react';
import homedata from '../../data/homedata.json';
class Contact extends Component {
  render() {
    return (

      <section id="contact" className="p-80px-tb">
         <div className="container">
            <div className="row">
               <div className="col-sm-8 offset-sm-2">
                  <div className="section-title text-center m-50px-b">
                     <h2>{homedata.contact.title}</h2>
                  </div>
               </div>
            </div>
            <div className="row row-eq-height">
               <div className="col-lg-4 col-md-6 contact-address p-30px">
                  <div className="address-box text-center p-15px m-15px-b">
                     <i className={homedata.contact.contactinfo.address.icon}></i>
                     <h5>{homedata.contact.contactinfo.address.title}</h5>
                     <p dangerouslySetInnerHTML={{__html: homedata.contact.contactinfo.address.info}}></p>
                  </div>
                  <div className="address-box text-center p-15px m-15px-b">
                     <i className={homedata.contact.contactinfo.phone.icon}></i>
                     <h5>{homedata.contact.contactinfo.phone.title}</h5>
                     <p dangerouslySetInnerHTML={{__html: homedata.contact.contactinfo.phone.info}}></p>
                  </div>
                  <div className="address-box text-center p-15px">
                     <i className={homedata.contact.contactinfo.email.icon}></i>
                     <h5>{homedata.contact.contactinfo.email.title}</h5>
                     <p dangerouslySetInnerHTML={{__html: homedata.contact.contactinfo.email.info}}></p>
                  </div>
               </div>
               <div className="col-lg-8 col-md-6 contact-form p-30px">
                  <h3 className="m-25px-b">{homedata.contact.formtitle}</h3>
                  <p className="m-25px-b">{homedata.contact.formdescription}</p>
                  <form id="contact-form" method="post" action="#">
                     <div className="message">
                        <p className="email-success alert alert-success"><i className="icon icon-icon-check-alt2"></i> Your quote has successfully been sent.  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                           <span aria-hidden="true">&times;</span></button>
                        </p>
                        <p className="email-failed alert alert-danger"><i className="icon icon-icon-close-alt2"></i> Something went wrong!  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                           <span aria-hidden="true">&times;</span></button>
                        </p>
                     </div>
                     <div className=" mb13">
                        <input name="name" className="contact-name" id="contact-name" type="text" placeholder="Your Name" required=""/>
                     </div>
                     <div className="mb13">
                        <input name="email" className="contact-email" id="contact-email" type="email" placeholder="Your Email" required=""/>
                     </div>
                     <div className="mb13">
                        <input name="subject" className="contact-subject" id="contact-subject" type="text" placeholder="Subject" required=""/>
                     </div>
                     <div className="mb30">
                        <textarea name="message" className="contact-message" id="contact-message" placeholder="Your Message" required=""></textarea>
                     </div>
                     <button className="btn btn-default btn-filled animated-btn">Send Now</button>
                  </form>
               </div>
            </div>
         </div>
      </section>

    );
  }
}

export default Contact;
