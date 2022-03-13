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

let basketSumValue = 0;
let imgSrc;

document.addEventListener("DOMContentLoaded", ready);

function ready() {
const addItemCard2itemimage = document.querySelector('.addItemCard2-item__image');
if (localStorage.getItem("basket")) {
  const basket = JSON.parse(localStorage.getItem("basket"));
  basketSumValue = basket;
  basketSum.innerText = `${basket} ₽`;
  const src = JSON.parse(localStorage.getItem("src"));
  imgSrc = src;
  addItemCard2itemimage.setAttribute('src', imgSrc);
}
}

//changed basked value(money)
btnchoise.forEach(btnchoise => {
  btnchoise.addEventListener('click', () => {
    let costs = btnchoise.nextSibling.nextSibling;
    imgSrc = btnchoise.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('src');
    let costsText = costs.innerText.replace(/[^+\d]/g, '');
    let costsNumber = Number(costsText);
    basketSumValue += costsNumber;
    basketSum.innerText = `${basketSumValue} ₽`;
    localStorage.setItem("src", JSON.stringify(imgSrc));
    localStorage.setItem("basket", JSON.stringify(basketSumValue));
  });
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

const orderitemsum = document.querySelector('.order-item__sum');

//count 
const orderCounterPlus = document.querySelectorAll('.order-counter__plus');
const orderCounterMinus = document.querySelectorAll('.order-counter__minus');
const orderCounterNumber = document.querySelector('.order-counter__number');

//oload page style
window.onload = function() {
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

document.addEventListener('click', function(event) {
  if(event.target == filterContainer) {
    filter.classList.remove("filter__open");
    filterContainer.classList.remove('filter-container__open');
    rootfilter.style.filter = 'blur(0px)';
    HTML.style.overflow = 'auto';
  }
});

document.addEventListener('keydown', function(event) {
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


