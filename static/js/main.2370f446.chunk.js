(this.webpackJsonpslyttle=this.webpackJsonpslyttle||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),i=a(5),o=a.n(i),u=a(7),s=a(1),m=a(8),d=a.n(m).a.client("https://slyttlecom.cdn.prismic.io/api/v2");var p=function(e){var t=e.aboutActive,a=e.updateAboutActive,n=e.thumbsActive,l=e.contactActive,c=e.toggleModals;return r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("a",{href:"/",title:"Scott Lyttle"},"Scott Lyttle")),r.a.createElement("div",null,!t&&r.a.createElement("span",{className:"link about-toggle",onClick:function(){return a(!0)}},"About"),(t||n||l)&&r.a.createElement("div",{className:"overlay-toggle link",onClick:function(){c()}},r.a.createElement("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M25 1L1 25",stroke:"black",strokeWidth:"1.5",strokeLinejoin:"round"}),r.a.createElement("path",{d:"M1 1L25 25",stroke:"black",strokeWidth:"1.5",strokeLinejoin:"round"})))))};var h=function(e){var t=e.updateContactActive,a=e.openThumbs;return r.a.createElement("footer",null,r.a.createElement("div",{className:"link contact-toggle",onClick:function(){return t(!0)}},r.a.createElement("svg",{width:"30",height:"25",viewBox:"0 0 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("rect",{x:"0.75",y:"0.75",width:"28.5",height:"23.5",stroke:"black",strokeWidth:"1.5"}),r.a.createElement("path",{d:"M1 4L14.6746 15.7211C14.8618 15.8816 15.1382 15.8816 15.3254 15.7211L29 4",stroke:"black",strokeWidth:"1.5"}))),r.a.createElement("div",{className:"link thumbs-toggle",onClick:function(){return a()}},r.a.createElement("svg",{width:"30",height:"26",viewBox:"0 0 30 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("rect",{x:"0.75",y:"0.75",width:"28.5",height:"24.5",stroke:"black",strokeWidth:"1.5"}),r.a.createElement("line",{x1:"10.75",y1:"1",x2:"10.75",y2:"26",stroke:"black",strokeWidth:"1.5"}),r.a.createElement("line",{x1:"19.75",y1:"1",x2:"19.75",y2:"26",stroke:"black",strokeWidth:"1.5"}),r.a.createElement("line",{y1:"9.03265",x2:"28.75",y2:"9.03265",stroke:"black",strokeWidth:"1.5"}),r.a.createElement("line",{y1:"16.6412",x2:"28.75",y2:"16.6412",stroke:"black",strokeWidth:"1.5"}))))},v=a(9),f=a(10),E=a.n(f),b=a(3);var w=function(e){var t=e.slideData,a=e.slug,n=e.name,l=e.idx,c=t.primary,i=t.slice_type,o=c.image_one,u=c.text,s=window.innerWidth<=500?825:window.innerWidth>500&&window.innerWidth<1300?1011:1350,m=window.innerWidth<=500?550:window.innerWidth>500&&window.innerWidth<1300?675:900;return r.a.createElement("div",{"data-hash":"".concat(a,"-").concat(l+1),className:"swiper-slide ".concat("text"===i&&"slide-has-text"),"data-caption":o?o.alt:"","data-collection":n},r.a.createElement("div",null,"text"===i?r.a.createElement("div",{className:"slide-text"},r.a.createElement(b.RichText,{render:u})):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{alt:"","data-src":"".concat(o.url,"&fit=clip&w=").concat(s,"&h=").concat(m),className:"swiper-lazy"}),r.a.createElement("div",{className:"swiper-lazy-preloader"}))))};var C=function(e){var t=e.id,a=e.data.find((function(e){return e.id===t})),n=a.uid;return r.a.createElement(r.a.Fragment,null,a.data.body.map((function(e,t){return r.a.createElement(w,{key:t,idx:t,slug:n,name:a.data.name,slideData:e})})))};var g=function(){return r.a.createElement("div",{className:"swiper-button-prev"},r.a.createElement("svg",{width:"51",height:"36",viewBox:"0 0 51 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("line",{x1:"50.1445",y1:"18.0001",x2:"2.14453",y2:"18.0001",stroke:"black",strokeWidth:"1.5"}),r.a.createElement("path",{d:"M19 0.999978L2 18L19 35",stroke:"black",strokeWidth:"1.5"})))};var k=function(){return r.a.createElement("div",{className:"swiper-button-next"},r.a.createElement("svg",{width:"50",height:"36",viewBox:"0 0 50 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("line",{y1:"18",x2:"48",y2:"18",stroke:"black",strokeWidth:"1.5"}),r.a.createElement("path",{d:"M31.1445 35.0001L48.1445 18.0001L31.1445 1.00004",stroke:"black",strokeWidth:"1.5"})))};var y=function(e){var t=e.portfolioList,a=e.portfolios,n=e.goToSlide;return r.a.createElement("div",{className:"thumbs-container"},r.a.createElement("div",{className:"thumbs-inner"},function(e,t,a){var n=0;return e.data.portfolios.map((function(e,l){var c=t.find((function(t){return t.id===e.portfolio.id})),i=n,o=window.innerWidth<=500?150:window.innerWidth>500&&window.innerWidth<1350?300:500;return r.a.createElement("div",{key:l,className:"thumb-group"},r.a.createElement("div",{className:"thumb-group-heading"},r.a.createElement("p",{className:"slide-link muted",onClick:function(){return a(i)}},c.data.name)),r.a.createElement("div",{className:"thumb-group-items"},c.data.body.map((function(e,t){var l=n;n++;var c=(e.primary.image_one?e.primary.image_one.square.url:"").replace("&w=600&h=600","&w=".concat(o,"&h=").concat(o));return"text"!==e.slice_type&&r.a.createElement("div",{key:t,className:"slide-link",onClick:function(){return a(l)}},r.a.createElement("div",{className:"thumb-group-item-image",style:{backgroundImage:"url(".concat(c,")")}}))}))))}))}(t,a,n)))},x={loop:!1,effect:window.innerWidth>500?"fade":"slide",simulateTouch:!(window.innerWidth>500),keyboardControl:!0,mousewheelControl:!1,spaceBetween:0,slidesPerView:1,preloadImages:!1,lazy:!0,loadPrevNext:!0,loadPrevNextAmount:4,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},hashNavigation:{replaceState:!0}};function N(e){var t=e.slides,a=e.activeIndex;return t[a].dataset.caption?t[a].dataset.caption:""}function L(e){var t=e.slides,a=e.activeIndex;return t[a].dataset.collection?t[a].dataset.collection:""}var j=function(e){var t=e.data,a=e.openThumbs,l=e.updateThumbsActive,c=Object(n.useState)(""),i=Object(s.a)(c,2),o=i[0],u=i[1],m=Object(n.useState)(""),d=Object(s.a)(m,2),p=d[0],h=d[1],f=Object(n.useState)(null),b=Object(s.a)(f,2),w=b[0],j=b[1],O=t.find((function(e){return"portfolio_list"===e.type})),S=t.filter((function(e){return"portfolio"===e.type})),A=Object(v.a)({},x,{renderPrevButton:function(){return r.a.createElement(g,null)},renderNextButton:function(){return r.a.createElement(k,null)},on:{slideChange:function(){h(N(this)),u(L(this))},init:function(){h(N(this)),u(L(this))}}});return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"collection muted small link",onClick:function(){return a()}},o),!!O&&r.a.createElement(E.a,Object.assign({getSwiper:j},A),O.data.portfolios.map((function(e){return r.a.createElement(C,{key:e.portfolio.id,id:e.portfolio.id,data:S})}))),r.a.createElement(y,{portfolioList:O,portfolios:S,goToSlide:function(e){null!==w&&w.slideToLoop(e),setTimeout((function(){return l(!1)}),200)}}),r.a.createElement("p",{className:"caption muted small"},p))};var O=function(e){var t=e.data,a=e.updateAboutActive,n=e.updateContactActive,l=e.updateThumbsActive,c=t.find((function(e){return"about"===e.type}));return r.a.createElement("div",{className:"about-container"},r.a.createElement("div",{className:"about-inner"},r.a.createElement("div",null,r.a.createElement("span",{className:"muted"},"About")),r.a.createElement("div",null,r.a.createElement(b.RichText,{render:c.data.text}),r.a.createElement("p",null,"Helsinki, Finland",r.a.createElement("br",null),r.a.createElement("span",{className:"link underline",onClick:function(){return function(e,t,a){t(!0),setTimeout((function(){e(!1),a(!1)}),300)}(a,n,l)}},"Get in touch")))))};function S(){window.scrollTo(0,0),document.body.scrollTop=0}var A=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useRef)(null),i=Object(n.useRef)(null),o=Object(n.useRef)(null);return Object(n.useEffect)((function(){c.current.onblur=function(){return S()},i.current.onblur=function(){return S()},o.current.onblur=function(){return S()}})),r.a.createElement("div",{className:"contact-container"},r.a.createElement("div",{className:"contact-inner"},r.a.createElement("div",null,r.a.createElement("span",{className:"muted"},"Contact")),r.a.createElement("div",null,r.a.createElement("p",null,"Want to collaborate or just say hi? Get in touch through the form below."),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target,a=new FormData(t),n=new XMLHttpRequest;n.open(t.method,t.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?(t.reset(),l("SUCCESS")):l("ERROR"))},n.send(a)},action:"https://formspree.io/xjvavbpp",method:"POST"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Name",required:!0,autoComplete:"off",ref:c}),r.a.createElement("input",{type:"email",name:"email",placeholder:"Email",required:!0,autoComplete:"off",ref:i}),r.a.createElement("textarea",{name:"message",placeholder:"Message",required:!0,autoComplete:"off",ref:o}),"SUCCESS"===a?r.a.createElement("p",null,"Message sent"):r.a.createElement("button",null,"Send"),"ERROR"===a&&r.a.createElement("p",null,"Ooops! There was an error.")))))};var W=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){setTimeout((function(){l(!1)}),3e3)})),r.a.createElement("div",{className:"mobile-overlay ".concat(a&&"active"),onClick:function(){return l(!1)}},r.a.createElement("svg",{width:"27",height:"31",viewBox:"0 0 27 31",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",{clipPath:"url(#clip0)"},r.a.createElement("path",{d:"M25.5551 16.3965L21.5426 10.0615C21.5426 10.0615 21.5426 10.061 21.5426 10.0605C20.6481 8.6495 18.7721 8.2285 17.3626 9.1225C16.8486 9.448 16.4671 9.905 16.2316 10.4225C16.0076 10.3085 15.7731 10.212 15.5211 10.1555C14.7331 9.978 13.9206 10.119 13.2376 10.5515C12.7336 10.8705 12.3466 11.321 12.1051 11.8515C11.8811 11.7375 11.6471 11.641 11.3956 11.5845C10.6061 11.4075 9.79464 11.5485 9.11214 11.981C8.75014 12.2105 8.45214 12.5105 8.22064 12.8555L5.57414 8.6765C4.68114 7.266 2.80664 6.8455 1.39514 7.738C-0.0158571 8.6315 -0.437357 10.5065 0.456642 11.9175L9.66614 26.46C11.4541 29.283 14.5076 30.829 17.6251 30.829C19.3446 30.829 21.0846 30.3595 22.6416 29.373C27.0231 26.5975 28.3296 20.7775 25.5551 16.3965ZM21.6751 27.8455C18.1356 30.085 13.4346 29.031 11.1941 25.492L1.98314 10.9495C1.62314 10.3805 1.79314 9.625 2.36164 9.2645C2.93064 8.905 3.68614 9.074 4.04614 9.643L11.0491 20.7015C11.2211 20.973 11.5141 21.1215 11.8136 21.1215C11.9791 21.1215 12.1466 21.0765 12.2961 20.981C12.7181 20.7145 12.8431 20.156 12.5761 19.734L9.70214 15.1955L9.70064 15.1925C9.52614 14.917 9.46964 14.5905 9.54064 14.272C9.61214 13.9535 9.80314 13.682 10.0791 13.508C10.3541 13.333 10.6816 13.2765 10.9991 13.3485C11.3176 13.4205 11.5891 13.611 11.7636 13.8865L14.6396 18.4275C14.8116 18.699 15.1046 18.8485 15.4041 18.8485C15.5691 18.8485 15.7366 18.8025 15.8866 18.708C16.3086 18.4405 16.4336 17.882 16.1671 17.46L13.8271 13.766C13.8266 13.7655 13.8261 13.7645 13.8261 13.764C13.6511 13.4885 13.5946 13.162 13.6656 12.8435C13.7371 12.525 13.9281 12.254 14.2041 12.08C14.4796 11.905 14.8056 11.8475 15.1251 11.92C15.4436 11.992 15.7146 12.1825 15.8886 12.458C15.8891 12.4585 15.8896 12.459 15.8896 12.459L16.4191 13.295C16.4211 13.298 16.4221 13.3005 16.4236 13.303C16.4241 13.304 16.4251 13.305 16.4261 13.306L18.2296 16.155C18.4021 16.4265 18.6951 16.576 18.9941 16.576C19.1596 16.576 19.3271 16.53 19.4771 16.4355C19.8991 16.168 20.0246 15.6095 19.7571 15.188L17.9506 12.3345C17.5921 11.765 17.7621 11.0115 18.3296 10.6515C18.8991 10.2915 19.6546 10.4615 20.0151 11.03C20.0151 11.0305 20.0151 11.031 20.0156 11.031L24.0276 17.366C26.2686 20.9025 25.2136 25.6045 21.6751 27.8455ZM7.29764 4.905L10.3261 6.481C10.4596 6.551 10.6021 6.5835 10.7426 6.5835C11.0686 6.5835 11.3841 6.4065 11.5451 6.097C11.7756 5.6535 11.6036 5.1075 11.1606 4.8775L10.0466 4.298C13.2936 3.435 16.7136 3.651 19.8701 4.9585C19.9836 5.0055 20.1006 5.028 20.2156 5.028C20.5701 5.028 20.9071 4.818 21.0511 4.4695C21.2421 4.0085 21.0231 3.48 20.5616 3.289C17.0201 1.821 13.1796 1.581 9.53764 2.5585L10.0926 1.4925C10.3231 1.0495 10.1511 0.503499 9.70814 0.273499C9.26514 0.0419989 8.71914 0.214998 8.48914 0.657998L6.91264 3.686C6.80164 3.899 6.78014 4.147 6.85214 4.3755C6.92514 4.6035 7.08514 4.794 7.29764 4.905Z",fill:"white"})),r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip0"},r.a.createElement("rect",{width:"27",height:"31",fill:"white"})))),r.a.createElement("p",null,"Swipe to navigate"))};a(21);var T=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(s.a)(c,2),m=i[0],v=i[1],f=Object(n.useState)(!1),E=Object(s.a)(f,2),b=E[0],w=E[1],C=Object(n.useState)(!1),g=Object(s.a)(C,2),k=g[0],y=g[1],x=function(){document.getElementsByClassName("thumbs-inner")[0].scrollTop=0,w(!0)};return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.query("",{pageSize:200});case 2:(t=e.sent)?l(t.results):console.log("no bueno");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"page_wrap ".concat(m?"about-active":""," ").concat(b?"thumbs-active":""," ").concat(k?"contact-active":"")},r.a.createElement(p,{toggleModals:function(){v(!1),y(!1),w(!1)},aboutActive:m,updateAboutActive:v,thumbsActive:b,contactActive:k}),a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{data:a,openThumbs:x,updateThumbsActive:w}),r.a.createElement(O,{data:a,updateAboutActive:v,updateThumbsActive:w,updateContactActive:y}),r.a.createElement(A,null)):r.a.createElement("div",{className:"swiper-lazy-preloader"}),!m&&!k&&!b&&r.a.createElement(h,{openThumbs:x,updateContactActive:y}),r.a.createElement(W,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.2370f446.chunk.js.map