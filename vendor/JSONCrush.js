"use strict"
const JSONCrush=(e,n=50)=>{for(var r=[],o=127;--o;)(48<=o&&57>=o||65<=o&&90>=o||97<=o&&122>=o||"-_.!~*'()".includes(String.fromCharCode(o)))&&r.push(String.fromCharCode(o));for(o=32;255>o;++o){var t=String.fromCharCode(o);"\\"==t||r.includes(t)||r.unshift(t)}e=e.replace(/\u0001/g,""),e=JSONCrushSwap(e),o=r.length,t="";for(var i={},l=2;l<n;l++)for(var f=0;f<e.length-l;++f){var h=e.substr(f,l);if(!i[h]){var a=h.charCodeAt(0),g=h.charCodeAt(h.length-1);if(!(a=56320<=a&&57343>=a||55296<=g&&56319>=g)){for(a=1,g=e.indexOf(h,f+l);0<=g;++a)g=e.indexOf(h,g+l);1<a&&(i[h]=a)}}}for(;;){for(;o--&&e.includes(r[o]););if(0>o)break;n=r[o];var d=void 0;l=0,f=encodeURI(encodeURIComponent(n)).replace(/%../g,"i").length;for(let e in i)h=((h=i[e])-1)*encodeURI(encodeURIComponent(e)).replace(/%../g,"i").length-(h+1)*f,t.length||(h-=encodeURI(encodeURIComponent("")).replace(/%../g,"i").length),0>=h?delete i[e]:h>l&&(d=e,l=h);if(!d)break;e=e.split(d).join(n)+n+d,t=n+t,l={};for(let r in i){for(i=r.split(d).join(n),f=0,h=e.indexOf(i);0<=h;++f)h=e.indexOf(i,h+i.length);1<f&&(l[i]=f)}i=l}return d=e,(r=t).length&&(d+=""+r),encodeURIComponent(d+"_")},JSONUncrush=e=>{var n=(e=e.substring(0,e.length-1)).split("");if(e=n[0],1<n.length){n=n[1];for(let r of n)e=(e=e.split(r)).join(e.pop())}return JSONCrushSwap(e,0)},JSONCrushSwap=(e,n=1)=>{const r=[['"',"'"],["':","!"],[",'","~"],["}",")","\\","\\"],["{","(","\\","\\"]],o=(e,n)=>e.replace(new RegExp(`${(n[2]?n[2]:"")+n[0]}|${(n[3]?n[3]:"")+n[1]}`,"g"),e=>e===n[0]?n[1]:n[0]);if(n)for(n=0;n<r.length;++n)e=o(e,r[n]);else for(n=r.length;n--;)e=o(e,r[n]);return e};module.exports={JSONCrush,JSONUncrush,JSONCrushSwap}
