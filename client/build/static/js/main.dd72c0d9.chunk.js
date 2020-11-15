(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),i=n(26),a=n.n(i),s=(n(33),n(34),n(12)),r=n(2),l=n(9);var u=function(e){return Object(c.jsxs)(c.Fragment,{children:[console.log("BookDisplay rendered"),Object(c.jsxs)("div",{className:"single-book-display","data-id":e.data.id,children:[e.data.imageLinks&&Object(c.jsx)("img",{className:"book-image",src:e.data.imageLinks.thumbnail}),Object(c.jsx)("div",{className:"book-title",children:e.data.title}),Object(c.jsx)("div",{className:"book-author",children:e.data.authors}),Object(c.jsx)("div",{className:"book-description",children:e.data.description}),Object(c.jsx)("a",{className:"book-link",href:e.data.infoLink,target:"_blank",children:"Learn More Here"})]})]})},d=n(10),j=n.n(d);n(51).config();var b=function(e){return j.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"+intitle"))},h=function(e){return j.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"+inauthor"))},f=function(e){return j.a.post("/api/books",e)},O=function(e){return j.a.get("https://www.googleapis.com/books/v1/volumes/".concat(e))},m=function(){return j.a.get("/api/books")},v=function(e){return j.a.delete("/api/books/".concat(e))};var g=function(){var e=Object(o.useRef)(),t=Object(o.useRef)(),n=Object(o.useState)([]),i=Object(l.a)(n,2),a=i[0],s=i[1],r=function(e){e.preventDefault(),console.log(e.target.childNodes[0].dataset.id);var t=e.target.childNodes[0].dataset.id;O(t).then((function(e){console.log(e);var t=e.data,n=t.id,c=t.volumeInfo,o=Object(l.a)(c.authors,1)[0],i=c.description,a=c.imageLinks,s=c.infoLink,r=c.subtitle,u={id:n,title:c.title,author:o,description:i,imageLinks:a,infoLink:s,subtitle:r};console.log(u),f(u)}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"search-container",children:[Object(c.jsx)("h4",{children:"Book Search"}),Object(c.jsxs)("form",{onSubmit:function(n){n.preventDefault(),"Title"===t.current.value?b(e.current.value).then((function(e){var t=[];e.data.items.map((function(e){var n=e.id,c=e.volumeInfo,o=Object(l.a)(c.authors,1)[0],i=c.description,a=c.imageLinks,s=c.infoLink,r=c.subtitle,u=c.title;t.push({id:n,author:o,description:i,imageLinks:a,infoLink:s,subtitle:r,title:u})})),console.log(t),s(t)})).catch((function(e){return console.log(e)})):h(e.current.value).then((function(e){var t=[];e.data.items.map((function(e){var n=e.volumeInfo,c=Object(l.a)(n.authors,1)[0],o=n.description,i=n.imageLinks.thumbnail,a=n.infoLink,s=n.subtitle,r=n.title;t.push({author:c,description:o,image:i,infoLink:a,subtitle:s,title:r})})),console.log(t),s(t)})).catch((function(e){return console.log(e)}))},children:[Object(c.jsx)("input",{name:"searchContent",ref:e}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{for:"searchMethod",children:"Search by:"}),Object(c.jsxs)("select",{name:"searchMethod",id:"searchMethod",ref:t,children:[Object(c.jsx)("option",{value:"Title",children:"Title"}),Object(c.jsx)("option",{value:"Author",children:"Author"})]}),Object(c.jsx)("button",{type:"submit",children:"Search"})]})]}),Object(c.jsx)("div",{className:"books-container",children:a&&a.map((function(e){return Object(c.jsxs)("form",{onSubmit:r,children:[Object(c.jsx)(u,{data:e}),Object(c.jsx)("button",{type:"submit",children:"Save"})]})}))})]})};var x=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1];Object(o.useEffect)((function(){m().then((function(e){console.log(e.data),i(e.data)}))}),[]);var a=function(e){e.preventDefault();var t=e.target.childNodes[0].dataset.id;v(t)};return Object(c.jsxs)("div",{className:"books-container",children:[Object(c.jsx)("h4",{children:"Saved Books"}),console.log(n),n&&n.map((function(e){return Object(c.jsxs)("form",{onSubmit:a,children:[Object(c.jsx)(u,{data:e}),Object(c.jsx)("button",{type:"submit",children:"Delete"})]})}))]})};var p=function(){return Object(c.jsxs)("nav",{children:[Object(c.jsx)(s.b,{to:"/",children:"Search"}),Object(c.jsx)(s.b,{to:"/saved",children:"Saved Books"})]})};var k=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Google Book Finder"}),Object(c.jsx)("h3",{children:"Search for books and save for later."})]})};var L=function(){return Object(c.jsxs)(s.a,{children:[Object(c.jsx)(p,{}),Object(c.jsx)(k,{}),Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",children:Object(c.jsx)(g,{})}),Object(c.jsx)(r.a,{exact:!0,path:"/saved",children:Object(c.jsx)(x,{})})]})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))};a.a.render(Object(c.jsx)(L,{}),document.getElementById("root")),S()}},[[63,1,2]]]);
//# sourceMappingURL=main.dd72c0d9.chunk.js.map