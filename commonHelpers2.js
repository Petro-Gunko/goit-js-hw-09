import"./assets/modulepreload-polyfill-ec808ebb.js";document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".feedback-form"),n=document.querySelector('input[name="email"]'),r=document.querySelector('textarea[name="message"]'),t="feedback-form-state";(()=>{const e=JSON.parse(localStorage.getItem(t));e&&(n.value=e.email||"",r.value=e.message||"")})(),a.addEventListener("input",e=>{const o={email:n.value,message:r.value};localStorage.setItem(t,JSON.stringify(o)),console.log(o)}),a.addEventListener("submit",e=>{e.preventDefault();const o=JSON.parse(localStorage.getItem(t));console.log(o),a.reset(),localStorage.removeItem(t)})});
//# sourceMappingURL=commonHelpers2.js.map
