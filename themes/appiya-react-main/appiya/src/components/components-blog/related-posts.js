import React, { Component } from 'react';
import Relatedpostdata from '../../data/blogdata.json';
class Relatedpost extends Component {
  render() {
     let anchor = '#'
     let imgattr = 'image'
     let publicUrl = process.env.PUBLIC_URL
     let posts = Relatedpostdata.relatedposts
    return (
      <div className="related-posts">
         <h2 className="m-30px-b">Related posts</h2>
         <div className="row">
            { posts.map( function( bloginfo, i ) {
               return <div key={i} className="col-lg-4">
                  <div className="page-content">
                     <div className="blog-post-img">
                        <img src={ publicUrl + bloginfo.image} alt={imgattr} />
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
                     
                        <a className="read-more" href={anchor}>Read more</a>
                     </div>
                  </div>
               </div>
            } ) }
         </div>
      </div>

    );
  }
}

export default Relatedpost;
