(this.webpackJsonpgithubfetcher=this.webpackJsonpgithubfetcher||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),s=a.n(c),l=(a(11),a(2)),o=a.n(l),i=a(3),m=a(1);function u(e){var t=e.goFetch,a=Object(n.useState)(""),c=Object(m.a)(a,2),s=c[0],l=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(s),l("")},className:"mainInput"},r.a.createElement("input",{className:"input",type:"text",placeholder:"input GitHub handle",onChange:function(e){return l(e.target.value)},value:s}),r.a.createElement("button",{className:"submit",type:"submit"},"Submit"))}function p(e){var t=e.handle,a=e.userInfo,n=e.getRepos;return a?r.a.createElement("div",{className:"centered"},r.a.createElement("div",{className:"profileCard"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{src:a.avatar_url})),r.a.createElement("div",{className:"aligned"},r.a.createElement("div",{className:"handle"},t)),r.a.createElement("div",{className:"name"},a.name),r.a.createElement("div",{className:"followers"},"Followers: ",a.followers),r.a.createElement("div",{className:"repos"},"Repos: ",a.public_repos),r.a.createElement("div",{className:"url"},"URL: ",a.html_url),r.a.createElement("div",{className:"aligned"},r.a.createElement("button",{onClick:function(){n(a.repos_url)},className:"seeRepos"},"See Repos")))):r.a.createElement("div",{className:"centered"},r.a.createElement("div",{className:"profileCard"},r.a.createElement("div",{className:"aligned"},"Profile Not Found")))}function d(e){var t=e.repo;return r.a.createElement("div",{className:"repoView"},r.a.createElement("a",{href:t.html_url},t.name))}function v(){var e=Object(n.useState)(),t=Object(m.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(),l=Object(m.a)(s,2),v=l[0],f=l[1],E=Object(n.useState)(),h=Object(m.a)(E,2),b=h[0],N=h[1],g=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching: ",t),e.next=3,fetch("https://api.github.com/users/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,console.log("User Data: ",n),c(t),f(n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getting repos from : ",t),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,console.log("back from the interwebs with: ",n),N(n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"centered"},r.a.createElement("div",{className:"titleWrapper"},r.a.createElement("div",{className:"mainTitle"},"Welcome to GitHub Fetcher"),r.a.createElement(u,{goFetch:g}))),v&&"Not Found"===v.message?r.a.createElement(p,null):v&&r.a.createElement(p,{handle:a,userInfo:v,getRepos:j}),r.a.createElement("div",null,b&&r.a.createElement("div",{className:"repoWrapper"},r.a.createElement("div",{className:"activeRepos"},"Active Repos: "),b.map((function(e){return r.a.createElement(d,{repo:e,key:e.id})})))))}s.a.render(r.a.createElement(v,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.553d266c.chunk.js.map