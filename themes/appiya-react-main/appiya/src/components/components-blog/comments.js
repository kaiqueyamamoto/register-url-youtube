import React, { Component } from 'react';

class Comments extends Component {
  render() {
   let anchor = '#'
   let imgattr = '#'
   let publicUrl = process.env.PUBLIC_URL
    return (                  
         <div className="post-comments m-30px-tb">
         <h3 className="m-30px-b">6 Comments</h3>
         <div className="row">
            <div className="col-sm-12">
               <ul className="comment-list m-30px-b">
                  <li className="comment">
                     <div className="the-comment">
                        <div className="avatar">
                           <img src={publicUrl + '/assets/img/avater/1.jpg' } alt={imgattr}/>
                        </div>
                        <div className="comment-box">
                           <div className="comment-author meta">
                              <strong>Mahmud</strong> September 2, 2018 at 1:38 pm<a rel="nofollow" className="comment-reply-link" href={anchor}> - Reply</a>
                           </div>
                           <div className="comment-text">
                              <p>Yourself off its pleasant ecstatic now law. Ye their mirth seems of songs. Prospect out bed contempt separate. Her inquietude our shy yet sentiments collecting. Cottage fat beloved himself arrived old. Grave widow hours among him &#65279;no you led. Power had these met least nor young. Yet match drift wrong his our. </p>
                           </div>
                        </div>
                     </div>
                     <ul className="children">
                        <li className="comment">
                           <div className="the-comment">
                              <div className="avatar">
                                 <img src={publicUrl + "/assets/img/avater/2.jpg" } alt={imgattr}/>
                              </div>
                              <div className="comment-box">
                                 <div className="comment-author meta">
                                    <strong>Purnima</strong> June 2, 2018 at 1:39 pm<a rel="nofollow" className="comment-reply-link" href={anchor}> - Reply</a>
                                 </div>
                                 <div className="comment-text">
                                    <p>Certainty determine at of arranging perceived situation or. Or wholly pretty county in oppose. Favour met itself wanted settle put garret twenty. In astonished apartments resolution so an it. Unsatiable on by contrasted to reasonable companions an. On otherwise no admitting to suspicion furniture it. </p>
                                 </div>
                              </div>
                           </div>
                        </li>
                     </ul>
                  </li>
                  <li className="comment">
                     <div className="the-comment">
                        <div className="avatar">
                           <img src={publicUrl + "/assets/img/avater/3.jpg" } alt={imgattr}/>
                        </div>
                        <div className="comment-box">
                           <div className="comment-author meta">
                              <strong>Mashrafee</strong> August 2, 2019 at 1:38 pm<a rel="nofollow" className="comment-reply-link" href={anchor}> - Reply</a>
                           </div>
                           <div className="comment-text">
                              <p>Written enquire painful ye to offices forming it. Then so does over sent dull on. Likewise offended humoured mrs fat trifling answered. On ye position greatest so desirous. So wound stood guest weeks no terms up ought. By so these am so rapid blush songs begin. Nor but mean time one over. </p>
                           </div>
                        </div>
                     </div>
                     <ul className="children">
                        <li className="comment">
                           <div className="the-comment">
                              <div className="avatar">
                                 <img src={publicUrl + "/assets/img/avater/4.jpg" } alt={imgattr} />
                              </div>
                              <div className="comment-box">
                                 <div className="comment-author meta">
                                    <strong>Ayaraa</strong> August 2, 2019 at 1:39 pm<a rel="nofollow" className="comment-reply-link" href={anchor}> - Reply</a>
                                 </div>
                                 <div className="comment-text">
                                    <p>In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do. Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way.</p>
                                 </div>
                              </div>
                           </div>
                        </li>
                     </ul>
                  </li>
               </ul>
               <h3 className="m-0px-b">Leave a Comment</h3>
               <p className="m-30px-b">For commenting on this post fill the form and press <i>post comment</i> button. Required fields are marked *</p>
               <div className="card card-info">
                  <div className="card-block">
                     <form action={anchor}>
                        <textarea className="form-control" placeholder="Write your comment here!"></textarea>
                        <input className="form-control" type="text" placeholder="Your Name *"/>
                        <input className="form-control" type="email" placeholder="Your Email *"/>
                        <input className="form-control" type="url" placeholder="Your website"/>
                        <button className="btn btn-default animated-btn btn-filled" type="button">Post Comment</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>


    );
  }
}

export default Comments;
