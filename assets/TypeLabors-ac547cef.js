import{l as A,s as I,_ as ve,m as fe,q as _e,g as c,v as me,f as Q,x as be,y as ge,r as d,o as L,c as H,a as r,d as e,w as s,h as p,i as z,M as ye,j as J,F as he,z as x,A as V,t as qe,B as K,C as X,p as we,e as ke}from"./index-32fd2e15.js";import{B as xe}from"./ButtonAdd-37f41b44.js";const Te=async l=>{try{const i=A(),{data:a}=await I.get("/maintenance/works",{headers:{token:i,farm:l}});return a}catch(i){return i}},Le=async(l,i)=>{try{const a=A(),{data:v}=await I.post("/maintenance/works/register",{name:l.name,description:l.description},{headers:{token:a,farm:i}});return v}catch(a){return a}},Ve=async(l,i)=>{try{const a=A(),{data:v}=await I.put(`/maintenance/works/update/${l.id}`,{name:l.name,description:l.description},{headers:{token:a,farm:i}});return v}catch(a){return a}},Ae=async(l,i)=>{try{const a=A(),{data:v}=await I.put(`/maintenance/works/inactive/${l}`,{},{headers:{token:a,farm:i}});return v}catch(a){return a}},Ie=async(l,i)=>{try{const a=A(),{data:v}=await I.put(`/maintenance/works/active/${l}`,{},{headers:{token:a,farm:i}});return v}catch(a){return a}};const M=l=>(we("data-v-9c6b46f3"),l=l(),ke(),l),Oe={class:"q-py-md table-container"},Se={class:"row"},Ce=M(()=>r("h6",{class:"title q-my-lg"},"TIPOS DE LABOR",-1)),Ee={class:"container-content"},De={class:"container-table q-mt-md q-pa-md",rounded:""},Be={class:"accions-td"},ze={class:"accions-td"},Me=M(()=>r("i",{class:"icon icon-check"},null,-1)),Ne={class:"modal-labors"},Re={class:"q-my-md text-center"},Ue={class:"row q-px-xl"},Fe={class:"col-12"},$e=M(()=>r("span",{class:"text-required q-pb-sm"},[V("Todos los campos con "),r("span",{class:"text-red"},"*"),V(" son obligatorios")],-1)),je={class:"row justify-center"},Pe={key:0,class:"spinner"},We={__name:"TypeLabors",setup(l){const i=fe(),a=_e(),v=c(""),f=c(!1),S=c(!0),q=c([]),T=c([]),N=c(),Y=me(),y=c(!1),R=Q(()=>_.value==""?!0:y.value==!0),Z=[t=>!!t||"Este campo es requerido"];let m=c(""),h=c("active"),_=c(""),b=c(""),C=c(""),E=c("");const U=c([{name:"id",label:"#",field:"id",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"name",label:"Nombre",field:"name",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"description",label:"Descripción",field:"description",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"Acciones",label:"Acciones",field:"acciones",align:"center",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"}]),ee=t=>{_.value=t},ae=t=>{b.value=t},te=()=>{v.value="REGISTRAR TIPO DE LABOR",oe(),S.value=!0,a.toggleModal()},oe=()=>{E.value="",C.value="",_.value="",b.value=""},ne=t=>{v.value="EDITAR TIPO DE LABOR",S.value=!1,N.value=t._id,E.value=t.description,C.value=t.name,_.value=t.name,b.value=t.description,a.toggleModal()},g=(t,n)=>{i.notify({type:t,message:n,position:"top"})},w=async()=>{q.value=[],T.value=[],f.value=!0;try{const{works:t}=await Te(k.value);let n=1,O=1;t.forEach(u=>{u.status=u.status?"Inactivo":"Activo",u.status=="Activo"?(u.id=n++,q.value.push(u)):(u.id=O++,T.value.push(u)),u.description=u.description.trim()==""?"No registra":u.description}),f.value=!1}catch{f.value=!1,g("negative","Ocurrió un error")}};async function se(){y.value=!0;try{const t=await Le({name:_.value,description:b.value},k.value);y.value=!1,g("positive","Tipo de labor registrado correctamente"),a.toggleModal(),q.value=[],w()}catch{y.value=!1,g("negative","Ocurrió un error, por favor verifique los datos")}}async function le(){y.value=!0;try{const t=await Ve({id:N.value,name:_.value,description:b.value},k.value);y.value=!1,g("positive","Tipo de labor actualizado correctamente"),a.toggleModal(),q.value=[],w()}catch{y.value=!1,g("negative","Ocurrió un error, por favor verifique los datos")}_.value="",b.value=""}async function re(t){f.value=!0;try{const n=await Ie(t,k.value);g("positive","Tipo de labor activado correctamente"),f.value=!1,q.value=[],T.value=[],w()}catch{f.value=!1,g("negative","Ocurrió un error")}}async function ce(t){f.value=!1;try{const n=await Ae(t,k.value);f.value=!1,g("positive","Tipo de labor desactivado correctamente"),q.value=[],T.value=[],w()}catch{f.value=!1,g("negative","Ocurrió un error")}}const k=Q(()=>Y.idSelected);return be(k,()=>{w()}),ge(()=>{w()}),(t,n)=>{const O=d("q-separator"),u=d("q-tab"),ie=d("q-tabs"),F=d("q-icon"),$=d("q-input"),D=d("q-tooltip"),B=d("q-btn"),j=d("q-btn-group"),P=d("q-table"),W=d("q-tab-panel"),ue=d("q-tab-panels"),de=d("q-card"),pe=d("q-spinner-ios");return L(),H(he,null,[r("div",Oe,[r("div",Se,[r("i",{class:"icon icon-backRoute q-pt-lg",onClick:n[0]||(n[0]=o=>t.$router.back())}),Ce]),e(O,{class:"separator"}),r("div",Ee,[e(xe,{onOnClick:te,label:"Crear tipo de labor"}),r("div",De,[e(de,null,{default:s(()=>[e(ie,{modelValue:p(h),"onUpdate:modelValue":n[1]||(n[1]=o=>x(h)?h.value=o:h=o),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:s(()=>[e(u,{name:"active",label:"Activos"}),e(u,{name:"inactive",label:"Inactivos"})]),_:1},8,["modelValue"]),e(O),e(ue,{modelValue:p(h),"onUpdate:modelValue":n[4]||(n[4]=o=>x(h)?h.value=o:h=o),animated:""},{default:s(()=>[e(W,{name:"active"},{default:s(()=>[e(P,{flat:"",bordered:"",title:"Labores","row-key":"name",rows:q.value,columns:U.value,filter:p(m),loading:f.value,"rows-per-page-options":[5,10,20]},{"top-right":s(()=>[e($,{borderless:"",dense:"",debounce:"300",modelValue:p(m),"onUpdate:modelValue":n[2]||(n[2]=o=>x(m)?m.value=o:m=o),placeholder:"Search"},{append:s(()=>[e(F,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":s(o=>[r("td",Be,[e(j,{class:"full-width full-height",outline:"",square:""},{default:s(()=>[e(B,{icon:"edit_note","text-color":"blue-10",class:"col text-bold q-pa-none icon-table",onClick:G=>ne(o.row)},{default:s(()=>[e(D,{class:"bg-indigo",offset:[10,10]},{default:s(()=>[V(" Editar ")]),_:1})]),_:2},1032,["onClick"]),e(B,{icon:"highlight_off","text-color":"blue-10",class:"col text-bold q-pa-none icon-table",onClick:G=>ce(o.row._id)},{default:s(()=>[e(D,{class:"bg-indigo",offset:[10,10]},{default:s(()=>[V(" Desactivar ")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1}),e(W,{name:"inactive"},{default:s(()=>[e(P,{flat:"",bordered:"",title:"Labores","row-key":"name",rows:T.value,columns:U.value,filter:p(m),loading:f.value,"rows-per-page-options":[5,10,20]},{"top-right":s(()=>[e($,{borderless:"",dense:"",debounce:"300",modelValue:p(m),"onUpdate:modelValue":n[3]||(n[3]=o=>x(m)?m.value=o:m=o),placeholder:"Search"},{append:s(()=>[e(F,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":s(o=>[r("td",ze,[e(j,{class:"full-width full-height",outline:"",square:""},{default:s(()=>[e(B,{"text-color":"blue-10",class:"col q-pa-none",onClick:G=>re(o.row._id)},{default:s(()=>[Me,e(D,{class:"bg-indigo",offset:[10,10]},{default:s(()=>[V(" Activar ")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])])]),p(a).modalIsOpen?(L(),z(ye,{key:0,class:"modal"},{default:s(()=>[r("div",Ne,[r("h6",Re,qe(v.value),1),r("div",Ue,[r("div",Fe,[e(K,{class:"q-pb-xs",label:"Nombre",required:!0,type:"text",ruless:Z,value:p(C),modelValue:p(_),"onUpdate:modelValue":n[5]||(n[5]=o=>x(_)?_.value=o:_=o),onOnWrite:ee},null,8,["value","modelValue"]),e(K,{label:"Descripción",type:"text",required:!1,value:p(E),modelValue:p(b),"onUpdate:modelValue":n[6]||(n[6]=o=>x(b)?b.value=o:b=o),onOnWrite:ae},null,8,["value","modelValue"]),$e,r("div",je,[S.value?(L(),z(X,{key:0,disable:p(R),onOnClick:se},null,8,["disable"])):(L(),z(X,{key:1,disable:p(R),onOnClick:le},null,8,["disable"]))]),y.value?(L(),H("div",Pe,[e(pe,{color:"primary",size:"2.5em"})])):J("",!0)])])])]),_:1})):J("",!0)],64)}}},He=ve(We,[["__scopeId","data-v-9c6b46f3"]]);export{He as default};