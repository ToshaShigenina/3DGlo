!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{const e=document.querySelector("menu"),t=()=>{e.classList.toggle("active-menu")};document.body.addEventListener("click",n=>{let o=n.target.closest(".menu")||n.target.closest("menu");o||!e.classList.contains("active-menu")?o&&(o.classList.contains("menu")?t():(o=n.target.closest("a"),o&&t())):t()})};var r=()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn");let n=0,o=0;const r=()=>{o=requestAnimationFrame(r),n<1?(n+=.02,e.style.opacity=n):(n=0,cancelAnimationFrame(o))},c=()=>{n=0,e.style.opacity=0,e.style.display="none"};t.forEach(t=>{t.addEventListener("click",()=>{e.style.opacity=0,n=0,e.style.display="block",document.documentElement.clientWidth>768?o=requestAnimationFrame(r):(e.style.opacity=1,n=1)})}),e.addEventListener("click",e=>{let t=e.target;t.classList.contains("popup-close")?c():(t=t.closest(".popup-content"),t||c())})};var c=()=>{const e=document.querySelector("menu"),t=document.querySelector('main a[href="#service-block"]'),n=e=>{let t=e.getAttribute("href").slice(1);document.getElementById(t).scrollIntoView({block:"start",behavior:"smooth"})};e.addEventListener("click",e=>{e.preventDefault();let t=e.target.closest('li>a[href^="#"]');t&&n(t)}),t.addEventListener("click",e=>{e.preventDefault(),n(t)})};var a=()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let o=e.target;o=o.closest(".service-header-tab"),o&&t.forEach((e,r)=>{e===o&&(e=>{for(let o=0;o<n.length;o++)e===o?(t[o].classList.add("active"),n[o].classList.remove("d-none")):(t[o].classList.remove("active"),n[o].classList.add("d-none"))})(r)})})};var s=()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-content"));let n,o=0;(()=>{const t=document.querySelector(".portfolio-dots");for(let n=0;n<e.length;n++){const e=document.createElement("li");e.classList.add("dot"),n===o&&e.classList.add("dot-active"),t.append(e)}})();const r=document.querySelectorAll(".dot"),c=(e,t,n)=>{e[t].classList.remove(n)},a=(e,t,n)=>{e[t].classList.add(n)},s=()=>{c(e,o,"portfolio-item-active"),c(r,o,"dot-active"),o++,o>=e.length&&(o=0),a(e,o,"portfolio-item-active"),a(r,o,"dot-active")},l=(e=2e3)=>{n=setInterval(s,e)};t.addEventListener("click",t=>{t.preventDefault();let n=t.target;n.matches(".portfolio-btn, .dot")&&(c(e,o,"portfolio-item-active"),c(r,o,"dot-active"),n.matches("#arrow-right")?o++:n.matches("#arrow-left")?o--:n.matches(".dot")&&r.forEach((e,t)=>{e===n&&(o=t)}),o>=e.length&&(o=0),o<0&&(o=e.length-1),a(e,o,"portfolio-item-active"),a(r,o,"dot-active"))}),t.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)}),t.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&l()}),l(1500)};var l=()=>{const e=document.querySelector(".command");let t="";e.addEventListener("mouseover",e=>{let n=e.target;n.matches("img.command__photo")&&(t=n.src,n.src=n.dataset.img)}),e.addEventListener("mouseout",e=>{let n=e.target;n.matches("img.command__photo")&&(n.src=t)})};var i=(e=100)=>{const t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),c=document.querySelector(".calc-count"),a=document.getElementById("total");checkInput(t,/[\D]/);let s=0,l=0;t.addEventListener("change",t=>{let i=t.target;(i.matches("select")||i.matches("input"))&&(()=>{let t=0,i=1,u=1;const m=n.options[n.selectedIndex].value,d=+o.value,p=()=>{l=requestAnimationFrame(p),s>t&&(s-t)/10>10?(s-=(s-t)/10,a.textContent=Math.floor(s)):(a.textContent=t,s=t,cancelAnimationFrame(l))},v=()=>{l=requestAnimationFrame(v),s<t&&(t-s)/10>10?(s+=(t-s)/10,a.textContent=Math.floor(s)):(a.textContent=t,s=t,cancelAnimationFrame(l))};c.value>1&&(i+=(c.value-1)/10),r.value&&r.value<5?u*=2:r.value&&r.value<10&&(u*=1.5),m&&d&&(t=e*m*d*i*u,t>s?requestAnimationFrame(v):requestAnimationFrame(p))})()})};var u=()=>{const e=document.getElementById("form1"),t=document.getElementById("form2"),n=document.getElementById("form3");checkInput(e,/[^\+\d]/,'input[name="user_phone"]'),checkInput(e,/[^А-Яа-яЁё\ ]/,'input[name="user_name"]'),checkInput(t,/[^\+\d]/,'input[name="user_phone"]'),checkInput(t,/[^А-Яа-яЁё\ ]/,'input[name="user_name"]'),checkInput(t,/[^А-Яа-яЁё\ ]/,'input[name="user_message"]'),checkInput(n,/[^\+\d]/,'input[name="user_phone"]'),checkInput(n,/[^А-Яа-яЁё\ ]/,'input[name="user_name"]');const o=document.createElement("div");o.style.cssText="font-size: 2rem; color: #fff;";const r=(e,t)=>{t.preventDefault(),e.append(o),o.textContent="Загрузка...";const n=new FormData(e);let r={};n.forEach((e,t)=>{r[t]=e}),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(r).then(e=>{if(200!==e.status)throw new Error(e.statusText);o.textContent="Спасибо! Мы скоро с вами свяжемся!"}).catch(e=>{o.textContent="Что-то пошло не так..."}),(e=>{[...e.elements].forEach(e=>{e.matches("input")&&(e.value="")})})(e)};e.addEventListener("submit",t=>{r(e,t)}),t.addEventListener("submit",e=>{r(t,e)}),n.addEventListener("submit",e=>{r(n,e)})};(()=>{const e=document.getElementById("timer-hours"),t=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");let o=new Date,r=new Date(o.getFullYear(),o.getMonth(),o.getDate()+1),c=Math.floor(r.getTime()-o.getTime())/1e3;setInterval(()=>{const o=(()=>{const e=e=>e>0&&e<10?`0${e}`:e<=0?"00":e,t=e(Math.floor(c%60)),n=e(Math.floor(c/60%60));return{hours:e(Math.floor(c/60/60)),minutes:n,seconds:t}})();c--,e.textContent=o.hours,t.textContent=o.minutes,n.textContent=o.seconds},1e3)})(),o(),r(),c(),a(),s(),l(),i(100),u()}]);