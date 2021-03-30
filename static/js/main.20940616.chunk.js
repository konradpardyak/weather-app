(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),s=i(16),a=i.n(s),r=i(3),d=i(5),l=i.n(d),o=(i(39),i(40),i(0)),j=function(e){var t=e.city,i=e.timezone,c=Object(n.useState)(0),s=Object(r.a)(c,2),a=s[0],d=s[1],l=Object(n.useState)(0),j=Object(r.a)(l,2),u=j[0],m=j[1],h=Object(n.useState)(0),b=Object(r.a)(h,2),O=b[0],x=b[1],f=function(){var e=new Date,t=e.getDay(),n=e.getUTCHours(),c=e.getUTCMinutes();n+=Math.floor(i/3600),(c+=i%3600/60)<0?(n--,c+=60):c>59&&(n++,c-=60),n<0?(t--,n+=24):n>23&&(t++,n-=24),t<0?t+=7:t>6&&(t-=7),d(t),m(n),x(c)};return Object(n.useEffect)((function(){f();var e=setInterval((function(){return f()}),1e3);return function(){return clearInterval(e)}}),[t,i]),Object(o.jsxs)("div",{className:"city",children:[Object(o.jsx)("h1",{className:"cityName",children:t}),Object(o.jsx)("p",{className:"time",children:"".concat(["SUN","MON","TUE","WED","THU","FRI","SAT"][a]," ").concat(u<10?"0":"").concat(u,":").concat(O<10?"0":"").concat(O)})]})},u=(i(42),function(e){var t=e.setCityName,i=e.showError,c=Object(n.useState)(""),s=Object(r.a)(c,2),a=s[0],d=s[1];return Object(o.jsxs)("form",{className:"search",onSubmit:function(e){e.preventDefault(),t(a),d("")},children:[Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{className:"submit-input",type:"submit",value:"Search"}),Object(o.jsx)("svg",{className:"search-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(o.jsx)("path",{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128c0-70.7 57.2-128 128-128c70.7 0 128 57.2 128 128c0 70.7-57.2 128-128 128z"})})]}),Object(o.jsx)("input",{type:"text",name:"city",id:"city",className:i?"show-error":"",placeholder:i?"Wrong city name":"Enter city name",value:a,onChange:function(e){return d(e.target.value)}})]})}),m=(i(43),function(e){var t=e.temperature;return Object(o.jsxs)("div",{className:"temperature",children:[Math.round(t),Object(o.jsx)("div",{className:"degree"})]})}),h=(i(44),i(14),i(45),function(e){var t=e.icon;return Object(o.jsx)("i",{className:"icon wi ".concat({"01d":"wi-day-sunny","02d":"wi-day-sunny-overcast","03d":"wi-day-cloudy","04d":"wi-cloudy height","09d":"wi-showers height","10d":"wi-day-showers","11d":"wi-day-thunderstorm","13d":"wi-day-snow","50d":"wi-day-fog","01n":"wi-night-clear height","02n":"wi-night-partly-cloudy height","03n":"wi-night-cloudy","04n":"wi-cloudy height","09n":"wi-showers","10n":"wi-night-showers","11n":"wi-night-thunderstorm","13n":"wi-night-snow","50n":"wi-night-fog"}[t])})}),b=function(e){var t=e.weather,i=e.temp,n=t.description,c=t.icon,s=i.min,a=i.max;return Object(o.jsxs)("div",{className:"conditions",children:[Object(o.jsxs)("div",{className:"conditions-up",children:[Object(o.jsx)(h,{icon:c}),Object(o.jsxs)("div",{className:"min-max",children:[Object(o.jsxs)("div",{children:[Math.round(a),Object(o.jsx)("div",{className:"degree"})]}),Object(o.jsxs)("div",{className:"min",children:[Math.round(s),Object(o.jsx)("div",{className:"degree"})]})]})]}),Object(o.jsx)("div",{className:"description",children:n.charAt(0).toUpperCase()+n.slice(1)})]})},O=(i(46),i(47),function(e){var t=e.title;return Object(o.jsxs)("div",{className:"title",children:[t,Object(o.jsx)("span",{className:"line"})]})}),x=function(e){var t=e.feels,i=e.wind,n=e.humidity,c=e.pressure,s=e.uvi,a=e.clouds;return Object(o.jsxs)("div",{className:"details",children:[Object(o.jsx)(O,{title:"DETAILS"}),Object(o.jsxs)("div",{className:"tail",children:[Object(o.jsx)("i",{className:"wi wi-thermometer"}),Object(o.jsx)("span",{children:"Feels like"}),Object(o.jsxs)("span",{className:"value",children:[Math.round(t),Object(o.jsx)("div",{className:"degree"})]})]}),Object(o.jsxs)("div",{className:"tail",children:[Object(o.jsx)("i",{className:"wi wi-strong-wind"}),Object(o.jsx)("span",{children:"Wind"}),Object(o.jsxs)("span",{className:"value",children:[Math.round(3.6*i)," km/h"]})]}),Object(o.jsxs)("div",{className:"tail",children:[Object(o.jsx)("i",{className:"wi wi-humidity"}),Object(o.jsx)("span",{children:"Humidity"}),Object(o.jsxs)("span",{className:"value",children:[n," %"]})]}),Object(o.jsxs)("div",{className:"tail",children:[Object(o.jsx)("i",{className:"wi wi-barometer"}),Object(o.jsx)("span",{children:"Pressure"}),Object(o.jsxs)("span",{className:"value",children:[c," hPa"]})]}),Object(o.jsxs)("div",{className:"tail",children:[Object(o.jsx)("i",{className:"wi wi-sunrise"}),Object(o.jsx)("span",{children:"UV index"}),Object(o.jsx)("span",{className:"value",children:Math.round(s)})]}),Object(o.jsxs)("div",{className:"tail",children:[Object(o.jsx)("i",{className:"wi wi-cloud"}),Object(o.jsx)("span",{children:"Cloudiness"}),Object(o.jsxs)("span",{className:"value",children:[a," %"]})]})]})},f=(i(48),i(49),function(e){var t=e.timezone,i=e.time,n=e.temp,c=e.fillHeight,s=e.icon,a=new Date(1e3*(i+t)),r=a.getHours(),d=a.getMinutes();return Object(o.jsxs)("div",{className:"chart-item",children:[Object(o.jsx)(h,{icon:s}),Object(o.jsxs)("div",{className:"column",children:[Object(o.jsxs)("div",{className:"temp",children:[Math.round(n),Object(o.jsx)("div",{className:"degree"})]}),Object(o.jsx)("div",{className:"fill",style:{height:"calc(".concat(c,"px + 60px)")}})]}),Object(o.jsx)("div",{className:"chart-item-time",children:"".concat(r<10?"0":"").concat(r,":").concat(d<10?"0":"").concat(d)})]})}),v=function(e){var t=e.hourlyArray,i=e.timezone,n=t.slice(0,10),c=n.reduce((function(e,t){return t.temp<e&&(e=t.temp),Math.round(e)}),100),s=n.reduce((function(e,t){return t.temp>e&&(e=t.temp),Math.round(e)}),-100)-c;return Object(o.jsxs)("div",{className:"hourly",children:[Object(o.jsx)(O,{title:"HOURLY"}),Object(o.jsx)("div",{className:"chart",children:n.map((function(e){return Object(o.jsx)(f,{timezone:i,time:e.dt,temp:e.temp,fillHeight:s?50*(Math.round(e.temp)-c)/s:25,icon:e.weather[0].icon},e.dt)}))})]})},p=(i(50),i(51),function(e){var t=e.timezone,i=e.time,n=e.tempDay,c=e.tempNight,s=e.icon,a=new Date(1e3*(i+t)).getDay();return Object(o.jsxs)("div",{className:"daily-item",children:[Object(o.jsx)("div",{className:"daily-item-day",children:"".concat(["SUN","MON","TUE","WED","THU","FRI","SAT"][a])}),Object(o.jsx)("div",{className:"daily-icon",children:Object(o.jsx)(h,{icon:s})}),Object(o.jsxs)("div",{className:"temp-day",children:[Math.round(n),Object(o.jsx)("div",{className:"degree"})]}),Object(o.jsxs)("div",{className:"temp-night",children:[Math.round(c),Object(o.jsx)("div",{className:"degree"})]})]})}),N=function(e){var t=e.dailyArray,i=e.timezone,n=t.slice(1);return Object(o.jsxs)("div",{className:"daily",children:[Object(o.jsx)(O,{title:"DAILY"}),Object(o.jsx)("div",{className:"daily-list",children:n.map((function(e){return Object(o.jsx)(p,{timezone:i,time:e.dt,tempDay:e.temp.day,tempNight:e.temp.night,icon:e.weather[0].icon},e.dt)}))})]})},g=(i(15),function(e){var t=e.event,i=e.description;return Object(o.jsxs)("div",{className:"alert-message",children:[Object(o.jsx)("h2",{className:"header",children:t}),Object(o.jsx)("p",{className:"description",children:i})]})}),y=function(e){var t=e.alerts;return Object(o.jsxs)("div",{className:"alerts",children:[Object(o.jsx)(O,{title:"ALERTS"}),Object(o.jsx)("div",{className:"alerts-field",children:t?t.map((function(e){return Object(o.jsx)(g,{event:e.event,description:e.description},e.start)})):Object(o.jsx)("div",{className:"empty",children:"There are no current alerts"})})]})},w=(i(52),function(e){var t=e.condition,i=e.conditionDescription,n=e.currentTime,c=e.sunset,s=e.sunrise;console.log(i);var a=function(e,t,i){return e<i||e>t?"night":e>=i&&e<i+3600||e>t-3600&&e<=t?"sunsetSunrise":"day"}(n,c,s),r=function(e,t){if("Clear"===e){if("day"===a)return"linear-gradient(#20a1f0, #23d3da)";if("sunsetSunrise"===a)return"linear-gradient(180deg, rgba(129,15,99,1) 0%, rgba(188,46,78,1) 30%, rgba(249,79,57,1) 75%, rgba(249,130,57,1) 100%)"}if("Clouds"===e){if("day"===a)return"few clouds"===t?"linear-gradient(#68798e, #86d5e9)":"linear-gradient(#445467, #a8c3d2)";if("sunsetSunrise"===a)return"linear-gradient(#445467, #cfa896)"}if("Drizzle"===e){if("day"===a)return"linear-gradient(#99a9af, #32545c)";if("sunsetSunrise"===a)return"linear-gradient(#c2b4b0, #32545c)"}if("Rain"===e){if("day"===a)return"linear-gradient(#32545c, #9ebbc6)";if("sunsetSunrise"===a)return"linear-gradient(#32545c, #cfa896)"}if("Thunderstorm"===e){if("day"===a)return"linear-gradient(#343b45, #aca9c2)";if("sunsetSunrise"===a)return"linear-gradient(#343b45, #c2a9bd)"}if("Snow"===e){if("day"===a)return"linear-gradient(#939097, #cecfcc)";if("sunsetSunrise"===a)return"linear-gradient(#939097, #f0e4d6)"}if("Mist"===e||"Fog"===e){if("day"===a)return"linear-gradient(#c9c8d7, #9b9aa7)";if("sunsetSunrise"===a)return"linear-gradient(#e0cccd, #96959a)"}return"Smoke"!==e&&"Haze"!==e||"day"!==a&&"sunsetSunrise"!==a?"Dust"!==e&&"Sand"!==e||"day"!==a&&"sunsetSunrise"!==a?"Squall"!==e&&"Tornado"!==e||"day"!==a&&"sunsetSunrise"!==a?"Ash"!==e||"day"!==a&&"sunsetSunrise"!==a?"linear-gradient(#0d2644, #400d5b)":"linear-gradient(#444d58, #bdc2c9)":"linear-gradient(#35333b, #b3957f)":"linear-gradient(#b17239, #dba660)":"linear-gradient(#c6bfb7, #9e9993)"}(t,i);return Object(o.jsx)("div",{className:"sky",style:{backgroundImage:r},children:e.children})}),S=function(e){var t=e.cityName,i=e.setCityName,n=e.weather,c=e.showError;return Object(o.jsx)(w,{condition:n.current.weather[0].main,conditionDescription:n.current.weather[0].description,currentTime:n.current.dt,sunset:n.current.sunset,sunrise:n.current.sunrise,children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)("div",{className:"container container-main container-header",children:[Object(o.jsx)("div",{className:"item item-inner item-header",children:Object(o.jsx)(j,{city:t,timezone:n.timezone_offset})}),Object(o.jsx)("div",{className:"item item-inner item-header",children:Object(o.jsx)(u,{setCityName:i,showError:c})})]}),Object(o.jsxs)("div",{className:"container container-main",children:[Object(o.jsxs)("div",{className:"item item-left container container-side",children:[Object(o.jsxs)("div",{className:"item container container-weather",children:[Object(o.jsx)("div",{className:"item item-inner item-temperature",children:Object(o.jsx)(m,{temperature:n.current.temp})}),Object(o.jsx)("div",{className:"item item-inner item-conditions",children:Object(o.jsx)(b,{weather:n.current.weather[0],temp:n.daily[0].temp})})]}),Object(o.jsx)("div",{className:"item item-inner item-hourly",children:Object(o.jsx)(v,{hourlyArray:n.hourly,timezone:n.timezone_offset})})]}),Object(o.jsxs)("div",{className:"item item-right container container-side",children:[Object(o.jsxs)("div",{className:"item container container-more",children:[Object(o.jsx)("div",{className:"item item-inner item-details",children:Object(o.jsx)(x,{feels:n.current.feels_like,wind:n.current.wind_speed,humidity:n.current.humidity,pressure:n.current.pressure,uvi:n.current.uvi,clouds:n.current.clouds})}),Object(o.jsx)("div",{className:"item item-inner item-next",children:Object(o.jsx)(N,{dailyArray:n.daily,timezone:n.timezone_offset})})]}),Object(o.jsx)("div",{className:"item item-inner item-alerts",children:Object(o.jsx)(y,{alerts:n.alerts})})]})]})]})})},M=function(){var e=Object(n.useState)("London"),t=Object(r.a)(e,2),i=t[0],c=t[1],s=Object(n.useState)(),a=Object(r.a)(s,2),d=a[0],j=a[1],u=Object(n.useState)(),m=Object(r.a)(u,2),h=m[0],b=m[1],O=Object(n.useState)(!1),x=Object(r.a)(O,2),f=x[0],v=x[1];return Object(n.useEffect)((function(){var e="8474678f08288c9925e4023da4548128";l.a.get("//api.openweathermap.org/data/2.5/forecast?q=".concat(i,"&appid=").concat(e)).then((function(t){var i=t.data;l.a.get("//api.openweathermap.org/data/2.5/onecall?lat=".concat(t.data.city.coord.lat,"&lon=").concat(t.data.city.coord.lon,"&units=metric&exclude=minutely&appid=").concat(e)).then((function(e){var t=e.data;v(!1),j(i.city),b(t)})).catch((function(e){return console.log(e.response)}))})).catch((function(e){console.log(e.response),"Not Found"===e.response.statusText&&v(!0)}))}),[i]),Object(o.jsx)("div",{children:h?Object(o.jsx)(S,{cityName:d.name,weather:h,setCityName:c,showError:f}):Object(o.jsx)("div",{children:"Loading page"})})};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root"))}],[[53,1,2]]]);
//# sourceMappingURL=main.20940616.chunk.js.map