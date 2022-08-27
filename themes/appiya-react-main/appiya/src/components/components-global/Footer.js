import React, { Component } from 'react';

class Footer extends Component {
  render() {
     
   let data = this.props.data;
   let logoAttr = 'logo';
   let publicUrl = process.env.PUBLIC_URL
   let logoLink = publicUrl;
    return (

      <footer id="footer" className="p-70px-t p-30px-b footer">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="footer-top text-center p-30px-tb">
                     <a className="footer-logo" href={logoLink}><img src={publicUrl + data.footerlogo} alt={logoAttr}/></a>
                     <p>{data.footertext}</p>
                     <div className="social-network">
                     {data.socialicon.map(( data, i )=>{
                        return <a key={i} href={data.url}><i className={` social-icon ${data.icon} `}></i></a>
                     })}
                     </div>
                  </div>
                  <div className="footer-copyright p-30px-tb text-center">
                     <p dangerouslySetInnerHTML={{__html: data.copyrighttext}}></p>
                  </div>
               </div>
            </div>
         </div>
      </footer>

    );
  }
}

export default Footer;
