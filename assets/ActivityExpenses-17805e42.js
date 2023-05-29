import{s as I,_ as me,l as _e,m as ye,g as l,q as ge,f as J,v as be,x as he,r as v,o as V,c as K,a as c,d as a,w as i,h as r,i as B,M as xe,j as P,F as qe,y as w,t as we,z as T,B as X,p as Ae,e as ke,A as Y}from"./index-d466a28b.js";import{g as C,B as Ee}from"./ButtonAdd-005d7d30.js";const Ve=async n=>{try{const u=C(),{data:s}=await I.get("/costs/activityexpenses",{headers:{token:u,farm:n}});return s}catch(u){return u}},Ie=async(n,u)=>{try{const s=C(),{data:p}=await I.post("/costs/activityexpenses/register",{name:n.name,description:n.description,value:n.value},{headers:{token:s,farm:u}});return p}catch(s){return s}},Ce=async(n,u)=>{try{const s=C(),{data:p}=await I.put(`/costs/activityexpenses/update/${n.id}`,{name:n.name,description:n.description,value:n.value},{headers:{token:s,farm:u}});return p}catch(s){return s}},Se=async(n,u)=>{try{const s=C(),{data:p}=await I.put(`/costs/activityexpenses/inactivate/${n}`,{},{headers:{token:s,farm:u}});return p}catch(s){return s}},De=async(n,u)=>{try{const s=C(),{data:p}=await I.put(`/costs/activityexpenses/activate/${n}`,{},{headers:{token:s,farm:u}});return p}catch(s){return s}};const M=n=>(Ae("data-v-616b107b"),n=n(),ke(),n),Oe={class:"q-py-sm table-container"},ze={class:"row"},Ge=M(()=>c("h6",{class:"title q-my-lg"},"Gastos de Actividades",-1)),Ne={class:"container-content"},Be={class:"container-table q-mt-md q-pa-md",rounded:""},Te={class:"accions-td"},Me={class:"accions-td"},Re=M(()=>c("i",{class:"icon icon-check"},null,-1)),Ue={class:"q-my-md text-center"},Fe={class:"row q-px-xl"},We={class:"col-12"},je=M(()=>c("span",{class:"text-required q-pb-sm"},[Y("Todos los campos con "),c("span",{class:"text-red"},"*"),Y(" son obligatorios")],-1)),$e={class:"row justify-center"},Le={key:0,class:"spinner"},Qe={__name:"ActivityExpenses",setup(n){const u=_e(),s=ye(),p=l(""),f=l(!1),D=l(!0),q=l([]),E=l([]),R=l(),Z=ge(),h=l(!1),U=J(()=>m.value==""||_.value==""?!0:h.value==!0),ee=[e=>!!e||"Este campo es requerido"];let y=l(""),x=l("active"),m=l(""),g=l(""),_=l(""),O=l(""),z=l(""),G=l("");const F=l([{name:"id",label:"#",field:"id",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"name",label:"Nombre",field:"name",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"description",label:"Descripción",field:"description",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"worth",label:"Valor",field:"worth",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"Acciones",label:"Acciones",field:"acciones",align:"left",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"}]),te=e=>{m.value=e},ae=e=>{g.value=e},oe=e=>{_.value=e},se=()=>{p.value="REGISTRAR GASTO DE ACITIVIDAD",ne(),D.value=!0,s.toggleModal()},ne=()=>{O.value="",z.value="",G.value="",m.value="",g.value="",_.value=""},le=e=>{p.value="EDITAR GASTO DE ACTIVIDAD",D.value=!1,R.value=e._id,O.value=e.name,z.value=e.description,G.value=e.worth,m.value=e.name,g.value=e.description,_.value=e.worth,s.toggleModal()},b=(e,o)=>{u.notify({type:e,message:o,position:"top"})},A=async()=>{q.value=[],E.value=[],f.value=!0;try{const{activityexpenses:e}=await Ve(k.value);let o=1,S=1;e.forEach(d=>{d.status=d.status?"Inactivo":"Activo",d.status=="Activo"?(d.id=o++,q.value.push(d)):(d.id=S++,E.value.push(d)),d.description=d.description.trim()==""?"No registra":d.description}),f.value=!1}catch{f.value=!1,b("negative","Ocurrió un error")}};async function ie(){h.value=!0;try{const e=await Ie({name:m.value,description:g.value,worth:_.value},k.value);h.value=!1,b("positive","Gasto de actividad registrado correctamente"),s.toggleModal(),q.value=[],A()}catch{h.value=!1,b("negative","Ocurrió un error, por favor verifique los datos")}}async function re(){h.value=!0;try{const e=await Ce({id:R.value,name:m.value,description:g.value,worth:_.value},k.value);h.value=!1,b("positive","Gasto de actividad actualizado correctamente"),s.toggleModal(),q.value=[],A()}catch{h.value=!1,b("negative","Ocurrió un error, por favor verifique los datos")}m.value="",g.value="",_.value=""}async function ce(e){f.value=!0;try{const o=await De(e,k.value);b("positive","Gasto de actividad activado correctamente"),f.value=!1,q.value=[],E.value=[],A()}catch{f.value=!1,b("negative","Ocurrió un error")}}async function ue(e){f.value=!1;try{const o=await Se(e,k.value);f.value=!1,b("positive","Gasto de actividad desactivado correctamente"),q.value=[],E.value=[],A()}catch{f.value=!1,b("negative","Ocurrió un error")}}const k=J(()=>Z.idSelected);return be(k,()=>{A()}),he(()=>{A()}),(e,o)=>{const S=v("q-separator"),d=v("q-tab"),de=v("q-tabs"),W=v("q-icon"),j=v("q-input"),N=v("q-btn"),$=v("q-btn-group"),L=v("q-table"),Q=v("q-tab-panel"),ve=v("q-tab-panels"),pe=v("q-card"),fe=v("q-spinner-ios");return V(),K(qe,null,[c("div",Oe,[c("div",ze,[c("i",{class:"icon icon-backRoute q-pt-lg",onClick:o[0]||(o[0]=t=>e.$router.back())}),Ge]),a(S,{class:"separator"}),c("div",Ne,[a(Ee,{onOnClick:se,label:"Crear nuevo gasto de actividad"}),c("div",Be,[a(pe,null,{default:i(()=>[a(de,{modelValue:r(x),"onUpdate:modelValue":o[1]||(o[1]=t=>w(x)?x.value=t:x=t),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:i(()=>[a(d,{name:"active",label:"Activos"}),a(d,{name:"inactive",label:"Inactivos"})]),_:1},8,["modelValue"]),a(S),a(ve,{modelValue:r(x),"onUpdate:modelValue":o[4]||(o[4]=t=>w(x)?x.value=t:x=t),animated:""},{default:i(()=>[a(Q,{name:"active"},{default:i(()=>[a(L,{flat:"",bordered:"",title:"Gastos de Actividades","row-key":"name",rows:q.value,columns:F.value,filter:r(y),loading:f.value,"rows-per-page-options":[5,10,20]},{"top-right":i(()=>[a(j,{borderless:"",dense:"",debounce:"300",modelValue:r(y),"onUpdate:modelValue":o[2]||(o[2]=t=>w(y)?y.value=t:y=t),placeholder:"Search"},{append:i(()=>[a(W,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":i(t=>[c("td",Te,[a($,{class:"full-width full-height",outline:"",square:""},{default:i(()=>[a(N,{icon:"edit_note","text-color":"blue-10",class:"col text-bold q-pa-none",onClick:H=>le(t.row)},null,8,["onClick"]),a(N,{icon:"highlight_off","text-color":"blue-10",class:"col text-bold q-pa-none",onClick:H=>ue(t.row._id)},null,8,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1}),a(Q,{name:"inactive"},{default:i(()=>[a(L,{flat:"",bordered:"",title:"Gastos de Actividades","row-key":"name",rows:E.value,columns:F.value,filter:r(y),loading:f.value,"rows-per-page-options":[5,10,20]},{"top-right":i(()=>[a(j,{borderless:"",dense:"",debounce:"300",modelValue:r(y),"onUpdate:modelValue":o[3]||(o[3]=t=>w(y)?y.value=t:y=t),placeholder:"Search"},{append:i(()=>[a(W,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":i(t=>[c("td",Me,[a($,{class:"full-width full-height",outline:"",square:""},{default:i(()=>[a(N,{"text-color":"blue-10",class:"col q-pa-none",onClick:H=>ce(t.row._id)},{default:i(()=>[Re]),_:2},1032,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])])]),r(s).modalIsOpen?(V(),B(xe,{key:0},{default:i(()=>[c("h6",Ue,we(p.value),1),c("div",Fe,[c("div",We,[a(T,{label:"Nombre",required:!0,type:"text",ruless:ee,value:r(O),modelValue:r(m),"onUpdate:modelValue":o[5]||(o[5]=t=>w(m)?m.value=t:m=t),onOnWrite:te},null,8,["value","modelValue"]),a(T,{class:"q-mb-md",label:"Descripción",type:"text",required:!1,value:r(z),modelValue:r(g),"onUpdate:modelValue":o[6]||(o[6]=t=>w(g)?g.value=t:g=t),onOnWrite:ae},null,8,["value","modelValue"]),a(T,{class:"q-pb-xs",label:"Valor",type:"text",required:!1,value:r(G),modelValue:r(_),"onUpdate:modelValue":o[7]||(o[7]=t=>w(_)?_.value=t:_=t),onOnWrite:oe},null,8,["value","modelValue"]),je,c("div",$e,[D.value?(V(),B(X,{key:0,disable:r(U),onOnClick:ie},null,8,["disable"])):(V(),B(X,{key:1,disable:r(U),onOnClick:re},null,8,["disable"]))]),h.value?(V(),K("div",Le,[a(fe,{color:"primary",size:"2.5em"})])):P("",!0)])])]),_:1})):P("",!0)],64)}}},Ke=me(Qe,[["__scopeId","data-v-616b107b"]]);export{Ke as default};