(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"http://kruelgames.com/media/img/games/whackthatmole/whackthatmole_logo.png",clicked:!1},{id:2,image:"http://kruelgames.com/media/img/games/whackthatmole/whackthatmole_mole1_icon.png",clicked:!1},{id:3,image:"https://cdn5.dibujos.net/dibujos/pintados/201041/ec98c8a3d49651262f81d306556a4ac1.png",clicked:!1},{id:4,image:"https://vignette.wikia.nocookie.net/bradlys-double-7/images/4/4b/Monty_Mole_BD7_Animated.png/revision/latest?cb=20170408154809",clicked:!1},{id:5,image:"https://st2.depositphotos.com/1029819/10704/v/950/depositphotos_107048044-stock-illustration-mole-in-a-hole-cartoon.jpg",clicked:!1},{id:6,image:"https://i.pinimg.com/originals/00/fd/1c/00fd1cbb06c002258754c4cdc1f12e8c.png",clicked:!1},{id:7,image:"https://vignette.wikia.nocookie.net/mario/images/a/a9/Monty_Maulwurf.JPG/revision/latest?cb=20080525065120&path-prefix=de",clicked:!1},{id:8,image:"http://kruelgames.com/media/img/games/whackthatmole/whackthatmole_mole2_icon.png",clicked:!1},{id:9,image:"https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/4b/75/9f/4b759f06-ee67-2d56-a469-3e507f27cb4d/source/512x512bb.jpg",clicked:!1},{id:10,image:"https://avatars.mds.yandex.net/get-pdb/245485/0b968b73-2a46-4d2c-b500-575f2c127ac4/orig",clicked:!1},{id:11,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5fYjA8fsVqLO37XicxoRoZBQk5qNnEwLgufBXc6oBp5S59Qk",clicked:!1},{id:12,image:"https://marketingcopilot.com/wp-content/uploads/2015/11/bigstock-Modern-Flat-Design-Mole-Icon-89586704-900x675.jpg",clicked:!1}]},,,,,,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(3),r=a.n(i),o=a(4),l=a(5),s=a(7),d=a(6),m=a(8),u=(a(14),function(e){return c.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),h=(a(16),function(e){return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",{className:"brand animated lightSpeedIn"},c.a.createElement("a",{href:"/clicky-game/"},e.title)),c.a.createElement("li",{id:"cur-sco"},"Score: ",e.score),c.a.createElement("li",{id:"top-sco"},"Highest Score: ",e.topScore),c.a.createElement("li",{id:"rw"},"Result: ",e.rightWrong)))}),g=(a(18),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),f=(a(20),function(e){return c.a.createElement("h1",{className:"title"},e.children)}),p=(a(22),function(e){return c.a.createElement("h5",{className:"footer"},e.children)}),k=function(e){return c.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},b=function(e){return c.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},S=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return c.a.createElement("div",{className:t},e.children)},v=a(1);a(24);var E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={characters:v,currentScore:0,topScore:0,rightWrong:"",clicked:[]},a.handleClick=function(e){-1===a.state.clicked.indexOf(e)?(a.handleIncrement(),a.setState({clicked:a.state.clicked.concat(e)})):a.handleReset()},a.handleIncrement=function(){var e=a.state.currentScore+1;a.setState({currentScore:e,rightWrong:""}),e>=a.state.topScore?a.setState({topScore:e}):12===e&&a.setState({rightWrong:"You win!"}),a.handleShuffle()},a.handleReset=function(){a.setState({currentScore:0,topScore:a.state.topScore,rightWrong:"Game Over!",clicked:[]}),a.handleShuffle()},a.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}(v);a.setState({characters:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(g,null,c.a.createElement(h,{title:"Whac-A-Mole",score:this.state.currentScore,topScore:this.state.topScore,rightWrong:this.state.rightWrong}),c.a.createElement(f,null,"Click on a character to gain scores, but don't click on it more than once!!!"),c.a.createElement(k,null,c.a.createElement(b,null,this.state.characters.map(function(t){return c.a.createElement(S,{size:"md-3 sm-6"},c.a.createElement(u,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))}))),c.a.createElement(p,null,"Copyright \xa9 2018.Jack Yang \u5091\u514b\u2022\u694a"))}}]),t}(n.Component);a(26);r.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.631e9bed.chunk.js.map