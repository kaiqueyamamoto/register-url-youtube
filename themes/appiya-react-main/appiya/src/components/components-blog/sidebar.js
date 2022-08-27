import React, { Component } from 'react';
import widgetdata from '../../data/widgetdata.json';

class Sidebar extends Component {
  render() {
   let imgattr = 'image'
   let publicUrl = process.env.PUBLIC_URL

    return (
      <aside className="col-lg-4 md-p-25px-t">
         <div className="p-30px-l sm-p-0px-l md-p-0px-l">

            <div className="single-widget">
               <h3>{widgetdata.search.title}</h3>
               <div className="search">
                  <input className="form-control" type="text" placeholder="Search..."/>
               </div>
            </div>

            <div className="single-widget">
               <h3>{widgetdata.categorywidget.title}</h3>
               <ul>
                  {widgetdata.categorywidget.listitems.map( ( value, index ) => {
                     return <li key={index}><a href={value.url}>{value.item}</a></li>
                  } )}
               </ul>
            </div>

            <div className="single-widget">
               <h3>{widgetdata.quicklinks.title}</h3>
               <ul>
               {widgetdata.quicklinks.listitems.map( ( value, index ) => {
                     return <li key={index}><a href={value.url}>{value.item}</a></li>
               } )}
               </ul>
            </div>

            <div className="single-widget">
               <h3>{widgetdata.latestposts.title}</h3>
               <ul className="recent-post">
               {widgetdata.latestposts.listitems.map( ( value, index ) => {
                     return <li key={index}><a href={value.url}>{value.item}</a></li>
               } )}
               </ul>
            </div>

            <div className="single-widget">
               <h3>{widgetdata.tagscloud.title}</h3>
               <ul className="tags-cloud">
               {widgetdata.tagscloud.listitems.map( ( value, index ) => {
                     return <li key={index}><a href={value.url}>{value.item}</a></li>
               } )}
               </ul>
            </div>

            <div className="single-widget add-banner">
               <a href={widgetdata.addimage.url}>
               <img src={publicUrl + widgetdata.addimage.imageurl} alt={imgattr}/>
               </a>
            </div>

         </div>
      </aside>
    );
  }
}

export default Sidebar;
