import{_ as p,u,r as m,o as t,c as o,a as e,t as r,d as h,F as q,b as v,n as y}from"./index-a2b1bd69.js";const g={class:"q-mb-sm"},b={class:"q-my-lg title"},f={class:"container-list q-mt-lg q-pa-md",rounded:""},k=["onClick"],L={class:"item-name"},x={__name:"ListModules",props:{title:{type:String,required:!0},items:{type:Array,required:!0}},setup(c){const a=c,i=u(),l=n=>{i.push({name:n})};return(n,C)=>{const _=m("q-separator");return t(),o("div",g,[e("h6",b,r(a.title),1),h(_,{class:"separator"}),e("div",f,[(t(!0),o(q,null,v(a.items,(s,d)=>(t(),o("div",{class:"item-list",key:d,onClick:M=>l(s.name)},[e("i",{class:y(["item-icon",s.icon])},null,2),e("p",L,r(s.label),1)],8,k))),128))])])}}},F=p(x,[["__scopeId","data-v-973e4dbf"]]);export{F as L};
