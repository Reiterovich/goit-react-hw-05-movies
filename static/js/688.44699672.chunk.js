"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[688],{688:function(n,e,i){i.r(e),i.d(e,{default:function(){return N}});var t,r,c,s,o,a=i(861),l=i(439),h=i(757),u=i.n(h),d=i(791),p=i(689),f=i(87),j=i(168),x=i(924),m=x.ZP.button(t||(t=(0,j.Z)(["\n  width: 250px;\n  display: flex;\n  margin-bottom: 25px;\n  margin-top: 25px;\n"]))),v=x.ZP.main(r||(r=(0,j.Z)(["\n  display: flex;\n"]))),g=x.ZP.img(c||(c=(0,j.Z)(["\n  display: block;\n"]))),Z=x.ZP.div(s||(s=(0,j.Z)(["\n  margin-left: 10px;\n  max-width: 90%;\n"]))),w=x.ZP.div(o||(o=(0,j.Z)(["\n  margin-left: 20px;\n"])));function b(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmZhMGNmNDU5MDk1ZmY4MjI4MTQwNzRjZThhNzI1ZiIsInN1YiI6IjY1N2Y1N2ViNjdiNjEzMDU1MjhjODE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K9tYv4W2usSl9nJR0P-Aa5-DrVa1ZLviMJNryhZEts4"}}).then((function(n){return n.json()}))}var I=i(184),N=function(){var n,e,i=(0,d.useState)([]),t=(0,l.Z)(i,2),r=t[0],c=t[1],s=(0,p.UO)().kinoID,o=(0,p.TH)(),h=(0,d.useRef)(null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,d.useEffect)((function(){function n(){return(n=(0,a.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:b(s).then((function(n){return c(n)})).catch((function(n){return console.error(n)}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[s]),(0,I.jsxs)(Z,{children:[(0,I.jsx)(f.rU,{to:h.current,children:(0,I.jsx)(m,{children:"Back"})}),(0,I.jsxs)(v,{children:[(0,I.jsxs)("div",{children:[null!==r.poster_path&&(0,I.jsx)(g,{src:"https://image.tmdb.org/t/p/w500/".concat(r.poster_path),alt:"".concat(r.name),width:250}),null===r.poster_path&&(0,I.jsx)(g,{src:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",alt:"".concat(r.name),width:250})]}),(0,I.jsxs)(w,{children:[(0,I.jsx)("h2",{children:r.title}),(0,I.jsxs)("p",{children:["User score - ","".concat(r.vote_average)]}),(0,I.jsx)("h2",{children:"Owerview"}),(0,I.jsx)("p",{children:r.overview}),(0,I.jsx)("h3",{children:"Genres:"}),(0,I.jsx)("ul",{children:r.genres&&r.genres.map((function(n){return(0,I.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,I.jsxs)("div",{children:[(0,I.jsx)("h4",{children:"Additional information"}),(0,I.jsxs)("ul",{children:[(0,I.jsx)("li",{children:(0,I.jsx)(f.rU,{to:"cast",children:"Cast"})}),(0,I.jsx)("li",{children:(0,I.jsx)(f.rU,{to:"rewievs",children:"Reviwes"})})]})]}),(0,I.jsx)(d.Suspense,{fallback:(0,I.jsx)("div",{children:"Loading..."}),children:(0,I.jsx)(p.j3,{})})]})}},861:function(n,e,i){function t(n,e,i,t,r,c,s){try{var o=n[c](s),a=o.value}catch(l){return void i(l)}o.done?e(a):Promise.resolve(a).then(t,r)}function r(n){return function(){var e=this,i=arguments;return new Promise((function(r,c){var s=n.apply(e,i);function o(n){t(s,r,c,o,a,"next",n)}function a(n){t(s,r,c,o,a,"throw",n)}o(void 0)}))}}i.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=688.44699672.chunk.js.map