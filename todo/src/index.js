import React, { Component } from 'react';
import {ReactDOM} from 'react-dom';
import 'babel-polyfill';
import 'lodash';
import {Router, Route } from 'react-router';
import App from './App';



class Root extends Component {
    render(){
     return (

    <Router>
     <Route path="/" component={App} />
    </Router>
         )
    }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Root />, document.querySelector('main'));
})

