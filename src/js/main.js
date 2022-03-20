import '../styles/style.css';
import './includes/test';
import createComboItem  from './includes/renderComboItem';
import createSauseItem  from './includes/renderSauseItem';
import createsnackItem  from './includes/renderSnacksItem';
import createSushiItem from './includes/renderSushiItem';
import createPizzaiItem from './includes/renderPizzaItem';
import createDrinkIItem from './includes/renderDrinkItem';
import createDessertIItem from './includes/renderDessertItem'
// import renderPopup from './includes/PopUPLogin';
import basketIsFull from './includes/PopUPBasketFull';


if(document.querySelector('.addTOorder')) {
const swiper1 = new Swiper('.mySwiper1', {
spaceBetween: 10,
slidesPerView: 4,
slidesPerGroup: 2,
speed: 500,
loop: false,
navigation: {
  nextEl: '.swiper-button-next1',
  prevEl: '.swiper-button-prev1',
  clickable: true,
  },
  mousewheel: {
    sensitivity: 2,
  }
})

const swiper = new Swiper('.mySwiper', {
spaceBetween: 10,
slidesPerView: 4,
slidesPerGroup: 2,
speed: 500,
loop: false,
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  clickable: true,
  },
  mousewheel: {
    sensitivity: 2,
  }
})
}

import 'animate.css';
import { gsap } from "gsap";

if(document.querySelector('.sushi__item_wrapper') !== null) {
  createSushiItem();
}
if(document.querySelector('.combo__item_wrapper') !== null) {
  createComboItem();
}
if(document.querySelector('.pizza__item_wrapper') !== null) {
  createPizzaiItem();
}
if(document.querySelector('.desserts__item_wrapper') !== null) {
  createDessertIItem();
}
if(document.querySelector('.drinks__item_wrapper') !== null) {
  createDrinkIItem();
}
if(document.querySelector('.snacks__item_wrapper') !== null) {
  createsnackItem();
}

if(document.querySelector('.sause__item_wraper') !== null) {
  createSauseItem();
}

const menuDropdownList = document.querySelector('.menu-dropdown__list');
if(menuDropdownList) {
  menuDropdownList.style.display = "none";
  setTimeout(() => {
    menuDropdownList.style.display = "block";
  }, 500);
}



//oload page style
window.onload = () => {
  gsap.to('.assortment__item', {delay: 0.2, duration: 0.4, opacity: 1, stagger: 0.1}); 
  gsap.to('.promotions__item', {opacity: 1, delay: 0.4, duration: 1});
  gsap.from(".wrap__header", {duration: .4, y: -500, opacity: 0});
  gsap.from(".section__deliveryAria", {duration: .4, y: 500, opacity: 0});
  gsap.from(".section__pizza", {delay: 1, duration: 2, opacity: 0});
};

//add sum on basket
const basketSum = document.querySelector('.basket__sum');
const promocodeCosts = document.querySelector('.promocode__costs');



let data = [];

//basket summ after reload page
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
let totalAmountBasket;

let resultName = [];  
let resultDescr = [];
let resultImg = [];
let resultPrice = [];
let datasetPrice = [];
const allOrderCosts = document.querySelector('.addItemCard2-delivery-comment-delivery__costs');

// COUNT INCREMENT(-)
document.addEventListener('click', (e) => {
  if(e.target.closest('.order-counter__increment')) {
  const costsEl = e.target.closest('.addItemCard2__item').querySelector('.addItemCard2-item__costs');
  const numberEl = e.target.closest('.addItemCard2__item').querySelector('.order-counter__number');
  let priceSumm = costsEl.innerText.replace(/[^+\d]/g, '');
  let priceNumber = Number(priceSumm);
  let priceSingle = Number(costsEl.dataset['price']);
  numberEl.innerText = Number(numberEl.innerText) + 1;
  costsEl.innerText = String(priceNumber+priceSingle + ' '+'₽');
  totalAmountBasket += priceSingle;
  promocodeCosts.innerText = `Итого: ${totalAmountBasket} ₽`;
  allOrderCosts.innerText = `Итого: ${totalAmountBasket} ₽`;
  basketSum.innerText = promocodeCosts.innerText.replace(/[^+\d]/g, '') +' ' +'₽';
    }
  })


// COUNT DECREMENT(-)
  document.addEventListener('click', (e) => {
    if(e.target.closest('.order-counter__decrement')) {
    const costsEl = e.target.closest('.addItemCard2__item').querySelector('.addItemCard2-item__costs');
    const numberEl = e.target.closest('.addItemCard2__item').querySelector('.order-counter__number');
    let priceSumm = costsEl.innerText.replace(/[^+\d]/g, '');
    let priceNumber = Number(priceSumm);
    let priceSingle = Number(costsEl.dataset['price']);
    if((Number(numberEl.innerText>=1))){
    numberEl.innerText = Number(numberEl.innerText) - 1;
    costsEl.innerText = String(priceNumber-priceSingle +' '+'₽');
    if(totalAmountBasket >= 0) {
    totalAmountBasket -= priceSingle;
    promocodeCosts.innerText = `Итого ${totalAmountBasket} ₽`;
    allOrderCosts.innerText = `Итого ${totalAmountBasket} ₽`;
    basketSum.innerText = promocodeCosts.innerText.replace(/[^+\d]/g, '') +' ' +'₽';
    }}}
  })

// item remove
  document.addEventListener('click', (e) => {
    if(e.target.closest('.addItemCard2-item__remove')) {
      if(totalAmountBasket == undefined) {
      totalAmountBasket = 0;
    }
    const item = e.target.closest('.addItemCard2__item');
    const itemCosts = item.querySelector('.order-item__sum').nextElementSibling.innerText;
    let itemNumber = Number(itemCosts.replace(/[^+\d]/g, ''));
    data.splice(data.length-5);
    basketSumValue -= itemNumber;
    basketSum.innerText = `${basketSumValue} ₽`;
    localStorage.setItem("basket", JSON.stringify(basketSumValue));
    localStorage.setItem("array", JSON.stringify(data));
    item.remove();
    totalAmountBasket -= itemNumber;
    promocodeCosts.innerText = `Итого: ${totalAmountBasket} ₽`;
    allOrderCosts.innerText = `Итого: ${totalAmountBasket} ₽`;
    basketSum.innerText = promocodeCosts.innerText.replace(/[^+\d]/g, '') +' ' +'₽';
    }
  })

if(document.querySelector('.wrap__addItemCard2') !== null) {
  document.addEventListener("DOMContentLoaded", ready);
}

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
}
  const basketSumStart = resultPrice.map((num) => Number(num.replace(/[^+\d]/g, '')));
  const basketSumStartFixed = basketSumStart.reduce((sum, elem) =>{
	return sum + elem;
  }, 0);
  promocodeCosts.innerText = `Итого ${basketSumStartFixed} ₽`;
  allOrderCosts.innerText = `Итого ${basketSumStartFixed} ₽`;
  totalAmountBasket = basketSumStartFixed;

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
}}


  document.addEventListener('click', (e) => {
  if(e.target.closest('.addTOorder-item__button')) {
  const additem = document.querySelector('.additem');
  const startitem = document.querySelector('#startitem');
  if(startitem) {
    startitem.style.display = 'none';
  }
  costs = e.target.innerText;
  imgSrc = e.target.closest('.addTOorder__item').querySelector('.addTOorder__image').getAttribute('src');
  title = e.target.closest('.addTOorder__item').querySelector('.addTOorder-item__title').innerText;
  descr = e.target.closest('.addTOorder__item').querySelector('.addTOorder-item__descr').innerText;
    if(data.length < 40) {
    price =  costs.replace(/[a-zа-яё]/gi, '').trim();
    datasetPrice = Number(e.target.dataset['price']);
    let costsText = costs.replace(/[^+\d]/g, '').trim();
    let costsNumber = Number(costsText);
    basketSumValue += costsNumber;
    basketSum.innerText = `${basketSumValue} ₽`;
    localStorage.setItem("basket", JSON.stringify(basketSumValue));
    data.push(imgSrc, title, descr, price, datasetPrice);
    localStorage.setItem("array", JSON.stringify(data));
    const addItemText = `<div class="addItemCard2__item">
        <div class="addItemCard2__item_wrap">
          <img
            class="addItemCard2-item__image"
            src=${imgSrc}
            alt="pizza"
          />
          <div class="addItemCard2__text">
            <div class="addItemCard2-text__title">
              ${title}
            </div>
            <div class="addItemCard2-text__descr">${descr}</div>
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
          <div class="order-footer__costs addItemCard2-item__costs" ${('data-price='+datasetPrice)}>${costs}</div>
        </div>
        <button class="addItemCard2-item__remove">
          <img src="images/additemCard2/removeCardBtn.png" alt="" class="" />
        </button>
    </div>`;
    additem.insertAdjacentHTML('afterend', addItemText)
    if(totalAmountBasket == undefined) {
      totalAmountBasket = 0;
    } 
    totalAmountBasket += datasetPrice;
    promocodeCosts.innerText = `Итого ${totalAmountBasket} ₽`;
    allOrderCosts.innerText = `Итого ${totalAmountBasket} ₽`;
    basketSum.innerText = promocodeCosts.innerText.replace(/[^+\d]/g, '') +' ' +'₽';
  }} else {
    if(e.target.closest('.btnchoise') && data.length >= 39) {
      basketIsFull();
    }
  }
});
// changed basket value(money)
  document.addEventListener('click', (e) => {
  if(e.target.closest('.btnchoise')) {
  costs = e.target.closest('.item').querySelector('.item__costs');
  imgSrc = e.target.closest('.item').querySelector('.item__image').getAttribute('src');
  title = e.target.closest('.item').querySelector('.item__name').innerText;
  descr = e.target.closest('.item').querySelector('.item__descr').innerText;
    if(data.length < 40) {
    price =  costs.innerText.replace(/[a-zа-яё]/gi, '').trim();
    datasetPrice = costs.dataset['price'];
    let costsText = costs.innerText.replace(/[^+\d]/g, '').trim();
    let costsNumber = Number(costsText);
    basketSumValue += costsNumber;
    basketSum.innerText = `${basketSumValue} ₽`;
    localStorage.setItem("basket", JSON.stringify(basketSumValue));
    data.push(imgSrc, title, descr, price, datasetPrice);
    localStorage.setItem("array", JSON.stringify(data));
  } else {
    
  }}
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


document.addEventListener('click', (e) => {
  if(1>0) {
  console.log(e.target);
  // renderPopup();
  // rootfilter.style.filter = 'blur(10px)';
  }
});

document.addEventListener('click', (e) => {
  if(e.target == filterContainer) {
    filter.classList.remove("filter__open");
    filterContainer.classList.remove('filter-container__open');
    rootfilter.style.filter = 'blur(0px)';
    HTML.style.overflow = 'auto';
  }
});

document.addEventListener('keydown', (e) => {
  if(e.keyCode === 27){
    filter.classList.remove("filter__open");
    filterContainer.classList.remove('filter-container__open');
    rootfilter.style.filter = 'blur(0px)';
    HTML.style.overflow = 'auto';
  }
});

btnfilter.forEach(btnfilter => {
  btnfilter.addEventListener('click', (e) => {
    filterContainer.classList.add('filter-container__open');
    filter.classList.add("filter__open");
    rootfilter.style.filter = 'blur(10px)';
    HTML.style.overflow = 'hidden';
    body.style.paddingRight = lockPaddingValue;
  });
});


filterHeaderButton.addEventListener('click', (e) => {
  filter.classList.toggle("filter__open");
  filterContainer.classList.toggle('filter-container__open');
  rootfilter.style.filter = 'blur(0px)';
  HTML.style.overflow = 'auto';
  e.stopPropagation();
});


