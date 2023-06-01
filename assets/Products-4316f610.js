import{l as S,s as I,_ as be,q as ye,g as r,v as he,f as X,m as qe,x as ke,y as we,r as v,o as O,c as Y,a as i,d as o,w as d,h as c,i as T,M as Pe,j as Z,F as Ve,G as xe,z as q,t as Oe,A as F,E as Se,B as ee,p as Ie,e as Ce,C as te,R as ae}from"./index-6c614867.js";import{B as Re}from"./ButtonAdd-91711192.js";const Ae=async l=>{try{const u=S(),{data:n}=await I.get("/inventory/product",{headers:{token:u,farm:l}});return n}catch(u){return u}},Ee=async(l,u)=>{try{const n=S(),{data:s}=await I.post("/inventory/product/register",{name:l.name,category:l.category,mark:l.mark,amount:l.amount,description:l.description},{headers:{token:n,farm:u}});return s}catch(n){return n}},ze=async(l,u)=>{try{const n=S(),{data:s}=await I.put(`/inventory/product/update/${l.id}`,{name:l.name,category:l.category,brand:l.brand,amount:l.amount,description:l.description},{headers:{token:n,farm:u}});return s}catch(n){return n}},De=async(l,u)=>{try{const n=S(),{data:s}=await I.put(`/inventory/product/inactivate/${l}`,{},{headers:{token:n,farm:u}});return s}catch(n){return n}},Ne=async(l,u)=>{try{const n=S(),{data:s}=await I.put(`/inventory/product/activate/${l}`,{},{headers:{token:n,farm:u}});return s}catch(n){return n}};const j=l=>(Ie("data-v-33fe399c"),l=l(),Ce(),l),Be={class:"q-py-md table-container"},Ue={class:"row"},Me=j(()=>i("h6",{class:"title q-my-lg"},"PRODUCTOS",-1)),Te={class:"container-content"},Fe={class:"container-table q-mt-md q-pa-md",rounded:""},je={class:"accions-td"},We={class:"accions-td"},$e=j(()=>i("i",{class:"icon icon-check"},null,-1)),Ge={class:"modal-products"},Le={class:"q-my-md text-center"},Qe={class:"row q-px-xl"},He={class:"col-12"},Je=j(()=>i("span",{class:"text-required q-pb-sm"},[te("Todos los campos con "),i("span",{class:"text-red"},"*"),te(" son obligatorios")],-1)),Ke={class:"row justify-center"},Xe={key:0,class:"spinner"},Ye={__name:"Products",setup(l){const u=ye(),n=r(""),s=r(!1),z=r(!0),k=r([]),V=r([]),W=r(),oe=he(),w=r(!1),$=X(()=>!f.value||!b.value||!_.value||!g.value?!0:w.value==!0),C=[e=>!!e||"Este campo es requerido"];let m=r(""),f=r(""),_=r(""),g=r(""),b=r(""),D=r(""),N=r(""),B=r(""),U=r(""),h=r("active");const le=qe(),G=r([{name:"id",label:"#",field:"id",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"name",label:"Nombre",field:"name",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"mark",label:"Marca",field:"mark",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"amount",label:"Cantidad",field:"amount",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"description",label:"Descripción",field:"description",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"Acciones",label:"Acciones",field:"acciones",align:"left",sortable:!0,headerStyle:"font-size: var(--font-medium); font-weight: bold;",style:"font-size: var(--font-medium);"}]),ne=e=>{f.value=e},se=e=>{_.value=e},re=e=>{b.value=e},ue=e=>{g.value=e},ce=()=>{n.value="REGISTRAR PRODUCTOS",D.value="",N.value="",B.value="",U.value="",z.value=!0,u.toggleModal(),f.value="",b.value="",_.value="",g.value=""},ie=e=>{n.value="EDITAR PRODUCTOS",z.value=!1,W.value=e._id,D.value=e.name,N.value=e.mark,B.value=e.amount,U.value=e.description,f.value=e.name,b.value=e.description,_.value=e.brand,g.value=e.amount,u.toggleModal()},y=(e,a)=>{le.notify({type:e,message:a,position:"top"})},x=async()=>{k.value=[],V.value=[],s.value=!0;try{const{product:e}=await Ae(P.value),{mark:a}=await xe(P.value);let R=1,A=1;e.forEach(p=>{p.status=p.status?"Inactivo":"Activo",p.mark=a.find(E=>E._id==p.mark).name,p.status=="Activo"?(p.id=R++,k.value.push(p)):(p.id=A++,V.value.push(p))}),s.value=!1}catch{s.value=!1,y("negative","Ocurrió un error")}};async function de(){w.value=!0,(await Ee({name:f.value,mark:_.value,amount:g.value,description:b.value==""?"No registra":b.value},P.value)).msg!=ae.ERROROPERATION?(w.value=!1,y("positive","Producto registrado correctamente"),u.toggleModal(),k.value=[],x()):(w.value=!1,y("negative","Ocurrió un error"))}async function ve(){w.value=!0;const e=await ze({id:W.value,name:f.value,brand:_.value,amount:g.value},P.value);w.value=!1,e.msg!=ae.ERROROPERATION?(y("positive","Producto actualizado correctamente"),u.toggleModal(),k.value=[],x()):y("negative","Ocurrió un error")}async function pe(e){s.value=!0;try{const a=await Ne(e,P.value);s.value=!1,y("positive","Producto activado correctamente"),k.value=[],V.value=[],x()}catch{s.value=!1,y("negative","Ocurrió un error")}}async function me(e){s.value=!0;try{const a=await De(e,P.value);s.value=!1,y("positive","Producto desactivado correctamente"),k.value=[],V.value=[],x()}catch{s.value=!1,y("negative","Ocurrió un error")}}const P=X(()=>oe.idSelected);return ke(P,()=>{getDataUsers()}),we(()=>{x()}),(e,a)=>{const R=v("q-separator"),A=v("q-tab"),p=v("q-tabs"),E=v("q-icon"),L=v("q-input"),M=v("q-btn"),Q=v("q-btn-group"),H=v("q-table"),J=v("q-tab-panel"),fe=v("q-tab-panels"),_e=v("q-card"),ge=v("q-spinner-ios");return O(),Y(Ve,null,[i("div",Be,[i("div",Ue,[i("i",{class:"icon icon-backRoute q-pt-lg",onClick:a[0]||(a[0]=t=>e.$router.back())}),Me]),o(R,{class:"separator"}),i("div",Te,[o(Re,{onOnClick:ce,label:"Crear nuevo producto"}),i("div",Fe,[o(_e,null,{default:d(()=>[o(p,{modelValue:c(h),"onUpdate:modelValue":a[1]||(a[1]=t=>q(h)?h.value=t:h=t),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:d(()=>[o(A,{name:"active",label:"Activos"}),o(A,{name:"inactive",label:"Inactivos"})]),_:1},8,["modelValue"]),o(R),o(fe,{modelValue:c(h),"onUpdate:modelValue":a[4]||(a[4]=t=>q(h)?h.value=t:h=t),animated:""},{default:d(()=>[o(J,{name:"active"},{default:d(()=>[o(H,{flat:"",bordered:"",title:"Productos","row-key":"name",rows:k.value,columns:G.value,filter:c(m),loading:s.value,"rows-per-page-options":[5,10,20]},{"top-right":d(()=>[o(L,{borderless:"",dense:"",debounce:"300",modelValue:c(m),"onUpdate:modelValue":a[2]||(a[2]=t=>q(m)?m.value=t:m=t),placeholder:"Search"},{append:d(()=>[o(E,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":d(t=>[i("td",je,[o(Q,{class:"full-width full-height",outline:"",square:""},{default:d(()=>[o(M,{icon:"edit_note","text-color":"blue-10",class:"col text-bold q-pa-none icon-table",onClick:K=>ie(t.row)},null,8,["onClick"]),o(M,{icon:"highlight_off","text-color":"blue-10",class:"col text-bold q-pa-none icon-table",onClick:K=>me(t.row._id)},null,8,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1}),o(J,{name:"inactive"},{default:d(()=>[o(H,{flat:"",bordered:"",title:"Productos","row-key":"name",rows:V.value,columns:G.value,filter:c(m),loading:s.value,"rows-per-page-options":[5,10,20]},{"top-right":d(()=>[o(L,{borderless:"",dense:"",debounce:"300",modelValue:c(m),"onUpdate:modelValue":a[3]||(a[3]=t=>q(m)?m.value=t:m=t),placeholder:"Search"},{append:d(()=>[o(E,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":d(t=>[i("td",We,[o(Q,{class:"full-width full-height",outline:"",square:""},{default:d(()=>[o(M,{"text-color":"blue-10",class:"col q-pa-none",onClick:K=>pe(t.row._id)},{default:d(()=>[$e]),_:2},1032,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])])]),c(u).modalIsOpen?(O(),T(Pe,{key:0,class:"modal"},{default:d(()=>[i("div",Ge,[i("h6",Le,Oe(n.value),1),i("div",Qe,[i("div",He,[o(F,{label:"Nombre",required:!0,type:"text",ruless:C,value:c(D),modelValue:c(f),"onUpdate:modelValue":a[5]||(a[5]=t=>q(f)?f.value=t:f=t),onOnWrite:ne},null,8,["value","modelValue"]),o(Se,{class:"q-pb-lg",label:"Marca",required:!0,type:"mark",ruless:C,value:c(N),modelValue:c(_),"onUpdate:modelValue":a[6]||(a[6]=t=>q(_)?_.value=t:_=t),onOnSelect:se},null,8,["value","modelValue"]),o(F,{class:"q-pb-xs",label:"Cantidad",required:!0,type:"text",ruless:C,value:c(B),modelValue:c(g),"onUpdate:modelValue":a[7]||(a[7]=t=>q(g)?g.value=t:g=t),onOnWrite:ue},null,8,["value","modelValue"]),o(F,{label:"Descripción",required:!0,ruless:C,type:"text",value:c(U),modelValue:c(b),"onUpdate:modelValue":a[8]||(a[8]=t=>q(b)?b.value=t:b=t),onOnWrite:re},null,8,["value","modelValue"]),Je,i("div",Ke,[z.value?(O(),T(ee,{key:0,disable:c($),onOnClick:de},null,8,["disable"])):(O(),T(ee,{key:1,disable:c($),onOnClick:ve},null,8,["disable"]))]),w.value?(O(),Y("div",Xe,[o(ge,{color:"primary",size:"2.5em"})])):Z("",!0)])])])]),_:1})):Z("",!0)],64)}}},tt=be(Ye,[["__scopeId","data-v-33fe399c"]]);export{tt as default};