(function(t){function e(e){for(var r,a,o=e[0],l=e[1],c=e[2],f=0,d=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"22d7":function(t,e,n){"use strict";var r=n("be87"),i=n.n(r);i.a},"438f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Field")],1)},s=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t.isGame?r("div",{staticClass:"game"},[r("div",{staticClass:"head"},[r("span",[t._v("X:"+t._s(t.wins.X))]),r("h1",[t._v("Ходит:"+t._s(t.current))]),r("span",[t._v("O:"+t._s(t.wins.O))])]),r("div",{staticClass:"field"},t._l(t.field,(function(e,n){return r("div",{key:n,staticClass:"row"},t._l(e,(function(e,i){return r("div",{key:i,staticClass:"ceil",class:{x:"X"==t.field[n][i]},on:{click:function(e){return t.move(n,i)}}},[t._v(t._s(e))])})),0)})),0),r("button",{staticClass:"reset",on:{click:t.resetGame}},[t._v("Начать заново")]),r("button",{staticClass:"restart",on:{click:t.restartGame}},[t._v("Сбросить игру")])]):r("button",{staticClass:"start",on:{click:t.startGame}},[t._v("Начать игру")]),r("audio",{attrs:{id:"audio",src:n("e865")}}),r("Modal",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],on:{close:t.closeModal}},[t._v(t._s("X"==this.current?"O Выиграл!":"X Выиграл!"))])],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal-fade"}},[n("div",{staticClass:"modal-backdrop"},[n("div",{staticClass:"modal"},[n("section",{staticClass:"modal-body"},[t._t("default")],2),n("button",{attrs:{type:"button"},on:{click:t.close}},[t._v("Закрыть")])])])])},c=[],u={name:"modal",methods:{close:function(){this.$emit("close")}}},f=u,d=(n("22d7"),n("2877")),p=Object(d["a"])(f,l,c,!1,null,null,null),v=p.exports,h={components:{Modal:v},data:function(){return{field:m(10),current:"X",isGame:!1,wins:{X:0,O:0},isModalVisible:!1}},methods:{restartGame:function(){this.isGame=!1,this.current="X",this.wins={X:0,O:0}},resetGame:function(){this.field=m(10)},startGame:function(){this.isGame=!0,this.field=m(10)},move:function(t,e){if(""===this.field[t][e]){var n=document.getElementById("audio");n.pause(),n.currentTime=0,n.play(),this.field[t][e]=this.current;var r=b(this.field,this.current);r&&(this.isModalVisible=!0,this.wins[this.current]+=1,this.resetGame()),this.current="X"==this.current?"O":"X"}},closeModal:function(){this.isModalVisible=!1}}};function m(t){for(var e=[],n=0;n<t;n++){e.push([]);for(var r=0;r<t;r++)e[n][r]=""}return e}function b(t,e){for(var n=0;n<t.length;n++){for(var r=0,i=0,s=0,a=0;a<t.length;a++)t[n][a]==e&&t[n][a+1]==e&&(i+=1),t[a][n]==e&&t[a+1]&&t[a+1][n]==e&&(r+=1);if(4==i||4==r||4==s)return!0}for(var o,l=t.length,c=t[0].length,u=t.length,f=[],d=0;d<=2*(u-1);++d){o=[];for(var p=l-1;p>=0;--p){var v=d-(l-p);v>=0&&v<c&&o.push(t[v][p])}o.length>0&&f.push(o)}for(var h=0;h<f.length;h++){for(var m=0,b=0;b<f[h].length;b++)f[h][b]==e&&f[h][b+1]==e&&(m+=1);if(4==m)return!0}for(var _=0;_<=2*(u-1);++_){o=[];for(var g=l-1;g>=0;--g){var y=_-g;y>=0&&y<c&&o.push(t[y][g])}o.length>0&&f.push(o)}for(var w=0;w<f.length;w++){for(var O=0,M=0;M<f[w].length;M++)f[w][M]==e&&f[w][M+1]==e&&(O+=1);if(4==O)return!0}}var _=h,g=(n("6b18"),Object(d["a"])(_,a,o,!1,null,null,null)),y=g.exports,w={name:"App",components:{Field:y}},O=w,M=(n("034f"),Object(d["a"])(O,i,s,!1,null,null,null)),j=M.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(j)}}).$mount("#app")},"6b18":function(t,e,n){"use strict";var r=n("438f"),i=n.n(r);i.a},"85ec":function(t,e,n){},be87:function(t,e,n){},e865:function(t,e,n){t.exports=n.p+"tic-toc/media/move.ca6571b5.mp3"}});
//# sourceMappingURL=app.fc43c8f7.js.map