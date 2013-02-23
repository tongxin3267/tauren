/*!
 * jRaiser 2 Javascript Library
 * cookie - v1.0.0 (2013-01-08T22:12:53+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("cookie/1.0.x/",["base/1.0.x/"],function(e,t,n){"use strict";function o(e){if(s.test(e)){var t=RegExp.$2.toUpperCase();if(!i.hasOwnProperty(t))throw new Error("not such time unit("+RegExp.$2+")");return parseFloat(RegExp.$1)*i[t]}return parseFloat(e)||0}var r=e("base/1.0.x/"),i={SEC:1e3,MIN:6e4,HOUR:36e5,DAY:864e5,MONTH:2592e6,YEAR:31536e6},s=/^(\d+(?:\.\d+)?)\s*([a-z]+?)s?$/i;return{set:function(e,t,n){n=r.extend({encode:encodeURIComponent},n);var i=n.expires,s=n.encode(e)+"="+n.encode(t);typeof i=="string"&&(i=o(i));if(typeof i=="number"){var u=new Date;u.setTime(u.getTime()+i),i=u}r.isDate(i)&&(s+="; expires="+i.toUTCString()),n.path&&(s+="; path="+n.path),n.domain&&(s+="; domain="+n.domain),n.secure===!0&&(s+="; secure"),document.cookie=s},get:function(e,t){t=r.extend({encode:encodeURIComponent,decode:decodeURIComponent},t),e="; "+t.encode(e)+"=";var n="; "+document.cookie,i=n.indexOf(e),s;return i===-1?null:(i+=e.length,s=n.indexOf(";",i),s===-1&&(s=n.length),t.decode(n.substring(i,s)))},remove:function(e,t){t=t||{},t.expires=new Date(0),this.set(e,"",t)}}})