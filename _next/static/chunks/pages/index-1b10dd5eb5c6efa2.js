(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5970)}])},5970:function(e,n,r){"use strict";r.r(n);var o=r(5893),t=r(9137),i=r(9008),d=r(7294),s=r(28),c=r(1163),l=r(1664);n.default=function(){var e=(0,s.g)(),n=e.fetchNotes,r=e.createNote,u=e.note,a=e.notes,h=(0,c.useRouter)();return(0,d.useEffect)((function(){n()}),[]),(0,d.useEffect)((function(){u&&h.push("/notes/"+(null===u||void 0===u?void 0:u.id))}),[u]),(0,o.jsxs)(t.Z,{children:[(0,o.jsx)(i.default,{children:(0,o.jsx)("title",{children:"MyNote - Notes"})}),(0,o.jsxs)("div",{className:"m-2 sm:m-6 max-w-7xl p-6 overflow-hidden shadow-sm rounded-lg bg-white border border-gray-200",children:[(0,o.jsx)("button",{className:"p-3 m-6 rounded transition duration-500 hover:opacity-50 border border-gray-200 bg-gray-100",onClick:function(){r().then((function(){}))},children:"create new note"}),(0,o.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 mt-6",children:a.map((function(e){return(0,o.jsx)(l.default,{href:"/notes/"+e.id,children:(0,o.jsx)("div",{className:"p-7 mx-6 mb-6 rounded overflow-hidden shadow-lg transition duration-500 hover:opacity-50 cursor-pointer border border-gray-200 h-32",children:(0,o.jsx)("p",{className:"overflow-hidden h-full line-clamp-3",children:e.title})})},"note"+e.id)}))})]})]})}}},function(e){e.O(0,[101,548,189,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);