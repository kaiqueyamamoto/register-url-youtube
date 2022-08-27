import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';

class Header extends Component {

   render() {
      let imgattr = 'image'

      return (
      <div>
      <header id="home">
         <nav className="navbar navbar-inverse navbar-expand-lg header-nav fixed-top light-header">
            <div className="container">
               <a className="navbar-brand" href={`${process.env.PUBLIC_URL}/`}>
                  <img src={process.env.PUBLIC_URL + '/assets/img/logo.png' } alt={imgattr}/>
               </a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCodeply">
               <i className="icofont-navigation-menu"></i>
               </button>
               <div className="collapse navbar-collapse" id="navbarCodeply">
                  <ul className="nav navbar-nav ml-auto">
                     <li><HLink className="nav-link" smooth to={`/#home`}>Home</HLink> </li>
                     <li><HLink className="nav-link" smooth to={`/#services`}>About</HLink></li>
                     <li><HLink className="nav-link" smooth to={`/#feature`}>Feature</HLink></li>
                     <li><HLink className="nav-link" smooth to={`/#testimonials`}>Testimonial</HLink></li>
                     <li><HLink className="nav-link" smooth to={`/#screenshots`}>Screenshot</HLink></li>
                     <li><HLink className="nav-link" smooth to={`/#pricing`}>Price</HLink></li>
                     <li>
                        <HLink className="nav-link" smooth to={`/#blog`}>Blog</HLink>
                        <span className="sub-menu-toggle" role="navigation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <i className="icofont-rounded-down"></i>
                        </span>
                        <ul className="sub-menu">
                           <li><Link to="/blog-full">Blog Full</Link></li>
                           <li><Link to="/blog-2-col">Blog 2 col</Link></li>
                           <li><Link to="/blog-3-col">Blog 3 col</Link></li>
                           <li><Link to="/blog-full-left-sidebar">Blog left sidebar</Link></li>
                           <li><Link to="/blog-full-right-sidebar">Blog right sidebar</Link></li>
                           <li><Link to="/single-blog">Single blog</Link></li>
                           <li><Link to="/single-left-sidebar">Single left sidebar</Link></li>
                           <li><Link to="/single-right-sidebar">Single right sidebar</Link></li>
                        </ul>
                     </li>
                     <li><HLink className="nav-link" smooth to={`/#contact`}>Contact</HLink></li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>      
      </div>

    );
   }
}

export default Header;
