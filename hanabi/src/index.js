import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import anime from 'animejs';
import 'lodash';
import R from 'ramda';


//ボタンの上部100pxぐらいから丸い玉が上に登って行くアニメーション
//ある程度したら玉が散らばる

//他のボタンを押したら非同期で同じアニメーションになる

//ボタンを押すたびに違う種類の大きさ色の花火が上がる
    //大きさが同じで色が違う
    //大きさが異なり、弾きかたが違う
    //上がる距離が違う


//note
//classListは読み込み専用。classList.add()とする
//座標 //windowから見た要素の左上位置の取得//clickした位置の座標を取得//bodyにやるといい
//要素にstyleを複数当てる方法。setAttributeだと一つ
//document.getElementById('divName').style.setProperty("top", "100px");
//window.getComputedStyle(element, null);
//プラスの数値をマイナスにして文字列で返す
//documentFragment
//rangeをネイティブでどう作るか
//document.getElementById取得後のnodeListをArrayとして扱う
//擬似クラス(pseudo-element)をJSで扱う


class Greet extends Component {
    constructor(){
        super();
        this.uchiage = this.uchiage.bind(this);
        this.createHanabi = this.createHanabi.bind(this);
        this.animationUp = this.animationUp.bind(this);
        this.createSpan = this.createSpan.bind(this);
        this.hanabiCSSSet = this.hanabiCSSSet.bind(this);
        this.state = {
            id : 0
        }

    }
    componentDidMount(){
        document.body.addEventListener('click', this.uchiage)
    }
    createHanabi(x, y){
        var span = document.createElement('span');
        span.style.left = x + 'px';
        span.style.top = y + 'px';
        span.style.background = '#000';
        span.classList.add('spanUp');
        span.id = this.state.id + 1;
        this.setState({id: this.state.id + 1});
        console.log(span);
        document.body.appendChild(span);
        this.animationUp(span.id, this.createSpan(R.range(1, 9)));
    }
    hanabiCSSSet(){

    }
    createSpan (value){
        var df = document.createDocumentFragment();
        for (var i = 0; i <= value.length; i++){
            var span = document.createElement('span');
            var div = document.createElement('div');
            div.classList.add('move');
            // span.classList.add('default');
            span.classList.add('span' + i);
            if(i === 0) span.classList.add('deg0');
            else if (i === 1) span.classList.add('deg45');
            else if (i === 2) span.classList.add('deg90');
            else if (i === 3) span.classList.add('deg135');
            else if (i === 4) span.classList.add('deg180');
            else if (i === 5) span.classList.add('deg225');
            else if (i === 6) span.classList.add('deg270');
            else if (i === 7) span.classList.add('deg315');
            else if(i === 8) span.classList.add('deg360');
            df.appendChild(span);
        }
        var iddom = document.getElementById(this.state.id);
        div.appendChild(df);
        iddom.appendChild(div);
        return iddom;
    }

    animationUp(id, elem){
        var span = document.getElementById(id);
        var val = Math.floor(Math.random() * 10);
        if(val === 0 || 1 ){
            val = 3;
        }

        var value = val * -100;

        var basicTimeline = anime.timeline();
        basicTimeline.add({
            targets: span,
            translateY: [
                {value: value, duration: 1200}
            ],
            rotate: '1turn',
            easing: 'linear',
            complete: function(){
                console.log(this.animatables[0].target.id)
                var fa = document.getElementById(this.animatables[0].target.id);
                Array.from(fa.childNodes).map((elem, i)=>{
                    elem.classList.add('default');
                });
            }
        }).add({
            targets: elem.children,
            translateY: [
                {value: value, duration: 1200}
            ]

        })
    }
    uchiage(e){
        var targetX = e.pageX;
        var targetY = e.pageY;
        this.createHanabi(targetX, targetY);
    }
 render(){
     console.log(anime);
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

