import{u as v,c as o,a as t,b as n,d as y,t as r,F as h,r as b,e as f,o as a,f as k,_ as g}from"./framework.sVuolWkJ.js";const D={key:0},w={key:1,class:"else-container"},x={class:"hero"},C={class:"features row"},L={class:"card h-100"},R=["src","alt"],V={class:"card-body"},B={class:"card-title"},E={class:"card-text"},N=["href"],T={__name:"Layout",setup(m){const{site:p,frontmatter:s}=v();return(i,c)=>{var l,d,_;const u=f("Content");return a(),o(h,null,[n(s).home?(a(),o("div",D)):(a(),o("div",w,[c[0]||(c[0]=t("a",{href:"/"},"Dei's Home",-1)),y(u)])),t("div",x,[t("h1",null,r((l=n(s).hero)==null?void 0:l.name),1),t("h2",null,r((d=n(s).hero)==null?void 0:d.text),1),t("p",null,r((_=n(s).hero)==null?void 0:_.tagline),1),t("div",C,[(a(!0),o(h,null,b(n(s).features,e=>(a(),o("div",{key:e.title,class:"col-md-4 mb-4"},[t("div",L,[e.thumbnail?(a(),o("img",{key:0,src:e.thumbnail,alt:"Thumbnail for "+e.title,class:"card-img-top"},null,8,R)):k("",!0),t("div",V,[t("h5",B,r(e.title),1),t("p",E,r(e.details),1),t("a",{href:e.link,class:"btn btn-primary"},"Read More",8,N)])])]))),128))])])],64)}}},F={Layout:T,enhanceApp({app:m,router:p,siteData:s}){typeof window<"u"&&g(()=>import("./bootstrap.bundle.min.COjAjEHW.js").then(i=>i.b),[])}};export{F as R};
