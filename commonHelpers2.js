import"./assets/modulepreload-polyfill-3cfb730f.js";const m="feedback-form-state",a=document.querySelector(".feedback-form"),l=document.querySelector('input[name="email"]'),r=document.querySelector('textarea[name="message"]');a.addEventListener("input",o);a.addEventListener("submit",s);let e={};function o(t){t.preventDefault(),e.email=t.target.email}function s(t){t.preventDefault(),e.email=l.value.trim(),e.message=r.value.trim(),console.log(e),e.email.length&&e.message.length>0&&localStorage.setItem(m,JSON.stringify(e)),a.reset()}let i=localStorage.getItem(m),n=JSON.parse(i);l.value=n.email??"";r.value=n.message??"";
//# sourceMappingURL=commonHelpers2.js.map