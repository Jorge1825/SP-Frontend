import{_ as fe,m as me,q as pe,g as l,v as _e,f as H,x as be,y as ge,r as i,o as V,c as J,a as n,d as o,w as s,h as r,i as D,M as ye,j as K,F as qe,a3 as he,z as y,t as Me,A as B,B as P,p as we,e as Ve,C as X,a6 as ke,a7 as Te,a8 as xe,a9 as Se}from"./index-3a09a4c6.js";import{B as Ie}from"./ButtonAdd-4b004f79.js";const N=k=>(we("data-v-96ab12bf"),k=k(),Ve(),k),Oe={class:"q-py-sm table-container"},Ce={class:"row"},ze=N(()=>n("h6",{class:"title q-my-lg"},"Modelos de transformacion",-1)),Ae={class:"container-content"},De={class:"container-table q-mt-md q-pa-md",rounded:""},Be={class:"accions-td"},Ne={class:"accions-td"},Ue=N(()=>n("i",{class:"icon icon-check"},null,-1)),Re={class:"modal-activity"},Ee={class:"q-my-md text-center"},Fe={class:"row q-px-xl"},je={class:"col-12"},Le=N(()=>n("span",{class:"text-required q-pb-sm"},[X("Todos los campos con "),n("span",{class:"text-red"},"*"),X(" son obligatorios")],-1)),We={class:"row justify-center"},Ge={key:0,class:"spinner"},Qe={__name:"ModelTransformation",setup(k){const Y=me(),M=pe(),x=l(""),u=l(!1),S=l(!0),g=l([]),w=l([]),U=l(),Z=_e(),_=l(!1),R=H(()=>c.value==""||d.value==""||v.value==""?!0:_.value==!0),I=[a=>!!a||"Este campo es requerido"];let f=l(""),b=l("active"),c=l(""),d=l(""),v=l(""),O=l(""),C=l(""),z=l("");const E=l([{name:"id",label:"#",field:"id",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"name",label:"Nombre",field:"name",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"description",label:"Descripción",field:"description",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"unitvalue",label:"Valor unitario",field:"unitvalue",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"Acciones",label:"Acciones",field:"acciones",align:"left",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"}]),$=a=>{c.value=a},ee=a=>{d.value=a},ae=a=>{v.value=a},oe=()=>{x.value="REGISTRAR MODELO",te(),S.value=!0,M.toggleModal()},te=()=>{O.value="",C.value="",z.value="",c.value="",d.value="",v.value=""},le=a=>{x.value="EDITAR MODELO",S.value=!1,U.value=a._id,O.value=a.name,C.value=a.description,z.value=a.unitvalue,c.value=a.name,d.value=a.description,v.value=a.unitvalue,M.toggleModal()},p=(a,t)=>{Y.notify({type:a,message:t,position:"top"})},q=async()=>{g.value=[],w.value=[],u.value=!0;try{const{models:a}=await he(h.value);let t=1,T=1;a.forEach(m=>{m.status=m.status?"Inactivo":"Activo",m.status=="Activo"?(m.id=t++,g.value.push(m)):(m.id=T++,w.value.push(m))}),u.value=!1}catch{u.value=!1,p("negative","Ocurrió un error")}};async function ne(){_.value=!0;try{await ke({name:c.value,description:d.value,unitvalue:v.value},h.value),_.value=!1,p("positive","Modelo de transformación registrado correctamente"),M.toggleModal(),g.value=[],q()}catch{_.value=!1,p("negative","Ocurrió un error, por favor verifique los datos")}}async function se(){_.value=!0;try{await Te({id:U.value,name:c.value,description:d.value,unitvalue:v.value},h.value),_.value=!1,p("positive","Modelo de transformación actualizado correctamente"),M.toggleModal(),g.value=[],q()}catch{_.value=!1,p("negative","Ocurrió un error, por favor verifique los datos")}c.value="",d.value="",v.value=""}async function re(a){u.value=!0;try{await xe(a,h.value),p("positive","Modelo de transformación activado correctamente"),u.value=!1,g.value=[],w.value=[],q()}catch{u.value=!1,p("negative","Ocurrió un error")}}async function ie(a){u.value=!1;try{await Se(a,h.value),u.value=!1,p("positive","Modelo de transformación desactivado correctamente"),g.value=[],w.value=[],q()}catch{u.value=!1,p("negative","Ocurrió un error")}}const h=H(()=>Z.idSelected);return be(h,()=>{q()}),ge(()=>{q()}),(a,t)=>{const T=i("q-separator"),m=i("q-tab"),ue=i("q-tabs"),F=i("q-icon"),j=i("q-input"),A=i("q-btn"),L=i("q-btn-group"),W=i("q-table"),G=i("q-tab-panel"),ce=i("q-tab-panels"),de=i("q-card"),ve=i("q-spinner-ios");return V(),J(qe,null,[n("div",Oe,[n("div",Ce,[n("i",{class:"icon icon-backRoute q-pt-lg",onClick:t[0]||(t[0]=e=>a.$router.back())}),ze]),o(T,{class:"separator"}),n("div",Ae,[o(Ie,{onOnClick:oe,label:"Registrar nuevo modelo"}),n("div",De,[o(de,null,{default:s(()=>[o(ue,{modelValue:r(b),"onUpdate:modelValue":t[1]||(t[1]=e=>y(b)?b.value=e:b=e),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:s(()=>[o(m,{name:"active",label:"Activos"}),o(m,{name:"inactive",label:"Inactivos"})]),_:1},8,["modelValue"]),o(T),o(ce,{modelValue:r(b),"onUpdate:modelValue":t[4]||(t[4]=e=>y(b)?b.value=e:b=e),animated:""},{default:s(()=>[o(G,{name:"active"},{default:s(()=>[o(W,{flat:"",bordered:"",title:"Modelos de transformación","row-key":"name",rows:g.value,columns:E.value,filter:r(f),loading:u.value,"rows-per-page-options":[5,10,20]},{"top-right":s(()=>[o(j,{borderless:"",dense:"",debounce:"300",modelValue:r(f),"onUpdate:modelValue":t[2]||(t[2]=e=>y(f)?f.value=e:f=e),placeholder:"Search"},{append:s(()=>[o(F,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":s(e=>[n("td",Be,[o(L,{class:"full-width full-height",outline:"",square:""},{default:s(()=>[o(A,{icon:"edit_note","text-color":"blue-10",class:"col text-bold q-pa-none icon-table",onClick:Q=>le(e.row)},null,8,["onClick"]),o(A,{icon:"highlight_off","text-color":"blue-10",class:"col text-bold q-pa-none icon-table",onClick:Q=>ie(e.row._id)},null,8,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1}),o(G,{name:"inactive"},{default:s(()=>[o(W,{flat:"",bordered:"",title:"Modelos","row-key":"name",rows:w.value,columns:E.value,filter:r(f),loading:u.value,"rows-per-page-options":[5,10,20]},{"top-right":s(()=>[o(j,{borderless:"",dense:"",debounce:"300",modelValue:r(f),"onUpdate:modelValue":t[3]||(t[3]=e=>y(f)?f.value=e:f=e),placeholder:"Search"},{append:s(()=>[o(F,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":s(e=>[n("td",Ne,[o(L,{class:"full-width full-height",outline:"",square:""},{default:s(()=>[o(A,{"text-color":"blue-10",class:"col q-pa-none",onClick:Q=>re(e.row._id)},{default:s(()=>[Ue]),_:2},1032,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])])]),r(M).modalIsOpen?(V(),D(ye,{key:0,class:"modal"},{default:s(()=>[n("div",Re,[n("h6",Ee,Me(x.value),1),n("div",Fe,[n("div",je,[o(B,{label:"Nombre",required:!0,type:"text",ruless:I,value:r(O),modelValue:r(c),"onUpdate:modelValue":t[5]||(t[5]=e=>y(c)?c.value=e:c=e),onOnWrite:$},null,8,["value","modelValue"]),o(B,{label:"Descripción",required:!0,type:"text",ruless:I,value:r(C),modelValue:r(d),"onUpdate:modelValue":t[6]||(t[6]=e=>y(d)?d.value=e:d=e),onOnWrite:ee},null,8,["value","modelValue"]),o(B,{class:"q-pb-xs",label:"Valor",required:!0,type:"text",ruless:I,value:r(z),modelValue:r(v),"onUpdate:modelValue":t[7]||(t[7]=e=>y(v)?v.value=e:v=e),onOnWrite:ae},null,8,["value","modelValue"]),Le,n("div",We,[S.value?(V(),D(P,{key:0,disable:r(R),onOnClick:ne},null,8,["disable"])):(V(),D(P,{key:1,disable:r(R),onOnClick:se},null,8,["disable"]))]),_.value?(V(),J("div",Ge,[o(ve,{color:"primary",size:"2.5em"})])):K("",!0)])])])]),_:1})):K("",!0)],64)}}},Ke=fe(Qe,[["__scopeId","data-v-96ab12bf"]]);export{Ke as default};
