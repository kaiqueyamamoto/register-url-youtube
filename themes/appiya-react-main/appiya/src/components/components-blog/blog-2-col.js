import React, { Component } from 'react';
import HeaderBottom from '../components-global/Header-bottom';

class Blog2col extends Component {

  render() {
   let anchor = '#'
   let imgattr = 'image'
   let propsData = this.props.data
   let blogs = propsData.blogs;
   let headerPageTitle = propsData.pagetitle.blog2coltitle
    return (
      <div>
      <HeaderBottom headertitle={headerPageTitle} />
      <section id="blog-full" className="p-80px-tb gray-bg">
         <div className="container">
            <div className="row">
               { blogs.map( ( bloginfo, index ) => {
                  
                  return (
                     <div key={index} className="col-lg-6">
                        <article className="page-content">
                           <div className="blog-post-img">
                              <img src={process.env.PUBLIC_URL + bloginfo.image} alt={imgattr} />
                              <div className="blog-tag">
                                 <a href={anchor}>{bloginfo.category}</a>
                              </div>
                           </div>
                           <div className="blog-content">
                              <div className="post-meta m-15px-b">
                                 <ul>
                                    <li><a href={anchor}><i className="icofont-user-alt-5"></i> {bloginfo.author}</a></li>
                                    <li><a href={anchor}><i className="icofont-calendar"></i> {bloginfo.date}</a></li>
                                    <li><a href={anchor}><i className="icofont-speech-comments"></i> {bloginfo.comments}</a></li>
                                 </ul>
                              </div>
                              <a href={anchor}>
                                 <h2 className="m-25px-b">{bloginfo.title}</h2>
                              </a>
                                 <p>{bloginfo.content}</p>
                              <a className="read-more" href={bloginfo.url}>Read more</a>
                           </div>
                        </article>
                     </div>
                  
                  )

               } ) }
            </div>
            <div className="row">
               <div className="col">
                  <nav className="m-25px-t app-pagenation">
                     <ul className="pagination">
                        <li className="page-item disabled">
                           <a className="page-link" href={anchor} tabIndex="-1"><i className="icofont-long-arrow-left"></i></a>
                        </li>
                        <li className="page-item"><a className="page-link" href={anchor}>1</a></li>
                        <li className="page-item active"><a className="page-link" href={anchor}>2</a></li>
                        <li className="page-item"><a className="page-link" href={anchor}>3</a></li>
                        <li className="page-item">
                           <a className="page-link" href={anchor}><i className="icofont-long-arrow-right"></i></a>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </div>
      </section>
      </div>
    );
  }
}

export default Blog2col;
