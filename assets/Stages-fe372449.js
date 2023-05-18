import{l as x,s as V,_ as re,m as ie,f as l,h as ce,q as de,v as ue,r as g,o as I,c as pe,a as u,d as a,w as r,i,g as B,M as ve,j as ge,F as me,x as S,t as fe,y as D,B as $,p as _e,e as ye,z as H}from"./index-9b0f9ebe.js";import{g as E,B as be}from"./ButtonAdd-1e3a5e63.js";const he=async()=>{try{const n=E(),y=x().idSelected,{data:c}=await V.get("/maintenance/stage",{headers:{token:n,farm:y}});return c}catch(n){console.error(n)}},qe=async n=>{try{const o=E(),c=x().idSelected,{data:p}=await V.post("/maintenance/stage/register",{name:n.name,lot:n.lot,description:n.description},{headers:{token:o,farm:c}});return p}catch(o){console.error(o)}},Se=async n=>{try{const o=E(),c=x().idSelected,{data:p}=await V.put(`/maintenance/stage/update/${n.id}`,{name:n.name,lot:n.lot,description:n.description},{headers:{token:o,farm:c}});return p}catch(o){console.error(o)}},we=async n=>{try{const o=E(),c=x().idSelected,{data:p}=await V.put(`/maintenance/stage/inactive/${n}`,{},{headers:{token:o,farm:c}});return p}catch(o){console.error(o)}},ke=async n=>{try{const o=E(),c=x().idSelected,{data:p}=await V.put(`/maintenance/stage/active/${n}`,{},{headers:{token:o,farm:c}});return p}catch(o){console.error(o)}};const N=n=>(_e("data-v-f956355c"),n=n(),ye(),n),xe={class:"q-py-md table-container"},Ve=N(()=>u("h6",{class:"title q-my-lg"},"TIPOS ETAPAS",-1)),Ee={class:"container-content"},Ae={class:"container-table q-mt-md q-pa-md",rounded:""},Ie={class:"accions-td"},ze={class:"accions-td"},Ce=N(()=>u("i",{class:"icon icon-check"},null,-1)),Oe={class:"q-my-md text-center"},Me={class:"row q-px-xl"},Be={class:"col-12"},De=N(()=>u("span",{class:"text-required q-pb-sm"},[H("Todos los campos con "),u("span",{class:"text-red"},"*"),H(" son obligatorios")],-1)),Ne={class:"row justify-center"},Te={__name:"Stages",setup(n){const o=ie(),y=l(""),c=l(!1),p=l(!0),q=l([]),w=l([]),T=l(),F=ce(()=>v.value==""),U=[t=>!!t||"Este campo es requerido"];let m=l(""),v=l(""),f=l(""),_=l(""),z=l(""),C=l(""),O=l(""),h=l("active");const b=de(),R=l([{name:"id",label:"#",field:"id",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"name",label:"Nombre",field:"name",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"lot",label:"Lote",field:"lot",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"description",label:"Descripción",field:"description",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"status",label:"Estado",field:"status",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"Acciones",label:"Acciones",field:"acciones",align:"left",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"}]),J=t=>{v.value=t},K=t=>{f.value=t},X=t=>{_.value=t},Y=()=>{y.value="REGISTRAR ETAPA",z.value="",C.value="",O.value="",p.value=!0,o.toggleModal(),v.value="",f.value="",_.value=""},Z=t=>{y.value="EDITAR ETAPA",p.value=!1,T.value=t._id,z.value=t.name,O.value=t.lot,C.value=t.description,v.value=t.name,f.value=t.lot,_.value=t.description,o.toggleModal()};async function ee(t){try{const s=await we(t);b.notify({type:"positive",message:"Etapa desactivada correctamente",position:"top"}),q.value=[],w.value=[],k()}catch{b.notify({type:"negative",message:"Ocurrió un error",position:"top"})}}async function te(){o.toggleModal();try{const t=await qe({name:v.value,lot:f.value,description:_.value});b.notify({type:"positive",message:"Etapa registrada correctamente",position:"top"}),q.value=[],k()}catch{b.notify({type:"negative",message:"Ocurrió un error",position:"top"})}}const k=async()=>{q.value=[],w.value=[],c.value=!0;try{const{stages:t}=await he();let s=1,A=1;t.forEach(d=>{d.status=d.status?"Inactivo":"Activo",d.status=="Activo"?(d.id=s++,q.value.push(d)):(d.id=A++,w.value.push(d)),d.description=d.description.trim()==""?"No registra":d.description}),c.value=!1}catch{b.notify({type:"negative",message:"Ocurrió un error",position:"top"})}};async function ae(){try{const t=await Se({id:T.value,name:v.value,lot:f.value,description:_.value});b.notify({type:"positive",position:"top",message:"Etapa actualizada correctamente"}),o.toggleModal(),q.value=[],k()}catch{b.notify({type:"negative",position:"top",message:"Ocurrió un error"})}v.value="",f.value="",_.value=""}async function oe(t){try{const s=await ke(t);b.notify({type:"positive",message:"Etapa activada correctamente",position:"top"}),q.value=[],w.value=[],k()}catch{b.notify({type:"negative",message:"Ocurrió un error",position:"top"})}}return ue(()=>{k()}),(t,s)=>{const A=g("q-separator"),d=g("q-tab"),ne=g("q-tabs"),L=g("q-icon"),P=g("q-input"),M=g("q-btn"),j=g("q-btn-group"),W=g("q-table"),G=g("q-tab-panel"),se=g("q-tab-panels"),le=g("q-card");return I(),pe(me,null,[u("div",xe,[Ve,a(A,{class:"separator"}),u("div",Ee,[a(be,{onOnClick:Y,label:"Crear nueva etapa"}),u("div",Ae,[a(le,null,{default:r(()=>[a(ne,{modelValue:i(h),"onUpdate:modelValue":s[0]||(s[0]=e=>S(h)?h.value=e:h=e),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:r(()=>[a(d,{name:"active",label:"Activos"}),a(d,{name:"inactive",label:"Inactivos"})]),_:1},8,["modelValue"]),a(A),a(se,{modelValue:i(h),"onUpdate:modelValue":s[3]||(s[3]=e=>S(h)?h.value=e:h=e),animated:""},{default:r(()=>[a(G,{name:"active"},{default:r(()=>[a(W,{flat:"",bordered:"",title:"Etapas","row-key":"name",rows:q.value,columns:R.value,filter:i(m),loading:c.value,"rows-per-page-options":[5,10,20]},{"top-right":r(()=>[a(P,{borderless:"",dense:"",debounce:"300",modelValue:i(m),"onUpdate:modelValue":s[1]||(s[1]=e=>S(m)?m.value=e:m=e),placeholder:"Search"},{append:r(()=>[a(L,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":r(e=>[u("td",Ie,[a(j,{class:"full-width full-height",outline:"",square:""},{default:r(()=>[a(M,{icon:"edit_note","text-color":"blue-10",class:"col text-bold q-pa-none",onClick:Q=>Z(e.row)},null,8,["onClick"]),a(M,{icon:"highlight_off","text-color":"blue-10",class:"col text-bold q-pa-none",onClick:Q=>ee(e.row._id)},null,8,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1}),a(G,{name:"inactive"},{default:r(()=>[a(W,{flat:"",bordered:"",title:"Etapas","row-key":"name",rows:w.value,columns:R.value,filter:i(m),loading:c.value,"rows-per-page-options":[5,10,20]},{"top-right":r(()=>[a(P,{borderless:"",dense:"",debounce:"300",modelValue:i(m),"onUpdate:modelValue":s[2]||(s[2]=e=>S(m)?m.value=e:m=e),placeholder:"Search"},{append:r(()=>[a(L,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":r(e=>[u("td",ze,[a(j,{class:"full-width full-height",outline:"",square:""},{default:r(()=>[a(M,{"text-color":"blue-10",class:"col q-pa-none",onClick:Q=>oe(e.row._id)},{default:r(()=>[Ce]),_:2},1032,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])])]),i(o).modalIsOpen?(I(),B(ve,{key:0},{default:r(()=>[u("h6",Oe,fe(y.value),1),u("div",Me,[u("div",Be,[a(D,{class:"q-pb-xs",label:"Nombre",required:!0,type:"text",ruless:U,value:i(z),modelValue:i(v),"onUpdate:modelValue":s[4]||(s[4]=e=>S(v)?v.value=e:v=e),onOnWrite:J},null,8,["value","modelValue"]),a(D,{class:"q-pb-xs",label:"Lote",type:"text",required:!0,ruless:U,value:i(O),modelValue:i(f),"onUpdate:modelValue":s[5]||(s[5]=e=>S(f)?f.value=e:f=e),onOnWrite:K},null,8,["value","modelValue"]),a(D,{class:"q-pb-xs",label:"Descripción",type:"text",required:!1,value:i(C),modelValue:i(_),"onUpdate:modelValue":s[6]||(s[6]=e=>S(_)?_.value=e:_=e),onOnWrite:X},null,8,["value","modelValue"]),De,u("div",Ne,[p.value?(I(),B($,{key:0,disable:i(F),onOnClick:te},null,8,["disable"])):(I(),B($,{key:1,disable:i(F),onOnClick:ae},null,8,["disable"]))])])])]),_:1})):ge("",!0)],64)}}},Re=re(Te,[["__scopeId","data-v-f956355c"]]);export{Re as default};
