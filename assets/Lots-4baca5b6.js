import{s as J,_ as K,f as a,h as Q,l as X,r as q,o as L,c as Y,a as n,d as o,w as z,i as s,g as Z,j as $,F as ee,m as r,q as y,p as te,e as le,v as I}from"./index-85c6c6a3.js";import{g as oe,B as ae}from"./ButtonAdd-59c43077.js";import{m as se,M as ne,B as re}from"./ButtonSave-c0735596.js";const ie=async()=>{try{const i=oe(),{data:_}=await J.get("/maintenance/lots",{headers:{token:i}});return _}catch(i){console.error(i)}};const w=i=>(te("data-v-9461cafc"),i=i(),le(),i),de={class:"q-py-md table-container"},ue=w(()=>n("h6",{class:"title q-my-lg"},"LOTES",-1)),me={class:"container-content"},ce={class:"container-table q-mt-md q-pa-md",rounded:""},fe=w(()=>n("h6",{class:"q-my-md text-center"},"REGISTRAR LOTE",-1)),pe={class:"row q-px-xl"},ve={class:"col-12"},be=w(()=>n("span",{class:"text-required q-pb-sm"},[I("Todos los campos con "),n("span",{class:"text-red"},"*"),I(" son obligatorios")],-1)),ge={class:"row justify-center"},ye={__name:"Lots",setup(i){const _=se(),S=a(!1);let h=a(null);const N=["1","2","3","4","5"];let d=a(""),c=a(""),f=a(""),p=a(""),V=a(""),v=a(""),b=a(""),g=a(""),O=Q(()=>d.value=="");const u=[l=>!!l||"Este campo es requerido"],x=a([]),k=a([{name:"id",label:"#",field:"id",align:"left",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"},{name:"name",label:"Nombre",field:"name",align:"left",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"},{name:"description",label:"Descripción",field:"description",align:"left",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"},{name:"size",label:"Tamaño",field:"size",align:"left",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"},{name:"status",label:"Estado",field:"status",align:"left",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"},{name:"soilState",label:"Estado del Suelo",field:"soilState",align:"left",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"},{name:"class",label:"Clase",field:"class",align:"left",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"},{name:"father",label:"Padre",field:"father",align:"left",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"},{name:"plantingDensity",label:"Densidad Siembra",field:"plantingDensity",align:"left",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"},{name:"plantsNumber",label:"Número de Plantas",field:"plantsNumber",align:"left",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"}]),D=()=>{_.toggleModal(),d.value="",c.value="",f.value="",p.value="",v.value="",b.value="",g.value=""},E=l=>{d.value=l},B=l=>{c.value=l},U=l=>{f.value=l},T=l=>{p.value=l},C=l=>{v.value=l},W=l=>{b.value=l},P=l=>{g.value=l},F=()=>{M(),_.toggleModal()},M=async()=>{console.log(g.value,b.value,v.value,p.value,f.value,c.value,d.value)},A=async()=>{S.value=!0;const{lots:l}=await ie();let t=1;l.forEach(m=>{m.status=m.status?"Inactivo":"Activo",m.id=t++,m.description=m.description.trim()==""?"No registra":m.description}),x.value=l,S.value=!1};return X(()=>{A()}),(l,t)=>{const m=q("q-separator"),R=q("q-icon"),j=q("q-input"),G=q("q-table"),H=q("q-select");return L(),Y(ee,null,[n("div",de,[ue,o(m,{class:"separator"}),n("div",me,[o(ae,{onOnClick:D,label:"Crear nuevo lote"}),n("div",ce,[o(G,{flat:"",bordered:"",title:"Lotes","row-key":"name",rows:x.value,columns:k.value,filter:s(V),loading:S.value,"rows-per-page-options":[5,10,20]},{"top-right":z(()=>[o(j,{borderless:"",dense:"",debounce:"300",modelValue:s(V),"onUpdate:modelValue":t[0]||(t[0]=e=>r(V)?V.value=e:V=e),placeholder:"Search"},{append:z(()=>[o(R,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","columns","filter","loading"])])])]),s(_).modalIsOpen?(L(),Z(ne,{key:0},{default:z(()=>[fe,n("div",pe,[n("div",ve,[o(H,{class:"q-pb-xs",filled:"",dense:"",label:"Finca",required:!0,type:"text",ruless:u,modelValue:s(h),"onUpdate:modelValue":t[1]||(t[1]=e=>r(h)?h.value=e:h=e),options:N},null,8,["modelValue"]),o(y,{class:"q-pb-xs",label:"Nombre",required:!0,type:"text",ruless:u,modelValue:s(d),"onUpdate:modelValue":t[2]||(t[2]=e=>r(d)?d.value=e:d=e),onOnWrite:E},null,8,["modelValue"]),o(y,{label:"Descripción",required:!1,type:"text",ruless:u,modelValue:s(c),"onUpdate:modelValue":t[3]||(t[3]=e=>r(c)?c.value=e:c=e),onOnWrite:B},null,8,["modelValue"]),o(y,{label:"Tamaño",required:!0,type:"text",ruless:u,modelValue:s(f),"onUpdate:modelValue":t[4]||(t[4]=e=>r(f)?f.value=e:f=e),onOnWrite:U},null,8,["modelValue"]),o(y,{label:"Estado del suelo",required:!0,type:"text",ruless:u,modelValue:s(p),"onUpdate:modelValue":t[5]||(t[5]=e=>r(p)?p.value=e:p=e),onOnWrite:T},null,8,["modelValue"]),o(y,{label:"Padre",required:!0,type:"text",ruless:u,modelValue:s(v),"onUpdate:modelValue":t[6]||(t[6]=e=>r(v)?v.value=e:v=e),onOnWrite:C},null,8,["modelValue"]),o(y,{label:"Densidad Siembra",required:!0,type:"text",ruless:u,modelValue:s(b),"onUpdate:modelValue":t[7]||(t[7]=e=>r(b)?b.value=e:b=e),onOnWrite:W},null,8,["modelValue"]),o(y,{label:"Número de Plantas",required:!0,type:"number",ruless:u,modelValue:s(g),"onUpdate:modelValue":t[8]||(t[8]=e=>r(g)?g.value=e:g=e),onOnWrite:P},null,8,["modelValue"]),be,n("div",ge,[o(re,{disable:s(O),onOnClick:F},null,8,["disable"])])])])]),_:1})):$("",!0)],64)}}},he=K(ye,[["__scopeId","data-v-9461cafc"]]);export{he as default};