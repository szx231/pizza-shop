import '../styles/style.css';
import './includes/test';
import renderPopup from './includes/PopUPLogin';

//lib 
import datepicker from 'js-datepicker';
import 'animate.css';
import { gsap } from "gsap";
const b = document.querySelector('.promocode__btn');


//add sum on basket
const btnchoise = document.querySelectorAll('.btnchoise');
const basketSum = document.querySelector('.basket__sum');


let data = [];
let basketSumValue = 0;
let imgSrc;
let title;
let descr;
let price;


let resultName = [];
let resultDescr = [];
let resultImg = [];
let resultPrice = [];
document.addEventListener("DOMContentLoaded", ready);

function ready() {
const additem = document.querySelector('.additem');
const startitem = document.querySelector('#startitem');
if (localStorage.getItem("basket")) {
  startitem.style.display = 'none';
  const basket = JSON.parse(localStorage.getItem("basket"));
  basketSumValue = basket;
  basketSum.innerText = `${basket} ₽`;
  const data = JSON.parse(localStorage.getItem("array"));
  for (let i = 0; i < data.length; i += 4) {
    resultName.push((data[i + 1]));
    resultDescr.push((data[i + 2]));
    resultImg.push((data[i + 0]));
    resultPrice.push((data[i + 3]));
    console.log((data[i + 3]));
}
    for (let i = 0; i < data.length/4; i++) {
    const addItemText = `<div class="addItemCard2__item">
        <div class="addItemCard2__item_wrap">
          <img
            class="addItemCard2-item__image"
            src=${(resultImg[i])}
            alt="pizza"
          />
          <div class="addItemCard2__text">
            <div class="addItemCard2-text__title">
              ${(resultName[i])}
            </div>
            <div class="addItemCard2-text__descr">${(resultDescr[i])}</div>
          </div>
        </div>
        <div class="addItemCard2__item_wrap">
          <div class="order-item__sum">
            <button class="order-counter__btn order-counter__plus">
              <img
                src="images/order/Plus__icon.svg"
                alt="icon"
                class="order-counter-plus__image"
              />
            </button>
            <div class="order-counter__number">1</div>
            <button class="order-counter__btn order-counter__minus">
              <img
                src="images/order/Minus__icon.svg"
                alt="icon"
                class="order-counter-minus__image"
              />
            </button>
          </div>
          <div class="order-footer__costs addItemCard2-item__costs">${(resultPrice[i])}</div>
        </div>
    </div>`;
    additem.insertAdjacentHTML('beforeend', addItemText)
}
}
const orderitemsum = document.querySelector('.order-item__sum');

//count 
const orderCounterPlus = document.querySelectorAll('.order-counter__plus');
const orderCounterMinus = document.querySelectorAll('.order-counter__minus');
const orderCounterNumber = document.querySelector('.order-counter__number');


orderCounterPlus.forEach(orderCounterPlus => {
  let amountItem = 1;
  orderCounterPlus.addEventListener('click', () => {
    amountItem += 1;
    orderCounterPlus.parentNode.childNodes[3].innerText = String(amountItem);
    
    let priceSumm = orderCounterPlus.parentNode.parentNode.childNodes[3].innerText.replace(/[^+\d]/g, '');
    let priceNumber = Number(priceSumm);
    // orderCounterPlus.parentNode.parentNode.childNodes[3].innerText = String(priceNumber*amountItem + '₽');
  })
})
}



//changed basket value(money)
btnchoise.forEach(btnchoise => {
  btnchoise.addEventListener('click', () => {
    if(data.length < 40) {
    let costs = btnchoise.nextSibling.nextSibling;
    imgSrc = btnchoise.parentNode.parentNode.childNodes[3].getAttribute('src');
    title = btnchoise.parentElement.parentElement.childNodes[5].innerText;
    descr = btnchoise.parentElement.parentElement.childNodes[7].innerText;
    price = btnchoise.nextSibling.nextSibling.innerText.replace(/[a-zа-яё]/gi, '').trim();
    let costsText = costs.innerText.replace(/[^+\d]/g, '').trim();
    let costsNumber = Number(costsText);
    basketSumValue += costsNumber;
    basketSum.innerText = `${basketSumValue} ₽`;
    localStorage.setItem("title", JSON.stringify(title));
    localStorage.setItem("desc", JSON.stringify(descr));
    localStorage.setItem("src", JSON.stringify(imgSrc));
    localStorage.setItem("price", JSON.stringify(price));
    localStorage.setItem("basket", JSON.stringify(basketSumValue));
    data.push(imgSrc, title, descr, price);
    localStorage.setItem("array", JSON.stringify(data));
    console.log(data);
    console.log(data.length);
  }});
});


AOS.init();
const body = document.querySelector('body');
const HTML = document.querySelector('html');
const lockPaddingValue = window.innerWidth - document.querySelector('.root').offsetWidth + 'px';
console.log(lockPaddingValue);


const bodyfilter = document.querySelectorAll('body');
const rootfilter = document.querySelector('.root');
const loginProfile = document.querySelector('.nav-list__linkLOGIN');
const btnfilter  = document.querySelectorAll('.btnfilter ');
const filterContainer = document.querySelector('.filter-container');
const filter = document.querySelector('.filter');
const filterHeaderButton = document.querySelector('.filter-header__button');


//oload page style
window.onload = () => {
  gsap.to('.assortment__item', {delay: 0.2, duration: .4, opacity: 1, stagger: 0.2}); 
  gsap.to('.promotions__item', {opacity: 1, delay: 0.8, duration: 1.5});
  gsap.from(".wrap__header", {duration: .8, y: -500, opacity: 0});
  gsap.from(".section__deliveryAria", {duration: .8, y: 500, opacity: 0});
  gsap.from(".section__pizza", {delay: 1, duration: 3, opacity: 0});
};

loginProfile.addEventListener('click', () => {
  renderPopup();
  rootfilter.style.filter = 'blur(10px)';
  console.log('1');
});

document.addEventListener('click', (event) => {
  if(event.target == filterContainer) {
    filter.classList.remove("filter__open");
    filterContainer.classList.remove('filter-container__open');
    rootfilter.style.filter = 'blur(0px)';
    HTML.style.overflow = 'auto';
  }
});

document.addEventListener('keydown', (event) => {
  if(event.keyCode === 27){
    filter.classList.remove("filter__open");
    filterContainer.classList.remove('filter-container__open');
    rootfilter.style.filter = 'blur(0px)';
    HTML.style.overflow = 'auto';
  }
});

btnfilter.forEach(btnfilter => {
  btnfilter.addEventListener('click', (event) => {
    filterContainer.classList.add('filter-container__open');
    filter.classList.add("filter__open");
    rootfilter.style.filter = 'blur(10px)';
    HTML.style.overflow = 'hidden';
    body.style.paddingRight = lockPaddingValue;
  });
});


filterHeaderButton.addEventListener('click', (event) => {
  filter.classList.toggle("filter__open");
  filterContainer.classList.toggle('filter-container__open');
  rootfilter.style.filter = 'blur(0px)';
  HTML.style.overflow = 'auto';
  event.stopPropagation();
});


