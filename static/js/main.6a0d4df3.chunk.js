(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(t,e,s){t.exports={title:"FeedbackOptionsStyles_title__1sYlJ",btnList:"FeedbackOptionsStyles_btnList__23kfy",btnListItem:"FeedbackOptionsStyles_btnListItem__3FYFI",btn:"FeedbackOptionsStyles_btn__2OozB"}},function(t,e,s){t.exports={title:"StatisticsStyles_title__3VQXQ",statList:"StatisticsStyles_statList__2BmjQ",statListItem:"StatisticsStyles_statListItem__2IToT"}},,,,function(t,e,s){t.exports={section:"SectionStyles_section__2JnqO"}},function(t,e,s){t.exports={notification:"NotificationStyles_notification__nFHID"}},,,,,function(t,e,s){},,,function(t,e,s){"use strict";s.r(e);var a=s(1),n=s.n(a),c=s(6),i=s.n(c),l=(s(13),s(4)),o=s(2),b=s.n(o),r=s(0);var j=function(t){var e=t.onFeedbackButtonClick;return Object(r.jsxs)("ul",{className:b.a.btnList,children:[Object(r.jsx)("li",{className:b.a.btnListItem,children:Object(r.jsx)("button",{type:"button",className:b.a.btn,onClick:e,children:"Good"})}),Object(r.jsx)("li",{className:b.a.btnListItem,children:Object(r.jsx)("button",{type:"button",className:b.a.btn,onClick:e,children:"Neutral"})}),Object(r.jsx)("li",{className:b.a.btnListItem,children:Object(r.jsx)("button",{type:"button",className:b.a.btn,onClick:e,children:"Bad"})})]})},d=s(3),u=s.n(d);var O=function(t){var e=t.stats,s=e.good,a=e.neutral,n=e.bad,c=e.total,i=e.positiveFeedback;return Object(r.jsxs)("ul",{className:u.a.statList,children:[Object(r.jsxs)("li",{className:u.a.statListItem,children:["Good: ",s]}),Object(r.jsxs)("li",{className:u.a.statListItem,children:["Neutral: ",a]}),Object(r.jsxs)("li",{className:u.a.statListItem,children:["Bad: ",n]}),Object(r.jsxs)("li",{className:u.a.statListItem,children:["Total: ",c]}),Object(r.jsxs)("li",{className:u.a.statListItem,children:["Positive feedback: ",i,"%"]})]})},h=s(7),m=s.n(h);var f=function(t){var e=t.title,s=t.children;return Object(r.jsxs)("section",{className:m.a.section,children:[Object(r.jsx)("h2",{children:e}),s]})},x=s(8),k=s.n(x);var _=function(){return Object(r.jsx)("p",{className:k.a.notification,children:"No feedback given"})};var p=function(){var t=Object(a.useState)(0),e=Object(l.a)(t,2),s=e[0],n=e[1],c=Object(a.useState)(0),i=Object(l.a)(c,2),o=i[0],b=i[1],d=Object(a.useState)(0),u=Object(l.a)(d,2),h=u[0],m=u[1],x=s+o+h;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(f,{title:"Please leave feedback",children:Object(r.jsx)(j,{title:"Please leave feedback",onFeedbackButtonClick:function(t){switch(t.preventDefault(),t.target.textContent){case"Good":n(s+1);break;case"Neutral":b(o+1);break;case"Bad":m(h+1);break;default:return}}})}),Object(r.jsx)(f,{title:"Statistics",children:0===x?Object(r.jsx)(_,{}):Object(r.jsx)(O,{title:"Statistics",stats:function(){var t=s+o+h,e=0===t?0:Math.round(s/t*100);return{good:s,neutral:o,bad:h,total:t,positiveFeedback:e}}()})})]})},L=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(e){var s=e.getCLS,a=e.getFID,n=e.getFCP,c=e.getLCP,i=e.getTTFB;s(t),a(t),n(t),c(t),i(t)}))};s(15),i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),L()}],[[16,1,2]]]);
//# sourceMappingURL=main.6a0d4df3.chunk.js.map