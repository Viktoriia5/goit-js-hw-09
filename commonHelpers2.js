import"./assets/modulepreload-polyfill-3cfb730f.js";const n="feedback-form-state",o=document.querySelector(".feedback-form"),m=document.querySelector('input[name="email"]'),r=document.querySelector('textarea[name="message"]');o.addEventListener("input",i);o.addEventListener("submit",u);document.addEventListener("DOMContentLoaded",c);let a={};function i(e){const{email:t,message:s}=e.currentTarget.elements,l={email:t.value.trim(),message:s.value.trim()};localStorage.setItem(n,JSON.stringify(l))}function u(e){if(e.preventDefault(),a.email=m.value.trim(),a.message=r.value.trim(),!m.value||!r.value)return alert("Email or message is empty!");console.log(a),localStorage.removeItem(n),o.reset()}function c(){let e=localStorage.getItem(n),t=JSON.parse(e);t&&(m.value=t.email??"",r.value=t.message??"")}
//# sourceMappingURL=commonHelpers2.js.map
