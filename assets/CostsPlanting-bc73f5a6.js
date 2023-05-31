import{l as O,s as z,_ as he,m as ye,q as we,g as n,v as qe,f as Z,x as ke,y as Ce,r as v,o as I,c as ee,a as i,d as o,w as c,h as r,i as U,M as xe,j as te,F as Ve,D as F,z as x,t as Se,A as W,E as Ee,B as ae,p as Ae,e as Ie,C as oe}from"./index-8f765b36.js";import{B as Oe}from"./ButtonAdd-2181087a.js";const ze=async s=>{try{const d=O(),{data:l}=await z.get("/costs/costsplanting",{headers:{token:d,farm:s}});return l}catch(d){return d}},Pe=async(s,d)=>{try{const l=O(),{data:p}=await z.post("/costs/costsplanting/register",{name:s.name,description:s.description,worth:s.worth,lot:s.lot},{headers:{token:l,farm:d}});return p}catch(l){return l}},De=async(s,d)=>{try{const l=O(),{data:p}=await z.put(`/costs/costsplanting/update/${s.id}`,{name:s.name,description:s.description,worth:s.worth,lot:s.lot},{headers:{token:l,farm:d}});return p}catch(l){return l}},Be=async(s,d)=>{try{const l=O(),{data:p}=await z.put(`/costs/costsplanting/inactivate/${s}`,{},{headers:{token:l,farm:d}});return p}catch(l){return l}},Ge=async(s,d)=>{try{const l=O(),{data:p}=await z.put(`/costs/costsplanting/activate/${s}`,{},{headers:{token:l,farm:d}});return p}catch(l){return l}};const $=s=>(Ae("data-v-becdb9dd"),s=s(),Ie(),s),Me={class:"q-py-sm table-container"},Ne={class:"row"},Re=$(()=>i("h6",{class:"title q-my-lg"},"Gastos de Siembra",-1)),Le={class:"container-content"},Te={class:"container-table q-mt-md q-pa-md",rounded:""},Ue={class:"accions-td"},Fe={class:"accions-td"},We=$(()=>i("i",{class:"icon icon-check"},null,-1)),$e={class:"modal-planting"},je={class:"q-my-md text-center"},Qe={class:"row q-px-xl"},He={class:"col-12"},Je=$(()=>i("span",{class:"text-required q-pb-sm"},[oe("Todos los campos con "),i("span",{class:"text-red"},"*"),oe(" son obligatorios")],-1)),Ke={class:"row justify-center"},Xe={key:0,class:"spinner"},Ye={__name:"CostsPlanting",setup(s){const d=ye(),l=we(),p=n(""),f=n(!1),B=n(!0),C=n([]),E=n([]),j=n(),le=qe(),q=n(!1),Q=Z(()=>m.value==""||_.value==""||g.value==""?!0:q.value==!0),G=[e=>!!e||"Este campo es requerido"];let b=n(""),k=n("active"),m=n(""),h=n(""),_=n(""),g=n(""),M=n(""),N=n(""),R=n(""),L=n("");const H=n([{name:"id",label:"#",field:"id",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"name",label:"Nombre",field:"name",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"description",label:"Descripción",field:"description",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"lot",label:"Lote",field:"lot",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"worth",label:"Valor",field:"worth",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"Acciones",label:"Acciones",field:"acciones",align:"left",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"}]),se=e=>{m.value=e},ne=e=>{h.value=e},re=e=>{_.value=e},ie=e=>{g.value=e},ce=()=>{p.value="REGISTRAR GASTO DE SIEMBRA",ue(),B.value=!0,l.toggleModal()},ue=()=>{M.value="",R.value="",L.value="",N.value="",m.value="",h.value="",_.value="",g.value=""},de=e=>{p.value="EDITAR GASTO DE SIEMBRA",B.value=!1,j.value=e._id,M.value=e.name,R.value=e.description,L.value=e.worth,m.value=e.name,h.value=e.description,_.value=e.worth,g.value=e.lot,N.value=e.lot,l.toggleModal()},y=(e,t)=>{d.notify({type:e,message:t,position:"top"})},V=async()=>{C.value=[],E.value=[],f.value=!0;try{const{costs:e}=await ze(w.value),{lots:t}=await F(w.value);let P=1,D=1;e.forEach(u=>{u.status=u.status?"Inactivo":"Activo";let S=u.lot;t.forEach(A=>{A._id==S&&(S=A.name)}),u.lot=S,u.status=="Activo"?(u.id=P++,C.value.push(u)):(u.id=D++,E.value.push(u)),u.description=u.description.trim()==""?"No registra":u.description}),f.value=!1}catch(e){console.log(e),f.value=!1,y("negative","Ocurrió un error")}};async function ve(){q.value=!0;const{lots:e}=await F(w.value);e.forEach(t=>{t.name==g.value&&(g.value=t._id)});try{await Pe({name:m.value,description:h.value,worth:_.value,lot:g.value},w.value),q.value=!1,y("positive","Gasto de siembra registrado correctamente"),l.toggleModal(),C.value=[],V()}catch{q.value=!1,y("negative","Ocurrió un error, por favor verifique los datos")}}async function pe(){q.value=!0;const{lots:e}=await F(w.value);e.forEach(t=>{t.name==g.value&&(g.value=t._id)});try{await De({id:j.value,name:m.value,description:h.value,worth:_.value,lot:g.value},w.value),q.value=!1,y("positive","Gasto de siembra actualizado correctamente"),l.toggleModal(),C.value=[],V()}catch{q.value=!1,y("negative","Ocurrió un error, por favor verifique los datos")}m.value="",h.value="",_.value=""}async function fe(e){f.value=!0;try{const t=await Ge(e,w.value);y("positive","Gasto de siembra activado correctamente"),f.value=!1,C.value=[],E.value=[],V()}catch{f.value=!1,y("negative","Ocurrió un error")}}async function me(e){f.value=!1;try{const t=await Be(e,w.value);f.value=!1,y("positive","Gasto de siembra desactivado correctamente"),C.value=[],E.value=[],V()}catch{f.value=!1,y("negative","Ocurrió un error")}}const w=Z(()=>le.idSelected);return ke(w,()=>{V()}),Ce(()=>{V()}),(e,t)=>{const P=v("q-separator"),D=v("q-tab"),u=v("q-tabs"),S=v("q-icon"),A=v("q-input"),T=v("q-btn"),J=v("q-btn-group"),K=v("q-table"),X=v("q-tab-panel"),_e=v("q-tab-panels"),ge=v("q-card"),be=v("q-spinner-ios");return I(),ee(Ve,null,[i("div",Me,[i("div",Ne,[i("i",{class:"icon icon-backRoute q-pt-lg",onClick:t[0]||(t[0]=a=>e.$router.back())}),Re]),o(P,{class:"separator"}),i("div",Le,[o(Oe,{onOnClick:ce,label:"Crear nuevo gasto de siembra"}),i("div",Te,[o(ge,null,{default:c(()=>[o(u,{modelValue:r(k),"onUpdate:modelValue":t[1]||(t[1]=a=>x(k)?k.value=a:k=a),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:c(()=>[o(D,{name:"active",label:"Activos"}),o(D,{name:"inactive",label:"Inactivos"})]),_:1},8,["modelValue"]),o(P),o(_e,{modelValue:r(k),"onUpdate:modelValue":t[4]||(t[4]=a=>x(k)?k.value=a:k=a),animated:""},{default:c(()=>[o(X,{name:"active"},{default:c(()=>[o(K,{flat:"",bordered:"",title:"Gastos de Siembra","row-key":"name",rows:C.value,columns:H.value,filter:r(b),loading:f.value,"rows-per-page-options":[5,10,20]},{"top-right":c(()=>[o(A,{borderless:"",dense:"",debounce:"300",modelValue:r(b),"onUpdate:modelValue":t[2]||(t[2]=a=>x(b)?b.value=a:b=a),placeholder:"Search"},{append:c(()=>[o(S,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":c(a=>[i("td",Ue,[o(J,{class:"full-width full-height",outline:"",square:""},{default:c(()=>[o(T,{icon:"edit_note","text-color":"blue-10",class:"col text-bold q-pa-none icon-table",onClick:Y=>de(a.row)},null,8,["onClick"]),o(T,{icon:"highlight_off","text-color":"blue-10",class:"col text-bold q-pa-none icon-table",onClick:Y=>me(a.row._id)},null,8,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1}),o(X,{name:"inactive"},{default:c(()=>[o(K,{flat:"",bordered:"",title:"Gastos de Actividades","row-key":"name",rows:E.value,columns:H.value,filter:r(b),loading:f.value,"rows-per-page-options":[5,10,20]},{"top-right":c(()=>[o(A,{borderless:"",dense:"",debounce:"300",modelValue:r(b),"onUpdate:modelValue":t[3]||(t[3]=a=>x(b)?b.value=a:b=a),placeholder:"Search"},{append:c(()=>[o(S,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":c(a=>[i("td",Fe,[o(J,{class:"full-width full-height",outline:"",square:""},{default:c(()=>[o(T,{"text-color":"blue-10",class:"col q-pa-none",onClick:Y=>fe(a.row._id)},{default:c(()=>[We]),_:2},1032,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])])]),r(l).modalIsOpen?(I(),U(xe,{key:0,class:"modal"},{default:c(()=>[i("div",$e,[i("h6",je,Se(p.value),1),i("div",Qe,[i("div",He,[o(W,{label:"Nombre",required:!0,type:"text",ruless:G,value:r(M),modelValue:r(m),"onUpdate:modelValue":t[5]||(t[5]=a=>x(m)?m.value=a:m=a),onOnWrite:se},null,8,["value","modelValue"]),o(Ee,{class:"q-pb-lg",type:"lots",label:"Lote","v-model":r(g),required:!0,ruless:G,value:r(N),onOnSelect:ie},null,8,["v-model","value"]),o(W,{label:"Valor",type:"text",required:!0,ruless:G,value:r(L),modelValue:r(_),"onUpdate:modelValue":t[6]||(t[6]=a=>x(_)?_.value=a:_=a),onOnWrite:re},null,8,["value","modelValue"]),o(W,{class:"q-mb-md",label:"Descripción",type:"text",required:!1,value:r(R),modelValue:r(h),"onUpdate:modelValue":t[7]||(t[7]=a=>x(h)?h.value=a:h=a),onOnWrite:ne},null,8,["value","modelValue"]),Je,i("div",Ke,[B.value?(I(),U(ae,{key:0,disable:r(Q),onOnClick:ve},null,8,["disable"])):(I(),U(ae,{key:1,disable:r(Q),onOnClick:pe},null,8,["disable"]))]),q.value?(I(),ee("div",Xe,[o(be,{color:"primary",size:"2.5em"})])):te("",!0)])])])]),_:1})):te("",!0)],64)}}},tt=he(Ye,[["__scopeId","data-v-becdb9dd"]]);export{tt as default};
