import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import 'lodash';

//nvm use 7.2.0

class Greet extends Component {
 render() {
  return (
   <ul id='result'></ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

