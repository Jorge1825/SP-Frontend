import{s as C,_ as me,m as fe,g as c,q as _e,f as J,l as ge,v as ye,x as be,r as p,o as V,c as K,a as d,d as t,w as i,h as u,i as R,M as he,j as P,F as qe,y as q,t as ke,z as D,B as X,p as we,e as xe,A as Y}from"./index-d466a28b.js";import{g as A,B as Be}from"./ButtonAdd-005d7d30.js";const Ve=async l=>{try{const r=A(),{data:n}=await C.get("/inventory/mark",{headers:{token:r,farm:l}});return n}catch(r){return r}},Ce=async(l,r)=>{try{const n=A(),{data:s}=await C.post("/inventory/mark/register",{name:l.name,category:l.category,description:l.description},{headers:{token:n,farm:r}});return s}catch(n){return n}},Ae=async(l,r)=>{try{const n=A(),{data:s}=await C.put(`/inventory/mark/update/${l.id}`,{name:l.name,category:l.category,description:l.description},{headers:{token:n,farm:r}});return s}catch(n){return n}},Se=async(l,r)=>{try{const n=A(),{data:s}=await C.put(`/inventory/mark/inactivate/${l}`,{},{headers:{token:n,farm:r}});return s}catch(n){return n}},Ie=async(l,r)=>{try{const n=A(),{data:s}=await C.put(`/inventory/mark/activate/${l}`,{},{headers:{token:n,farm:r}});return s}catch(n){return n}};const U=l=>(we("data-v-b22aaaa0"),l=l(),xe(),l),Me={class:"q-py-md table-container"},ze={class:"row"},Oe=U(()=>d("h6",{class:"title q-my-lg"},"MARCAS",-1)),Ee={class:"container-content"},Ne={class:"container-table q-mt-md q-pa-md",rounded:""},Re={class:"accions-td"},De={class:"accions-td"},Ue=U(()=>d("i",{class:"icon icon-check"},null,-1)),Te={class:"q-my-md text-center"},Fe={class:"row q-px-xl"},je={class:"col-12"},We=U(()=>d("span",{class:"text-required q-pb-sm"},[Y("Todos los campos con "),d("span",{class:"text-red"},"*"),Y(" son obligatorios")],-1)),$e={class:"row justify-center"},Ge={key:0,class:"spinner"},Le={__name:"Brands",setup(l){const r=fe(),n=c(""),s=c(!1),I=c(!0),k=c(!1),h=c([]),B=c([]),T=c(),Z=_e(),F=J(()=>(m.value!=""||f.value!=""||_.value!=""||k.value==!0,!0)),M=[e=>!!e||"Este campo es requerido"];let g=c(""),m=c(""),f=c(""),_=c(""),z=c(""),O=c(""),E=c(""),b=c("active");const ee=ge(),j=c([{name:"id",label:"#",field:"id",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"name",label:"Nombre",field:"name",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"category",label:"Categoria",field:"category",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"description",label:"Descripción",field:"description",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"},{name:"Acciones",label:"Acciones",field:"acciones",align:"left",sortable:!0,headerStyle:"font-size: var(--font-large); font-weight: bold;",style:"font-size: var(--font-large);"}]),ae=e=>{m.value=e},te=e=>{f.value=e},oe=e=>{_.value=e},ne=()=>{n.value="REGISTRAR MARCAS",z.value="",O.value="",E.value="",I.value=!0,r.toggleModal(),m.value="",f.value="",_.value=""},le=e=>{n.value="EDITAR MARCAS",I.value=!1,T.value=e._id,z.value=e.name,O.value=e.category,E.value=e.description,m.value=e.name,f.value=e.category,_.value=e.description,r.toggleModal()},y=(e,o)=>{ee.notify({type:e,message:o,position:"top"})},w=async()=>{h.value=[],B.value=[],s.value=!0;try{const{mark:e}=await Ve(x.value);let o=1,S=1;e.forEach(v=>{v.status=v.status?"Inactivo":"Activo",v.status=="Activo"?(v.id=o++,h.value.push(v)):(v.id=S++,B.value.push(v)),v.description=v.description.trim()==""?"No registra":v.description}),s.value=!1}catch{y("negative","Ocurrió un error")}};async function se(){k.value=!0;try{const e=await Ce({name:m.value,category:f.value,description:_.value},x.value);k.value=!1,r.toggleModal(),y("positive","Marca registrada correctamente"),h.value=[],w()}catch{y("negative","Ocurrió un error")}}async function re(){k.value=!0;try{const e=await Ae({id:T.value,name:m.value,category:f.value,description:_.value},x.value);k.value=!1,y("positive","Marca actualizada correctamente"),r.toggleModal(),h.value=[],w()}catch{y("negative","Ocurrió un error")}m.value="",_.value="",f.value=""}async function ce(e){s.value=!0;try{const o=await Ie(e,x.value);s.value=!1,y("positive","Marca activada correctamente"),h.value=[],B.value=[],w()}catch{s.value=!1,y("negative","Ocurrió un error")}}async function ie(e){s.value=!0;try{const o=await Se(e,x.value);s.value=!1,y("positive","Marca desactivada correctamente"),h.value=[],B.value=[],w()}catch{s.value=!1,y("negative","Ocurrió un error")}}const x=J(()=>Z.idSelected);return ye(x,()=>{w()}),be(()=>{w()}),(e,o)=>{const S=p("q-separator"),v=p("q-tab"),ue=p("q-tabs"),W=p("q-icon"),$=p("q-input"),N=p("q-btn"),G=p("q-btn-group"),L=p("q-table"),Q=p("q-tab-panel"),de=p("q-tab-panels"),ve=p("q-card"),pe=p("q-spinner-ios");return V(),K(qe,null,[d("div",Me,[d("div",ze,[d("i",{class:"icon icon-backRoute q-pt-lg",onClick:o[0]||(o[0]=a=>e.$router.back())}),Oe]),t(S,{class:"separator"}),d("div",Ee,[t(Be,{onOnClick:ne,label:"Crear nueva marca"}),d("div",Ne,[t(ve,null,{default:i(()=>[t(ue,{modelValue:u(b),"onUpdate:modelValue":o[1]||(o[1]=a=>q(b)?b.value=a:b=a),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:i(()=>[t(v,{name:"active",label:"Activos"}),t(v,{name:"inactive",label:"Inactivos"})]),_:1},8,["modelValue"]),t(S),t(de,{modelValue:u(b),"onUpdate:modelValue":o[4]||(o[4]=a=>q(b)?b.value=a:b=a),animated:""},{default:i(()=>[t(Q,{name:"active"},{default:i(()=>[t(L,{flat:"",bordered:"",title:"Marcas","row-key":"name",rows:h.value,columns:j.value,filter:u(g),loading:s.value,"rows-per-page-options":[5,10,20]},{"top-right":i(()=>[t($,{borderless:"",dense:"",debounce:"300",modelValue:u(g),"onUpdate:modelValue":o[2]||(o[2]=a=>q(g)?g.value=a:g=a),placeholder:"Search"},{append:i(()=>[t(W,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":i(a=>[d("td",Re,[t(G,{class:"full-width full-height",outline:"",square:""},{default:i(()=>[t(N,{icon:"edit_note","text-color":"blue-10",class:"col text-bold q-pa-none",onClick:H=>le(a.row)},null,8,["onClick"]),t(N,{icon:"highlight_off","text-color":"blue-10",class:"col text-bold q-pa-none",onClick:H=>ie(a.row._id)},null,8,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1}),t(Q,{name:"inactive"},{default:i(()=>[t(L,{flat:"",bordered:"",title:"Marcas","row-key":"name",rows:B.value,columns:j.value,filter:u(g),loading:s.value,"rows-per-page-options":[5,10,20]},{"top-right":i(()=>[t($,{borderless:"",dense:"",debounce:"300",modelValue:u(g),"onUpdate:modelValue":o[3]||(o[3]=a=>q(g)?g.value=a:g=a),placeholder:"Search"},{append:i(()=>[t(W,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-Acciones":i(a=>[d("td",De,[t(G,{class:"full-width full-height",outline:"",square:""},{default:i(()=>[t(N,{"text-color":"blue-10",class:"col q-pa-none",onClick:H=>ce(a.row._id)},{default:i(()=>[Ue]),_:2},1032,["onClick"])]),_:2},1024)])]),_:1},8,["rows","columns","filter","loading"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])])]),u(r).modalIsOpen?(V(),R(he,{key:0},{default:i(()=>[d("h6",Te,ke(n.value),1),d("div",Fe,[d("div",je,[t(D,{label:"Nombre",required:!0,type:"text",ruless:M,value:u(z),modelValue:u(m),"onUpdate:modelValue":o[5]||(o[5]=a=>q(m)?m.value=a:m=a),onOnWrite:ae},null,8,["value","modelValue"]),t(D,{class:"q-pb-xs",label:"Categoria",required:!0,type:"text",ruless:M,value:u(O),modelValue:u(f),"onUpdate:modelValue":o[6]||(o[6]=a=>q(f)?f.value=a:f=a),onOnWrite:te},null,8,["value","modelValue"]),t(D,{class:"q-mb-xs",label:"Descripción",type:"text",required:!0,ruless:M,value:u(E),modelValue:u(_),"onUpdate:modelValue":o[7]||(o[7]=a=>q(_)?_.value=a:_=a),onOnWrite:oe},null,8,["value","modelValue"]),We,d("div",$e,[I.value?(V(),R(X,{key:0,disable:u(F),onOnClick:se},null,8,["disable"])):(V(),R(X,{key:1,disable:u(F),onOnClick:re},null,8,["disable"]))]),k.value?(V(),K("div",Ge,[t(pe,{color:"primary",size:"2.5em"})])):P("",!0)])])]),_:1})):P("",!0)],64)}}},Je=me(Le,[["__scopeId","data-v-b22aaaa0"]]);export{Je as default};