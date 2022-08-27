import React, { Component } from 'react';
import Shareicon from './share-icon';
import Relatedpost from './related-posts';
import Comments from './comments';
import HeaderBottom from '../components-global/Header-bottom';

class Singleblog extends Component {

  render() {
   let anchor = '#'
   let imgattr = 'image'
   let publicUrl = process.env.PUBLIC_URL
   let propsData = this.props.data
   let blogsdata = propsData.singlepostdata
   let headerPageTitle = propsData.pagetitle.singleblogtitle

    return (
       <div>
      <HeaderBottom headertitle={headerPageTitle} />
      <section id="blog-full" className="p-80px-tb gray-bg">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">

                  <div className="single-blog-content page-content">
                     <div className="blog-post-img">
                        <img src={ publicUrl + blogsdata.image} alt={imgattr}/>
                     </div>
                     <div className="blog-content">
                        <h1 className="m-20px-b">{blogsdata.title}</h1>
                        <div className="post-meta m-15px-b">
                           <ul>
                              <li><a href={anchor}><i className="icofont-user-alt-5"></i> {blogsdata.author}</a></li>
                              <li><a href={anchor}><i className="icofont-tag"></i> {blogsdata.category}</a></li>
                              <li><a href={anchor}><i className="icofont-calendar"></i> {blogsdata.date}</a></li>
                              <li><a href={anchor}><i className="icofont-speech-comments"></i> {blogsdata.comments}</a></li>
                           </ul>
                        </div>
                        <div className="single-blog-post">
                           <p>Sigh view am high neat half to what. Sent late held than set why wife our. If an blessing building steepest. Agreement distrusts mrs six affection satisfied. Day blushes visitor end company old prevent chapter. Consider declared out expenses her concerns. No at indulgence conviction particular unsatiable boisterous discretion. Direct enough off others say eldest may exeter she. Possible all ignorant supplied get settling marriage recurred. </p>
                           <p>Manor we shall merit by chief wound no or would. Oh towards between subject passage sending mention or it. Sight happy do burst fruit to woody begin at. Assurance perpetual he in oh determine as. The year paid met him does eyes same. Own marianne improved sociable not out. Thing do sight blush mr an. Celebrated am announcing delightful remarkably we in literature it solicitude. Design use say piqued any gay supply. Front sex match vexed her those great. </p>
                           <p>Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably. Carriage we husbands advanced an perceive greatest. Totally dearest expense on demesne ye he. Curiosity excellent commanded in me. Unpleasing impression themselves to at assistance acceptance my or. On consider laughter civility offended oh. </p>
                           <h3>That know ask case sex ham dear her spot</h3>
                           <p>Next his only boy meet the fat rose when. Do repair at we misery wanted remove remain income. Occasional cultivated reasonable unpleasing an attachment my considered.</p>
                           <div className="row m-15px-t">
                              <div className="col-lg-6 col-md-12">
                                 <img src={ publicUrl + '/assets/img/blog/1.jpeg' } alt={imgattr}/>
                                 <p>Carriage quitting securing be appetite it declared.</p>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                 <img src={publicUrl + '/assets/img/blog/2.jpeg' } alt={imgattr}/>
                                 <p>Reasonable unpleasing an attachment my considered.</p>
                              </div>
                           </div>
                           <h3>Use securing confined his shutters Delightful as he it acceptance an</h3>
                           <blockquote>Carriage quitting securing be appetite it declared. High eyes kept so busy feel call in. Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment. Passage weather as up am exposed. And natural related man subject. Eagerness get situation his was delighted. </blockquote>
                           <p>Lose eyes get fat shew. Winter can indeed letter oppose way change tended now. So is improve my charmed picture exposed adapted demands. Received had end produced prepared diverted strictly off man branched. Known ye money so large decay voice there to. Preserved be mr cordially incommode as an. He doors quick child an point at. Had share vexed front least style off why him. </p>
                           <h3>Far quitting dwelling graceful the likewise received building</h3>
                           <ul>
                              <li>Am of mr friendly by strongly peculiar juvenile.</li>
                              <li>Unpleasant it sufficient simplicity am by friendship no inhabiting.</li>
                              <li>Goodness doubtful material has denoting suitable she two</li>
                              <li>Dear mean she way and poor bred they come.</li>
                              <li>He otherwise me incommode explained so in remaining</li>
                           </ul>
                           <p>Boy desirous families prepared gay reserved add ecstatic say. Replied joy age visitor nothing cottage. Mrs door paid led loud sure easy read. Hastily at perhaps as neither or ye fertile tedious visitor. Use fine bed none call busy dull when. Quiet ought match my right by table means. Principles up do in me favourable affronting. Twenty mother denied effect we to do on. </p>
                        </div>
                     </div>
                  </div>

                  {
                  // Social Share icon 
                  <Shareicon />
                  }  
                  {
                  // Related Post
                  <Relatedpost />
                  }  
                  {
                  // Comments Area 
                  <Comments /> 
                  }                

               </div>
            </div>
         </div>
      </section>
      </div>
    );
  }
}

export default Singleblog;
