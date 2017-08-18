import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import 'lodash';


class Greet extends Component {
 render() {

  var stream = {
   match: (data, pattern) => {
       return data(pattern);
      },
  empty: (_) => {
   return (pattern) => {
    return pattern.empty();
   }
  },
  cons: (head, tailThunk) => {
   return (pattern) => {
    return pattern.cons(head, tailThunk);
   }
  },
  head: (aStream) => {
   return stream.match(aStream, {
    empty: (_) => {return null;},
    cons: (value, tailThunk) => {return value;}
   });
  },
  tail: (aStream) => {
   return stream.match(aStream, {
    empty: (_) => {return null;},
   cons: (head, tailThunk) => {
    return tailThunk();
   }
   })
  }

  }
  var theStream = staream.cons(1, (_)=>{
       return stream.cons(2, (_)=>{
        return stream.empty();
       })
      })
  return (
   <ul id='result'></ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

