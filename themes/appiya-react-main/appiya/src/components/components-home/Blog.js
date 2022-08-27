import React, { Component } from 'react';
import homedata from '../../data/homedata.json';

class Blog extends Component {

  render() {
   let anchor = '#'
   let imgattr = 'image'
   let publicUrl = process.env.PUBLIC_URL
    return (
      <section id="blog" className="p-100px-tb gray-bg">
         <div className="container">
            <div className="row">
               <div className="col-sm-8 offset-sm-2">
                  <div className="section-title text-center m-50px-b">
                     <h2>{homedata.blogs.sectiontitle}</h2>
                  </div>
               </div>
            </div>
            <div className="row  justify-content-md-center">

            {homedata.blogs.blogs.map(( data, i )=>{

               return <div key={i} className="col-lg-4 col-md-6">
                  <article className="page-content">
                     <div className="blog-post-img">
                        <img src={publicUrl + data.imgurl} alt={imgattr}/>
                        <div className="blog-tag">
                           <a href={anchor}>{data.category}</a>
                        </div>
                     </div>
                    
                     <div className="blog-content">
                        <div className="post-meta m-15px-b">
                           <ul>
                              <li><a href={anchor}><i className="icofont-user-alt-5"></i> {data.author}</a></li>
                              <li><a href={anchor}><i className="icofont-calendar"></i> {data.date}</a></li>
                              <li><a href={anchor}><i className="icofont-speech-comments"></i> {data.comment}</a></li>
                           </ul>
                        </div>
                        
                        <a href={anchor}>
                           <h2 className="m-25px-b">{data.title}</h2>
                        </a>
                           <p>{data.content}</p>
                        <a className="read-more" href={anchor}>Read more</a>
                     </div>
                  </article>
               </div>

            })}
            </div>
         </div>
      </section>
    );
  }
}

export default Blog;
