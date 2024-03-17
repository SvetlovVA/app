import{_ as n,d as r,S as s,U as c,V as d,Y as u,a2 as e,Z as o,a1 as l}from"./index.cf64593d.js";import{Q as h}from"./QPage.fc39111a.js";const p=r({name:"GeoPage",isWatch:!1,watchId:null,wakeLock:null,data(){return{isWatch:this.isWatch,timestamp:0,latitude:0,longitude:0,accuracy:0,speed:0,altitude:0,altitude_accuracy:0}},methods:{async startGeolocation(){if("wakeLock"in navigator?this.wakeLock=await navigator.wakeLock.request("screen"):alert("Wake lock is not supported by this browser"),!this.isWatch&&navigator.geolocation){this.$q.loading.show(),this.isWatch=!0;let t={enableHighAccuracy:!0,timeout:3e3};this.watchId=navigator.geolocation.watchPosition(this.setPosition,this.errorPosition,t)}else alert("Get Navigator.geolocation is FALSE"),this.isWatch=!1,this.errorPosition()},stopGeolocation(){this.wakeLock!=null&&(this.wakeLock.release(),this.wakeLock=null,alert("STOP")),this.watchId!=null&&navigator.geolocation.clearWatch(this.watchId),this.timestamp=0,this.isWatch=!1,this.latitude=0,this.longitude=0,this.accuracy=0,this.speed=0,this.altitude=0,this.altitude_accuracy=0},setPosition(t){const i=t.coords;this.timestamp=t.timestamp,this.latitude=i.latitude.toFixed(7),this.longitude=i.longitude.toFixed(7),this.accuracy=t.coords.accuracy.toFixed(2),this.speed=(t.coords.speed*3.6).toFixed(2),this.altitude=i.altitude.toFixed(3),this.altitude_accuracy=i.altitudeAccuracy.toFixed(3),this.$q.loading.hide()},errorPosition(t){this.stopGeolocation();const{code:i}=t;let a="\u043D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0430. \u041A\u043E\u0434: ";switch(i){case GeolocationPositionError.TIMEOUT:a="\u0432\u0440\u0435\u043C\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0433\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0438\u0438 \u0438\u0441\u0442\u0435\u043A\u043B\u043E";break;case GeolocationPositionError.PERMISSION_DENIED:a="\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0437\u0430\u043F\u0440\u0435\u0442\u0438\u043B \u0442\u0440\u0435\u043A\u0438\u043D\u0433 \u0441\u0432\u043E\u0435\u0439 \u0433\u0435\u043E\u043F\u043E\u0437\u0438\u0446\u0438\u0438";break;case GeolocationPositionError.POSITION_UNAVAILABLE:a="\u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C";break;default:a+=i}this.$q.notify({position:"bottom",timeout:3e3,color:"negative",textColor:"white",actions:[{icon:"close",color:"white"}],message:`\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E! 
 \u041F\u0440\u0438\u0447\u0438\u043D\u0430: `+a}),this.$q.loading.hide()}}}),g={style:{"padding-top":"20px"}},k={class:"text-left"},m={class:"text-left"};function y(t,i,a,f,w,P){return s(),c(h,{style:{padding:"20px"}},{default:d(()=>[u(" \u0422\u0435\u0441\u0442\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 API watchPosition "),e("div",g,[e("div",k,[e("p",null," Timestamp: "+o(t.timestamp),1),e("p",null," Latitude (\u0448): "+o(t.latitude)+" \xB0 ",1),e("p",null," Longitude (\u0434): "+o(t.longitude)+" \xB0 ",1),e("p",null," Accuracy (\u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C): "+o(t.accuracy)+" \u043C ",1),e("p",null," Speed: "+o(t.speed)+" \u043A\u043C/\u0447 ",1),e("p",null," Altitude (\u0412\u044B\u0441\u043E\u0442\u0430): "+o(t.altitude)+" \u043C ",1),e("p",null," Altitude Accuracy (\u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0441\u043E\u0442\u044B): "+o(t.altitude_accuracy)+" \u043C ",1)])]),e("div",m,[t.isWatch?(s(),c(l,{key:1,color:"indigo",label:"\u0421\u0442\u043E\u043F",style:{"margin-left":"30px"},push:"",onClick:t.stopGeolocation},null,8,["onClick"])):(s(),c(l,{key:0,color:"indigo",label:"\u0421\u0442\u0430\u0440\u0442",push:"",onClick:t.startGeolocation},null,8,["onClick"]))])]),_:1})}var _=n(p,[["render",y]]);export{_ as default};
