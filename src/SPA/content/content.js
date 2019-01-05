import React from 'react';
import Home from './home';
import About from './about';
import Contact from './contact';
import Blog from './blog';

import {Switch,Route} from "react-router-dom"

class Content extends React.Component {
    
    render() { 
        return ( 
                <switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/blog" component={Blog} />


                </switch>

         );
    }
}
 
export default Content;