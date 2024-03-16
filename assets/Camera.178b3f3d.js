import{_ as d,S as c,U as n,V as h,a2 as o,a1 as l,X as u}from"./index.febce298.js";import{Q as p}from"./QPage.671dff6c.js";const f={name:"PageCamera",data(){return{enableCamera:!0,cameraStart:!1,imageCapture:null,track:null}},mounted(){this.enumerateDevices(),this.checkPermission(),this.notifyMe()},methods:{enumerateDevices(){var e;(e=navigator.mediaDevices)!=null&&e.enumerateDevices?navigator.mediaDevices.enumerateDevices().then(a=>{a.forEach(s=>{console.log(`${s.kind}: ${s.label} id = ${s.deviceId}`)})}).catch(a=>{console.error(`${a.name}: ${a.message}`)}):console.log("enumerateDevices() not supported.")},async checkPermission(){const s=(await navigator.mediaDevices.enumerateDevices()).filter(({kind:t})=>t==="videoinput").map(({deviceId:t})=>({name:"camera",deviceId:t})).map(t=>navigator.permissions.query(t));try{const t=await Promise.all(s);let i=t.filter(r=>r!="granted").length;i<1&&alert("\u041A\u0430\u043C\u0435\u0440\u0430 \u0441 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u043E\u043C. \u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F"),console.log("countGrantedCamera",i),t.forEach(({state:r},m)=>console.log("Camera",m,r))}catch(t){console.error(t)}},notifyMe(){"Notification"in window?Notification.permission==="granted"?new Notification("Hi there!"):Notification.permission!=="denied"&&Notification.requestPermission().then(e=>{e==="granted"&&new Notification("Hi there!")}):alert("This browser does not support desktop notification")},useCamera(){navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then(e=>{this.cameraStart=!0,this.$refs.videoplay.srcObject=e,this.track=e.getVideoTracks()[0],this.imageCapture=new ImageCapture(this.track)}).catch(e=>alert(e))},useCamera2(){navigator.mediaDevices.getUserMedia({video:!0}).then(e=>{this.cameraStart=!0,this.$refs.videoplay.srcObject=e,this.track=e.getVideoTracks()[0],this.imageCapture=new ImageCapture(this.track)}).catch(e=>console.error(e))},takePhoto(){this.imageCapture.takePhoto().then(e=>{createImageBitmap(e);const a=new FileReader;a.readAsDataURL(e),a.onloadend=()=>{this.$refs.imgTakePhoto.src=a.result,console.log(a.result)}}).catch(e=>console.error(e))}}},g=o("p",{class:"text-h6"},"Camera",-1),v={class:"row"},k={class:"col-12 text-center"},C={autoplay:"",width:"200",ref:"videoplay",playsinline:""},_={class:"col-12 text-center"},y={class:"col-12 text-center"},w={src:"",ref:"imgTakePhoto",width:"250"};function b(e,a,s,t,i,r){return c(),n(p,{padding:""},{default:h(()=>[g,o("div",v,[o("div",k,[o("video",C,null,512)]),o("div",_,[i.cameraStart?u("",!0):(c(),n(l,{key:0,label:"\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F",color:"primary",icon:"camera",disable:!i.enableCamera,onClick:r.useCamera},null,8,["disable","onClick"])),i.cameraStart?(c(),n(l,{key:2,label:"\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0444\u043E\u0442\u043E",color:"primary",icon:"camera",onClick:r.takePhoto},null,8,["onClick"])):(c(),n(l,{key:1,label:"\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F2",color:"primary",icon:"camera",disable:!i.enableCamera,onClick:r.useCamera2},null,8,["disable","onClick"]))]),o("div",y,[o("img",w,null,512)])])]),_:1})}var x=d(f,[["render",b]]);export{x as default};
