import{g as P,B as Ve}from"./ButtonAdd-ed09f57b.js";import{s as B,_ as ke,l as xe,m as Ee,g as r,q as Ae,f as oe,v as De,x as Oe,r as v,o as k,c as le,a as d,d as l,w as i,h as n,i as D,M as Re,j as N,F as Ie,y as h,t as Ce,z as se,C as X,D as Ne,B as ne,p as Te,e as ze,A as re,R as T}from"./index-a2b1bd69.js";const Pe=async o=>{try{const m=P(),{data:s}=await B.get("/users",{headers:{token:m,farm:o}});return s}catch(m){return m}},Be=async(o,m)=>{try{const s=P(),{data:p}=await B.post("/users/register",{name:o.name,tpdocument:o.tpdocument,numdocument:o.numdocument,role:o.role,farms:[o.farms],password:o.password},{headers:{token:s,farm:m}});return p}catch(s){return s}},Le=async(o,m)=>{try{const s=P(),{data:p}=await B.put(`/users/update/${o.id}`,{name:o.name,tpdocument:o.tpdocument,numdocument:o.numdocument,role:o.role,farms:[o.farms],password:o.password},{headers:{token:s,farm:m}});return p}catch(s){return s}},Me=async(o,m)=>{try{const s=P(),{data:p}=await B.put(`/users/inactive/${o}`,{},{headers:{token:s,farm:m}});return p}catch(s){return s}},Fe=async(o,m)=>{try{const s=P(),{data:p}=await B.put(`/users/active/${o}`,{},{headers:{token:s,farm:m}});return p}catch(s){return s}};const Q=o=>(Te("data-v-de18bf79"),o=o(),ze(),o),We={class:"q-py-md table-container"},je=Q(()=>d("h6",{class:"title q-my-lg"},"ACCESO AL SISTEMA",-1)),Ge={class:"container-content"},He={class:"container-table q-mt-md q-pa-md",rounded:""},Xe={class:"accions-td"},Qe={style:{padding:"0px",margin:"0px","min-width":"100px","max-width":"100px"}},Je=Q(()=>d("i",{class:"icon icon-check"},null,-1)),Ke={class:"modalSystem"},Ye={class:"q-my-md text-center"},Ze={class:"row q-px-xl"},$e={class:"col-12"},ea={class:"row justify-between"},aa=Q(()=>d("span",{class:"text-required q-py-sm"},[re("Todos los campos con "),d("span",{class:"text-red"},"*"),re(" son obligatorios")],-1)),ta={class:"row justify-center q-mt-sm"},oa={key:3,class:"spinner"},la={__name:"SystemView",setup(o){const m=xe(),s=Ee(),p=r(),L=r(""),f=r(!1),x=r(!1),M=r(!0),A=r([]),z=r([]),ue=Ae();let F=r(""),W=r(""),j=r(""),O=r(""),G=r(""),_=r(""),y=r(""),g=r(""),b=r(""),S=r(""),U=r(""),w=r(""),E=r("active");const J=oe(()=>!_.value||!y.value||!g.value||!S.value||!U.value||!b.value?!0:x.value==!0),R=[e=>!!e||"Este campo es requerido"],K=r([{name:"id",label:"#",field:"id",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"Nombre",label:"Nombre",field:"name",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"Tipo",label:"Tipo",field:"tpdocument",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"Documento",label:"Documento",field:"numdocument",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"role",label:"Rol",field:"role",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"Acciones",label:"Acciones",field:"acciones",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"}]),ce=e=>{_.value=e},ie=e=>{y.value=e},de=e=>{g.value=e},me=e=>{b.value=e},ve=e=>{S.value=e},pe=e=>{U.value=e},fe=()=>{L.value="REGISTRAR ACCESO",_e(),M.value=!0,s.toggleModal()},_e=()=>{F.value="",W.value="",j.value="",O.value="",G.value="",_.value="",y.value="",g.value="",S.value="",U.value="",b.value=""},ye=e=>{L.value="EDITAR TIPO DE PAGO",M.value=!1,p.value=e._id,F.value=e.name,W.value=e.tpdocument,j.value=e.numdocument,O.value=e.role,G.value=e.farms,_.value=e.name,y.value=e.tpdocument,g.value=e.numdocument,b.value=e.farms,S.value=e.role,s.toggleModal()},c=(e,t)=>{m.notify({type:e,message:t,position:"top"})};async function I(){A.value=[],z.value=[],f.value=!0;try{const e=await Pe(C.value);let t=1,q=1;e.forEach(u=>{u.status=u.status?"Inactivo":"Activo",u.status=="Activo"?(u.id=t++,A.value.push(u)):(u.id=q++,z.value.push(u))}),f.value=!1}catch{c("negative","Ocurrió un error al obtener los usuarios")}}async function ge(){var e,t,q;x.value=!0;try{const u=await Le({id:p.value,name:_.value,tpdocument:y.value,numdocument:g.value,role:S.value,farms:b.value,password:U.value},C.value);x.value=!1;let V=(q=(t=(e=u==null?void 0:u.response)==null?void 0:e.data)==null?void 0:t.errors[0])==null?void 0:q.msg;V==T.USEREXIST?c("negative","El usuario ya existe"):V==T.LENGTHPASSWORD?c("negative","La contraseña debe tener de 6 a 20 carácteres"):V==T.RULESPASSWORD?c("negative","La contraseña debe tener una letra mayúscula, una letra minúscula y un número"):(c("positive","Tipo de pago actualizado correctamente"),s.toggleModal(),A.value=[],I())}catch{x.value=!1,c("negative","Ocurrió un error")}}async function be(){var e,t,q;x.value=!0;try{const u=await Be({name:_.value,tpdocument:y.value,numdocument:g.value,role:S.value,farms:b.value,password:U.value},C.value);x.value=!1;let V=(q=(t=(e=u==null?void 0:u.response)==null?void 0:e.data)==null?void 0:t.errors[0])==null?void 0:q.msg;V==T.USEREXIST?c("negative","El usuario ya existe"):V==T.LENGTHPASSWORD?c("negative","La contraseña debe tener de 6 a 20 carácteres"):V==T.RULESPASSWORD?c("negative","La contraseña debe tener una letra mayúscula, una letra minúscula y un número"):(s.toggleModal(),A.value=[],c("positive","Usuario registrado correctamente"),I())}catch{x.value=!1,c("negative","Ocurrió un error")}}async function Se(e){f.value=!0;try{await Fe(e,C.value),f.value=!1,c("positive","Usuario activado correctamente"),A.value=[],z.value=[],I()}catch{f.value=!1,c("negative","Ocurrió un error al activar el usuario")}}async function we(e){f.value=!0;try{await Me(e,C.value),c("positive","Usuario desactivado correctamente"),f.value=!1,A.value=[],z.value=[],I()}catch{f.value=!1,c("negative","Ocurrió un error al desactivar el usuario")}}const C=oe(()=>ue.idSelected);return De(C,()=>{I()}),Oe(()=>{I()}),(e,t)=>{const q=v("q-separator"),u=v("q-tab"),V=v("q-tabs"),Y=v("q-icon"),Z=v("q-input"),H=v("q-btn"),$=v("q-btn-group"),ee=v("q-table"),ae=v("q-tab-panel"),qe=v("q-tab-panels"),he=v("q-card"),Ue=v("q-spinner-ios");return k(),le(Ie,null,[d("div",We,[je,l(q,{class:"separator"}),d("div",Ge,[l(Ve,{onOnClick:fe,label:"Crear nuevo usuario"}),d("div",He,[l(he,null,{default:i(()=>[l(V,{modelValue:n(E),"onUpdate:modelValue":t[0]||(t[0]=a=>h(E)?E.value=a:E=a),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:i(()=>[l(u,{name:"active",label:"Activos"}),l(u,{name:"inactive",label:"Inactivos"})]),_:1},8,["modelValue"]),l(q),l(qe,{modelValue:n(E),"onUpdate:modelValue":t[3]||(t[3]=a=>h(E)?E.value=a:E=a),animated:""},{default:i(()=>[l(ae,{name:"active"},{default:i(()=>[l(ee,{flat:"",bordered:"",title:"Usuarios","row-key":"name",rows:A.value,columns:K.value,filter:n(w),loading:f.value,"rows-per-page-options":[5,10,20]},{"top-right":i(()=>[l(Z,{borderless:"",dense:"",debounce:"300",modelValue:n(w),"onUpdate:modelValue":t[1]||(t[1]=a=>h(w)?w.value=a:w=a),placeholder:"Buscar"},{append:i(()=>[l(Y,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":i(a=>[d("td",Xe,[l($,{class:"full-width full-height",outline:"",square:""},{default:i(()=>[l(H,{icon:"edit_note","text-color":"blue-10",class:"col text-bold q-pa-none icon-table",onClick:te=>ye(a.row)},null,8,["onClick"]),a.row.role=="ADMIN"?(k(),D(H,{key:0,icon:"highlight_off","text-color":"blue-10",class:"col text-bold q-pa-none icon-table",onClick:te=>we(a.row._id)},null,8,["onClick"])):N("",!0)]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1}),l(ae,{name:"inactive"},{default:i(()=>[l(ee,{flat:"",bordered:"",title:"Usuarios","row-key":"name",rows:z.value,columns:K.value,filter:n(w),loading:f.value,"rows-per-page-options":[5,10,20]},{"top-right":i(()=>[l(Z,{borderless:"",dense:"",debounce:"300",modelValue:n(w),"onUpdate:modelValue":t[2]||(t[2]=a=>h(w)?w.value=a:w=a),placeholder:"Buscar"},{append:i(()=>[l(Y,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":i(a=>[d("td",Qe,[l($,{class:"full-width full-height",outline:"",square:""},{default:i(()=>[l(H,{"text-color":"blue-10",class:"col q-pa-none",onClick:te=>Se(a.row._id)},{default:i(()=>[Je]),_:2},1032,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])])]),n(s).modalIsOpen?(k(),D(Re,{key:0,class:"modal"},{default:i(()=>[d("div",Ke,[d("h6",Ye,Ce(L.value),1),d("div",Ze,[d("div",$e,[l(se,{label:"Nombre",type:"text",required:!0,ruless:R,value:n(F),modelValue:n(_),"onUpdate:modelValue":t[4]||(t[4]=a=>h(_)?_.value=a:_=a),onOnWrite:ce},null,8,["value","modelValue"]),d("div",ea,[l(X,{class:"q-pb-xs q-mb-md",type:"documents",label:"Tipo de documento",required:!0,ruless:R,value:n(W),modelValue:n(y),"onUpdate:modelValue":t[5]||(t[5]=a=>h(y)?y.value=a:y=a),onOnSelect:ie},null,8,["value","modelValue"]),l(se,{label:"Número documento",type:"number",required:!0,ruless:R,value:n(j),modelValue:n(g),"onUpdate:modelValue":t[6]||(t[6]=a=>h(g)?g.value=a:g=a),onOnWrite:de},null,8,["value","modelValue"])]),n(O)!="SUPER"?(k(),D(X,{key:0,class:"col-4 q-pb-xs q-mb-md",type:"roles",label:"Rol",required:!0,ruless:R,value:n(O),modelValue:n(S),"onUpdate:modelValue":t[7]||(t[7]=a=>h(S)?S.value=a:S=a),onOnSelect:ve},null,8,["value","modelValue"])):N("",!0),n(O)!="SUPER"?(k(),D(X,{key:1,class:"q-pb-xs q-mb-md",label:"Acceso",type:"multiFarms",required:!0,ruless:R,value:n(G),modelValue:n(b),"onUpdate:modelValue":t[8]||(t[8]=a=>h(b)?b.value=a:b=a),onOnSelect:me},null,8,["value","modelValue"])):N("",!0),n(O)!="SUPER"?(k(),D(Ne,{key:2,label:"Contraseña",required:!0,ruless:R,modelValue:n(U),"onUpdate:modelValue":t[9]||(t[9]=a=>h(U)?U.value=a:U=a),onOnPassword:pe},null,8,["modelValue"])):N("",!0),aa,d("div",ta,[M.value?(k(),D(ne,{key:0,disable:n(J),onOnClick:be},null,8,["disable"])):(k(),D(ne,{key:1,disable:n(J),onOnClick:ge},null,8,["disable"]))]),x.value?(k(),le("div",oa,[l(Ue,{color:"primary",size:"2.5em"})])):N("",!0)])])])]),_:1})):N("",!0)],64)}}},ra=ke(la,[["__scopeId","data-v-de18bf79"]]);export{ra as default};
