import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import blogdata from './data/blogdata.json';
import Singleblogdata from './data/single-blogdata.json';
import Footerdata from './data/footerdata.json';

import Home from './components/Home';
import Header from './components/components-global/Header';
import Footer from './components/components-global/Footer';
import Blogfull from './components/components-blog/Blogfull';
import Blog2col from './components/components-blog/blog-2-col';
import Blog3col from './components/components-blog/blog-3-col';
import Blogfullleftsidebar from './components/components-blog/blog-full-left-sidebar';
import Blogfullrightsidebar from './components/components-blog/blog-full-right-sidebar';
import Singleblog from './components/components-blog/single-blog';
import Singleleftsidebar from './components/components-blog/single-left-sidebar';
import Singlerightsidebar from './components/components-blog/single-right-sidebar';

class Root extends Component {
    render(){
        return (
            <div>
                <Router>
                <HashRouter basename="/">
                    <div>
                    <Header />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/blog-full" render={ () => { return <Blogfull data={blogdata} /> } } />
                            <Route path="/blog-2-col" render={ () => { return <Blog2col data={blogdata} /> } } />
                            <Route path="/blog-3-col" render={ () => { return <Blog3col data={blogdata} /> } }  />
                            <Route path="/blog-full-left-sidebar" render={ () => { return <Blogfullleftsidebar data={blogdata} /> } } />
                            <Route path="/blog-full-right-sidebar" render={ () => { return <Blogfullrightsidebar data={blogdata} /> } }/>
                            <Route path="/single-blog" render={ () => { return <Singleblog data={Singleblogdata} /> } } />
                            <Route path="/single-left-sidebar" render={ () => { return <Singleleftsidebar data={Singleblogdata} /> } } />
                            <Route path="/single-right-sidebar" render={ () => { return <Singlerightsidebar data={Singleblogdata} /> } } />
                        </Switch>
                    <Footer data={Footerdata} />
                    </div>
                </HashRouter>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));