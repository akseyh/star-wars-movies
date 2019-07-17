(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n.p+"static/media/star-wars-logo.1b4306c0.png"},46:function(e,t,n){e.exports=n(67)},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),o=n.n(c),i=n(6),l=n(7),s=n(9),u=n(8),p=n(10),m=n(21),h=n(19),f=n(71),b=n(72),v=n(74),j=n(69),y=n(73),O=n(38),g=n.n(O);var d=function(){return r.a.createElement(v.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(m.b,{to:"/",className:"navbar-brand"},r.a.createElement(j.a,{src:g.a,width:"100px"})),r.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(y.a,{className:"mr-auto"},r.a.createElement(m.b,{to:"/movies",className:"nav-link"}," Movies "),r.a.createElement(m.b,{to:"/peoples",className:"nav-link"}," Peoples "),r.a.createElement(m.b,{to:"/planets",className:"nav-link"}," Planets "),r.a.createElement(m.b,{to:"/starships",className:"nav-link"}," Starships "))))};var E=function(){return r.a.createElement("div",null,"HomePage")},w=n(12),k=n(75),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.title;return r.a.createElement(k.a,{bg:"dark",text:"white",style:{margin:"5px",width:"10rem",height:"10rem",float:"left"}},r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,e)))}}]),t}(r.a.Component),C=n(70),P=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getMoviesList",value:function(){return new Promise(function(e,t){fetch("https://swapi.co/api/films/?format=json").then(function(t){return e(t.json())})})}},{key:"componentWillMount",value:function(){var e=this;this.getMoviesList().then(function(t){e.setState(function(e){return{movies:[].concat(Object(w.a)(e.movies),Object(w.a)(t.results))}})})}},{key:"render",value:function(){var e=this.state.movies;return console.log(e),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},e.length?e.map(function(e,t){return r.a.createElement(x,{key:t,title:e.title})}):r.a.createElement(C.a,{animation:"grow"}))}}]),t}(r.a.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.name;return r.a.createElement(k.a,{bg:"dark",text:"white",style:{margin:"5px",width:"10rem",height:"10rem",float:"left"}},r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,e)))}}]),t}(r.a.Component),L=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={peoples:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getPeoplesList",value:function(e){return new Promise(function(t,n){fetch("https://swapi.co/api/people/?page="+e).then(function(e){return t(e.json())})})}},{key:"componentWillMount",value:function(){for(var e=this,t=1;t<10;t++)this.getPeoplesList(t).then(function(t){e.setState(function(e){return{peoples:[].concat(Object(w.a)(e.peoples),Object(w.a)(t.results))}})})}},{key:"render",value:function(){var e=this.state.peoples;return console.log(e),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},e.length?e.map(function(e,t){return r.a.createElement(W,{key:t,name:e.name})}):r.a.createElement(C.a,{animation:"grow"}))}}]),t}(r.a.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.name;return r.a.createElement(k.a,{bg:"dark",text:"white",style:{margin:"5px",width:"10rem",height:"10rem",float:"left"}},r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,e)))}}]),t}(r.a.Component),S=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={planets:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getPlanetsList",value:function(e){return new Promise(function(t,n){fetch("https://swapi.co/api/planets/?page="+e).then(function(e){return t(e.json())})})}},{key:"componentWillMount",value:function(){for(var e=this,t=1;t<8;t++)this.getPlanetsList(t).then(function(t){e.setState(function(e){return{planets:[].concat(Object(w.a)(e.planets),Object(w.a)(t.results))}})})}},{key:"render",value:function(){var e=this.state.planets;return console.log(e),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},e.length?e.map(function(e,t){return r.a.createElement(M,{key:t,name:e.name})}):r.a.createElement(C.a,{animation:"grow"}))}}]),t}(r.a.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.name;return r.a.createElement(k.a,{bg:"dark",text:"white",style:{margin:"5px",width:"10rem",height:"10rem",float:"left"}},r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,e)))}}]),t}(r.a.Component),N=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={starships:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getStarshipsList",value:function(e){return new Promise(function(t,n){fetch("https://swapi.co/api/starships/?page="+e).then(function(e){return t(e.json())})})}},{key:"componentWillMount",value:function(){for(var e=this,t=1;t<5;t++)this.getStarshipsList(t).then(function(t){e.setState(function(e){return{starships:[].concat(Object(w.a)(e.starships),Object(w.a)(t.results))}})})}},{key:"render",value:function(){var e=this.state.starships;return console.log(e),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},e.length?e.map(function(e,t){return r.a.createElement(B,{key:t,name:e.name})}):r.a.createElement(C.a,{animation:"grow"}))}}]),t}(r.a.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(m.a,null,r.a.createElement(b.a,null,r.a.createElement(d,null)),r.a.createElement(b.a,null,r.a.createElement(h.a,{component:E,exact:!0,path:"/"}),r.a.createElement(h.a,{component:P,path:"/movies"}),r.a.createElement(h.a,{component:L,path:"/peoples"}),r.a.createElement(h.a,{component:S,path:"/planets"}),r.a.createElement(h.a,{component:N,path:"/starships"}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.537b3533.chunk.js.map