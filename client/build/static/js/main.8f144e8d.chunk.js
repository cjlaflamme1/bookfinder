(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n(26),s=n.n(o),i=(n(33),n(34),n(35),n(11)),r=n(2),l=n(12);var d=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"single-book-display card","data-id":e.data.id,children:[e.data.imageLinks&&Object(a.jsx)("img",{className:"book-image card-img-top",src:e.data.imageLinks.thumbnail}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("div",{className:"book-title card-title",children:e.data.title}),Object(a.jsxs)("div",{className:"book-author card-subtitle",children:[e.data.authors[0]," || ",e.data.author]}),Object(a.jsx)("div",{className:"book-description card-text",children:e.data.description})]}),Object(a.jsx)("a",{className:"book-link btn btn-primary",href:e.data.infoLink,target:"_blank",children:"Learn More Here"})]})})},b=n(9),u=n.n(b);n(52).config();var j=function(e){return u.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"+intitle"))},h=function(e){return u.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"+inauthor"))},m=function(e){return u.a.post("/api/books",e)},v=function(e){return u.a.get("https://www.googleapis.com/books/v1/volumes/".concat(e))},f=function(){return u.a.get("/api/books")},x=function(e){return u.a.delete("/api/books/".concat(e))};var O=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useState)([]),o=Object(l.a)(n,2),s=o[0],i=o[1],r=function(e){e.preventDefault(),console.log(e.target.childNodes[0].dataset.id);var t=e.target.childNodes[0].dataset.id;v(t).then((function(e){console.log(e);var t=e.data,n=t.id,a=t.volumeInfo,c=Object(l.a)(a.authors,1)[0],o=a.description,s=a.imageLinks,i=a.infoLink,r=a.subtitle,d={id:n,title:a.title,author:c,description:o,imageLinks:s,infoLink:i,subtitle:r};console.log(d),m(d)}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"search-container d-flex justify-content-center border",children:[Object(a.jsx)("h4",{className:"m-2",children:"Book Search:"}),Object(a.jsxs)("form",{onSubmit:function(n){n.preventDefault(),"Title"===t.current.value?j(e.current.value).then((function(e){var t=[];console.log(e);var n=e.data.items;console.log(n),n.map((function(e){var n=e.id,a=e.volumeInfo,c=a.authors,o=void 0===c?["No Author Provided"]:c,s=a.description,i=void 0===s?"Description Not Provided":s,r=a.imageLinks,l=a.infoLink,d=a.subtitle,b=void 0===d?"Not Provided":d,u=a.title,j=void 0===u?"Not Provided":u;t.push({id:n,authors:o,description:i,imageLinks:r,infoLink:l,subtitle:b,title:j})})),console.log(t),i(t)})).catch((function(e){return console.log(e)})):h(e.current.value).then((function(e){var t=[];e.data.items.map((function(e){var n=e.id,a=e.volumeInfo,c=a.authors,o=void 0===c?["No Author Provided"]:c,s=a.description,i=void 0===s?"Description Not Provided":s,r=a.imageLinks,l=a.infoLink,d=a.subtitle,b=a.title;t.push({id:n,authors:o,description:i,imageLinks:r,infoLink:l,subtitle:d,title:b})})),console.log(t),i(t)})).catch((function(e){return console.log(e)}))},children:[Object(a.jsx)("input",{name:"searchContent",ref:e,className:"m-2"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{for:"searchMethod",className:"my-2",children:"Search by:"}),Object(a.jsxs)("select",{name:"searchMethod",id:"searchMethod",ref:t,className:"m-2",children:[Object(a.jsx)("option",{value:"Title",children:"Title"}),Object(a.jsx)("option",{value:"Author",children:"Author"})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-info",children:"Search"})]})]}),Object(a.jsx)("div",{className:"books-container row",children:s&&s.map((function(e){return Object(a.jsxs)("form",{onSubmit:r,className:"col-12 col-md-4 my-2",children:[Object(a.jsx)(d,{data:e}),Object(a.jsx)("button",{type:"submit",className:"btn btn-info",children:"Save"})]})}))})]})};var g=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){f().then((function(e){console.log(e.data),o(e.data)}))}),[]);var s=function(e){e.preventDefault(),console.log("buttons pressed");var t=e.target.childNodes[0].dataset.id;console.log("trying to delete ".concat(t)),x(t)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:" d-flex justify-content-center border",children:Object(a.jsx)("h4",{children:"Saved Books"})}),Object(a.jsxs)("div",{className:"books-container row",children:[console.log(n),n&&n.map((function(e){return Object(a.jsxs)("form",{onSubmit:function(){return s},className:"col-12 col-md-4 my-2",children:[Object(a.jsx)(d,{data:e}),Object(a.jsx)("button",{type:"submit",className:"btn btn-info",children:"Delete"})]})}))]})]})};var p=function(){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(a.jsx)("span",{className:"navbar-brand",children:"Google Book Finder"}),Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.b,{to:"/",className:"nav-link",children:"Search"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.b,{to:"/saved",className:"nav-link",children:"Saved Books"})})]})]})};var k=function(){return Object(a.jsxs)("div",{className:"jumbotron",children:[Object(a.jsx)("h1",{className:"display-4 text-center",children:"Google Book Finder"}),Object(a.jsx)("h3",{className:"lead text-center",children:"Search for books and save for later."})]})};var N=function(){return Object(a.jsxs)(i.a,{children:[Object(a.jsx)(p,{}),Object(a.jsx)(k,{}),Object(a.jsxs)(r.c,{children:[Object(a.jsx)(r.a,{exact:!0,path:"/",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(O,{})})}),Object(a.jsx)(r.a,{exact:!0,path:"/saved",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(g,{})})})]})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(a.jsx)(N,{}),document.getElementById("root")),L()}},[[64,1,2]]]);
//# sourceMappingURL=main.8f144e8d.chunk.js.map