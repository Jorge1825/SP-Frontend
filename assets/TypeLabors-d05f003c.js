import{s as w,_ as E,f as u,h as N,l as O,r as b,o as g,c as A,a,d as i,i as p,g as C,w as D,j as R,F as M,m as v,q as y,p as F,e as j,v as h}from"./index-dd023763.js";import{g as q,m as U,M as W,B as G,a as P}from"./ButtonSave-fa15d2e0.js";const H=async()=>{try{const e=q(),{data:o}=await w.get("/maintenance/works",{headers:{token:e}});return o}catch(e){console.error(e)}},J=async e=>{try{const o=q(),{data:c}=await w.post("/maintenance/works/register",{name:e.name,description:e.description},{headers:{token:o}});return c}catch(o){console.error(o)}};const m=e=>(F("data-v-75b9d528"),e=e(),j(),e),K={class:"q-py-md table-container"},Q=m(()=>a("h6",{class:"title q-my-lg"},"TIPOS DE LABOR",-1)),X={class:"container-content"},Y={class:"container-table q-mt-md q-pa-md",rounded:""},Z=m(()=>a("h6",{class:"q-my-md text-center"},"REGISTRAR LABOR",-1)),$={class:"row q-px-xl"},ee={class:"col-12"},te=m(()=>a("span",{class:"text-required q-pb-sm"},[h("Todos los campos con "),a("span",{class:"text-red"},"*"),h(" son obligatorios")],-1)),ae={class:"row justify-center"},oe={__name:"TypeLabors",setup(e){const o=U(),c=u(!1);let s=u(""),l=u(""),k=N(()=>s.value=="");const x=[t=>!!t||"Este campo es requerido"],f=u([]),T=u([{name:"id",label:"#",field:"id",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"name",label:"Nombre",field:"name",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"description",label:"Descripción",field:"description",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"status",label:"Estado",field:"status",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"}]),L=()=>{o.toggleModal(),s.value="",l.value=""},S=t=>{s.value=t},I=t=>{l.value=t},B=()=>{V(),o.toggleModal()},V=async()=>{await J({name:s.value,description:l.value}),_()},_=async()=>{c.value=!0;const{works:t}=await H();let r=1;t.forEach(n=>{n.status=n.status?"Inactivo":"Activo",n.id=r++,n.description=n.description.trim()==""?"No registra":n.description}),f.value=t,c.value=!1};return O(()=>{_()}),(t,r)=>{const n=b("q-separator"),z=b("q-table");return g(),A(M,null,[a("div",K,[Q,i(n,{class:"separator"}),a("div",X,[i(G,{onOnClick:L,label:"Crear tipo de labor"}),a("div",Y,[i(z,{flat:"",bordered:"",title:"Labores","row-key":"name",rows:f.value,columns:T.value,filter:t.filter,loading:c.value,"rows-per-page-options":[5,10,20]},null,8,["rows","columns","filter","loading"])])])]),p(o).modalIsOpen?(g(),C(W,{key:0},{default:D(()=>[Z,a("div",$,[a("div",ee,[i(y,{class:"q-pb-xs",label:"Nombre",required:!0,type:"text",ruless:x,modelValue:p(s),"onUpdate:modelValue":r[0]||(r[0]=d=>v(s)?s.value=d:s=d),onOnWrite:S},null,8,["modelValue"]),i(y,{label:"Descripción",type:"text",required:!1,modelValue:p(l),"onUpdate:modelValue":r[1]||(r[1]=d=>v(l)?l.value=d:l=d),onOnWrite:I},null,8,["modelValue"]),te,a("div",ae,[i(P,{disable:p(k),onOnClick:B},null,8,["disable"])])])])]),_:1})):R("",!0)],64)}}},le=E(oe,[["__scopeId","data-v-75b9d528"]]);export{le as default};
