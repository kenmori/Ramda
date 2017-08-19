import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import 'lodash';


//ボタンの上部100pxぐらいから丸い玉が上に登って行くアニメーション
//ある程度したら玉が散らばる

//他のボタンを押したら非同期で同じアニメーションになる

//ボタンを押すたびに違う種類の大きさ色の花火が上がる
    //大きさが同じで色が違う
    //大きさが異なり、弾きかたが違う
    //上がる距離が違う


//つまずいたところ
//classListは読み込み専用。classList.add()とする
//座標 //windowから見た要素の左上位置の取得//clickした位置の座標を取得//bodyにやるといい
//要素にstyleを複数当てる方法。setAttributeだと一つ
//document.getElementById('divName').style.setProperty("top", "100px");
//window.getComputedStyle(element, null);


class Greet extends Component {
    constructor(){
        super();
        this.uchiage = this.uchiage.bind(this);
        this.createHanabi = this.createHanabi.bind(this);

    }
    componentDidMount(){
        document.body.addEventListener('click', this.uchiage)
    }
    createHanabi(x, y){
        var span = document.createElement('span');
        span.style.left = x + 'px';
        span.style.top = y + 'px';
        span.style.position = 'absolute';
        span.style.background = '#000';
        span.style.width = '10px';
        span.style.height = '10px';
        console.log(span)
        document.body.appendChild(span)


    }
    uchiage(e){
        var targetX = e.pageX;
        var targetY = e.pageY;
        this.createHanabi(targetX, targetY);

    }
 render(){
  return (
   <ul id='result'>
             <div id='js-view' className='view'></div>
         </ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

