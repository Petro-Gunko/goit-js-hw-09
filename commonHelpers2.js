import"./assets/modulepreload-polyfill-ec808ebb.js";document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".feedback-form"),s=document.querySelector('input[name="email"]'),n=document.querySelector('textarea[name="message"]'),a="feedback-form-state";(()=>{const e=JSON.parse(localStorage.getItem(a));e&&(s.value=e.email.trim()||"",n.value=e.message.trim()||"")})(),o.addEventListener("input",e=>{const t={email:s.value.trim(),message:n.value.trim()};localStorage.setItem(a,JSON.stringify(t)),console.log(t)}),o.addEventListener("submit",e=>{e.preventDefault();const t=JSON.parse(localStorage.getItem(a));console.log(t),t.email.trim()!==""&&t.message.trim()!==""?(o.reset(),localStorage.removeItem(a)):console.log("Please fill in both email and message fields.")})});
//# sourceMappingURL=commonHelpers2.js.map