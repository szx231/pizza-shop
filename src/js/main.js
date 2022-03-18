import '../styles/style.css';
import './includes/test';
import createComboItem  from './includes/renderComboItem';
import createSauseItem  from './includes/renderSauseItem';
import createsnackItem  from './includes/renderSnacksItem';
import createSushiItem from './includes/renderSushiItem';

import renderPopup from './includes/PopUPLogin';


//lib 
import datepicker from 'js-datepicker';
import 'animate.css';
import { gsap } from "gsap";
const b = document.querySelector('.promocode__btn');


//add sum on basket
const btnchoise = document.querySelectorAll('.btnchoise');
const basketSum = document.querySelector('.basket__sum');
const promocodeCosts = document.querySelector('.promocode__costs');

function createItemOnPage () {
  createComboItem();
  createSauseItem();
  createsnackItem();
  createSushiItem();
}
createItemOnPage ()

let data = [];

if(localStorage.getItem("array")) {
  let dataload = JSON.parse(localStorage.getItem("array"));
  data = dataload;
}

let basketSumValue = 0;
let imgSrc;
let title;
let descr;
let price;
let costs;

let resultName = [];
let resultDescr = [];
let resultImg = [];
let resultPrice = [];
let datasetPrice = [];


document.addEventListener("DOMContentLoaded", ready);

function ready() {
const additem = document.querySelector('.additem');
const startitem = document.querySelector('#startitem');
if (localStorage.getItem("basket")) {
  const basket = JSON.parse(localStorage.getItem("basket"));
  basketSumValue = basket;
  basketSum.innerText = `${basket} ₽`;
  const data = JSON.parse(localStorage.getItem("array"));
  startitem.style.display = 'none';
  for (let i = 0; i < data.length; i += 5) {
    resultName.push((data[i + 1]));
    resultDescr.push((data[i + 2]));
    resultImg.push((data[i + 0]));
    resultPrice.push((data[i + 3]));
    datasetPrice.push((data[i + 3]));
    console.log(resultPrice, datasetPrice);
}
  const basketSumStart = resultPrice.map((num) => Number(num.replace(/[^+\d]/g, '')));
  const basketSumStartFixed = basketSumStart.reduce(function(sum, elem) {
	return sum + elem;
  }, 0);
  promocodeCosts.innerText = 'Итого:'+' '+`${basketSumStartFixed}`+' ' +'₽';
  let totalAmountBasket = basketSumStartFixed;

    for (let i = 0; i < data.length/5; i++) {
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
          <div class="order-footer__costs addItemCard2-item__costs" ${('data-price='+datasetPrice[i])}>${(resultPrice[i])}</div>
        </div>
        <button class="addItemCard2-item__remove">
          <img src="images/additemCard2/removeCardBtn.png" alt="" class="" />
        </button>
    </div>`;
    additem.insertAdjacentHTML('afterend', addItemText)
}

  const addTOorderBtn = document.querySelectorAll('.addTOorder-item__button');
  addTOorderBtn.forEach(addTOorderBtn => {
    addTOorderBtn.addEventListener('click', () => {
      let elTitle = addTOorderBtn.closest('.addTOorder__item').querySelector('.addTOorder-item__title').innerText;
      let elDescr =  addTOorderBtn.closest('.addTOorder__item').querySelector('.addTOorder-item__descr').innerText;
      let elimg =  addTOorderBtn.closest('.addTOorder__item').querySelector('.addTOorder__image').getAttribute('src');
      let elCost = Number(addTOorderBtn.innerText.replace(/[^+\d]/g, ''));
      const addItemText = `<div class="addItemCard2__item">
        <div class="addItemCard2__item_wrap">
          <img
            class="addItemCard2-item__image"
            src=${elimg}
            alt="pizza"
          />
          <div class="addItemCard2__text">
            <div class="addItemCard2-text__title">
              ${elTitle}
            </div>
            <div class="addItemCard2-text__descr">${elDescr}</div>
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
          <div class="order-footer__costs addItemCard2-item__costs" ${('data-price='+elCost)}>${elCost} ₽ </div>
        </div>
        <button class="addItemCard2-item__remove">
          <img src="images/additemCard2/removeCardBtn.png" alt="" class="" />
        </button>
    </div>`;
    additem.insertAdjacentHTML('afterend', addItemText)
    })
  })
//count 
const orderCounterincrement = document.querySelectorAll('.order-counter__increment');
const orderCounterdecrement = document.querySelectorAll('.order-counter__decrement');

orderCounterincrement.forEach(orderCounterincrement => {
  const costsEl = orderCounterincrement.closest('.addItemCard2__item').querySelector('.addItemCard2-item__costs');
  const numberEl = orderCounterincrement.closest('.addItemCard2__item').querySelector('.order-counter__number');
  orderCounterincrement.addEventListener('click', () => {
    let priceSumm = costsEl.innerText.replace(/[^+\d]/g, '');
    let priceNumber = Number(priceSumm);
    let priceSingle = Number(costsEl.dataset['price']);
    numberEl.innerText = Number(numberEl.innerText) + 1;
    costsEl.innerText = String(priceNumber+priceSingle + ' '+'₽');
   
    totalAmountBasket += priceSingle;
    promocodeCosts.innerText = 'Итого:'+' '+`${totalAmountBasket}`+' ' +'₽';
    basketSum.innerText = promocodeCosts.innerText.replace(/[^+\d]/g, '') +' ' +'₽';
  })
})
const itemRemove = document.querySelectorAll('.addItemCard2-item__remove');
itemRemove.forEach(itemRemove => {
  itemRemove.addEventListener('click', () => {
    const item = itemRemove.closest('.addItemCard2__item');
    const itemCosts = item.querySelector('.order-item__sum').nextElementSibling.innerText;
    let itemNumber = Number(itemCosts.replace(/[^+\d]/g, ''));
    totalAmountBasket -= itemNumber;
    promocodeCosts.innerText = 'Итого:'+' '+`${totalAmountBasket}`+' ' +'₽';
    item.remove();
    basketSum.innerText = promocodeCosts.innerText.replace(/[^+\d]/g, '') +' ' +'₽';
  })
})


orderCounterdecrement.forEach(orderCounterdecrement => {
  const costsEl = orderCounterdecrement.closest('.addItemCard2__item').querySelector('.addItemCard2-item__costs');
  const numberEl = orderCounterdecrement.closest('.addItemCard2__item').querySelector('.order-counter__number');
  orderCounterdecrement.addEventListener('click', () => {
    let priceSumm = costsEl.innerText.replace(/[^+\d]/g, '');
    let priceNumber = Number(priceSumm);
    let priceSingle = Number(costsEl.dataset['price']);
    if((Number(numberEl.innerText>=1))){
    numberEl.innerText = Number(numberEl.innerText) - 1;
    costsEl.innerText = String(priceNumber-priceSingle + '₽');
    if(totalAmountBasket >= 0) {
    totalAmountBasket -= priceSingle;
    promocodeCosts.innerText = 'Итого:'+' '+`${totalAmountBasket}`+' ' +'₽';
    basketSum.innerText = promocodeCosts.innerText.replace(/[^+\d]/g, '') +' ' +'₽';
    }
    }
  })
})
}
}

// changed basket value(money)
btnchoise.forEach(btnchoise => {
  btnchoise.addEventListener('click', () => {
  costs = btnchoise.parentNode.parentNode.querySelector('.item__costs');
  imgSrc = btnchoise.parentNode.parentNode.querySelector('.item__image').getAttribute('src');
  title = btnchoise.parentNode.parentNode.querySelector('.item__name').innerText;
  descr = btnchoise.parentNode.parentNode.querySelector('.item__descr').innerText;
    if(data.length < 40) {
    price = btnchoise.nextSibling.nextSibling.innerText.replace(/[a-zа-яё]/gi, '').trim();
    datasetPrice = costs.dataset['price'];
    let costsText = costs.innerText.replace(/[^+\d]/g, '').trim();
    let costsNumber = Number(costsText);
    basketSumValue += costsNumber;
    basketSum.innerText = `${basketSumValue} ₽`;
    localStorage.setItem("basket", JSON.stringify(basketSumValue));
    data.push(imgSrc, title, descr, price, datasetPrice);
    localStorage.setItem("array", JSON.stringify(data));
    console.log(data);
    console.log(data.length);
  } else {
    
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


