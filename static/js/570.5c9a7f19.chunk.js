"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[570],{570:function(e,n,t){t.r(n);var i=t(439),r=t(791),h=t(689),c=t(184);n.default=function(){var e=(0,h.UO)().kinoID,n=(0,r.useState)([]),t=(0,i.Z)(n,2),s=t[0],o=t[1];return(0,r.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmZhMGNmNDU5MDk1ZmY4MjI4MTQwNzRjZThhNzI1ZiIsInN1YiI6IjY1N2Y1N2ViNjdiNjEzMDU1MjhjODE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K9tYv4W2usSl9nJR0P-Aa5-DrVa1ZLviMJNryhZEts4"}}).then((function(e){return e.json()})).then((function(e){return o(e.results)})).catch((function(e){return console.error(e)}))}),[e]),(0,c.jsx)("div",{children:(0,c.jsxs)("ul",{children:[0===s.length&&(0,c.jsx)("p",{children:"There are no reviews :("}),0!==s.length&&s.map((function(e){return(0,c.jsxs)("div",{children:[(0,c.jsxs)("li",{children:["Author: ",e.author]}),(0,c.jsx)("p",{children:e.content})]},e.id)}))]})})}}}]);
//# sourceMappingURL=570.5c9a7f19.chunk.js.map