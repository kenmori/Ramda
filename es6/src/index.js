import R from 'ramda';
import _ from 'lodash';
import equal from 'deep-equal';

const f = R.curry(R.add(1))
console.log(f(10));

var ff = (obj) => console.log(obj)
var resultff = R.tap(ff, {x: "kenji"});


var pathed = R.path(['a', 'e'], {a: {b: 2, c: 9}});
console.log(pathed);

var obj = {
    body: {
        data: {
            name: 'morita'
        }
    }
};
const func = R.pathOr('', ['body', 'data', 'name']);
console.log(func(obj));


var duplicate = n => [n, n];
R.chain(duplicate, [1,2,3]);


const square = (x) => Math.pow(x, 2);
const isEven = (x) => x % 2 === 0;
const numbers = _.range(200);
const result = _.chain(numbers).map(square).filter(isEven).take(3).value();

console.log(result);



// var rot13 = s =>
// s.replace(/[a-zA-Z]/g, c=> String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c -26)
// (c = c.charCodeAt(0) + 13) ? c : c - 26);

var discountCode = 'functional_js_50_off';
// rot13(discountCode);


var obj1 = {a: 'fafa', id: 133};
var obj2 = {a: 'fafa', id: 133, c: 'fa'};

var result2 = equal(obj1, obj2);
console.log(result2);


var response = [{"menuId":1625,"publishedAt":1503759600000,"displayLatestPublishedAt":null,"title":"あなたを好きか否か【あの人の本心】結論占「最後の決断と、恋運命」","path":"/menu/1625","fortunetellerName":"龍 輝","genre":"HIS_HEART","genreName":"あの人の気持ち","provider":"RENSA","providerName":"レンサ","baseCost":0,"cost":0,"discountSupplyGroup":null,"discountCatchLine":null,"thumbnailImageUrl":"https://ssl-stat.amebame.com/pub/content/3411589210/fortuneteller/menuIntroduction_30648526501331528.png","thumbnailImageAlt":"龍 輝","isOnlyGoldMember":true,"isMatch":true,"isNewMenu":true,"rankStatus":null,"contentType":"FREE","userRequired":{"requiredName":false,"requiredNameKana":true,"requiredBirthday":true,"requiredGender":true,"requiredBlood":false},"targetRequired":{"requiredName":false,"requiredNameKana":true,"requiredBirthday":true,"requiredGender":true,"requiredBlood":false},"isPurchased":false},{"menuId":16812,"publishedAt":1503673200000,"displayLatestPublishedAt":null,"title":"【政府公認◆衝撃的中占】あなたに課された使命/現状（今⇒10年後）","path":"/menu/16812","fortunetellerName":"宮幹藍后","genre":"LIFE","genreName":"人生総合","provider":"PRINCIPLE","providerName":"プリンシプル","baseCost":0,"cost":0,"discountSupplyGroup":null,"discountCatchLine":null,"thumbnailImageUrl":"https://ssl-stat.amebame.com/pub/content/3411589210/adviser/index1500527294954.jpg","thumbnailImageAlt":"宮幹藍后","isOnlyGoldMember":true,"isMatch":false,"isNewMenu":false,"rankStatus":null,"contentType":"FREE","userRequired":{"requiredName":false,"requiredNameKana":false,"requiredBirthday":true,"requiredGender":true,"requiredBlood":false},"targetRequired":{"requiredName":false,"requiredNameKana":false,"requiredBirthday":false,"requiredGender":false,"requiredBlood":false},"isPurchased":false},{"menuId":6457,"publishedAt":1503586800000,"displayLatestPublishedAt":null,"title":"【奇跡が起こる×恋成就者多数】当たり過ぎ占◆あの人の今の状況と変化","path":"/menu/6457","fortunetellerName":"ムーンプリンセス・妃弥子","genre":"HIS_HEART","genreName":"あの人の気持ち","provider":"RENSA","providerName":"レンサ","baseCost":0,"cost":0,"discountSupplyGroup":null,"discountCatchLine":null,"thumbnailImageUrl":"https://ssl-stat.amebame.com/pub/content/3411589210/adviser/index1442488787641.jpg","thumbnailImageAlt":"ムーンプリンセス・妃弥子","isOnlyGoldMember":true,"isMatch":true,"isNewMenu":false,"rankStatus":null,"contentType":"FREE","userRequired":{"requiredName":true,"requiredNameKana":true,"requiredBirthday":true,"requiredGender":true,"requiredBlood":false},"targetRequired":{"requiredName":true,"requiredNameKana":true,"requiredBirthday":true,"requiredGender":true,"requiredBlood":false},"isPurchased":false},{"menuId":3456,"publishedAt":1503500400000,"displayLatestPublishedAt":null,"title":"運命の人があなたに送るサイン","path":"/menu/3456","fortunetellerName":"ジェナ・プアラニ","genre":"MEETING","genreName":"出会い","provider":"CA_MOBILE","providerName":"シーエー・モバイル","baseCost":0,"cost":0,"discountSupplyGroup":null,"discountCatchLine":null,"thumbnailImageUrl":"https://ssl-stat.amebame.com/pub/content/3411589210/adviser/index1410425964290.png","thumbnailImageAlt":"ジェナ・プアラニ","isOnlyGoldMember":true,"isMatch":false,"isNewMenu":false,"rankStatus":null,"contentType":"FREE","userRequired":{"requiredName":true,"requiredNameKana":true,"requiredBirthday":true,"requiredGender":true,"requiredBlood":false},"targetRequired":{"requiredName":false,"requiredNameKana":false,"requiredBirthday":false,"requiredGender":false,"requiredBlood":false},"isPurchased":false}]
var response2 = [{"menuId":1625,"publishedAt":1503759600000,"displayLatestPublishedAt":null,"title":"あなたを好きか否か【あの人の本心】結論占「最後の決断と、恋運命」","path":"/menu/1625","fortunetellerName":"龍 輝","genre":"HIS_HEART","genreName":"あの人の気持ち","provider":"RENSA","providerName":"レンサ","baseCost":0,"cost":0,"discountSupplyGroup":null,"discountCatchLine":null,"thumbnailImageUrl":"https://ssl-stat.amebame.com/pub/content/3411589210/fortuneteller/menuIntroduction_30648526501331528.png","thumbnailImageAlt":"龍 輝","isOnlyGoldMember":true,"isMatch":true,"isNewMenu":true,"rankStatus":null,"contentType":"FREE","userRequired":{"requiredName":false,"requiredNameKana":true,"requiredBirthday":true,"requiredGender":true,"requiredBlood":false},"targetRequired":{"requiredName":false,"requiredNameKana":true,"requiredBirthday":true,"requiredGender":true,"requiredBlood":false},"isPurchased":false},{"menuId":16812,"publishedAt":1503673200000,"displayLatestPublishedAt":null,"title":"【政府公認◆衝撃的中占】あなたに課された使命/現状（今⇒10年後）","path":"/menu/16812","fortunetellerName":"宮幹藍后","genre":"LIFE","genreName":"人生総合","provider":"PRINCIPLE","providerName":"プリンシプル","baseCost":0,"cost":0,"discountSupplyGroup":null,"discountCatchLine":null,"thumbnailImageUrl":"https://ssl-stat.amebame.com/pub/content/3411589210/adviser/index1500527294954.jpg","thumbnailImageAlt":"宮幹藍后","isOnlyGoldMember":true,"isMatch":false,"isNewMenu":false,"rankStatus":null,"contentType":"FREE","userRequired":{"requiredName":false,"requiredNameKana":false,"requiredBirthday":true,"requiredGender":true,"requiredBlood":false},"targetRequired":{"requiredName":false,"requiredNameKana":false,"requiredBirthday":false,"requiredGender":false,"requiredBlood":false},"isPurchased":false},{"menuId":6457,"publishedAt":1503586800000,"displayLatestPublishedAt":null,"title":"【奇跡が起こる×恋成就者多数】当たり過ぎ占◆あの人の今の状況と変化","path":"/menu/6457","fortunetellerName":"ムーンプリンセス・妃弥子","genre":"HIS_HEART","genreName":"あの人の気持ち","provider":"RENSA","providerName":"レンサ","baseCost":0,"cost":0,"discountSupplyGroup":null,"discountCatchLine":null,"thumbnailImageUrl":"https://ssl-stat.amebame.com/pub/content/3411589210/adviser/index1442488787641.jpg","thumbnailImageAlt":"ムーンプリンセス・妃弥子","isOnlyGoldMember":true,"isMatch":true,"isNewMenu":false,"rankStatus":null,"contentType":"FREE","userRequired":{"requiredName":true,"requiredNameKana":true,"requiredBirthday":true,"requiredGender":true,"requiredBlood":false},"targetRequired":{"requiredName":true,"requiredNameKana":true,"requiredBirthday":true,"requiredGender":true,"requiredBlood":false},"isPurchased":false},{"menuId":3456,"publishedAt":1503500400000,"displayLatestPublishedAt":null,"title":"運命の人があなたに送るサイン","path":"/menu/3456","fortunetellerName":"ジェナ・プアラニ","genre":"MEETING","genreName":"出会い","provider":"CA_MOBILE","providerName":"シーエー・モバイル","baseCost":0,"cost":0,"discountSupplyGroup":null,"discountCatchLine":null,"thumbnailImageUrl":"https://ssl-stat.amebame.com/pub/content/3411589210/adviser/index1410425964290.png","thumbnailImageAlt":"ジェナ・プアラニ","isOnlyGoldMember":true,"isMatch":false,"isNewMenu":false,"rankStatus":null,"contentType":"FREE","userRequired":{"requiredName":true,"requiredNameKana":true,"requiredBirthday":true,"requiredGender":true,"requiredBlood":false},"targetRequired":{"requiredName":false,"requiredNameKana":false,"requiredBirthday":false,"requiredGender":false,"requiredBlood":false},"isPurchased":false}]

var result3 = equal(response, response2);
console.log(result3, 'result3');

//https://github.com/yukitos/notes/blob/master/A_recipe_for_a_functional_app/Railway%20oriented%20programming.md

var input1 = {name: '', email: ''};
var input2 = {name: 'morita', email: ''};
var input3 = {name: '', email: 'good' };

function validate1(input){
    return input.name === '' ? '名前を入力してください' : input;
}

function validate2(input){
    return input.name.length > 3  ? '4文字以上入力してください' : input;
}

function validate3(input){
    return input.name === '' ? '名前を入力してください' : input;
}

function bind(switch){
    return function(input){
        switch(input);
    }
}

var binded1 = bind(validate1);
var binded2 = bind(validate2);
var binded3 = bind(validate3);