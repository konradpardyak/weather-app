(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{14:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),n=c(15),a=c.n(n),r=c(3),l=c(5),d=c.n(l),j=(c(38),c(39),c(0)),o=function(e){var t=e.city,c=e.timezone,s=Object(i.useState)(0),n=Object(r.a)(s,2),a=n[0],l=n[1],d=Object(i.useState)(0),o=Object(r.a)(d,2),m=o[0],u=o[1],h=Object(i.useState)(0),b=Object(r.a)(h,2),O=b[0],x=b[1],v=function(){var e=new Date,t=e.getDay(),i=e.getUTCHours(),s=e.getUTCMinutes();i+=Math.floor(c/3600),(s+=c%3600/60)<0?(i--,s+=60):s>59&&(i++,s-=60),i<0?(t--,i+=24):i>23&&(t++,i-=24),t<0?t+=7:t>6&&(t-=7),l(t),u(i),x(s)};return Object(i.useEffect)((function(){v();var e=setInterval((function(){return v()}),1e3);return function(){return clearInterval(e)}}),[t,c]),Object(j.jsxs)("div",{className:"city",children:[Object(j.jsx)("h1",{className:"cityName",children:t}),Object(j.jsx)("p",{className:"time",children:"".concat(["SUN","MON","TUE","WED","THU","FRI","SAT"][a]," ").concat(m<10?"0":"").concat(m,":").concat(O<10?"0":"").concat(O)})]})},m=(c(41),function(e){var t=e.setCityName,c=e.showError,s=Object(i.useState)(""),n=Object(r.a)(s,2),a=n[0],l=n[1];return Object(j.jsxs)("form",{className:"search",onSubmit:function(e){e.preventDefault(),t(a),l("")},children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"submit-input",type:"submit",value:"Search"}),Object(j.jsx)("svg",{className:"search-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(j.jsx)("path",{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128c0-70.7 57.2-128 128-128c70.7 0 128 57.2 128 128c0 70.7-57.2 128-128 128z"})})]}),Object(j.jsx)("input",{type:"text",name:"city",id:"city",className:c?"show-error":"",placeholder:c?"Wrong city name":"Enter city name",value:a,onChange:function(e){return l(e.target.value)}})]})}),u=(c(42),function(e){var t=e.temperature;return Object(j.jsxs)("div",{className:"temperature",children:[Math.round(t),Object(j.jsx)("div",{className:"degree"})]})}),h=(c(43),c(14),c(44),function(e){var t=e.icon;return Object(j.jsx)("i",{className:"icon wi ".concat({"01d":"wi-day-sunny","02d":"wi-day-sunny-overcast","03d":"wi-day-cloudy","04d":"wi-cloudy height","09d":"wi-showers height","10d":"wi-day-showers","11d":"wi-day-thunderstorm","13d":"wi-day-snow","50d":"wi-day-fog","01n":"wi-night-clear height","02n":"wi-night-partly-cloudy height","03n":"wi-night-cloudy","04n":"wi-cloudy height","09n":"wi-showers","10n":"wi-night-showers","11n":"wi-night-thunderstorm","13n":"wi-night-snow","50n":"wi-night-fog"}[t])})}),b=function(e){var t=e.weather,c=e.temp,i=t.description,s=t.icon,n=c.min,a=c.max;return Object(j.jsxs)("div",{className:"conditions",children:[Object(j.jsxs)("div",{className:"conditions-up",children:[Object(j.jsx)(h,{icon:s}),Object(j.jsxs)("div",{className:"min-max",children:[Object(j.jsxs)("div",{children:[Math.round(a),Object(j.jsx)("div",{className:"degree"})]}),Object(j.jsxs)("div",{className:"min",children:[Math.round(n),Object(j.jsx)("div",{className:"degree"})]})]})]}),Object(j.jsx)("div",{className:"description",children:i.charAt(0).toUpperCase()+i.slice(1)})]})},O=(c(45),c(46),function(e){var t=e.title;return Object(j.jsxs)("div",{className:"title",children:[t,Object(j.jsx)("span",{className:"line"})]})}),x=function(e){var t=e.feels,c=e.wind,i=e.humidity,s=e.pressure,n=e.uvi,a=e.clouds;return Object(j.jsxs)("div",{className:"details",children:[Object(j.jsx)(O,{title:"DETAILS"}),Object(j.jsxs)("div",{className:"tail",children:[Object(j.jsx)("i",{className:"wi wi-thermometer"}),Object(j.jsx)("span",{children:"Feels like"}),Object(j.jsxs)("span",{className:"value",children:[Math.round(t),Object(j.jsx)("div",{className:"degree"})]})]}),Object(j.jsxs)("div",{className:"tail",children:[Object(j.jsx)("i",{className:"wi wi-strong-wind"}),Object(j.jsx)("span",{children:"Wind"}),Object(j.jsxs)("span",{className:"value",children:[Math.round(3.6*c)," km/h"]})]}),Object(j.jsxs)("div",{className:"tail",children:[Object(j.jsx)("i",{className:"wi wi-humidity"}),Object(j.jsx)("span",{children:"Humidity"}),Object(j.jsxs)("span",{className:"value",children:[i," %"]})]}),Object(j.jsxs)("div",{className:"tail",children:[Object(j.jsx)("i",{className:"wi wi-barometer"}),Object(j.jsx)("span",{children:"Pressure"}),Object(j.jsxs)("span",{className:"value",children:[s," hPa"]})]}),Object(j.jsxs)("div",{className:"tail",children:[Object(j.jsx)("i",{className:"wi wi-sunrise"}),Object(j.jsx)("span",{children:"UV index"}),Object(j.jsx)("span",{className:"value",children:Math.round(n)})]}),Object(j.jsxs)("div",{className:"tail",children:[Object(j.jsx)("i",{className:"wi wi-cloud"}),Object(j.jsx)("span",{children:"Cloudiness"}),Object(j.jsxs)("span",{className:"value",children:[a," %"]})]})]})},v=(c(47),c(48),function(e){var t=e.timezone,c=e.time,i=e.temp,s=e.fillHeight,n=e.icon,a=new Date(1e3*(c+t)),r=a.getHours(),l=a.getMinutes();return Object(j.jsxs)("div",{className:"chart-item",children:[Object(j.jsx)(h,{icon:n}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsxs)("div",{className:"temp",children:[Math.round(i),Object(j.jsx)("div",{className:"degree"})]}),Object(j.jsx)("div",{className:"fill",style:{height:"calc(".concat(s,"px + 40px)")}})]}),Object(j.jsx)("div",{className:"chart-item-time",children:"".concat(r<10?"0":"").concat(r,":").concat(l<10?"0":"").concat(l)})]})}),p=function(e){var t=e.hourlyArray,c=e.timezone,i=t.slice(0,10),s=i.reduce((function(e,t){return t.temp<e&&(e=t.temp),Math.round(e)}),100),n=i.reduce((function(e,t){return t.temp>e&&(e=t.temp),Math.round(e)}),-100)-s;return Object(j.jsxs)("div",{className:"hourly",children:[Object(j.jsx)(O,{title:"HOURLY"}),Object(j.jsx)("div",{className:"chart",children:i.map((function(e){return Object(j.jsx)(v,{timezone:c,time:e.dt,temp:e.temp,fillHeight:n?50*(Math.round(e.temp)-s)/n:25,icon:e.weather[0].icon},e.dt)}))})]})},N=function(e){var t=e.cityName,c=e.setCityName,i=e.weather,s=e.showError;return Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)("div",{className:"container container-main container-header",children:[Object(j.jsx)("div",{className:"item item-inner item-header",children:Object(j.jsx)(o,{city:t,timezone:i.timezone_offset})}),Object(j.jsx)("div",{className:"item item-inner item-header",children:Object(j.jsx)(m,{setCityName:c,showError:s})})]}),Object(j.jsxs)("div",{className:"container container-main",children:[Object(j.jsxs)("div",{className:"item item-left container container-side",children:[Object(j.jsxs)("div",{className:"item container container-weather",children:[Object(j.jsx)("div",{className:"item item-inner item-temperature",children:Object(j.jsx)(u,{temperature:i.current.temp})}),Object(j.jsx)("div",{className:"item item-inner item-conditions",children:Object(j.jsx)(b,{weather:i.current.weather[0],temp:i.daily[0].temp})})]}),Object(j.jsx)("div",{className:"item item-inner",children:Object(j.jsx)(p,{hourlyArray:i.hourly,timezone:i.timezone_offset})})]}),Object(j.jsxs)("div",{className:"item item-right container container-side",children:[Object(j.jsxs)("div",{className:"item container container-more",children:[Object(j.jsx)("div",{className:"item item-inner item-details",children:Object(j.jsx)(x,{feels:i.current.feels_like,wind:i.current.wind_speed,humidity:i.current.humidity,pressure:i.current.pressure,uvi:i.current.uvi,clouds:i.current.clouds})}),Object(j.jsx)("div",{className:"item item-inner item-next",children:"Next 7 days"})]}),Object(j.jsx)("div",{className:"item item-inner",children:"Allerts"})]})]})]})},w=function(){var e=Object(i.useState)("London"),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(),a=Object(r.a)(n,2),l=a[0],o=a[1],m=Object(i.useState)(),u=Object(r.a)(m,2),h=u[0],b=u[1],O=Object(i.useState)(!1),x=Object(r.a)(O,2),v=x[0],p=x[1];return Object(i.useEffect)((function(){var e="8474678f08288c9925e4023da4548128";d.a.get("//api.openweathermap.org/data/2.5/forecast?q=".concat(c,"&appid=").concat(e)).then((function(t){var c=t.data;d.a.get("//api.openweathermap.org/data/2.5/onecall?lat=".concat(t.data.city.coord.lat,"&lon=").concat(t.data.city.coord.lon,"&units=metric&exclude=minutely&appid=").concat(e)).then((function(e){var t=e.data;p(!1),o(c.city),b(t)})).catch((function(e){return console.log(e.response)}))})).catch((function(e){console.log(e.response),"Not Found"===e.response.statusText&&p(!0)}))}),[c]),Object(j.jsx)("div",{className:"App",children:h?Object(j.jsx)(N,{cityName:l.name,weather:h,setCityName:s,showError:v}):Object(j.jsx)("div",{children:"Loading page"})})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.973aaf9f.chunk.js.map