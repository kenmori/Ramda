import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'lodash';
import {Router, Route } from 'react-router';
import App from './App';



class Root extends Component {
    render() {
        // const api = function(a, b, c){
        //     return a + b + c;
        // };
        // const result = api("a", "b", "c");
        // console.log(result);

        const api = function(a, ops){
            const b = ops.b === undefined ? "b" : ops.b;
            const c = ops.c === undefined ? "c" : ops.c;
            return a + b + c;
        }
        const result = api("a", {b: undefined, c: "c"});
        console.log(result);




     return (
         <div>fa</div>
         )
    }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Root />, document.querySelector('main'));
})

