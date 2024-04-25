import{i as q,p as K}from"./internalAdminPlanViewComp-c5305ea2.js";import{i as W}from"./internalAdminPlanEditComp-6e629104.js";import{_ as Z,u as $,r as o,o as _,c as m,b as e,t as f,d,e as t,w as l,f as k,F as y,i as S,j as ee,Q as te,R as le,g as G}from"./index-816a74e8.js";$();const se={components:{internalAdminPlanViewComp:q,internalAdminPlanEditComp:W,planCertifyHistoryTableComp:K},data(){return{date:null,rangeDate:null,dialog1:!1,dialog2:!1,dialog3:!1,pageType:"normal",selectedData:this.$globalModels.getModel("fakeBasicPlan")[0],headers:[{title:"計畫年度",key:"planYear",width:"10%",sortable:!0,removable:!0},{title:"計畫類別",key:"planType",width:"10%",sortable:!0,removable:!0},{title:"計畫編號",key:"serialNo",width:"15%",sortable:!1,removable:!0},{title:"計畫名稱",key:"planName",width:"30%",sortable:!1,removable:!0},{title:"計畫主持人",key:"chairman",width:"15%",sortable:!1,removable:!0},{title:"登錄人",key:"registerBy",width:"8%",sortable:!1,removable:!0},{title:"計畫期程",key:"dateStartEnd",width:"15%",sortable:!1,removable:!0},{title:"簽辦狀態",key:"processStatus",width:"8%",sortable:!1,removable:!0},{title:"編輯",key:"action",sortable:!1,removable:!0}],tableData:this.$globalModels.getModel("fakeBasicPlan"),options:{},loading:!1,itemsPerPageArray:[5,10,30,50],currentPage:1,itemsPerPage:5,maxPage:3,totalItems:2,selected:[],headers2:[{text:"Dessert (100g serving)",align:"start",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],desserts:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{name:"Eclair",calories:262,fat:16,carbs:24,protein:6},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9}],selectAllToggle(n){if(this.selected.length!=this.desserts.length-this.disabledCount){this.selected=[];const i=this;n.items.forEach(g=>{g.disabled||i.selected.push(g)})}else this.selected=[]}}},methods:{parentDialog(){this.dialog1=!1,this.dialog2=!1,this.dialog3=!1},getTableDataFormServer({page:n,itemsPerPage:i,sortBy:g}){console.log(n,i,JSON.stringify(g)),this.loading=!0,setTimeout(()=>{this.loading=!1},500)},remove(n){this.headers=this.headers.filter(i=>i.key!==n)},isItemDisabled(n){return n.name==="Eclair"},editItem(n){},deleteItem(n){},isSelected(n){return this.selected.includes(n)},toggleSelection(n){const i=this.selected.indexOf(n);i!==-1?this.selected.splice(i,1):this.selected.push(n)}},mounted(){console.log("mounted")},created(){}},oe={class:"breadcrumb float-xl-end"},ae={class:"breadcrumb-item"},ne={class:"page-header"},ie=e("small",null,null,-1),de=e("label",{class:"",for:""},[d("計畫 "),e("br"),d("年度 ")],-1),ce=e("label",{class:"",for:""},"計畫類別",-1),re=e("label",{class:"",for:""},"計畫 編號",-1),ue=e("label",{class:"",for:""},"計畫名稱",-1),_e={class:"d-flex justify-center my-3"},me=["onClick"],pe=["onClick"],he={class:"btnGrp"},fe={class:"mr-3"},ge=e("small",{class:"my-6 justify-center d-flex"},"中場隔間",-1),be=e("thead",{class:"bg-thead"},[e("tr",null,[e("th",{class:"text-center"},"選擇"),e("th",{class:"text-center"},"管制代號"),e("th",{class:"text-center"},"案件名稱"),e("th",{class:"text-center"},"填報期限"),e("th",{class:"text-center"},"交辦事項"),e("th",{class:"text-center"},"主辦單位"),e("th",{class:"text-center"},"預定完成日期"),e("th",{class:"text-center"},"辦理情形"),e("th",{class:"text-center"},"案件狀態"),e("th",{class:"text-center"},"審核狀態")])],-1),ve={class:"text-center"},ye={rowspan:"2"},xe=e("td",{rowspan:"2"},[d("666-01"),e("br"),d("(2023/08/14)")],-1),ke=e("td",{rowspan:"2"},"專案名稱專案名稱",-1),Ce=e("td",{rowspan:"2"},[d("2023/08/14 "),e("br"),d("14:00")],-1),we={rowspan:"2"},Pe=e("p",{class:"mt-1"},"請回報",-1),Ve={class:"btnGroup"},De=e("p",{class:"mt-1"},"教育文化處",-1),Ie={class:"btnGroup ma-1"},Ae=e("td",null,"2023/08/14",-1),Te=e("td",null,[e("ul",null,[e("li",null,"填報期限:2023/08/14"),e("li",null,"填報人:XXX"),e("li",null,"本專案依XXX 辦理修正，並依規定送辦行政院公報，同時於本會網站更新資訊")])],-1),Ue=e("p",{class:"mt-1"},"持續追蹤",-1),Me={class:"btnGroup ma-1"},Se=e("p",{class:"mt-1"},"持續追蹤",-1),Ge={class:"btnGroup ma-1"},ze={class:"text-center"},Ne=e("p",{class:"mt-1"},"教育文化處",-1),Ee={class:"btnGroup"},Be=e("td",null,"2023/08/14",-1),Fe=e("td",null,"填報期限：2023/08/14",-1),Xe=e("p",{class:"mt-1"},"持續追蹤",-1),je={class:"btnGroup"},He=e("td",null,[e("p",{class:"mt-1"},"持續追蹤")],-1),Oe=e("br",null,null,-1),Re=e("thead",{class:"bg-thead"},[e("tr",null,[e("th",{class:"text-center"},"程序名稱"),e("th",{class:"text-center"},"開放時間"),e("th",{class:"text-center"},"填報提醒時間"),e("th",{class:"text-center"},"填報提醒時間"),e("th",{class:"text-center",width:"350"},"例外人員"),e("th",{class:"text-center"},"備註")])],-1),Ye=e("td",null,"計畫研提",-1),Je={width:"160"},Le=e("p",{class:"text-no-wrap"},"每月",-1),Qe=e("p",null,"日",-1),qe={width:"380"},Ke={class:"d-xl-flex d-block"},We=e("p",{class:"text-no-wrap"},"每季季末",-1),Ze=e("p",null,"日",-1),$e=e("p",{class:"text-no-wrap"},"~ 每季季末",-1),et=e("p",null,"日",-1),tt={width:"185"},lt={class:"flex-wrap d-flex align-center flex-xl-nowrap"},st={class:"text-center mt-6"},ot={key:0},at={key:1},nt={key:2},it=e("h4",{class:"mt-3 mb-3"},"簽核歷程檢視",-1);function dt(n,i,g,ct,s,b){const C=o("panel-title"),w=o("panel-toolbar"),P=o("panel-header"),c=o("v-col"),p=o("v-text-field"),h=o("v-row"),v=o("v-autocomplete"),z=o("v-container"),r=o("v-btn"),N=o("v-form"),V=o("panel-body"),D=o("panel"),I=o("v-checkbox"),A=o("Icon"),T=o("v-icon"),U=o("v-tooltip"),E=o("v-data-table"),M=o("v-table"),B=o("VueDatePicker"),F=o("v-pagination"),X=o("internalAdminPlanViewComp"),x=o("v-dialog"),j=o("internalAdminPlanEditComp"),H=o("v-divider"),O=o("v-card-title"),R=o("planCertifyHistoryTableComp"),Y=o("v-card-text"),J=o("v-card");return _(),m(y,null,[e("ol",oe,[e("li",ae,f(n.$route.meta.parentPathName)+f(n.$route.name),1)]),e("h1",ne,[d(f(n.$route.name)+" ",1),ie]),t(D,null,{default:l(()=>[t(P,null,{default:l(()=>[t(C,null,{default:l(()=>[d("查詢欄位")]),_:1}),t(w)]),_:1}),t(V,null,{default:l(()=>[t(N,null,{default:l(()=>[t(z,null,{default:l(()=>[t(h,null,{default:l(()=>[t(c,{cols:"12",lg:"6"},{default:l(()=>[t(h,{class:"formGrp"},{default:l(()=>[t(c,{class:"label",cols:"12",lg:"2"},{default:l(()=>[de]),_:1}),t(c,{cols:""},{default:l(()=>[t(p,{variant:"outlined","hide-details":"auto",density:"compact"})]),_:1})]),_:1})]),_:1}),t(c,{cols:"12",lg:"6"},{default:l(()=>[t(h,{class:"formGrp"},{default:l(()=>[t(c,{class:"label",cols:"12",lg:"2"},{default:l(()=>[ce]),_:1}),t(c,{cols:""},{default:l(()=>[t(p,{variant:"outlined","hide-details":"auto",density:"compact"})]),_:1})]),_:1})]),_:1}),t(c,{cols:"12",lg:"6"},{default:l(()=>[t(h,{class:"formGrp"},{default:l(()=>[t(c,{class:"label",cols:"12",lg:"2"},{default:l(()=>[re]),_:1}),t(c,{cols:""},{default:l(()=>[t(v,{"hide-details":"auto",variant:"outlined",items:n.$globalModels.getModel("fakeUnitArray"),density:"compact"},null,8,["items"])]),_:1})]),_:1})]),_:1}),t(c,{cols:"12",lg:"6"},{default:l(()=>[t(h,{class:"formGrp"},{default:l(()=>[t(c,{class:"label",cols:"12",lg:"2"},{default:l(()=>[ue]),_:1}),t(c,{cols:""},{default:l(()=>[t(v,{"hide-details":"auto",variant:"outlined",items:n.$globalModels.getModel("fakeUnitArray"),density:"compact"},null,8,["items"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e("div",_e,[t(r,{class:"bg-primary px-5 mx-2"},{default:l(()=>[d("搜尋")]),_:1}),t(r,{class:"bg-gray px-4 mx-2"},{default:l(()=>[d("新增項目")]),_:1})])]),_:1})]),_:1})]),_:1}),t(D,null,{default:l(()=>[t(P,null,{default:l(()=>[t(C,null,{default:l(()=>[d("查詢結果 ")]),_:1}),t(w)]),_:1}),t(V,null,{default:l(()=>[t(E,{class:"dataTable",modelValue:s.selected,"onUpdate:modelValue":i[1]||(i[1]=a=>s.selected=a),headers:s.headers,items:s.tableData,"item-key":"name","item-value":"uuid",loading:s.loading,"footer-props":{itemsPerPageText:"每頁筆數"},"no-data-text":"無資料","loading-text":"資料傳輸中","items-length":s.totalItems,"items-per-page-text":"每頁筆數","items-per-page-options":s.itemsPerPageArray,"items-per-page":s.itemsPerPage,"onUpdate:itemsPerPage":i[2]||(i[2]=a=>s.itemsPerPage=a),"multi-sort":"","onUpdate:options":b.getTableDataFormServer,"show-select":""},{"item.data-table-select":l(({item:a,isSelected:u,select:L})=>[a.uuid?(_(),S(I,{key:0,class:"checkbox",modelValue:s.selected,"onUpdate:modelValue":i[0]||(i[0]=Q=>s.selected=Q),value:a.uuid,density:"compact","hide-details":"auto"},null,8,["modelValue","value"])):(_(),S(A,{key:1,class:"ml-2",icon:"ant-design:lock-outlined",style:{"font-size":"24px"}}))]),"item.index":l(({item:a,index:u})=>[d(f(u+1),1)]),"item.planName":l(({item:a})=>[e("a",{href:"javascript:void(0)",style:{color:"black"},onClick:u=>{s.selectedData=a,s.dialog1=!0}},f(a.planName),9,me)]),"item.processStatus":l(({item:a})=>[e("a",{href:"javascript:void(0)",style:{color:"black"},onClick:u=>{s.selectedData=a,s.dialog3=!0}},f(a.processStatus),9,pe)]),"item.action":l(({item:a})=>[e("div",he,[t(U,{text:"編輯"},{activator:l(({props:u})=>[e("span",fe,[t(T,ee(u,{onClick:L=>{s.selectedData=a,s.dialog2=!0},icon:"fa-solid fa-pen "}),null,16,["onClick"])])]),_:2},1024),t(U,{text:"刪除"},{activator:l(({props:u})=>[e("span",te(le(u)),[t(T,{icon:"fa-solid fa-trash-can"})],16)]),_:1})])]),"footer.prepend":l(()=>[t(r,{color:"primary",dark:"",class:"mr-5",onClick:n.buttonCallback},{default:l(()=>[d(" 同意送出 ")]),_:1},8,["onClick"])]),_:2},1032,["modelValue","headers","items","loading","items-length","items-per-page-options","items-per-page","onUpdate:options"]),ge,t(M,{class:"cellTable"},{default:l(()=>[be,e("tbody",null,[(_(),m(y,null,G(2,a=>(_(),m(y,{key:a},[e("tr",ve,[e("td",ye,[t(I)]),xe,ke,Ce,e("td",we,[Pe,e("div",Ve,[t(r,{class:"my-1",color:"submit",elevation:"0",size:"small"},{default:l(()=>[d("批次下載填報附件")]),_:1})])]),e("td",null,[De,e("div",Ie,[t(r,{color:"submit",elevation:"0",size:"small"},{default:l(()=>[d("批次下載填報附件")]),_:1})])]),Ae,Te,e("td",null,[Ue,e("div",Me,[t(r,{color:"submit",elevation:"0",size:"small"},{default:l(()=>[d("批次下載填報附件")]),_:1})])]),e("td",null,[Se,e("div",Ge,[t(r,{color:"submit",elevation:"0",size:"small"},{default:l(()=>[d("審核歷程")]),_:1}),t(r,{color:"cancel",elevation:"0",size:"small"},{default:l(()=>[d("管理者退回")]),_:1})])])]),e("tr",ze,[e("td",null,[Ne,e("div",Ee,[t(r,{class:"ma-1",color:"submit",elevation:"0",size:"small"},{default:l(()=>[d("批次下載填報附件")]),_:1})])]),Be,Fe,e("td",null,[Xe,e("div",je,[t(r,{color:"submit",class:"ma-1",elevation:"0",size:"small"},{default:l(()=>[d("批次下載填報附件")]),_:1})])]),He])],64))),64))])]),_:1}),Oe,t(M,{class:"cellTable overflowVisible"},{default:l(()=>[Re,e("tbody",null,[(_(),m(y,null,G(3,a=>e("tr",{key:a,class:"text-center"},[Ye,e("td",Je,[t(p,{class:"d-block d-lg-flex",variant:"outlined",density:"compact","hide-details":"auto"},{prepend:l(()=>[Le]),append:l(()=>[Qe]),_:1})]),e("td",qe,[e("div",Ke,[t(p,{class:"my-1 d-block d-lg-flex",variant:"outlined",density:"compact","hide-details":"auto"},{prepend:l(()=>[We]),append:l(()=>[Ze]),_:1}),t(p,{class:"my-1 d-block d-lg-flex",variant:"outlined",density:"compact","hide-details":"auto"},{prepend:l(()=>[$e]),append:l(()=>[et]),_:1})])]),e("td",tt,[t(B,{class:"datePicker","enable-time-picker":!1,"select-text":"確定","cancel-text":"取消",modelValue:s.date,"onUpdate:modelValue":i[3]||(i[3]=u=>s.date=u)},null,8,["modelValue"])]),e("td",null,[e("div",lt,[t(v,{"hide-details":"auto",variant:"outlined",class:"mr-0 mr-sm-1 my-1 my-xl-0",items:n.$globalModels.getModel("fakeUnitArray"),density:"compact"},null,8,["items"]),t(v,{"hide-details":"auto",variant:"outlined",class:"mr-0 mr-sm-1 my-1 my-xl-0",items:n.$globalModels.getModel("fakeUnitArray"),density:"compact"},null,8,["items"]),t(r,{class:"my-1 ml-auto",color:"primary"},{default:l(()=>[d("新增")]),_:1})])]),e("td",null,[t(p,{variant:"outlined","hide-details":"auto",density:"compact"})])])),64))])]),_:1}),e("div",st,[t(F,{modelValue:n.page,"onUpdate:modelValue":i[4]||(i[4]=a=>n.page=a),length:5},null,8,["modelValue"])])]),_:1})]),_:1}),s.dialog1?(_(),m("div",ot,[t(x,{width:"80%",height:"95%",modelValue:s.dialog1,"onUpdate:modelValue":i[5]||(i[5]=a=>s.dialog1=a),scrollable:""},{default:l(()=>[t(X,{selectItem:s.selectedData,onChildDialog:b.parentDialog},null,8,["selectItem","onChildDialog"])]),_:1},8,["modelValue"])])):k("",!0),s.dialog2?(_(),m("div",at,[t(x,{width:"80%",height:"95%",modelValue:s.dialog2,"onUpdate:modelValue":i[6]||(i[6]=a=>s.dialog2=a),scrollable:""},{default:l(()=>[t(j,{selectItem:s.selectedData,onChildDialog:b.parentDialog},null,8,["selectItem","onChildDialog"])]),_:1},8,["modelValue"])])):k("",!0),s.dialog3?(_(),m("div",nt,[t(x,{width:"80%",height:"95%",modelValue:s.dialog3,"onUpdate:modelValue":i[7]||(i[7]=a=>s.dialog3=a),scrollable:""},{default:l(()=>[t(J,null,{default:l(()=>[t(O,null,{default:l(()=>[t(h,null,{default:l(()=>[t(c,{cols:"4"},{default:l(()=>[it]),_:1}),t(c,{cols:"8",class:"text-right"},{default:l(()=>[t(r,{color:"blue-grey-lighten-4",onClick:b.parentDialog},{default:l(()=>[t(A,{icon:"mingcute:close-fill",style:{"font-size":"16px"}})]),_:1},8,["onClick"])]),_:1})]),_:1}),t(H,{class:"border-opacity-25"})]),_:1}),t(Y,null,{default:l(()=>[t(R,{selectItem:s.tableData,onChildDialog:b.parentDialog},null,8,["selectItem","onChildDialog"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])):k("",!0)],64)}const mt=Z(se,[["render",dt]]);export{mt as default};
