import{g as T}from"./vendor.2331be84.js";const A=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};A();console.log("Hello world");const I=document.querySelector("html");let E=document.querySelector("body");function P(){const s=window.innerWidth-document.documentElement.clientWidth+"px",i=`
    <div class="accLoginfilter__wrap">
      <div class="accLoginfilter">
        <div class="accLoginfilter__container">
          <div class="accLoginfilter__title">\u0412\u0445\u043E\u0434 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442</div>
          <button class="accLoginfilter__buttonClose"></button>
          <div class="accLoginfilter__descr">
            \u0421\u043C\u043E\u0436\u0435\u0442\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u043E\u0444\u043E\u0440\u043C\u043B\u044F\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u044B, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B
          </div>
          <div class="accLoginfilter__number">\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</div>
          <input
            placeholder="+7"
            type="text"
            class="accLoginfilter-number__input"
          />
          <a href="myAcc.html" class="accLoginfilter__button">\u0412\u043E\u0439\u0442\u0438</a>
          <div class="accLoginfilter__agreement">
            \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044F, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441\u043E \u0441\u0431\u043E\u0440\u043E\u043C \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445
            \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C
          </div>
        </div>
      </div>
    </div>`;document.body.insertAdjacentHTML("beforeend",i),I.style.overflow="hidden",E.style.paddingRight=s;const n=document.querySelector(".accLoginfilter__wrap");n.style.backdropFilter="blur(15px)";const l=document.querySelector(".accLoginfilter__buttonClose"),r=document.querySelector(".accLoginfilter__button"),o=document.querySelector(".accLoginfilter");setTimeout(()=>{o.style.opacity="1"},100);function t(){o.style.opacity="0",o.addEventListener("transitionend",()=>n.remove()),setTimeout(()=>{n.style.backdropFilter="blur(0px)",I.style.overflow="auto",E.style.paddingRight="0px"},450)}document.addEventListener("keydown",function(e){e.keyCode===27&&t()}),document.addEventListener("click",function(e){e.target==n&&t()}),document.addEventListener("click",e=>{e.target==l&&t()}),document.addEventListener("click",e=>{e.target==r&&t()})}function O(){let s=document.createElement("div");s.className="basketIsFull",s.innerText="\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0430!",document.body.insertAdjacentElement("beforeend",s),setTimeout(()=>{s.classList.add("basketIsFull-hidden")},1500)}const q=document.querySelector("html");let L=document.querySelector("body");function M(){const s=window.innerWidth-document.documentElement.clientWidth+"px",i=`
<div class="filter-container">
  <div class="filter">
    <div class="fitler-wrap">
      <div class="filter__header">
        <h2 class="filter-header__title">\u0424\u0438\u043B\u044C\u0442\u0440\u044B</h2>
        <button type="submit" class="filter-header__button"> <img draggable="false" src="images/filterPAGE/filter__icon_btn.svg" alt="img" class="header-button__image" /> </button>
      </div>
      <form action="" class="popup__form">
        <h3 class="filter__subtitle">\u041E\u0431\u0449\u0435\u0435</h3>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0425\u0438\u0442 </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u041D\u043E\u0432\u0438\u043D\u043A\u0430 </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0421 \u043C\u044F\u0441\u043E\u043C </span> </label>
        </div>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043D\u0441\u043A\u0430\u044F </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0421 \u043A\u0443\u0440\u0438\u0446\u0435\u0439 </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0411\u0435\u0437 \u043B\u0443\u043A\u0430 </span> </label>
        </div>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0421 \u0433\u0440\u0438\u0431\u0430\u043C\u0438 </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0421 \u043C\u043E\u0440\u0435\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u043C\u0438 </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0411\u0430\u0440\u0431\u0435\u043A\u044C\u044E </span> </label>
        </div>
        <h3 class="filter__subtitle">\u0421\u044B\u0440</h3>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0420\u0435\u0434\u0436\u0430\u043D\u0438\u0442\u043E </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u041C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u0430 </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0427\u0435\u0434\u0434\u0435\u0440 </span> </label>
        </div>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0421 \u0433\u043E\u043B\u0443\u0431\u043E\u0439 \u043F\u043B\u0435\u0441\u0435\u043D\u044C\u044E </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0421\u043C\u0435\u0441\u044C \u0438\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0445 \u0441\u044B\u0440\u043E\u0432 </span> </label>
        </div>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u041C\u044F\u0433\u043A\u0438\u0439 \u043C\u043E\u043B\u043E\u0434\u043E\u0439 \u0441\u044B\u0440 </span> </label>
        </div>
        <h3 class="filter__subtitle">\u041C\u044F\u0441\u043E</h3>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u041F\u0435\u043F\u043F\u0435\u0440\u043E\u043D\u0438 </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0421\u0432\u0438\u043D\u0438\u043D\u0430 </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0412\u0435\u0442\u0447\u0438\u043D\u0430 </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0411\u0435\u043A\u043E\u043D </span> </label>
        </div>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0413\u043E\u0432\u044F\u0434\u0438\u043D\u0430 </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0427\u043E\u0440\u0438\u0437\u043E </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u041A\u043E\u043B\u0431\u0430\u0441\u043A\u0438 </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u041A\u0443\u0440\u0438\u043D\u0430\u044F \u0433\u0440\u0443\u0434\u043A\u0430 </span> </label>
        </div>
        <h3 class="filter__subtitle">\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442</h3>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u041A\u0440\u0435\u0432\u0435\u0442\u043A\u0430 </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0410\u043D\u0430\u043D\u0430\u0441\u044B </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0428\u0430\u043C\u043F\u0438\u043D\u044C\u043E\u043D\u044B </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u041B\u0443\u043A </span> </label>
        </div>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u041F\u0435\u0440\u0435\u0446 \u0445\u0430\u043B\u0430\u043F\u0435\u043D\u044C\u043E </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u041E\u0440\u0435\u0433\u0430\u043D\u043E </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0417\u0435\u043B\u0435\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0446 </span> </label>
        </div>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0422\u043E\u043C\u0430\u0442\u044B </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0427\u0435\u0441\u043D\u043E\u043A </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u041A\u0440\u0430\u0441\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0446 </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u041E\u043B\u0438\u0432\u043A\u0438 </span> </label>
        </div>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u041C\u0430\u0441\u043B\u0438\u043D\u044B </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u041A\u043B\u0443\u0431\u043D\u0438\u043A\u0430 </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">\u0421\u043C\u0435\u0441\u044C \u0438\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0445 \u0442\u0440\u0430\u0432 </span> </label>
        </div>
        <button type="reset" class="filter__deliverybtn filter__btnreset"> \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C </button>
        <button type="submit" class="filter__deliverybtn filter__btnapply"> \u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C </button>
      </form>
    </div>
  </div>
</div>
`;document.body.insertAdjacentHTML("beforeend",i),L.style.paddingRight=s,q.style.overflow="hidden";const n=document.querySelector(".filter-container");setTimeout(()=>{n.style.opacity="1"},100)}function $(){const s=document.querySelector(".filter-container");s.style.opacity="0",s.addEventListener("transitionend",()=>s.remove()),setTimeout(()=>{L.style.paddingRight="0px",q.style.overflow="auto"},450)}document.addEventListener("click",s=>{let i=document.querySelector(".filter-container");s.target==i&&$()});document.addEventListener("click",s=>{s.target.closest(".filter-header__button")&&(document.querySelector(".filter-container"),$())});document.addEventListener("keydown",s=>{let i=document.querySelector(".filter-container");(s.keyCode===27||i)&&$()});window.scrollTo(0,0);T.to(".assortment__item",{delay:.4,duration:.8,opacity:1,stagger:.2});const C=document.querySelector(".menu-dropdown__list");C&&(C.style.display="none",setTimeout(()=>{C.style.display="block"},500));const p=document.querySelector(".basket__sum");document.querySelector(".accountProfile-header__btn");document.querySelector(".settings");let d=[],u=0,m=0,k,h,S,z,w,b=[],g=[],f=[],v=[],y=[];localStorage.getItem("array")&&localStorage.array.length>=20&&(d=JSON.parse(localStorage.getItem("array")),b=d[0],g=d[1],f=d[2],v=d[3],y=d[4],u=d[5]);localStorage.getItem("basket")&&(m=JSON.parse(localStorage.getItem("basket")),p.innerText=`${m} \u20BD`);document.querySelector(".indexpage")&&AOS.init();document.addEventListener("click",Y);function Y(s){if(s.target.closest(".btnchoise")){const i=s.target.closest(".item");if(z=i.querySelector(".item__costs"),k=i.querySelector(".item__image").getAttribute("src"),h=i.querySelector(".item__name").innerText,S=i.querySelector(".item__descr").innerText,u<=12){u+=1,w=z.dataset.price;let n=z.innerText.replace(/[^+\d]/g,"").trim(),l=Number(n);m+=l,p.innerText=`${m} \u20BD`,localStorage.setItem("basket",JSON.stringify(m)),d=[],b.push(h),g.push(S),f.push(k),y.push(w),v.push(l),d.push(b,g,f,y,v,u),localStorage.setItem("array",JSON.stringify(d))}else O()}}document.addEventListener("click",H);function H(s){if(s.target.closest(".addTOorder-item__button")){let i=document.querySelector(".promocode__costs"),n=document.querySelector(".addItemCard2-delivery-comment-delivery__costs");const l=document.querySelector(".additem"),r=document.querySelector("#startitem"),o=s.target.closest(".addTOorder__item");if(r.style.display="none",z=s.target,k=o.querySelector(".addTOorder__image").getAttribute("src"),h=o.querySelector(".addTOorder-item__title").innerText,S=o.querySelector(".addTOorder-item__descr").innerText,d.length<40){u+=1;let t=z.innerText.replace(/[^+\d]/g,"").trim(),e=Number(t);w=Number(s.target.dataset.price),b.push(h),g.push(S),f.push(k),v.push(e),y.push(w),d=[],d.push(b,g,f,y,v,u),localStorage.setItem("array",JSON.stringify(d));const a=`
<div class="addItemCard2__item">
<div class="addItemCard2__item_wrap">
  <img
    class="addItemCard2-item__image"
    src=${k}
    alt="${h}"
  />
  <div class="addItemCard2__text">
    <div class="addItemCard2-text__title">
      ${h}
    </div>
    <div class="addItemCard2-text__descr">${S}</div>
  </div>
</div>
<div class="addItemCard2__item_wrap">
  <div class="order-item__sum">
    <button class="order-counter__btn order-counter__increment">
      <img
        src="images/order/Plus__icon.svg"
        alt="icon"
        class="order-counter-increment__image"
      />
    </button>
    <div class="order-counter__number">1</div>
    <button class="order-counter__btn order-counter__decrement">
      <img
        src="images/order/Minus__icon.svg"
        alt="icon"
        class="order-counter-decrement__image"
      />
    </button>
  </div>
  <div class="order-footer__costs addItemCard2-item__costs" ${"data-price="+w}>${e} \u20BD</div>
</div>
<button class="addItemCard2-item__remove">
  <img src="images/additemCard2/removeCardBtn.png" alt="" class="" />
</button>
</div>
`;l.insertAdjacentHTML("afterend",a),p.innerText=`${m} \u20BD`,m+=w,i.innerText=`\u0418\u0442\u043E\u0433\u043E ${m} \u20BD`,n.innerText=`\u0418\u0442\u043E\u0433\u043E ${m} \u20BD`,p.innerText=i.innerText.replace(/[^+\d]/g,"")+" \u20BD",localStorage.setItem("basket",JSON.stringify(m))}}}document.addEventListener("click",j);function j(s){if(s.target.closest(".addItemCard2-item__remove")){const i=s.target.closest(".addItemCard2__item"),n=i.querySelector(".order-item__sum").nextElementSibling.innerText;let l=Number(n.replace(/[^+\d]/g,"")),r=i.querySelector(".addItemCard2-text__title"),o=document.querySelector(".promocode__costs"),t=document.querySelector(".addItemCard2-delivery-comment-delivery__costs");u-=1,i.remove();let e=r.innerText.trim(),c=d[0].indexOf(e);for(let _=0;_<d.length-1;_++)d[_].splice(c,1);d=[],d.push(b,g,f,y,v,u),m-=l,o.innerText=`\u0418\u0442\u043E\u0433\u043E ${m} \u20BD`,t.innerText=`\u0418\u0442\u043E\u0433\u043E ${m} \u20BD`,p.innerText=m+" \u20BD",u<1&&(d=[]),localStorage.setItem("basket",JSON.stringify(m)),localStorage.setItem("array",JSON.stringify(d))}}document.addEventListener("click",D);function D(s){if(s.target.closest(".order-counter__increment")&&!startitem){const i=s.target.closest(".addItemCard2__item"),n=i.querySelector(".addItemCard2-item__costs"),l=i.querySelector(".order-counter__number");let r=document.querySelector(".promocode__costs"),o=document.querySelector(".addItemCard2-delivery-comment-delivery__costs"),t=n.innerText.replace(/[^+\d]/g,""),e=Number(t),a=Number(n.dataset.price);l.innerText=Number(l.innerText)+1,n.innerText=String(e+a+" \u20BD"),m+=a,r.innerText=`\u0418\u0442\u043E\u0433\u043E ${m} \u20BD`,o.innerText=`\u0418\u0442\u043E\u0433\u043E ${m} \u20BD`,p.innerText=r.innerText.replace(/[^+\d]/g,"")+" \u20BD"}}document.addEventListener("click",J);function J(s){if(s.target.closest(".order-counter__decrement")&&m>=0&&!startitem){const i=s.target.closest(".addItemCard2__item"),n=i.querySelector(".addItemCard2-item__costs"),l=i.querySelector(".order-counter__number");let r=document.querySelector(".promocode__costs"),o=document.querySelector(".addItemCard2-delivery-comment-delivery__costs"),t=n.innerText.replace(/[^+\d]/g,""),e=Number(t),a=Number(n.dataset.price);Number(l.innerText>=1)&&(l.innerText=Number(l.innerText)-1,n.innerText=String(e-a+" \u20BD"),m>=0&&(m-=a,r.innerText=`\u0418\u0442\u043E\u0433\u043E ${m} \u20BD`,o.innerText=`\u0418\u0442\u043E\u0433\u043E ${m} \u20BD`,p.innerText=r.innerText.replace(/[^+\d]/g,"")+" \u20BD"))}}document.addEventListener("click",G);function G(s){s.target.closest(".nav-list__linkLOGIN")&&P()}document.addEventListener("click",s=>{let i=document.querySelector(".delivery-conditions__text");s.target.closest(".delivery-conditions__btn")&&i.classList.toggle("delivery-conditions__text_active")});document.addEventListener("click",s=>{s.target.closest(".btnfilter ")&&M()});function F(){const s=document.querySelector(".combo__item_wrapper");let i=["Combo pizza","Combo triple pizza","Double pizza and free drink","Three dodster + one free","Combo triple pizza","Combo double pizza'","4 dodster combo","Two pizza and your drink"],n=["2 \u043F\u0438\u0446\u0446\u044B   25 \u0441\u043C  \u043D\u0430 \u0432\u044B\u0431\u043E\u0440. \u0414\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u0437 2\u20134 \u0447\u0435\u043B\u043E\u0432\u0435\u043A","3 \u043F\u0438\u0446\u0446\u044B 30 \u0441\u043C \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441. \u0414\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u0437 5\u201310 \u0447\u0435\u043B\u043E\u0432\u0435\u043A","2 \u043F\u0438\u0446\u0446\u044B \u0438 \u043D\u0430\u043F\u0438\u0442\u043E\u043A 2 \u043F\u0438\u0446\u0446\u044B 25 \u0441\u043C \u0438 \u043D\u0430\u043F\u0438\u0442\u043E\u043A \u043D\u0430 \u0432\u044B\u0431\u043E\u0440. \u0414\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u0437 2\u20134 \u0447\u0435\u043B\u043E\u0432\u0435\u043A","\u041B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u0430\u044F \u0433\u043E\u0440\u044F\u0447\u0430\u044F \u0437\u0430\u043A\u0443\u0441\u043A\u0430 \u0441 \u0446\u044B\u043F\u043B\u0451\u043D\u043A\u043E\u043C, \u0442\u043E\u043C\u0430\u0442\u0430\u043C\u0438, \u043C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u043E\u0439, \u0441\u043E\u0443\u0441\u043E\u043C \u0440\u0430\u043D\u0447 \u0432 \u0442\u043E\u043D\u043A\u043E\u0439 \u043F\u0448\u0435\u043D\u0438\u0447\u043D\u043E\u0439 \u043B\u0435\u043F\u0435\u0448\u043A\u0435","3 \u043F\u0438\u0446\u0446\u044B 30 \u0441\u043C \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441. \u0414\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u0437 5\u201310 \u0447\u0435\u043B\u043E\u0432\u0435\u043A","2 \u043F\u0438\u0446\u0446\u044B   25 \u0441\u043C  \u043D\u0430 \u0432\u044B\u0431\u043E\u0440. \u0414\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u0437 2\u20134 \u0447\u0435\u043B\u043E\u0432\u0435\u043A","\u041B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u0430\u044F \u0433\u043E\u0440\u044F\u0447\u0430\u044F \u0437\u0430\u043A\u0443\u0441\u043A\u0430 \u0441 \u0446\u044B\u043F\u043B\u0451\u043D\u043A\u043E\u043C, \u0442\u043E\u043C\u0430\u0442\u0430\u043C\u0438, \u043C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u043E\u0439, \u0441\u043E\u0443\u0441\u043E\u043C \u0440\u0430\u043D\u0447 \u0432 \u0442\u043E\u043D\u043A\u043E\u0439 \u043F\u0448\u0435\u043D\u0438\u0447\u043D\u043E\u0439 \u043B\u0435\u043F\u0435\u0448\u043A\u0435","2 \u043F\u0438\u0446\u0446\u044B \u0438 \u043D\u0430\u043F\u0438\u0442\u043E\u043A 2 \u043F\u0438\u0446\u0446\u044B 25 \u0441\u043C \u0438 \u043D\u0430\u043F\u0438\u0442\u043E\u043A \u043D\u0430 \u0432\u044B\u0431\u043E\u0440. \u0414\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u0437 2\u20134 \u0447\u0435\u043B\u043E\u0432\u0435\u043A"],l=["215 \u20BD","475 \u20BD","325 \u20BD","445 \u20BD","725 \u20BD","355 \u20BD","365 \u20BD","425 \u20BD"],r=["images/combo/item01.png","images/combo/item02.png","images/combo/item03.png","images/combo/item04.png","images/combo/item05.png","images/combo/item06.png","images/combo/item07.png","images/combo/item08.png"],o=["\u0434\u043E 22%","\u0434\u043E 18%","\u0434\u043E 10%","\u0434\u043E 15%","\u0434\u043E 18%","\u0434\u043E 22%","\u0434\u043E 15%","\u0434\u043E 10%"],t=["215","475","325","445","725","355","365","425"];for(let e=0;e<i.length;e++){let a=document.createElement("div");a.className="item combo__item";const c=`<div class="item combo__item">
    <div class="item__sale item-sale__combo">${o[e]}</div>
    <img draggable="false"
    src="${r[e]}"
    alt="combo"
    class="item__image combo__image"/>
    <div class="item__name combo__name">${i[e]}</div>
    <div class="item__descr combo__descr">${n[e]}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise combo__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
    <div class="item__costs drinks__costst" data-price="${t[e]}">${l[e]}</div>
    </div>
    </div>
    </div>`;a.innerText=c,s.insertAdjacentHTML("beforeend",c)}}function R(){const s=document.querySelector(".desserts__item_wrapper");let i=["\u0420\u0443\u043B\u0435\u0442\u0438\u043A\u0438 \u0441 \u0431\u0440\u0443\u0441\u043D\u0438\u043A\u043E\u0439","\u0420\u0443\u043B\u0435\u0442\u0438\u043A\u0438 \u0441 \u043A\u043E\u0440\u0438\u0446\u0435\u0439","\u041A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u043B\u0430\u0434\u044C\u0438","\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 \u044D\u0441\u043A\u0438\u043C\u043E '\u041C\u0430\u0433\u043D\u0430\u0442'","\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 \u044D\u0441\u043A\u0438\u043C\u043E '\u041C\u0430\u0433\u043D\u0430\u0442'","\u041D\u0430\u0431\u043E\u0440 \u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 -7\u0448\u0442","\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 '\u041C\u0438\u0448\u043A\u0430 \u043D\u0430 \u043F\u043E\u043B\u044E\u0441\u0435'","\u041A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u043B\u0430\u0434\u044C\u0438"],n=["\u042D\u0442\u043E \u0437\u0430\u0434\u043E\u0440\u043D\u044B\u0435 \u0441\u043B\u0430\u0434\u043A\u0438\u0435 \u0440\u0443\u043B\u0435\u0442\u0438\u043A\u0438, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0437\u0430\u043A\u0440\u0443\u0442\u0438\u043B\u0441\u044F \u043C\u0438\u043A\u0441 \u0438\u0437 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0439...","\u0414\u0435\u0441\u0435\u0440\u0442, \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u043D\u044B\u0439 \u043D\u0430\u0448\u0438\u043C\u0438 \u0431\u0430\u0431\u0443\u0448\u043A\u0430\u043C\u0438. \u0413\u043E\u0440\u044F\u0447\u0438\u0435 \u0441\u043B\u0430\u0434\u043A\u0438\u0435 \u0440\u0443\u043B\u0435\u0442\u0438\u043A\u0438 ....","\u0417\u0430\u043F\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u043E\u043B\u0430\u0434\u044C\u0438 \u0438\u0437 \u043A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044F \u0432 \u043F\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0435, 8 \u0448\u0442","\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 (\u0441\u043B\u0438\u0432\u043A\u0438, \u043C\u043E\u043B\u043E\u043A\u043E \u0446\u0435\u043B\u044C\u043D\u043E\u0435, \u0432\u043E\u0434\u0430 \u043F\u0438\u0442\u044C\u0435\u0432\u0430\u044F, \u0441\u0430\u0445\u0430\u0440, \u043C\u043E\u043B\u043E\u043A\u043E ...","\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 (\u0441\u043B\u0438\u0432\u043A\u0438, \u043C\u043E\u043B\u043E\u043A\u043E \u0446\u0435\u043B\u044C\u043D\u043E\u0435, \u0432\u043E\u0434\u0430 \u043F\u0438\u0442\u044C\u0435\u0432\u0430\u044F, \u0441\u0430\u0445\u0430\u0440, \u043C\u043E\u043B\u043E\u043A\u043E ...","\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 (\u0441\u043B\u0438\u0432\u043A\u0438, \u043C\u043E\u043B\u043E\u043A\u043E \u0446\u0435\u043B\u044C\u043D\u043E\u0435, \u0432\u043E\u0434\u0430 \u043F\u0438\u0442\u044C\u0435\u0432\u0430\u044F, \u0441\u0430\u0445\u0430\u0440, \u043C\u043E\u043B\u043E\u043A\u043E ...","\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 (\u0441\u043B\u0438\u0432\u043A\u0438, \u043C\u043E\u043B\u043E\u043A\u043E \u0446\u0435\u043B\u044C\u043D\u043E\u0435, \u0432\u043E\u0434\u0430 \u043F\u0438\u0442\u044C\u0435\u0432\u0430\u044F, \u0441\u0430\u0445\u0430\u0440, \u043C\u043E\u043B\u043E\u043A\u043E ...","\u0417\u0430\u043F\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u043E\u043B\u0430\u0434\u044C\u0438 \u0438\u0437 \u043A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044F \u0432 \u043F\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0435, 8 \u0448\u0442"],l=["175 \u20BD","125 \u20BD","95 \u20BD","75 \u20BD","115 \u20BD","225 \u20BD","110 \u20BD","100 \u20BD"],r=["images/desserts/item01.png","images/desserts/item02.png","images/desserts/item03.png","images/desserts/item04.png","images/desserts/item05.png","images/desserts/item06.png","images/desserts/item07.png","images/desserts/item08.png"],o=["175","125","95","75","115","225","110","100"];for(let t=0;t<i.length;t++){let e=document.createElement("div");e.className="desserts__item";const a=`
    <div class="item desserts__item">
    <img draggable="false"
      src="${r[t]}"
      alt="desserts"
      class="item__image desserts__image"
    />
    <div class="item__name desserts__name"
    >${i[t]}</div
    >
    <div class="item__descr desserts__descr"
    >${n[t]}</div
    >
    <div class="item__bottom_choise">
    <button  class="btnchoise desserts__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
    <div class="item__costs desserts__costs" data-price="${o[t]}">${l[t]}</div>
    </div>
    </div>`;e.innerText=a,s.insertAdjacentHTML("beforeend",a)}}function W(){const s=document.querySelector(".drinks__item_wrapper");let i=["Adrenaline Game","Pepsi dark","Pepsi light","Pepsi cherry","Pepsi classic","Mirinda","Adrenaline Game fuel","Pepsi dark light"],n=["\u041D\u0430\u043F\u0438\u0442\u043E\u043A \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0439, \u0442\u043E\u043D\u0438\u0437\u0438\u0440\u0443\u044E\u0449\u0438\u0439, \u0433\u0430\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439. \u0410\u0440\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439....","\u0422\u043E\u0440\u0433\u043E\u0432\u0430\u044F \u043C\u0430\u0440\u043A\u0430, \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0430\u044F \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 PepsiCo, \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0439....","\u0411\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0439 \u0433\u0430\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043D\u0430\u043F\u0438\u0442\u043E\u043A, \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u043C\u044B\u0439 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0435\u0439 PepsiCo....","\u0422\u043E\u0440\u0433\u043E\u0432\u0430\u044F \u043C\u0430\u0440\u043A\u0430, \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0430\u044F \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 PepsiCo, \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0439....","\u0411\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0439 \u0433\u0430\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043D\u0430\u043F\u0438\u0442\u043E\u043A, \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u043C\u044B\u0439 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0435\u0439 PepsiCo....","\u0422\u043E\u0440\u0433\u043E\u0432\u0430\u044F \u043C\u0430\u0440\u043A\u0430, \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0430\u044F \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 PepsiCo, \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0439.....","\u041D\u0430\u043F\u0438\u0442\u043E\u043A \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0439, \u0442\u043E\u043D\u0438\u0437\u0438\u0440\u0443\u044E\u0449\u0438\u0439, \u0433\u0430\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439. \u0410\u0440\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439....","\u0422\u043E\u0440\u0433\u043E\u0432\u0430\u044F \u043C\u0430\u0440\u043A\u0430, \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0430\u044F \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 PepsiCo, \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0439...."],l=["475 \u20BD","395 \u20BD","425 \u20BD","525 \u20BD","425 \u20BD","525 \u20BD","425 \u20BD","525 \u20BD"],r=["images/drinks/item07.png","images/drinks/item02.png","images/drinks/item03.png","images/drinks/item04.png","images/drinks/item05.png","images/drinks/item06.png","images/drinks/item07.png","images/drinks/item08.png"],o=["475","395","425","525","425","525","425","525"];for(let t=0;t<i.length;t++){let e=document.createElement("div");e.className="drinks__item";const a=`
    <div class="item drinks__item">
    <img draggable="false"
      src="${r[t]}"
      alt="drink"
      class="item__image drinks__image"
    />
    <div  class="item__name drinks__name">${i[t]}</div>
    <div  class="item__descr drinks__descr"
    >${n[t]}</div
    >
    <div class="item__bottom_choise">
    <button class="btnchoise drinks__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
    <div class="item__costs drinks__costs" data-price="${o[t]}">${l[t]}</div>
    </div>
    </div>`;e.innerText=a,s.insertAdjacentHTML("beforeend",a)}}function B(){const s=document.querySelector(".pizza__item_wrapper");let i=["\u0427\u0438\u043A\u0435\u043D \u0421\u043B\u0430\u0434\u043A\u0438\u0439 \u0427\u0438\u043B\u0438","EASY PEASY \u043E\u0433\u0443\u0440\u0435\u0447\u043D\u044B\u0439 \u0440\u0430\u0441\u043A\u043E\u043B\u0431\u0430\u0441","EASY PEASY \u0447\u0438\u043A\u0435\u043D \u0430-\u043B\u044F \u0445\u0440\u0435\u043D","EASY PEASY 4&nbsp;\u0441\u0435\u0437\u043E\u043D\u0430","EASY PEASY 4&nbsp;\u0441\u0435\u0437\u043E\u043D\u0430","EASY PEASY \u0447\u0438\u043A\u0435\u043D \u0430-\u043B\u044F \u0445\u0440\u0435\u043D","EASY PEASY \u0421\u043B\u0430\u0434\u043A\u0438\u0439 \u0427\u0438\u043B\u0438","EASY PEASY \u043E\u0433\u0443\u0440\u0435\u0447\u043D\u044B\u0439 \u0440\u0430\u0441\u043A\u043E\u043B\u0431\u0430\u0441"],n=["\u041A\u0443\u0440\u0438\u0446\u0430, \u041B\u0443\u043A, \u041F\u0435\u0440\u0435\u0446 \u0425\u0430\u043B\u0430\u043F\u0435\u043D\u044C\u043E, \u0421\u044B\u0440 \u041C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u0430, \u0422\u043E\u043C\u0430\u0442\u043D\u044B\u0439 \u0441\u043E\u0443...","\u041A\u0443\u0440\u0438\u0446\u0430, \u041B\u0443\u043A, \u041F\u0435\u0440\u0435\u0446 \u0425\u0430\u043B\u0430\u043F\u0435\u043D\u044C\u043E..","\u041A\u0443\u0440\u0438\u0446\u0430, \u041B\u0443\u043A, \u0421\u043E\u0443\u0441 \u041A\u0430\u0440\u0431\u043E\u043D\u0430\u0440\u0430...","\u0411\u0435\u043A\u043E\u043D, \u0412\u0435\u0442\u0447\u0438\u043D\u0430, \u0413\u0440\u0438\u0431\u044B, \u041A\u0443\u0440\u0438\u0446\u0430, \u041B\u0443\u043A, \u041C\u0430\u0441\u043B\u0438\u043D\u044B, \u041E\u0433\u0443\u0440\u0446\u044B \u043C\u0430\u0440\u0438...","\u0411\u0435\u043A\u043E\u043D, \u0412\u0435\u0442\u0447\u0438\u043D\u0430, \u0413\u0440\u0438\u0431\u044B, \u041A\u0443\u0440\u0438\u0446\u0430, \u041B\u0443\u043A, \u041C\u0430\u0441\u043B\u0438\u043D\u044B, \u041E\u0433\u0443\u0440\u0446\u044B \u043C\u0430\u0440\u0438...","\u041A\u0443\u0440\u0438\u0446\u0430, \u041B\u0443\u043A, \u0421\u043E\u0443\u0441 \u041A\u0430\u0440\u0431\u043E\u043D\u0430\u0440\u0430...","\u041A\u0443\u0440\u0438\u0446\u0430, \u041B\u0443\u043A, \u041F\u0435\u0440\u0435\u0446 \u0425\u0430\u043B\u0430\u043F\u0435\u043D\u044C\u043E, \u0421\u044B\u0440 \u041C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u0430, \u0422\u043E\u043C\u0430\u0442\u043D\u044B\u0439 \u0441\u043E\u0443...","\u041A\u0443\u0440\u0438\u0446\u0430, \u041B\u0443\u043A, \u041F\u0435\u0440\u0435\u0446 \u0425\u0430\u043B\u0430\u043F\u0435\u043D\u044C\u043E..."],l=["\u043E\u0442 399 \u20BD","\u043E\u0442 549 \u20BD","\u043E\u0442 249 \u20BD","\u043E\u0442 630 \u20BD","\u043E\u0442 630 \u20BD","\u043E\u0442 249 \u20BD","\u043E\u0442 399 \u20BD","\u043E\u0442 549 \u20BD"],r=["images/pizza/pizza01.png","images/pizza/pizza02.png","images/pizza/pizza03.png","images/pizza/pizza04.png","images/pizza/pizza05.png","images/pizza/pizza06.png","images/pizza/pizza07.png","images/pizza/pizza08.png"],o=["399","549","249","630","630","249","399","549"];for(let t=0;t<i.length;t++){let e=document.createElement("div");e.className="item pizza__item";const a=`
    <div class="item pizza__item">
    <img draggable="false"
    src="${r[t]}"
    alt="pizza"
    class="item__image pizza__image"
    />
    <div  class="item__name pizza__name"
    >${i[t]}</div>
    <div class="item__descr pizza__descr"
    >${n[t]}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise pizza__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
    <div class="item__costs pizza__costs" data-price="${o[t]}">${l[t]}</div>
    </div>
    </div>`;e.innerText=a,s.insertAdjacentHTML("beforeend",a)}}function V(){const s=document.querySelector(".sause__item_wraper");let i=["\u0421\u043E\u0443\u0441 \u0433\u043E\u0440\u0447\u0438\u0447\u043D\u044B\u0439","\u0421\u043E\u0443\u0441 \u0431\u0430\u0440\u0431\u0435\u043A\u044E","\u0421\u043E\u0443\u0441 \u0441\u043C\u0435\u0442\u0430\u043D\u043D\u044B\u0439","\u0421\u043E\u0443\u0441 \u0442\u044B\u0441\u044F\u0447\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u043E\u0432","\u0421\u043E\u0443\u0441 \u043A\u0438\u0441\u043B\u043E-\u0441\u043B\u0430\u0434\u043A\u0438\u0439","\u0421\u043E\u0443\u0441 \u0422\u0435\u0440\u0438\u044F\u043A\u0438","\u0421\u043E\u0443\u0441 \u0441\u043C\u0435\u0442\u0430\u043D\u043D\u044B\u0439","\u0421\u043E\u0443\u0441 \u0433\u043E\u0440\u0447\u0438\u0447\u043D\u044B\u0439"],n=["\u041C\u0430\u0441\u043B\u043E \u0440\u0430\u0441\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435, \u0432\u043E\u0434\u0430, \u0433\u043E\u0440\u0447\u0438\u0446\u0430, \u0441\u0430\u0445\u0430\u0440, \u0436\u0435\u043B\u0442\u043E\u043A \u044F\u0438\u0447\u043D\u044B\u0439, \u0441\u043E\u043B\u044C, \u0443\u043A\u0441\u0443\u0441 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0439, \u0441\u0435\u043C\u0435\u043D\u0430 \u0433\u043E\u0440\u0447\u0438\u0446\u044B","\u0421\u043E\u0443\u0441 \u0441\u043B\u0443\u0436\u0438\u0442 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0430\u043D\u0442\u0438\u0434\u0435\u043F\u0440\u0435\u0441\u0441\u0430\u043D\u0442\u043E\u043C \u0438 \u0430\u043D\u0442\u0438\u043E\u043A\u0441\u0438\u0434\u0430\u043D\u0442\u043E\u043C, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0441\u0447\u0435\u0442 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u0432 \u043D\u0435\u043C \u0442\u043E\u043C\u0430\u0442\u043E\u0432.","\u0421\u043B\u0438\u0432\u043A\u0438 \u043D\u043E\u0440\u043C\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435, \u0437\u0430\u043A\u0432\u0430\u0441\u043A\u0430 \u043C\u043E\u043B\u043E\u0447\u043D\u043E\u043A\u0438\u0441\u043B\u044B\u0445 \u043C\u0438\u043A\u0440\u043E\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043C\u043E\u0432","\u0421\u043E\u0443\u0441 \u0422\u044B\u0441\u044F\u0447\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u043E\u0432 \u043E\u0447\u0435\u043D\u044C \u0445\u043E\u0440\u043E\u0448\u043E \u0441\u043E\u0447\u0435\u0442\u0430\u0435\u0442\u0441\u044F \u0441 \u0431\u043B\u044E\u0434\u0430\u043C\u0438 \u0438\u0437 \u043F\u0442\u0438\u0446\u044B \u0438 \u043C\u044F\u0441\u0430","\u0421\u043E\u0443\u0441 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u0441\u043E\u0438, \u043F\u0448\u0435\u043D\u0438\u0446\u044B, \u0441\u043E\u043B\u0438 \u0438 \u0432\u043E\u0434\u044B. \u0421\u043E\u0443\u0441 \u043E\u0447\u0435\u043D\u044C \u0442\u0435\u043C\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430 \u0441 \u0440\u0435\u0437\u043A\u0438\u043C \u0437\u0430\u043F\u0430\u0445\u043E\u043C","\u0421\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0435 \u043C\u0438\u0440\u0438\u043D - \u0441\u043B\u0430\u0434\u043A\u043E\u0435 \u0440\u0438\u0441\u043E\u0432\u043E\u0435 \u0432\u0438\u043D\u043E, \u0441\u0430\u043A\u044D, \u043C\u0435\u0434 \u0438\u043B\u0438 \u0441\u0430\u0445\u0430\u0440, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u044B\u0431\u043D\u044B\u0439 \u0441\u043E\u0443\u0441, \u0447\u0435\u0441\u043D\u043E\u043A, \u0438\u043C\u0431\u0438\u0440\u044C","\u0421\u043B\u0438\u0432\u043A\u0438 \u043D\u043E\u0440\u043C\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435, \u0437\u0430\u043A\u0432\u0430\u0441\u043A\u0430 \u043C\u043E\u043B\u043E\u0447\u043D\u043E\u043A\u0438\u0441\u043B\u044B\u0445 \u043C\u0438\u043A\u0440\u043E\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043C\u043E\u0432","\u0421\u043E\u0443\u0441 \u0441\u043B\u0443\u0436\u0438\u0442 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0430\u043D\u0442\u0438\u0434\u0435\u043F\u0440\u0435\u0441\u0441\u0430\u043D\u0442\u043E\u043C \u0438 \u0430\u043D\u0442\u0438\u043E\u043A\u0441\u0438\u0434\u0430\u043D\u0442\u043E\u043C, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0441\u0447\u0435\u0442 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u0432 \u043D\u0435\u043C \u0442\u043E\u043C\u0430\u0442\u043E\u0432."],l=["475 \u20BD","395 \u20BD","425 \u20BD","395 \u20BD","525 \u20BD","525 \u20BD","425 \u20BD","475 \u20BD"],r=["images/sause/item01.png","images/sause/item02.png","images/sause/item03.png","images/sause/item04.png","images/sause/item05.png","images/sause/item06.png","images/sause/item07.png","images/sause/item08.png"],o=["475","395","425","395","525","525","425","475"];for(let t=0;t<i.length;t++)if(t<1){let e=document.createElement("div");e.className="item sauce__item";const a=`<div class="item sauce__item">
    <div class="item__promo sause-item__promo">NEW</div>
    <img draggable="false"
    src="${r[t]}"
    alt="sause"
    class="item__image sauce__image"
    />
    <div class="item__name sauce__name">${i[t]}</div>
    <div class="item__descr desserts__descr">${n[t]}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise sause__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
    <div class="item__costs sauce__costst" data-price="${o[t]}">${l[t]}</div>
    </div>
    </div>`;e.innerText=a,s.insertAdjacentHTML("beforeend",a)}else if(t<2){let e=document.createElement("div");e.className="item sauce__item";const a=`<div class="item sauce__item">
    <div class="item__promo sause-item__promo">\u0425\u0418\u0422</div>
    <img draggable="false"
    src="${r[t]}"
    alt="sause"
    class="item__image sauce__image"
    />
    <div class="item__name sauce__name">${i[t]}</div>
    <div class="item__descr desserts__descr">${n[t]}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise sause__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
    <div class="item__costs sauce__costst" data-price="${o[t]}">${l[t]}</div>
    </div>
    </div>`;e.innerText=a,s.insertAdjacentHTML("beforeend",a)}else{let e=document.createElement("div");e.className="item sauce__item";const a=`<div class="item sauce__item">
    <img draggable="false"
    src="${r[t]}"
    alt="sause"
    class="item__image sauce__image"
    />
    <div class="item__name sauce__name">${i[t]}</div>
    <div class="item__descr desserts__descr">${n[t]}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise sause__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
    <div class="item__costs sauce__costst" data-price="${o[t]}">${l[t]}</div>
    </div>
    </div>`;e.innerText=a,s.insertAdjacentHTML("beforeend",a)}}function U(){const s=document.querySelector(".snacks__item_wrapper");let i=["\u041A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C \u0424\u0440\u0438","\u041C\u044F\u0441\u043D\u043E\u0439 \u0421\u0442\u0430\u0440\u0442\u0435\u0440","\u041E\u043B\u0430\u0434\u044C\u044F \u0438\u0437 \u043A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044F","\u0414\u043E\u0434\u0441\u0442\u0435\u0440 '\u041F\u0435\u0441\u0442\u043E'","\u041E\u0441\u0442\u0440\u044B\u0439 \u0414\u043E\u0434\u0441\u0442\u0435\u0440","\u041F\u0430\u0440\u043C\u0435\u0437\u0430\u043D \u0431\u0430\u0439\u0442\u0441","\u0427\u0438\u0437\u0431\u0443\u0440\u0433\u0435\u0440-\u043F\u0438\u0446\u0446\u0430","\u0414\u0435\u0440\u0435\u0432\u0435\u043D\u0441\u043A\u0430\u044F"],n=["\u0410\u0440\u043E\u043C\u0430\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0435\u0447\u0435\u043D\u043D\u044B\u0439 \u043A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C \u0441 \u0438\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u043C\u0438 \u0442\u0440\u0430\u0432\u0430\u043C\u0438. \u0411\u043E\u043B\u044C\u0448\u0430\u044F \u043F\u043E\u0440\u0446\u0438\u044F","\u0421\u043E\u0447\u043D\u043E\u0435 \u043A\u0443\u0440\u0438\u043D\u043E\u0435 \u0444\u0438\u043B\u0435 \u0432 \u0445\u0440\u0443\u0441\u0442\u044F\u0449\u0435\u0439 \u043F\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0435","\u0417\u0430\u043F\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u043E\u043B\u0430\u0434\u044C\u0438 \u0438\u0437 \u043A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044F \u0432 \u043F\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0435, 8 \u0448\u0442","\u0413\u043E\u0440\u044F\u0447\u0430\u044F \u0437\u0430\u043A\u0443\u0441\u043A\u0430 \u0441 \u0446\u044B\u043F\u043B\u0435\u043D\u043A\u043E\u043C, \u043B\u044E\u0431\u0438\u043C\u044B\u043C \u0441\u043E\u0443\u0441\u043E\u043C \u043F\u0435\u0441\u0442\u043E, \u0442\u043E\u043C\u0430\u0442\u0430\u043C\u0438 \u0438 \u043C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u043E\u0439 \u0432 \u0442\u043E\u043D\u043A\u043E\u0439 \u0437\u0435\u043B\u0435\u043D\u043E\u0439 \u043B\u0435\u043F\u0435\u0448\u043A\u0435","\u0413\u043E\u0440\u044F\u0447\u0430\u044F \u0437\u0430\u043A\u0443\u0441\u043A\u0430 \u0441 \u0446\u044B\u043F\u043B\u0435\u043D\u043A\u043E\u043C, \u043F\u0435\u0440\u0446\u0435\u043C \u0445\u0430\u043B\u0430\u043F\u0435\u043D\u044C\u043E, \u0441\u043E\u043B\u0435\u043D\u044B\u043C\u0438 \u043E\u0433\u0443\u0440\u0447\u0438\u043A\u0430\u043C\u0438, \u0442\u043E\u043C\u0430\u0442\u0430\u043C\u0438","\u041F\u0430\u0440\u043C\u0435\u0437\u0430\u043D \u0431\u0430\u0439\u0442\u0441 \u0441 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0441\u044B\u0440\u0430 \u043C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u0430 \u0438 \u0438\u0441\u043F\u0430\u043D\u0441\u043A\u0438\u0445 \u0442\u0440\u0430\u0432","\u041C\u044F\u0441\u043D\u043E\u0439 \u0441\u043E\u0443\u0441 \u0431\u043E\u043B\u043E\u043D\u044C\u0435\u0437\u0435, \u043C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u0430, \u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u043B\u0443\u043A, \u0441\u043E\u043B\u0435\u043D\u044B\u0435 \u043E\u0433\u0443\u0440\u0447\u0438\u043A\u0438","\u041A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C \u0438\u0437 \u043F\u0435\u0447\u0438, \u0441\u043E\u043B\u0435\u043D\u044B\u0435 \u043E\u0433\u0443\u0440\u0447\u0438\u043A\u0438, \u0446\u044B\u043F\u043B\u0435\u043D\u043E\u043A, \u0441\u043E\u0443\u0441 \u0440\u0430\u043D\u0447, \u0442\u043E\u043C\u0430\u0442\u044B, \u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u043B\u0443\u043A, \u0447\u0435\u0441\u043D\u043E\u043A, \u043C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u0430"],l=["315 \u20BD","475 \u20BD","425 \u20BD","415 \u20BD","225 \u20BD","525 \u20BD","395 \u20BD","585 \u20BD"],r=["images/snacks/item01.png","images/snacks/item02.png","images/snacks/item03.png","images/snacks/item04.png","images/snacks/item05.png","images/snacks/item06.png","images/snacks/item07.png","images/snacks/item08.png"],o=["315","475","425","415","225","525","395","585"];for(let t=0;t<i.length;t++){let e=document.createElement("div");e.className="item snacks__item";const a=`<div class="item snacks__item">
    <img draggable="false"
    src="${r[t]}"
    alt="snacks"
    class="item__image snacks__image"
    />
    <div  class="item__name snacks__name">${i[t]}</div>
    <div  class="item__descr snacks__descr">${n[t]}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise snacks__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
      <div  class="item__costs snacks__costs" data-price="${o[t]}">${l[t]}</div>
    </div>
    </div>`;e.innerText=a,s.insertAdjacentHTML("beforeend",a)}}function K(){const s=document.querySelector(".sushi__item_wrapper");let i=["\u0424\u0438\u043B\u0430\u0434\u0435\u043B\u044C\u0444\u0438\u044F \u043A\u0440\u0430\u043D\u0447","\u0424\u0438\u043B\u0430\u0434\u0435\u043B\u044C\u0444\u0438\u044F \u043A\u0440\u0435\u043C-\u0431\u0440\u044E\u043B\u0435","\u0421\u0443\u043F\u0435\u0440 \u0424\u0438\u043B\u0430\u0434\u0435\u043B\u044C\u0444\u0438\u044F","\u0422\u0438\u0433\u0440 \u043C\u0430\u043C\u0430","\u0422\u0438\u0433\u0440 \u043C\u0430\u043C\u0430","\u0421\u0443\u043F\u0435\u0440 \u0424\u0438\u043B\u0430\u0434\u0435\u043B\u044C\u0444\u0438\u044F","\u0424\u0438\u043B\u0430\u0434\u0435\u043B\u044C\u0444\u0438\u044F \u043A\u0440\u0430\u043D\u0447","\u0424\u0438\u043B\u0430\u0434\u0435\u043B\u044C\u0444\u0438\u044F \u043A\u0440\u0435\u043C-\u0431\u0440\u044E\u043B\u0435"],n=["\u0421\u0435\u043C\u0433\u0430, \u0440\u0438\u0441, \u0441\u044B\u0440 \u043A\u0440\u0435\u043C\u0435\u0442\u0442\u043E, \u0441\u043E\u0443\u0441 \u0443\u043D\u0430\u0433\u0438, \u043A\u0440\u0435\u0432\u0435\u0442\u043A\u0430, \u0430\u0432\u043E\u043A\u0430\u0434\u043E,\u0447\u0438\u043F...","\u0421\u043B\u0438\u0432\u043E\u0447\u043D\u044B\u0439 \u0441\u044B\u0440, \u0441\u0435\u043C\u0433\u0430 \u0442\u0430\u0442\u0430\u043A\u0438 \u0441&nbsp;\u0442\u0440\u043E\u0441\u0442\u043D\u0438\u043A\u043E\u0432\u044B\u043C \u0441\u0430\u0445\u0430\u0440\u043E\u043C,\u0441\u043E\u0443\u0441&nbsp;\u0443...","\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043C\u043D\u043E\u0433\u043E \u0441\u0435\u043C\u0433\u0438, \u0441\u043B\u0438\u0432\u043E\u0447\u043D\u044B\u0439 \u0441\u044B\u0440, \u043E\u0433\u0443\u0440\u0435\u0446, \u0440\u0438\u0441, \u043D...","\u0422\u0438\u0433\u0440\u043E\u0432\u0430\u044F \u043A\u0440\u0435\u0432\u0435\u0442\u043A\u0430, \u043E\u0433\u0443\u0440\u0435\u0446, \u0430\u0432\u043E\u043A\u0430\u0434\u043E, \u0441\u043E\u0443\u0441 \u0410\u0439\u043E\u043B\u0438, \u0440\u0438\u0441, \u0438\u043A...","\u0422\u0438\u0433\u0440\u043E\u0432\u0430\u044F \u043A\u0440\u0435\u0432\u0435\u0442\u043A\u0430, \u043E\u0433\u0443\u0440\u0435\u0446, \u0430\u0432\u043E\u043A\u0430\u0434\u043E, \u0441\u043E\u0443\u0441 \u0410\u0439\u043E\u043B\u0438, \u0440\u0438\u0441, \u0438\u043A...","\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043C\u043D\u043E\u0433\u043E \u0441\u0435\u043C\u0433\u0438, \u0441\u043B\u0438\u0432\u043E\u0447\u043D\u044B\u0439 \u0441\u044B\u0440, \u043E\u0433\u0443\u0440\u0435\u0446, \u0440\u0438\u0441, \u043D...","\u0421\u0435\u043C\u0433\u0430, \u0440\u0438\u0441, \u0441\u044B\u0440 \u043A\u0440\u0435\u043C\u0435\u0442\u0442\u043E, \u0441\u043E\u0443\u0441 \u0443\u043D\u0430\u0433\u0438, \u043A\u0440\u0435\u0432\u0435\u0442\u043A\u0430, \u0430\u0432\u043E\u043A\u0430\u0434\u043E,\u0447\u0438\u043F...","\u0421\u043B\u0438\u0432\u043E\u0447\u043D\u044B\u0439 \u0441\u044B\u0440, \u0441\u0435\u043C\u0433\u0430 \u0442\u0430\u0442\u0430\u043A\u0438 \u0441&nbsp;\u0442\u0440\u043E\u0441\u0442\u043D\u0438\u043A\u043E\u0432\u044B\u043C \u0441\u0430\u0445\u0430\u0440\u043E\u043C,\u0441\u043E\u0443\u0441&nbsp;\u0443..."],l=["475 \u20BD","395 \u20BD","425 \u20BD","525 \u20BD","525 \u20BD","425 \u20BD","475 \u20BD","395 \u20BD"],r=["images/sushi/item01.png","images/sushi/item02.png","images/sushi/item03.png","images/sushi/item04.png","images/sushi/item05.png","images/sushi/item06.png","images/sushi/item07.png","images/sushi/item08.png"],o=["475","395","425","525","525","425","475","395"];for(let t=0;t<i.length;t++){let e=document.createElement("div");e.className="item sushi__item";const a=`
    <div  class="item sushi__item">
    <img draggable="false"
      src="${r[t]}"
      alt="sushi"
      class="item__image sushi__image"
    />
    <div  class="item__name sushi__name">${i[t]}</div>
    <div class="item__descr sushi__descr"
    >${n[t]}</div
    >
    <div class="item__bottom_choise">
    <button class="btnchoise sushi__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
    <div class="item__costs sushi__costs" data-price="${o[t]}">${l[t]}</div>
    </div>
    </div>`;e.innerText=a,s.insertAdjacentHTML("beforeend",a)}}const N=T.timeline();function Q(s){return N.to(s.querySelector(".preloaloder-round"),{scale:2,duration:1})}function X(s){return N.from(s.querySelector(".preloaloder-round"),{scale:2,duration:1})}barba.init({preventRunning:!0,debug:!0,transitions:[{name:"base",async leave(s){await Q(s.current.container),s.current.container.remove()},async enter(s){await X(s.next.container)}}],views:[{namespace:"home",beforeEnter(){if(localStorage.getItem("array")&&(d=JSON.parse(localStorage.getItem("array"))),localStorage.getItem("basket")){const s=JSON.parse(localStorage.getItem("basket"));m=s,p.innerText=`${s} \u20BD`}window.scrollTo(0,0),T.to(".assortment__item",{delay:.4,duration:.8,opacity:1,stagger:.2}),document.querySelector(".pizza__item_wrapper")&&B(),document.querySelector(".sushi__item_wrapper")&&K(),document.querySelector(".snacks__item_wrapper")&&U(),document.querySelector(".desserts__item_wrapper")&&R(),document.querySelector(".drinks__item_wrapper")&&W(),document.querySelector(".sause__item_wraper")&&V(),document.querySelector(".combo__item_wrapper")&&F(),document.querySelector(".indexpage")&&AOS.init()}},{namespace:"addItemCard2",beforeEnter(){let s=document.querySelector(".promocode__costs"),i=document.querySelector(".addItemCard2-delivery-comment-delivery__costs");window.scrollTo(0,0);const n=document.querySelector(".additem"),l=document.querySelector("#startitem"),r=document.querySelector(".basket__sum");function o(){if(localStorage.getItem("basket")&&(m=JSON.parse(localStorage.getItem("basket"))),localStorage.getItem("basket")){if(l.style.display="none",document.querySelector(".wrap__addItemCard2"))for(let _=0;_<u;_++){const x=`
                <div class="addItemCard2__item">
                <div class="addItemCard2__item_wrap">
                  <img
                    class="addItemCard2-item__image"
                    src= ${f[_]} 
                    alt="${b[_]}"
                  />
                  <div class="addItemCard2__text">
                    <div class="addItemCard2-text__title">
                      ${b[_]}
                    </div>
                    <div class="addItemCard2-text__descr"> ${g[_]}</div>
                  </div>
                </div>
                <div class="addItemCard2__item_wrap">
                  <div class="order-item__sum">
                    <button class="order-counter__btn order-counter__increment">
                      <img
                        src="images/order/Plus__icon.svg"
                        alt="icon"
                        class="order-counter-increment__image"
                      />
                    </button>
                    <div class="order-counter__number">1</div>
                    <button class="order-counter__btn order-counter__decrement">
                      <img
                        src="images/order/Minus__icon.svg"
                        alt="icon"
                        class="order-counter-decrement__image"
                      />
                    </button>
                  </div>
                  <div class="order-footer__costs addItemCard2-item__costs" ${"data-price="+y[_]}>${v[_]} \u20BD</div>
                </div>
                <button class="addItemCard2-item__remove">
                  <img src="images/additemCard2/removeCardBtn.png" alt="" class="" />
                </button>
              </div>
                `;n.insertAdjacentHTML("afterend",x)}let c=[...document.querySelectorAll(".addItemCard2-item__costs")].map(_=>_.innerText.replace(/[^+\d]/g,"").trim()).map(_=>Number(_)).reduce(function(_,x){return _+x},0);r.innerText=`${c} \u20BD`,s.innerText=`\u0418\u0442\u043E\u0433\u043E ${c} \u20BD`,i.innerText=`\u0418\u0442\u043E\u0433\u043E ${c} \u20BD`}}o()}},{namespace:"menuDesserts",beforeEnter(){function s(){const i=document.querySelector(".desserts__item_wrapper");let n=["\u0420\u0443\u043B\u0435\u0442\u0438\u043A\u0438 \u0441 \u0431\u0440\u0443\u0441\u043D\u0438\u043A\u043E\u0439","\u0420\u0443\u043B\u0435\u0442\u0438\u043A\u0438 \u0441 \u043A\u043E\u0440\u0438\u0446\u0435\u0439","\u041A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u043B\u0430\u0434\u044C\u0438","\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 \u044D\u0441\u043A\u0438\u043C\u043E '\u041C\u0430\u0433\u043D\u0430\u0442'","\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 \u044D\u0441\u043A\u0438\u043C\u043E '\u041C\u0430\u0433\u043D\u0430\u0442'","\u041D\u0430\u0431\u043E\u0440 \u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 -7\u0448\u0442","\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 '\u041C\u0438\u0448\u043A\u0430 \u043D\u0430 \u043F\u043E\u043B\u044E\u0441\u0435'","\u041A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u043B\u0430\u0434\u044C\u0438"],l=["\u042D\u0442\u043E \u0437\u0430\u0434\u043E\u0440\u043D\u044B\u0435 \u0441\u043B\u0430\u0434\u043A\u0438\u0435 \u0440\u0443\u043B\u0435\u0442\u0438\u043A\u0438, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0437\u0430\u043A\u0440\u0443\u0442\u0438\u043B\u0441\u044F \u043C\u0438\u043A\u0441 \u0438\u0437 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0439...","\u0414\u0435\u0441\u0435\u0440\u0442, \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u043D\u044B\u0439 \u043D\u0430\u0448\u0438\u043C\u0438 \u0431\u0430\u0431\u0443\u0448\u043A\u0430\u043C\u0438. \u0413\u043E\u0440\u044F\u0447\u0438\u0435 \u0441\u043B\u0430\u0434\u043A\u0438\u0435 \u0440\u0443\u043B\u0435\u0442\u0438\u043A\u0438 ....","\u0417\u0430\u043F\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u043E\u043B\u0430\u0434\u044C\u0438 \u0438\u0437 \u043A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044F \u0432 \u043F\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0435, 8 \u0448\u0442","\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 (\u0441\u043B\u0438\u0432\u043A\u0438, \u043C\u043E\u043B\u043E\u043A\u043E \u0446\u0435\u043B\u044C\u043D\u043E\u0435, \u0432\u043E\u0434\u0430 \u043F\u0438\u0442\u044C\u0435\u0432\u0430\u044F, \u0441\u0430\u0445\u0430\u0440, \u043C\u043E\u043B\u043E\u043A\u043E ...","\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 (\u0441\u043B\u0438\u0432\u043A\u0438, \u043C\u043E\u043B\u043E\u043A\u043E \u0446\u0435\u043B\u044C\u043D\u043E\u0435, \u0432\u043E\u0434\u0430 \u043F\u0438\u0442\u044C\u0435\u0432\u0430\u044F, \u0441\u0430\u0445\u0430\u0440, \u043C\u043E\u043B\u043E\u043A\u043E ...","\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 (\u0441\u043B\u0438\u0432\u043A\u0438, \u043C\u043E\u043B\u043E\u043A\u043E \u0446\u0435\u043B\u044C\u043D\u043E\u0435, \u0432\u043E\u0434\u0430 \u043F\u0438\u0442\u044C\u0435\u0432\u0430\u044F, \u0441\u0430\u0445\u0430\u0440, \u043C\u043E\u043B\u043E\u043A\u043E ...","\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 (\u0441\u043B\u0438\u0432\u043A\u0438, \u043C\u043E\u043B\u043E\u043A\u043E \u0446\u0435\u043B\u044C\u043D\u043E\u0435, \u0432\u043E\u0434\u0430 \u043F\u0438\u0442\u044C\u0435\u0432\u0430\u044F, \u0441\u0430\u0445\u0430\u0440, \u043C\u043E\u043B\u043E\u043A\u043E ...","\u0417\u0430\u043F\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u043E\u043B\u0430\u0434\u044C\u0438 \u0438\u0437 \u043A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044F \u0432 \u043F\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0435, 8 \u0448\u0442"],r=["175 \u20BD","125 \u20BD","95 \u20BD","75 \u20BD","115 \u20BD","225 \u20BD","110 \u20BD","100 \u20BD"],o=["images/desserts/item01.png","images/desserts/item02.png","images/desserts/item03.png","images/desserts/item04.png","images/desserts/item05.png","images/desserts/item06.png","images/desserts/item07.png","images/desserts/item08.png"],t=["175","125","95","75","115","225","110","100"];for(let e=0;e<n.length;e++){let a=document.createElement("div");a.className="desserts__item";const c=`
    <div class="item desserts__item">
    <img draggable="false"
      src="${o[e]}"
      alt="desserts"
      class="item__image desserts__image"
    />
    <div class="item__name desserts__name"
    >${n[e]}</div
    >
    <div class="item__descr desserts__descr"
    >${l[e]}</div
    >
    <div class="item__bottom_choise">
    <button  class="btnchoise desserts__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
    <div class="item__costs desserts__costst" data-price="${t[e]}">${r[e]}</div>
    </div>
    </div>`;a.innerText=c,i.insertAdjacentHTML("beforeend",c)}}s()}},{namespace:"menuCombo",beforeEnter(){function s(){const i=document.querySelector(".combo__item_wrapper");let n=["Combo pizza","Combo triple pizza","Double pizza and free drink","Three dodster + one free","Combo triple pizza","Combo double pizza'","4 dodster combo","Two pizza and your drink"],l=["2 \u043F\u0438\u0446\u0446\u044B   25 \u0441\u043C  \u043D\u0430 \u0432\u044B\u0431\u043E\u0440. \u0414\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u0437 2\u20134 \u0447\u0435\u043B\u043E\u0432\u0435\u043A","3 \u043F\u0438\u0446\u0446\u044B 30 \u0441\u043C \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441. \u0414\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u0437 5\u201310 \u0447\u0435\u043B\u043E\u0432\u0435\u043A","2 \u043F\u0438\u0446\u0446\u044B \u0438 \u043D\u0430\u043F\u0438\u0442\u043E\u043A 2 \u043F\u0438\u0446\u0446\u044B 25 \u0441\u043C \u0438 \u043D\u0430\u043F\u0438\u0442\u043E\u043A \u043D\u0430 \u0432\u044B\u0431\u043E\u0440. \u0414\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u0437 2\u20134 \u0447\u0435\u043B\u043E\u0432\u0435\u043A","\u041B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u0430\u044F \u0433\u043E\u0440\u044F\u0447\u0430\u044F \u0437\u0430\u043A\u0443\u0441\u043A\u0430 \u0441 \u0446\u044B\u043F\u043B\u0451\u043D\u043A\u043E\u043C, \u0442\u043E\u043C\u0430\u0442\u0430\u043C\u0438, \u043C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u043E\u0439, \u0441\u043E\u0443\u0441\u043E\u043C \u0440\u0430\u043D\u0447 \u0432 \u0442\u043E\u043D\u043A\u043E\u0439 \u043F\u0448\u0435\u043D\u0438\u0447\u043D\u043E\u0439 \u043B\u0435\u043F\u0435\u0448\u043A\u0435","3 \u043F\u0438\u0446\u0446\u044B 30 \u0441\u043C \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441. \u0414\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u0437 5\u201310 \u0447\u0435\u043B\u043E\u0432\u0435\u043A","2 \u043F\u0438\u0446\u0446\u044B   25 \u0441\u043C  \u043D\u0430 \u0432\u044B\u0431\u043E\u0440. \u0414\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u0437 2\u20134 \u0447\u0435\u043B\u043E\u0432\u0435\u043A","\u041B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u0430\u044F \u0433\u043E\u0440\u044F\u0447\u0430\u044F \u0437\u0430\u043A\u0443\u0441\u043A\u0430 \u0441 \u0446\u044B\u043F\u043B\u0451\u043D\u043A\u043E\u043C, \u0442\u043E\u043C\u0430\u0442\u0430\u043C\u0438, \u043C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u043E\u0439, \u0441\u043E\u0443\u0441\u043E\u043C \u0440\u0430\u043D\u0447 \u0432 \u0442\u043E\u043D\u043A\u043E\u0439 \u043F\u0448\u0435\u043D\u0438\u0447\u043D\u043E\u0439 \u043B\u0435\u043F\u0435\u0448\u043A\u0435","2 \u043F\u0438\u0446\u0446\u044B \u0438 \u043D\u0430\u043F\u0438\u0442\u043E\u043A 2 \u043F\u0438\u0446\u0446\u044B 25 \u0441\u043C \u0438 \u043D\u0430\u043F\u0438\u0442\u043E\u043A \u043D\u0430 \u0432\u044B\u0431\u043E\u0440. \u0414\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u0437 2\u20134 \u0447\u0435\u043B\u043E\u0432\u0435\u043A"],r=["215 \u20BD","475 \u20BD","325 \u20BD","445 \u20BD","725 \u20BD","355 \u20BD","365 \u20BD","425 \u20BD"],o=["images/combo/item01.png","images/combo/item02.png","images/combo/item03.png","images/combo/item04.png","images/combo/item05.png","images/combo/item06.png","images/combo/item07.png","images/combo/item08.png"],t=["\u0434\u043E 22%","\u0434\u043E 18%","\u0434\u043E 10%","\u0434\u043E 15%","\u0434\u043E 18%","\u0434\u043E 22%","\u0434\u043E 15%","\u0434\u043E 10%"],e=["215","475","325","445","725","355","365","425"];for(let a=0;a<n.length;a++){let c=document.createElement("div");c.className="item combo__item";const _=`<div class="item combo__item">
    <div class="item__sale item-sale__combo">${t[a]}</div>
    <img draggable="false"
    src="${o[a]}"
    alt="combo"
    class="item__image combo__image"/>
    <div class="item__name combo__name">${n[a]}</div>
    <div class="item__descr combo__descr">${l[a]}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise combo__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
    <div class="item__costs combo__costs" data-price=">${e[a]}">${r[a]}</div>
    </div>
    </div>`;c.innerText=_,i.insertAdjacentHTML("beforeend",_)}}s()}},{namespace:"menuDrink",beforeEnter(){function s(){const i=document.querySelector(".drinks__item_wrapper");let n=["Adrenaline Game","Pepsi dark","Pepsi light","Pepsi cherry","Pepsi classic","Mirinda","Adrenaline Game fuel","Pepsi dark light"],l=["\u041D\u0430\u043F\u0438\u0442\u043E\u043A \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0439, \u0442\u043E\u043D\u0438\u0437\u0438\u0440\u0443\u044E\u0449\u0438\u0439, \u0433\u0430\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439. \u0410\u0440\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439....","\u0422\u043E\u0440\u0433\u043E\u0432\u0430\u044F \u043C\u0430\u0440\u043A\u0430, \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0430\u044F \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 PepsiCo, \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0439....","\u0411\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0439 \u0433\u0430\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043D\u0430\u043F\u0438\u0442\u043E\u043A, \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u043C\u044B\u0439 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0435\u0439 PepsiCo....","\u0422\u043E\u0440\u0433\u043E\u0432\u0430\u044F \u043C\u0430\u0440\u043A\u0430, \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0430\u044F \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 PepsiCo, \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0439....","\u0411\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0439 \u0433\u0430\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043D\u0430\u043F\u0438\u0442\u043E\u043A, \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u043C\u044B\u0439 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0435\u0439 PepsiCo....","\u0422\u043E\u0440\u0433\u043E\u0432\u0430\u044F \u043C\u0430\u0440\u043A\u0430, \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0430\u044F \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 PepsiCo, \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0439.....","\u041D\u0430\u043F\u0438\u0442\u043E\u043A \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0439, \u0442\u043E\u043D\u0438\u0437\u0438\u0440\u0443\u044E\u0449\u0438\u0439, \u0433\u0430\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439. \u0410\u0440\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439....","\u0422\u043E\u0440\u0433\u043E\u0432\u0430\u044F \u043C\u0430\u0440\u043A\u0430, \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0430\u044F \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 PepsiCo, \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0439...."],r=["475 \u20BD","395 \u20BD","425 \u20BD","525 \u20BD","425 \u20BD","525 \u20BD","425 \u20BD","525 \u20BD"],o=["images/drinks/item07.png","images/drinks/item02.png","images/drinks/item03.png","images/drinks/item04.png","images/drinks/item05.png","images/drinks/item06.png","images/drinks/item07.png","images/drinks/item08.png"],t=["475","395","425","525","425","525","425","525"];for(let e=0;e<n.length;e++){let a=document.createElement("div");a.className="drinks__item";const c=`
    <div class="item drinks__item">
    <img draggable="false"
      src="${o[e]}"
      alt="drink"
      class="item__image drinks__image"
    />
    <div  class="item__name drinks__name">${n[e]}</div>
    <div  class="item__descr drinks__descr"
    >${l[e]}</div
    >
    <div class="item__bottom_choise">
    <button class="btnchoise drinks__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
    <div class="item__costs drinks__costst" data-price="${t[e]}">${r[e]}</div>
    </div>
    </div>`;a.innerText=c,i.insertAdjacentHTML("beforeend",c)}}s()}},{namespace:"menuPizza",beforeEnter(){function s(){const i=document.querySelector(".pizza__item_wrapper");let n=["\u0427\u0438\u043A\u0435\u043D \u0421\u043B\u0430\u0434\u043A\u0438\u0439 \u0427\u0438\u043B\u0438","EASY PEASY \u043E\u0433\u0443\u0440\u0435\u0447\u043D\u044B\u0439 \u0440\u0430\u0441\u043A\u043E\u043B\u0431\u0430\u0441","EASY PEASY \u0447\u0438\u043A\u0435\u043D \u0430-\u043B\u044F \u0445\u0440\u0435\u043D","EASY PEASY 4&nbsp;\u0441\u0435\u0437\u043E\u043D\u0430","EASY PEASY 4&nbsp;\u0441\u0435\u0437\u043E\u043D\u0430","EASY PEASY \u0447\u0438\u043A\u0435\u043D \u0430-\u043B\u044F \u0445\u0440\u0435\u043D","EASY PEASY \u0421\u043B\u0430\u0434\u043A\u0438\u0439 \u0427\u0438\u043B\u0438","EASY PEASY \u043E\u0433\u0443\u0440\u0435\u0447\u043D\u044B\u0439 \u0440\u0430\u0441\u043A\u043E\u043B\u0431\u0430\u0441"],l=["\u041A\u0443\u0440\u0438\u0446\u0430, \u041B\u0443\u043A, \u041F\u0435\u0440\u0435\u0446 \u0425\u0430\u043B\u0430\u043F\u0435\u043D\u044C\u043E, \u0421\u044B\u0440 \u041C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u0430, \u0422\u043E\u043C\u0430\u0442\u043D\u044B\u0439 \u0441\u043E\u0443...","\u041A\u0443\u0440\u0438\u0446\u0430, \u041B\u0443\u043A, \u041F\u0435\u0440\u0435\u0446 \u0425\u0430\u043B\u0430\u043F\u0435\u043D\u044C\u043E..","\u041A\u0443\u0440\u0438\u0446\u0430, \u041B\u0443\u043A, \u0421\u043E\u0443\u0441 \u041A\u0430\u0440\u0431\u043E\u043D\u0430\u0440\u0430...","\u0411\u0435\u043A\u043E\u043D, \u0412\u0435\u0442\u0447\u0438\u043D\u0430, \u0413\u0440\u0438\u0431\u044B, \u041A\u0443\u0440\u0438\u0446\u0430, \u041B\u0443\u043A, \u041C\u0430\u0441\u043B\u0438\u043D\u044B, \u041E\u0433\u0443\u0440\u0446\u044B \u043C\u0430\u0440\u0438...","\u0411\u0435\u043A\u043E\u043D, \u0412\u0435\u0442\u0447\u0438\u043D\u0430, \u0413\u0440\u0438\u0431\u044B, \u041A\u0443\u0440\u0438\u0446\u0430, \u041B\u0443\u043A, \u041C\u0430\u0441\u043B\u0438\u043D\u044B, \u041E\u0433\u0443\u0440\u0446\u044B \u043C\u0430\u0440\u0438...","\u041A\u0443\u0440\u0438\u0446\u0430, \u041B\u0443\u043A, \u0421\u043E\u0443\u0441 \u041A\u0430\u0440\u0431\u043E\u043D\u0430\u0440\u0430...","\u041A\u0443\u0440\u0438\u0446\u0430, \u041B\u0443\u043A, \u041F\u0435\u0440\u0435\u0446 \u0425\u0430\u043B\u0430\u043F\u0435\u043D\u044C\u043E, \u0421\u044B\u0440 \u041C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u0430, \u0422\u043E\u043C\u0430\u0442\u043D\u044B\u0439 \u0441\u043E\u0443...","\u041A\u0443\u0440\u0438\u0446\u0430, \u041B\u0443\u043A, \u041F\u0435\u0440\u0435\u0446 \u0425\u0430\u043B\u0430\u043F\u0435\u043D\u044C\u043E..."],r=["\u043E\u0442 399 \u20BD","\u043E\u0442 549 \u20BD","\u043E\u0442 249 \u20BD","\u043E\u0442 630 \u20BD","\u043E\u0442 630 \u20BD","\u043E\u0442 249 \u20BD","\u043E\u0442 399 \u20BD","\u043E\u0442 549 \u20BD"],o=["images/pizza/pizza01.png","images/pizza/pizza02.png","images/pizza/pizza03.png","images/pizza/pizza04.png","images/pizza/pizza05.png","images/pizza/pizza06.png","images/pizza/pizza07.png","images/pizza/pizza08.png"],t=["399","549","249","630","630","249","399","549"];for(let e=0;e<n.length;e++){let a=document.createElement("div");a.className="item pizza__item";const c=`
    <div class="item pizza__item">
    <img draggable="false"
    src="${o[e]}"
    alt="pizza"
    class="item__image pizza__image"
    />
    <div  class="item__name pizza__name"
    >${n[e]}</div>
    <div class="item__descr pizza__descr"
    >${l[e]}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise pizza__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
    <div class="item__costs pizza__costs" data-price="${t[e]}">${r[e]}</div>
    </div>
    </div>`;a.innerText=c,i.insertAdjacentHTML("beforeend",c)}}s()}},{namespace:"menuSause",beforeEnter(){function s(){const i=document.querySelector(".sause__item_wraper");let n=["\u0421\u043E\u0443\u0441 \u0433\u043E\u0440\u0447\u0438\u0447\u043D\u044B\u0439","\u0421\u043E\u0443\u0441 \u0431\u0430\u0440\u0431\u0435\u043A\u044E","\u0421\u043E\u0443\u0441 \u0441\u043C\u0435\u0442\u0430\u043D\u043D\u044B\u0439","\u0421\u043E\u0443\u0441 \u0442\u044B\u0441\u044F\u0447\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u043E\u0432","\u0421\u043E\u0443\u0441 \u043A\u0438\u0441\u043B\u043E-\u0441\u043B\u0430\u0434\u043A\u0438\u0439","\u0421\u043E\u0443\u0441 \u0422\u0435\u0440\u0438\u044F\u043A\u0438","\u0421\u043E\u0443\u0441 \u0441\u043C\u0435\u0442\u0430\u043D\u043D\u044B\u0439","\u0421\u043E\u0443\u0441 \u0433\u043E\u0440\u0447\u0438\u0447\u043D\u044B\u0439"],l=["\u041C\u0430\u0441\u043B\u043E \u0440\u0430\u0441\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435, \u0432\u043E\u0434\u0430, \u0433\u043E\u0440\u0447\u0438\u0446\u0430, \u0441\u0430\u0445\u0430\u0440, \u0436\u0435\u043B\u0442\u043E\u043A \u044F\u0438\u0447\u043D\u044B\u0439, \u0441\u043E\u043B\u044C, \u0443\u043A\u0441\u0443\u0441 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0439, \u0441\u0435\u043C\u0435\u043D\u0430 \u0433\u043E\u0440\u0447\u0438\u0446\u044B","\u0421\u043E\u0443\u0441 \u0441\u043B\u0443\u0436\u0438\u0442 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0430\u043D\u0442\u0438\u0434\u0435\u043F\u0440\u0435\u0441\u0441\u0430\u043D\u0442\u043E\u043C \u0438 \u0430\u043D\u0442\u0438\u043E\u043A\u0441\u0438\u0434\u0430\u043D\u0442\u043E\u043C, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0441\u0447\u0435\u0442 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u0432 \u043D\u0435\u043C \u0442\u043E\u043C\u0430\u0442\u043E\u0432.","\u0421\u043B\u0438\u0432\u043A\u0438 \u043D\u043E\u0440\u043C\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435, \u0437\u0430\u043A\u0432\u0430\u0441\u043A\u0430 \u043C\u043E\u043B\u043E\u0447\u043D\u043E\u043A\u0438\u0441\u043B\u044B\u0445 \u043C\u0438\u043A\u0440\u043E\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043C\u043E\u0432","\u0421\u043E\u0443\u0441 \u0422\u044B\u0441\u044F\u0447\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u043E\u0432 \u043E\u0447\u0435\u043D\u044C \u0445\u043E\u0440\u043E\u0448\u043E \u0441\u043E\u0447\u0435\u0442\u0430\u0435\u0442\u0441\u044F \u0441 \u0431\u043B\u044E\u0434\u0430\u043C\u0438 \u0438\u0437 \u043F\u0442\u0438\u0446\u044B \u0438 \u043C\u044F\u0441\u0430","\u0421\u043E\u0443\u0441 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u0441\u043E\u0438, \u043F\u0448\u0435\u043D\u0438\u0446\u044B, \u0441\u043E\u043B\u0438 \u0438 \u0432\u043E\u0434\u044B. \u0421\u043E\u0443\u0441 \u043E\u0447\u0435\u043D\u044C \u0442\u0435\u043C\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430 \u0441 \u0440\u0435\u0437\u043A\u0438\u043C \u0437\u0430\u043F\u0430\u0445\u043E\u043C","\u0421\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0435 \u043C\u0438\u0440\u0438\u043D - \u0441\u043B\u0430\u0434\u043A\u043E\u0435 \u0440\u0438\u0441\u043E\u0432\u043E\u0435 \u0432\u0438\u043D\u043E, \u0441\u0430\u043A\u044D, \u043C\u0435\u0434 \u0438\u043B\u0438 \u0441\u0430\u0445\u0430\u0440, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u044B\u0431\u043D\u044B\u0439 \u0441\u043E\u0443\u0441, \u0447\u0435\u0441\u043D\u043E\u043A, \u0438\u043C\u0431\u0438\u0440\u044C","\u0421\u043B\u0438\u0432\u043A\u0438 \u043D\u043E\u0440\u043C\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435, \u0437\u0430\u043A\u0432\u0430\u0441\u043A\u0430 \u043C\u043E\u043B\u043E\u0447\u043D\u043E\u043A\u0438\u0441\u043B\u044B\u0445 \u043C\u0438\u043A\u0440\u043E\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043C\u043E\u0432","\u0421\u043E\u0443\u0441 \u0441\u043B\u0443\u0436\u0438\u0442 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0430\u043D\u0442\u0438\u0434\u0435\u043F\u0440\u0435\u0441\u0441\u0430\u043D\u0442\u043E\u043C \u0438 \u0430\u043D\u0442\u0438\u043E\u043A\u0441\u0438\u0434\u0430\u043D\u0442\u043E\u043C, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0441\u0447\u0435\u0442 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u0432 \u043D\u0435\u043C \u0442\u043E\u043C\u0430\u0442\u043E\u0432."],r=["475 \u20BD","395 \u20BD","425 \u20BD","395 \u20BD","525 \u20BD","525 \u20BD","425 \u20BD","475 \u20BD"],o=["images/sause/item01.png","images/sause/item02.png","images/sause/item03.png","images/sause/item04.png","images/sause/item05.png","images/sause/item06.png","images/sause/item07.png","images/sause/item08.png"],t=["475","395","425","395","525","525","425","475"];for(let e=0;e<n.length;e++)if(e<1){let a=document.createElement("div");a.className="item sauce__item";const c=`<div class="item sauce__item">
    <div class="item__promo sause-item__promo">NEW</div>
    <img draggable="false"
    src="${o[e]}"
    alt="sause"
    class="item__image sauce__image"
    />
    <div class="item__name sauce__name">${n[e]}</div>
    <div class="item__descr desserts__descr">${l[e]}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise sause__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
    <div class="item__costs sauce__costst" data-price="${t[e]}">${r[e]}</div>
    </div>
    </div>`;a.innerText=c,i.insertAdjacentHTML("beforeend",c)}else if(e<2){let a=document.createElement("div");a.className="item sauce__item";const c=`<div class="item sauce__item">
    <div class="item__promo sause-item__promo">\u0425\u0418\u0422</div>
    <img draggable="false"
    src="${o[e]}"
    alt="sause"
    class="item__image sauce__image"
    />
    <div class="item__name sauce__name">${n[e]}</div>
    <div class="item__descr desserts__descr">${l[e]}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise sause__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
    <div class="item__costs sauce__costst" data-price="${t[e]}">${r[e]}</div>
    </div>
    </div>`;a.innerText=c,i.insertAdjacentHTML("beforeend",c)}else{let a=document.createElement("div");a.className="item sauce__item";const c=`<div class="item sauce__item">
    <img draggable="false"
    src="${o[e]}"
    alt="sause"
    class="item__image sauce__image"
    />
    <div class="item__name sauce__name">${n[e]}</div>
    <div class="item__descr desserts__descr">${l[e]}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise sause__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
    <div class="item__costs sauce__costst" data-price="${t[e]}">${r[e]}</div>
    </div>
    </div>`;a.innerText=c,i.insertAdjacentHTML("beforeend",c)}}s()}},{namespace:"menuSnacks",beforeEnter(){function s(){const i=document.querySelector(".snacks__item_wrapper");let n=["\u041A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C \u0424\u0440\u0438","\u041C\u044F\u0441\u043D\u043E\u0439 \u0421\u0442\u0430\u0440\u0442\u0435\u0440","\u041E\u043B\u0430\u0434\u044C\u044F \u0438\u0437 \u043A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044F","\u0414\u043E\u0434\u0441\u0442\u0435\u0440 '\u041F\u0435\u0441\u0442\u043E'","\u041E\u0441\u0442\u0440\u044B\u0439 \u0414\u043E\u0434\u0441\u0442\u0435\u0440","\u041F\u0430\u0440\u043C\u0435\u0437\u0430\u043D \u0431\u0430\u0439\u0442\u0441","\u0427\u0438\u0437\u0431\u0443\u0440\u0433\u0435\u0440-\u043F\u0438\u0446\u0446\u0430","\u0414\u0435\u0440\u0435\u0432\u0435\u043D\u0441\u043A\u0430\u044F"],l=["\u0410\u0440\u043E\u043C\u0430\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0435\u0447\u0435\u043D\u043D\u044B\u0439 \u043A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C \u0441 \u0438\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u043C\u0438 \u0442\u0440\u0430\u0432\u0430\u043C\u0438. \u0411\u043E\u043B\u044C\u0448\u0430\u044F \u043F\u043E\u0440\u0446\u0438\u044F","\u0421\u043E\u0447\u043D\u043E\u0435 \u043A\u0443\u0440\u0438\u043D\u043E\u0435 \u0444\u0438\u043B\u0435 \u0432 \u0445\u0440\u0443\u0441\u0442\u044F\u0449\u0435\u0439 \u043F\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0435","\u0417\u0430\u043F\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u043E\u043B\u0430\u0434\u044C\u0438 \u0438\u0437 \u043A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044F \u0432 \u043F\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0435, 8 \u0448\u0442","\u0413\u043E\u0440\u044F\u0447\u0430\u044F \u0437\u0430\u043A\u0443\u0441\u043A\u0430 \u0441 \u0446\u044B\u043F\u043B\u0435\u043D\u043A\u043E\u043C, \u043B\u044E\u0431\u0438\u043C\u044B\u043C \u0441\u043E\u0443\u0441\u043E\u043C \u043F\u0435\u0441\u0442\u043E, \u0442\u043E\u043C\u0430\u0442\u0430\u043C\u0438 \u0438 \u043C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u043E\u0439 \u0432 \u0442\u043E\u043D\u043A\u043E\u0439 \u0437\u0435\u043B\u0435\u043D\u043E\u0439 \u043B\u0435\u043F\u0435\u0448\u043A\u0435","\u0413\u043E\u0440\u044F\u0447\u0430\u044F \u0437\u0430\u043A\u0443\u0441\u043A\u0430 \u0441 \u0446\u044B\u043F\u043B\u0435\u043D\u043A\u043E\u043C, \u043F\u0435\u0440\u0446\u0435\u043C \u0445\u0430\u043B\u0430\u043F\u0435\u043D\u044C\u043E, \u0441\u043E\u043B\u0435\u043D\u044B\u043C\u0438 \u043E\u0433\u0443\u0440\u0447\u0438\u043A\u0430\u043C\u0438, \u0442\u043E\u043C\u0430\u0442\u0430\u043C\u0438","\u041F\u0430\u0440\u043C\u0435\u0437\u0430\u043D \u0431\u0430\u0439\u0442\u0441 \u0441 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0441\u044B\u0440\u0430 \u043C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u0430 \u0438 \u0438\u0441\u043F\u0430\u043D\u0441\u043A\u0438\u0445 \u0442\u0440\u0430\u0432","\u041C\u044F\u0441\u043D\u043E\u0439 \u0441\u043E\u0443\u0441 \u0431\u043E\u043B\u043E\u043D\u044C\u0435\u0437\u0435, \u043C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u0430, \u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u043B\u0443\u043A, \u0441\u043E\u043B\u0435\u043D\u044B\u0435 \u043E\u0433\u0443\u0440\u0447\u0438\u043A\u0438","\u041A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C \u0438\u0437 \u043F\u0435\u0447\u0438, \u0441\u043E\u043B\u0435\u043D\u044B\u0435 \u043E\u0433\u0443\u0440\u0447\u0438\u043A\u0438, \u0446\u044B\u043F\u043B\u0435\u043D\u043E\u043A, \u0441\u043E\u0443\u0441 \u0440\u0430\u043D\u0447, \u0442\u043E\u043C\u0430\u0442\u044B, \u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u043B\u0443\u043A, \u0447\u0435\u0441\u043D\u043E\u043A, \u043C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u0430"],r=["315 \u20BD","475 \u20BD","425 \u20BD","415 \u20BD","225 \u20BD","525 \u20BD","395 \u20BD","585 \u20BD"],o=["images/snacks/item01.png","images/snacks/item02.png","images/snacks/item03.png","images/snacks/item04.png","images/snacks/item05.png","images/snacks/item06.png","images/snacks/item07.png","images/snacks/item08.png"],t=["315","475","425","415","225","525","395","585"];for(let e=0;e<n.length;e++){let a=document.createElement("div");a.className="item snacks__item";const c=`<div class="item snacks__item">
    <img draggable="false"
    src="${o[e]}"
    alt="snacks"
    class="item__image snacks__image"
    />
    <div  class="item__name snacks__name">${n[e]}</div>
    <div  class="item__descr snacks__descr">${l[e]}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise snacks__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
      <div  class="item__costs snacks__costs" data-price="${t[e]}">${r[e]}</div>
    </div>
    </div>`;a.innerText=c,i.insertAdjacentHTML("beforeend",c)}}s()}},{namespace:"menuSushi",beforeEnter(){function s(){const i=document.querySelector(".sushi__item_wrapper");let n=["\u0424\u0438\u043B\u0430\u0434\u0435\u043B\u044C\u0444\u0438\u044F \u043A\u0440\u0430\u043D\u0447","\u0424\u0438\u043B\u0430\u0434\u0435\u043B\u044C\u0444\u0438\u044F \u043A\u0440\u0435\u043C-\u0431\u0440\u044E\u043B\u0435","\u0421\u0443\u043F\u0435\u0440 \u0424\u0438\u043B\u0430\u0434\u0435\u043B\u044C\u0444\u0438\u044F","\u0422\u0438\u0433\u0440 \u043C\u0430\u043C\u0430","\u0422\u0438\u0433\u0440 \u043C\u0430\u043C\u0430","\u0421\u0443\u043F\u0435\u0440 \u0424\u0438\u043B\u0430\u0434\u0435\u043B\u044C\u0444\u0438\u044F","\u0424\u0438\u043B\u0430\u0434\u0435\u043B\u044C\u0444\u0438\u044F \u043A\u0440\u0430\u043D\u0447","\u0424\u0438\u043B\u0430\u0434\u0435\u043B\u044C\u0444\u0438\u044F \u043A\u0440\u0435\u043C-\u0431\u0440\u044E\u043B\u0435"],l=["\u0421\u0435\u043C\u0433\u0430, \u0440\u0438\u0441, \u0441\u044B\u0440 \u043A\u0440\u0435\u043C\u0435\u0442\u0442\u043E, \u0441\u043E\u0443\u0441 \u0443\u043D\u0430\u0433\u0438, \u043A\u0440\u0435\u0432\u0435\u0442\u043A\u0430, \u0430\u0432\u043E\u043A\u0430\u0434\u043E,\u0447\u0438\u043F...","\u0421\u043B\u0438\u0432\u043E\u0447\u043D\u044B\u0439 \u0441\u044B\u0440, \u0441\u0435\u043C\u0433\u0430 \u0442\u0430\u0442\u0430\u043A\u0438 \u0441&nbsp;\u0442\u0440\u043E\u0441\u0442\u043D\u0438\u043A\u043E\u0432\u044B\u043C \u0441\u0430\u0445\u0430\u0440\u043E\u043C,\u0441\u043E\u0443\u0441&nbsp;\u0443...","\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043C\u043D\u043E\u0433\u043E \u0441\u0435\u043C\u0433\u0438, \u0441\u043B\u0438\u0432\u043E\u0447\u043D\u044B\u0439 \u0441\u044B\u0440, \u043E\u0433\u0443\u0440\u0435\u0446, \u0440\u0438\u0441, \u043D...","\u0422\u0438\u0433\u0440\u043E\u0432\u0430\u044F \u043A\u0440\u0435\u0432\u0435\u0442\u043A\u0430, \u043E\u0433\u0443\u0440\u0435\u0446, \u0430\u0432\u043E\u043A\u0430\u0434\u043E, \u0441\u043E\u0443\u0441 \u0410\u0439\u043E\u043B\u0438, \u0440\u0438\u0441, \u0438\u043A...","\u0422\u0438\u0433\u0440\u043E\u0432\u0430\u044F \u043A\u0440\u0435\u0432\u0435\u0442\u043A\u0430, \u043E\u0433\u0443\u0440\u0435\u0446, \u0430\u0432\u043E\u043A\u0430\u0434\u043E, \u0441\u043E\u0443\u0441 \u0410\u0439\u043E\u043B\u0438, \u0440\u0438\u0441, \u0438\u043A...","\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043C\u043D\u043E\u0433\u043E \u0441\u0435\u043C\u0433\u0438, \u0441\u043B\u0438\u0432\u043E\u0447\u043D\u044B\u0439 \u0441\u044B\u0440, \u043E\u0433\u0443\u0440\u0435\u0446, \u0440\u0438\u0441, \u043D...","\u0421\u0435\u043C\u0433\u0430, \u0440\u0438\u0441, \u0441\u044B\u0440 \u043A\u0440\u0435\u043C\u0435\u0442\u0442\u043E, \u0441\u043E\u0443\u0441 \u0443\u043D\u0430\u0433\u0438, \u043A\u0440\u0435\u0432\u0435\u0442\u043A\u0430, \u0430\u0432\u043E\u043A\u0430\u0434\u043E,\u0447\u0438\u043F...","\u0421\u043B\u0438\u0432\u043E\u0447\u043D\u044B\u0439 \u0441\u044B\u0440, \u0441\u0435\u043C\u0433\u0430 \u0442\u0430\u0442\u0430\u043A\u0438 \u0441&nbsp;\u0442\u0440\u043E\u0441\u0442\u043D\u0438\u043A\u043E\u0432\u044B\u043C \u0441\u0430\u0445\u0430\u0440\u043E\u043C,\u0441\u043E\u0443\u0441&nbsp;\u0443..."],r=["475 \u20BD","395 \u20BD","425 \u20BD","525 \u20BD","525 \u20BD","425 \u20BD","475 \u20BD","395 \u20BD"],o=["images/sushi/item01.png","images/sushi/item02.png","images/sushi/item03.png","images/sushi/item04.png","images/sushi/item05.png","images/sushi/item06.png","images/sushi/item07.png","images/sushi/item08.png"],t=["475","395","425","525","525","425","475","395"];for(let e=0;e<n.length;e++){let a=document.createElement("div");a.className="item sushi__item";const c=`
    <div  class="item sushi__item">
    <img draggable="false"
      src="${o[e]}"
      alt="sushi"
      class="item__image sushi__image"
    />
    <div  class="item__name sushi__name">${n[e]}</div>
    <div class="item__descr sushi__descr"
    >${l[e]}</div
    >
    <div class="item__bottom_choise">
    <button class="btnchoise sushi__button">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>
    <div class="item__costs sushi__costs" data-price="${t[e]}">${r[e]}</div>
    </div>
    </div>`;a.innerText=c,i.insertAdjacentHTML("beforeend",c)}}s()}},{namespace:"menuPromotison",beforeEnter(){AOS.init()}}]});barba.hooks.enter(()=>{localStorage.getItem("basket")&&(m=JSON.parse(localStorage.getItem("basket")),p.innerText=`${m} \u20BD`)});
