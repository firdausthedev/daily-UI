!function(){const t=document.querySelector("h2"),e=document.querySelector("button"),n=()=>{(async()=>{const t=await fetch("https://api.adviceslip.com/advice",{method:"GET"});return await t.json()})().then((e=>{t.textContent=`"${e.slip.advice}"`})).catch((e=>{t.textContent="Oops.. Something went wrong"}))};document.addEventListener("DOMContentLoaded",(()=>{t.textContent="loading...",n()})),e.addEventListener("click",(()=>{t.textContent="loading...",setTimeout((()=>{n()}),2e3)}))}();
//# sourceMappingURL=index.b06ef641.js.map