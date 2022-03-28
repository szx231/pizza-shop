import '../styles/style.css';
import './includes/test';
import renderPopup from './includes/PopUPLogin';
import basketIsFull from './includes/PopUPBasketFull';

import 'animate.css';
import { gsap } from "gsap";

window.scrollTo(0, 0);
gsap.to('.assortment__item', {delay: 0.4, duration: 0.8, opacity: 1, stagger: 0.2}); 

//hid menu dropdown 
const menuDropdownList = document.querySelector('.menu-dropdown__list');

if(menuDropdownList) {
  menuDropdownList.style.display = "none";
  setTimeout(() => {
    menuDropdownList.style.display = "block";
  }, 500);
}

// add sum on basket
const basketSum = document.querySelector('.basket__sum');
const HTML = document.querySelector('html');
const rootfilter = document.querySelector('.root');
let body = document.querySelector('body');
const btnfilter  = document.querySelectorAll('.btnfilter ');
const filterContainer = document.querySelector('.filter-container');
const filter = document.querySelector('.filter');
//expand text
const deliveryConditionsText = document.querySelector('.delivery-conditions__text');
//settings link and history order
const accountProfileheaderbtn = document.querySelector('.accountProfile-header__btn');
const accountProfileheaderbtnSet = document.querySelector('.settings');
//scroll size
const lockPaddingValue = window.innerWidth - document.documentElement.clientWidth + 'px';

//main array
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

let resultName = [];  
let resultDescr = [];
let resultImg = [];
let resultPrice = [];
let datasetPrice = [];

if(document.querySelector('.indexpage')) {
  AOS.init();
}

// changed basket value(money)
document.addEventListener('click', addGoods);
function addGoods(e) {
  if (e.target.closest('.btnchoise')) {
    const item = e.target.closest('.item');
    costs = item.querySelector('.item__costs');
    imgSrc = item.querySelector('.item__image').getAttribute('src');
    title = item.querySelector('.item__name').innerText;
    descr = item.querySelector('.item__descr').innerText;
    if (data.length < 40) {
      price = costs.innerText.replace(/[a-zа-яё]/gi, '').trim();
      datasetPrice = costs.dataset['price'];
      let costsText = costs.innerText.replace(/[^+\d]/g, '').trim();
      let costsNumber = Number(costsText);
      basketSumValue += costsNumber;
      basketSum.innerText = `${basketSumValue} ₽`;
      localStorage.setItem("basket", JSON.stringify(basketSumValue));
      data.push(imgSrc, title, descr, price, datasetPrice);
      localStorage.setItem("array", JSON.stringify(data));
    } else {basketIsFull()}
  }
}
  
//rendr PopUp login 
document.addEventListener('click', renderPopupLogin);
function renderPopupLogin(e) {
  if (e.target.closest('.nav-list__linkLOGIN')) {
    renderPopup();
  }
}

//hid filter PopUP
document.addEventListener('click', (e) => {
  if(e.target == filterContainer) {
    body.style.paddingRight = '0px';
    filter.classList.remove("filter__open");
    filterContainer.classList.remove('filter-container__open');
    HTML.style.overflow = 'auto';
  }
});

//render filter PopUP
btnfilter.forEach(btnfilter => {
  btnfilter.addEventListener('click', () => {
    body.style.paddingRight = lockPaddingValue;
    filterContainer.classList.add('filter-container__open');
    filter.classList.add("filter__open");
    HTML.style.overflow = 'hidden';
    filterContainer.style.backdropFilter = 'blur(15px)';
  });
});

//closed filter popUp(if click btn)
document.addEventListener('click', closedFilterPopUpbtn)
function closedFilterPopUpbtn(e) {
  if (e.target.closest('.filter-header__button')) {
    console.log('1');
    filter.classList.toggle("filter__open");
    filterContainer.classList.toggle('filter-container__open');
    rootfilter.style.filter = 'blur(0px)';
    HTML.style.overflow = 'auto';
    e.stopPropagation();
  }
}


//close filter popUP on 'ESC'
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    filter.classList.toggle("filter__open");
    filterContainer.classList.toggle('filter-container__open');
    HTML.style.overflow = 'auto';
  }
});

// move to another page(myAcc)
document.addEventListener('click', (e) => {
  if(e.target == accountProfileheaderbtnSet) {
    window.location.href = 'myAcc.html';
  }
})

// move to another page(accProfile)
document.addEventListener('click', (e) => {
  if(e.target == accountProfileheaderbtn) {
    window.location.href = 'accProfile.html';
  }
})

//change class delivery-conditions__btn
document.addEventListener('click', (e) => {
  if(e.target.closest('.delivery-conditions__btn')) {
    deliveryConditionsText.classList.toggle('delivery-conditions__text_active');
  }
})

//function for change item on pages
function createitemCombo() {
const combo = document.querySelector('.combo__item_wrapper');
let comboName = [
  "Combo pizza",
  "Combo triple pizza",
  "Double pizza and free drink",
  "Three dodster + one free",
  "Combo triple pizza",
  "Combo double pizza'",
  "4 dodster combo",
  "Two pizza and your drink",
] ;

let comboDescr = [
  "2 пиццы   25 см  на выбор. Для компании из 2–4 человек",
  "3 пиццы 30 см на любой вкус. Для компании из 5–10 человек",
  "2 пиццы и напиток 2 пиццы 25 см и напиток на выбор. Для компании из 2–4 человек",
  "Легендарная горячая закуска с цыплёнком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке",
  "3 пиццы 30 см на любой вкус. Для компании из 5–10 человек",
  "2 пиццы   25 см  на выбор. Для компании из 2–4 человек",
  "Легендарная горячая закуска с цыплёнком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке",
  "2 пиццы и напиток 2 пиццы 25 см и напиток на выбор. Для компании из 2–4 человек",
];

let comboCosts = [
  "215 ₽",
  "475 ₽",
  "325 ₽",
  "445 ₽",
  "725 ₽",
  "355 ₽",
  "365 ₽",
  "425 ₽",
];

let comboImg = [
  "images/combo/item01.png",
  "images/combo/item02.png",
  "images/combo/item03.png",
  "images/combo/item04.png",
  "images/combo/item05.png",
  "images/combo/item06.png",
  "images/combo/item07.png",
  "images/combo/item08.png",
];

let combsosale = [
  "до 22%",
  "до 18%",
  "до 10%",
  "до 15%",
  "до 18%",
  "до 22%",
  "до 15%",
  "до 10%",
]

let dataPrice = [
  "215",
  "475",
  "325",
  "445",
  "725",
  "355",
  "365",
  "425",
]

   for(let i=0; i <comboName.length; i++) {
    let newItem = document.createElement('div');
    newItem.className = ('item combo__item');
    const itemText = `<div class="item combo__item">
    <div class="item__sale item-sale__combo">${(combsosale[i])}</div>
    <img draggable="false"
    src="${(comboImg[i])}"
    alt="combo"
    class="item__image combo__image"/>
    <div class="item__name combo__name">${(comboName[i])}</div>
    <div class="item__descr combo__descr">${(comboDescr[i])}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise combo__button">Выбрать</button>
    <div class="item__costs combo__costs" data-price=">${(dataPrice[i])}">${(comboCosts[i])}</div>
    </div>
    </div>`;
    newItem.innerText = itemText;
    combo.insertAdjacentHTML('beforeend',itemText);
}}

function createitemDessert() {
  const desserts = document.querySelector('.desserts__item_wrapper');

let dessertName = [
  "Рулетики с брусникой",
  "Рулетики с корицей",
  "Картофельные оладьи",
  "Мороженое эскимо 'Магнат'",
  "Мороженое эскимо 'Магнат'",
  "Набор Мороженое -7шт",
  "Мороженое 'Мишка на полюсе'",
  "Картофельные оладьи",
] ;

let dessertDescr = [
  "Это задорные сладкие рулетики, в которых закрутился микс из натуральной...",
  "Десерт, одобренный нашими бабушками. Горячие сладкие рулетики ....",
  "Запеченные оладьи из картофеля в панировке, 8 шт",
  "Мороженое (сливки, молоко цельное, вода питьевая, сахар, молоко ...",
  "Мороженое (сливки, молоко цельное, вода питьевая, сахар, молоко ...",
  "Мороженое (сливки, молоко цельное, вода питьевая, сахар, молоко ...",
  "Мороженое (сливки, молоко цельное, вода питьевая, сахар, молоко ...",
  "Запеченные оладьи из картофеля в панировке, 8 шт",
];


let dessertCosts = [
  "175 ₽",
  "125 ₽",
  "95 ₽",
  "75 ₽",
  "115 ₽",
  "225 ₽",
  "110 ₽",
  "100 ₽",
];


let dessertImg = [
  "images/desserts/item01.png",
  "images/desserts/item02.png",
  "images/desserts/item03.png",
  "images/desserts/item04.png",
  "images/desserts/item05.png",
  "images/desserts/item06.png",
  "images/desserts/item07.png",
  "images/desserts/item08.png",
];


let dessertPrice = [
  "175",
  "125",
  "95",
  "75",
  "115",
  "225",
  "110",
  "100",
];


  for(let i=0; i <dessertName.length; i++) {
    let newItem = document.createElement('div');
    newItem.className = ('desserts__item');
    const itemText = `
    <div class="item desserts__item">
    <img draggable="false"
      src="${(dessertImg[i])}"
      alt="desserts"
      class="item__image desserts__image"
    />
    <div class="item__name desserts__name"
    >${(dessertName[i])}</div
    >
    <div class="item__descr desserts__descr"
    >${(dessertDescr[i])}</div
    >
    <div class="item__bottom_choise">
    <button  class="btnchoise desserts__button">Выбрать</button>
    <div class="item__costs desserts__costst" data-price="${(dessertPrice[i])}">${(dessertCosts[i])}</div>
    </div>
    </div>`;
    newItem.innerText = itemText;
    desserts.insertAdjacentHTML('beforeend', itemText)
  }
}

function createitemDrink() {
  const drinks = document.querySelector('.drinks__item_wrapper');

let drinkName = [
  "Adrenaline Game",
  "Pepsi dark",
  "Pepsi light",
  "Pepsi cherry",
  "Pepsi classic",
  "Mirinda",
  "Adrenaline Game fuel",
  "Pepsi dark light",
] ;

let drinkDescr = [
  "Напиток безалкогольный, тонизирующий, газированный. Ароматизированный....",
  "Торговая марка, принадлежащая американской компании PepsiCo, безалкогольный....",
  "Безалкогольный газированный напиток, производимый американской компанией PepsiCo....",
  "Торговая марка, принадлежащая американской компании PepsiCo, безалкогольный....",
  "Безалкогольный газированный напиток, производимый американской компанией PepsiCo....",
  "Торговая марка, принадлежащая американской компании PepsiCo, безалкогольный.....",
  "Напиток безалкогольный, тонизирующий, газированный. Ароматизированный....",
  "Торговая марка, принадлежащая американской компании PepsiCo, безалкогольный....",
];


let drinkCosts = [
  "475 ₽",
  "395 ₽",
  "425 ₽",
  "525 ₽",
  "425 ₽",
  "525 ₽",
  "425 ₽",
  "525 ₽",
];


let drinkImg = [
  "images/drinks/item07.png",
  "images/drinks/item02.png",
  "images/drinks/item03.png",
  "images/drinks/item04.png",
  "images/drinks/item05.png",
  "images/drinks/item06.png",
  "images/drinks/item07.png",
  "images/drinks/item08.png",
];


let dataPrice = [
  "475",
  "395",
  "425",
  "525",
  "425",
  "525",
  "425",
  "525",
];


  for(let i=0; i <drinkName.length; i++) {
    let newItem = document.createElement('div');
    newItem.className = ('drinks__item');
    const itemText = `
    <div class="item drinks__item">
    <img draggable="false"
      src="${(drinkImg[i])}"
      alt="drink"
      class="item__image drinks__image"
    />
    <div  class="item__name drinks__name">${(drinkName[i])}</div>
    <div  class="item__descr drinks__descr"
    >${(drinkDescr[i])}</div
    >
    <div class="item__bottom_choise">
    <button class="btnchoise drinks__button">Выбрать</button>
    <div class="item__costs drinks__costst" data-price="${(dataPrice[i])}">${(drinkCosts[i])}</div>
    </div>
    </div>`;
    newItem.innerText = itemText;
    drinks.insertAdjacentHTML('beforeend', itemText)
  }
}

function createitemPizza() {
  const pizza = document.querySelector('.pizza__item_wrapper');

let pizzaName = [
  "Чикен Сладкий Чили",
  "EASY PEASY огуречный расколбас",
  "EASY PEASY чикен а-ля хрен",
  "EASY PEASY 4&nbsp;сезона",
  "EASY PEASY 4&nbsp;сезона",
  "EASY PEASY чикен а-ля хрен",
  "EASY PEASY Сладкий Чили",
  "EASY PEASY огуречный расколбас",
] ;

let pizzaDescr = [
  "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
  "Курица, Лук, Перец Халапеньо..",
  "Курица, Лук, Соус Карбонара...",
  "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
  "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
  "Курица, Лук, Соус Карбонара...",
  "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
  "Курица, Лук, Перец Халапеньо...",
];

let pizzaCosts = [
  "от 399 ₽",
  "от 549 ₽",
  "от 249 ₽",
  "от 630 ₽",
  "от 630 ₽",
  "от 249 ₽",
  "от 399 ₽",
  "от 549 ₽",
];

let pizzaImg = [
  "images/pizza/pizza01.png",
  "images/pizza/pizza02.png",
  "images/pizza/pizza03.png",
  "images/pizza/pizza04.png",
  "images/pizza/pizza05.png",
  "images/pizza/pizza06.png",
  "images/pizza/pizza07.png",
  "images/pizza/pizza08.png",
];

let dataPrice = [
  "399",
  "549",
  "249",
  "630",
  "630",
  "249",
  "399",
  "549",
];


  for(let i=0; i <pizzaName.length; i++) {
    let newItem = document.createElement('div');
    newItem.className = ('item pizza__item');
    const itemText = `
    <div class="item pizza__item">
    <img draggable="false"
    src="${(pizzaImg[i])}"
    alt="pizza"
    class="item__image pizza__image"
    />
    <div  class="item__name pizza__name"
    >${(pizzaName[i])}</div>
    <div class="item__descr pizza__descr"
    >${(pizzaDescr[i])}</div>
    <div class="item__bottom_choise">
    <div class="btnchoise pizza__button">Выбрать</div>
    <div class="item__costs pizza__costs" data-price="${(dataPrice[i])}">${(pizzaCosts[i])}</div>
    </div>
    </div>`;
    newItem.innerText = itemText;
    pizza.insertAdjacentHTML('beforeend', itemText)
    
  }

}

function createitemSause() {
  const sause = document.querySelector('.sause__item_wraper');

let sauseName = [
  "Соус горчичный",
  "Соус барбекю",
  "Соус сметанный",
  "Соус тысяча островов",
  "Соус кисло-сладкий",
  "Соус Терияки",
  "Соус сметанный",
  "Соус горчичный",
] ;

let sauseDescr = [
  "Масло растительное, вода, горчица, сахар, желток яичный, соль, уксус натуральный, семена горчицы",
  "Соус служит отличным антидепрессантом и антиоксидантом, в особенности за счет присутствия в нем томатов.",
  "Сливки нормализованные, закваска молочнокислых микроорганизмов",
  "Соус Тысяча островов очень хорошо сочетается с блюдами из птицы и мяса",
  "Соус состоит из сои, пшеницы, соли и воды. Соус очень темного цвета с резким запахом",
  "Сочетание мирин - сладкое рисовое вино, сакэ, мед или сахар, а также рыбный соус, чеснок, имбирь",
  "Сливки нормализованные, закваска молочнокислых микроорганизмов",
  "Соус служит отличным антидепрессантом и антиоксидантом, в особенности за счет присутствия в нем томатов.",
];


let sauseCosts = [
  "475 ₽",
  "395 ₽",
  "425 ₽",
  "395 ₽",
  "525 ₽",
  "525 ₽",
  "425 ₽",
  "475 ₽",
];


let sauseImg = [
  "images/sause/item01.png",
  "images/sause/item02.png",
  "images/sause/item03.png",
  "images/sause/item04.png",
  "images/sause/item05.png",
  "images/sause/item06.png",
  "images/sause/item07.png",
  "images/sause/item08.png",
];

let dataPrice = [
  "475",
  "395",
  "425",
  "395",
  "525",
  "525",
  "425",
  "475",
]

  for(let i=0; i <sauseName.length; i++) {
    if(i < 1) {
    let newItem = document.createElement('div');
    newItem.className = ('item sauce__item');
    const itemText = `<div class="item sauce__item">
    <div class="item__promo sause-item__promo">NEW</div>
    <img draggable="false"
    src="${(sauseImg[i])}"
    alt="sause"
    class="item__image sauce__image"
    />
    <div class="item__name sauce__name">${(sauseName[i])}</div>
    <div class="item__descr desserts__descr">${(sauseDescr[i])}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise sause__button">Выбрать</button>
    <div class="item__costs sauce__costst" data-price="${(dataPrice[i])}">${(sauseCosts[i])}</div>
    </div>
    </div>`;
    newItem.innerText = itemText;
    sause.insertAdjacentHTML('beforeend', itemText)
    } else if (i < 2 ) {
    let newItem = document.createElement('div');
    newItem.className = ('item sauce__item');
    const itemText = `<div class="item sauce__item">
    <div class="item__promo sause-item__promo">ХИТ</div>
    <img draggable="false"
    src="${(sauseImg[i])}"
    alt="sause"
    class="item__image sauce__image"
    />
    <div class="item__name sauce__name">${(sauseName[i])}</div>
    <div class="item__descr desserts__descr">${(sauseDescr[i])}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise sause__button">Выбрать</button>
    <div class="item__costs sauce__costst" data-price="${(dataPrice[i])}">${(sauseCosts[i])}</div>
    </div>
    </div>`;
    newItem.innerText = itemText;
    sause.insertAdjacentHTML('beforeend', itemText)
    } else {
      let newItem = document.createElement('div');
    newItem.className = ('item sauce__item');
    const itemText = `<div class="item sauce__item">
    <img draggable="false"
    src="${(sauseImg[i])}"
    alt="sause"
    class="item__image sauce__image"
    />
    <div class="item__name sauce__name">${(sauseName[i])}</div>
    <div class="item__descr desserts__descr">${(sauseDescr[i])}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise sause__button">Выбрать</button>
    <div class="item__costs sauce__costst" data-price="${(dataPrice[i])}">${(sauseCosts[i])}</div>
    </div>
    </div>`;
    newItem.innerText = itemText;
    sause.insertAdjacentHTML('beforeend', itemText)
    }
  }

}

function createitemSnacks() {
  const snacks = document.querySelector('.snacks__item_wrapper');

let snacksName = [
  "Картофель Фри",
  "Мясной Стартер",
  "Оладья из картофеля",
  "Додстер 'Песто'",
  "Острый Додстер",
  "Пармезан байтс",
  "Чизбургер-пицца",
  "Деревенская",
] ;

let snacksDescr = [
  "Ароматный запеченный картофель с итальянскими травами. Большая порция",
  "Сочное куриное филе в хрустящей панировке",
  "Запеченные оладьи из картофеля в панировке, 8 шт",
  "Горячая закуска с цыпленком, любимым соусом песто, томатами и моцареллой в тонкой зеленой лепешке",
  "Горячая закуска с цыпленком, перцем халапеньо, солеными огурчиками, томатами",
  "Пармезан байтс с добавлением сыра моцарелла и испанских трав",
  "Мясной соус болоньезе, моцарелла, красный лук, соленые огурчики",
  "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла",
];


let snacksCosts = [
  "315 ₽",
  "475 ₽",
  "425 ₽",
  "415 ₽",
  "225 ₽",
  "525 ₽",
  "395 ₽",
  "585 ₽",
];


let snacksImg = [
  "images/snacks/item01.png",
  "images/snacks/item02.png",
  "images/snacks/item03.png",
  "images/snacks/item04.png",
  "images/snacks/item05.png",
  "images/snacks/item06.png",
  "images/snacks/item07.png",
  "images/snacks/item08.png",
];

let dataPrice =[
  "315",
  "475",
  "425",
  "415",
  "225",
  "525",
  "395",
  "585",
]

  for(let i=0; i <snacksName.length; i++) {
    let newItem = document.createElement('div');
    newItem.className = ('item snacks__item');
    const itemText = `<div class="item snacks__item">
    <img draggable="false"
    src="${(snacksImg[i])}"
    alt="snacks"
    class="item__image snacks__image"
    />
    <div  class="item__name snacks__name">${(snacksName[i])}</div>
    <div  class="item__descr snacks__descr">${(snacksDescr[i])}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise snacks__button">Выбрать</button>
      <div  class="item__costs snacks__costs" data-price="${(dataPrice[i])}">${(snacksCosts[i])}</div>
    </div>
    </div>`;
    newItem.innerText = itemText;
    snacks.insertAdjacentHTML('beforeend', itemText)
  }
}

function createitemSushi() {
  const sushi = document.querySelector('.sushi__item_wrapper');

  let  sushiName = [
  "Филадельфия кранч",
  "Филадельфия крем-брюле",
  "Супер Филадельфия",
  "Тигр мама",
  "Тигр мама",
  "Супер Филадельфия",
  "Филадельфия кранч",
  "Филадельфия крем-брюле",
] ;

let sushiDescr = [
  "Семга, рис, сыр креметто, соус унаги, креветка, авокадо,чип...",
  "Сливочный сыр, семга татаки с&nbsp;тростниковым сахаром,соус&nbsp;у...",
  "Действительно много семги, сливочный сыр, огурец, рис, н...",
  "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
  "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
  "Действительно много семги, сливочный сыр, огурец, рис, н...",
  "Семга, рис, сыр креметто, соус унаги, креветка, авокадо,чип...",
  "Сливочный сыр, семга татаки с&nbsp;тростниковым сахаром,соус&nbsp;у...",
];


let sushiCosts = [
  "475 ₽",
  "395 ₽",
  "425 ₽",
  "525 ₽",
  "525 ₽",
  "425 ₽",
  "475 ₽",
  "395 ₽",
];


let sushiImg = [
  "images/sushi/item01.png",
  "images/sushi/item02.png",
  "images/sushi/item03.png",
  "images/sushi/item04.png",
  "images/sushi/item05.png",
  "images/sushi/item06.png",
  "images/sushi/item07.png",
  "images/sushi/item08.png",
];

let dataPrice = [
  "475",
  "395",
  "425",
  "525",
  "525",
  "425",
  "475",
  "395",
]

  for(let i=0; i <sushiName.length; i++) {
    let newItem = document.createElement('div');
    newItem.className = ('item sushi__item');
    const itemText = `
    <div  class="item sushi__item">
    <img draggable="false"
      src="${(sushiImg[i])}"
      alt="sushi"
      class="item__image sushi__image"
    />
    <div  class="item__name sushi__name">${(sushiName[i])}</div>
    <div class="item__descr sushi__descr"
    >${(sushiDescr[i])}</div
    >
    <div class="item__bottom_choise">
    <button class="btnchoise sushi__button">Выбрать</button>
    <div class="item__costs sushi__costs" data-price="${(dataPrice[i])}">${sushiCosts[i]}</div>
    </div>
    </div>`;
    newItem.innerText = itemText;
    sushi.insertAdjacentHTML('beforeend', itemText)
}
}




const tl = gsap.timeline();
function pageAnimIn(container) {
  return tl.to(container.querySelector('.preloaloder-round'), {
    scale: 2,
    duration: 1,
  })
}
function pageAnimOut(container) {
  return tl.from(container.querySelector('.preloaloder-round'), {
    scale: 2,
    duration: 1
  })
}

barba.init({
  preventRunning: true,
  debug: true,
  transitions: [{
    name: 'base',
    async leave(data) {
      await pageAnimIn(data.current.container)
      data.current.container.remove();
    },
    async enter(data) {
      await pageAnimOut(data.next.container)
    }
  }],
  views: [{
    namespace: 'home',
    beforeEnter() {
      const HTML = document.querySelector('html');
      const rootfilter = document.querySelector('.root');
      let body = document.querySelector('body');
      const btnfilter = document.querySelectorAll('.btnfilter ');
      const filterContainer = document.querySelector('.filter-container');
      const filter = document.querySelector('.filter');
      //scroll size
      const lockPaddingValue = window.innerWidth - document.documentElement.clientWidth + 'px';
      //main array
      //basket summ after reload page
      if (localStorage.getItem("basket")) {
        const basket = JSON.parse(localStorage.getItem("basket"));
        basketSumValue = basket;
        basketSum.innerText = `${basket} ₽`
      };
      window.scrollTo(0, 0);
      gsap.to('.assortment__item', {
        delay: 0.4,
        duration: 0.8,
        opacity: 1,
        stagger: 0.2
      });
      if (document.querySelector('.pizza__item_wrapper')) {
        createitemPizza();
      }
      if (document.querySelector('.sushi__item_wrapper')) {
        createitemSushi();
      }
      if (document.querySelector('.snacks__item_wrapper')) {
        createitemSnacks();
      }
      if (document.querySelector('.desserts__item_wrapper')) {
        createitemDessert();
      }
      if (document.querySelector('.drinks__item_wrapper')) {
        createitemDrink();
      }
      if (document.querySelector('.sause__item_wraper')) {
        createitemSause();
      }
      if (document.querySelector('.combo__item_wrapper')) {
        createitemCombo();
      }
      // if(document.querySelector('.indexpage')) {
      //   AOS.init();
      // }
      function renderPopupLogin(e) {
        if (e.target.closest('.nav-list__linkLOGIN')) {
          renderPopup();
        }
      }
      //hid filter PopUP
      document.addEventListener('click', (e) => {
        if (e.target == filterContainer) {
          body.style.paddingRight = '0px';
          filter.classList.remove("filter__open");
          filterContainer.classList.remove('filter-container__open');
          HTML.style.overflow = 'auto';
        }
      });
      //render filter PopUP
      btnfilter.forEach(btnfilter => {
        btnfilter.addEventListener('click', () => {
          body.style.paddingRight = lockPaddingValue;
          filterContainer.classList.add('filter-container__open');
          filter.classList.add("filter__open");
          HTML.style.overflow = 'hidden';
          filterContainer.style.backdropFilter = 'blur(15px)';
        });
      });
      //closed filter popUp(if click btn)
      document.addEventListener('click', (e) => {
        if (e.target.closest('.filter-header__button')) {
          filter.classList.toggle("filter__open");
          filterContainer.classList.toggle('filter-container__open');
          rootfilter.style.filter = 'blur(0px)';
          HTML.style.overflow = 'auto';
          e.stopPropagation();
        }
      });
      //close filter popUP on 'ESC'
      document.addEventListener('keydown', (e) => {
        if (e.keyCode === 27) {
          filter.classList.toggle("filter__open");
          filterContainer.classList.toggle('filter-container__open');
          HTML.style.overflow = 'auto';
        }
      });
    }
  }, {
    namespace: 'addItemCard2',
    beforeEnter() {
      window.scrollTo(0, 0);
      let datasetPrice = [];
      const additem = document.querySelector('.additem');
      const startitem = document.querySelector('#startitem');
      const basketSum = document.querySelector('.basket__sum');
      const promocodeCosts = document.querySelector('.promocode__costs');
      const allOrderCosts = document.querySelector('.addItemCard2-delivery-comment-delivery__costs');
      //add item on additemCard page
      document.addEventListener('click', addItemCard2);
      function addItemCard2(e) {
        if (e.target.closest('.addTOorder-item__button')) {
          const additem = document.querySelector('.additem');
          const startitem = document.querySelector('#startitem');
          const item = e.target.closest('.addTOorder__item');
          startitem.style.display = 'none';
          costs = e.target.innerText;
          imgSrc = item.querySelector('.addTOorder__image').getAttribute('src');
          title = item.querySelector('.addTOorder-item__title').innerText;
          descr = item.querySelector('.addTOorder-item__descr').innerText;
          if (data.length < 40) {
            price = costs.replace(/[a-zа-яё]/gi, '').trim();
            datasetPrice = Number(e.target.dataset['price']);
            let costsText = costs.replace(/[^+\d]/g, '').trim();
            data.push(imgSrc, title, descr, price, datasetPrice);
            localStorage.setItem("array", JSON.stringify(data));
            const addItemText = `
      <div class="addItemCard2__item">
      <div class="addItemCard2__item_wrap">
        <img
          class="addItemCard2-item__image"
          src=${imgSrc}
          alt="${title}"
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
    </div>
      `;
            additem.insertAdjacentHTML('afterend', addItemText);
            basketSum.innerText = `${basketSumValue} ₽`;
            basketSumValue += datasetPrice;
            promocodeCosts.innerText = `Итого ${basketSumValue} ₽`;
            allOrderCosts.innerText = `Итого ${basketSumValue} ₽`;
            basketSum.innerText = promocodeCosts.innerText.replace(/[^+\d]/g, '') + ' ' + '₽';
            localStorage.setItem("basket", JSON.stringify(basketSumValue));
          }
        }
      }
      // COUNT INCREMENT(+)
      document.addEventListener('click', incrementGoods);
      function incrementGoods(e) {
        if (e.target.closest('.order-counter__increment')) {
          const item = e.target.closest('.addItemCard2__item');
          const costsEl = item.querySelector('.addItemCard2-item__costs');
          const numberEl = item.querySelector('.order-counter__number');
          let priceSumm = costsEl.innerText.replace(/[^+\d]/g, '');
          let priceNumber = Number(priceSumm);
          let priceSingle = Number(costsEl.dataset['price']);
          numberEl.innerText = Number(numberEl.innerText) + 1;
          costsEl.innerText = String(priceNumber + priceSingle + ' ' + '₽');
          basketSumValue += priceSingle;
          promocodeCosts.innerText = `Итого ${basketSumValue} ₽`;
          allOrderCosts.innerText = `Итого ${basketSumValue} ₽`;
          basketSum.innerText = promocodeCosts.innerText.replace(/[^+\d]/g, '') + ' ' + '₽';
        }
      }
      // COUNT DECREMENT(-)
      document.addEventListener('click', decrementGoods);
      function decrementGoods(e) {
        if (e.target.closest('.order-counter__decrement') || basketSumValue == 0) {
          const item = e.target.closest('.addItemCard2__item');
          const costsEl = item.querySelector('.addItemCard2-item__costs');
          const numberEl = item.querySelector('.order-counter__number');
          let priceSumm = costsEl.innerText.replace(/[^+\d]/g, '');
          let priceNumber = Number(priceSumm);
          let priceSingle = Number(costsEl.dataset['price']);
          if ((Number(numberEl.innerText >= 1))) {
            numberEl.innerText = Number(numberEl.innerText) - 1;
            costsEl.innerText = String(priceNumber - priceSingle + ' ' + '₽');
            if (basketSumValue >= 0) {
              basketSumValue -= priceSingle;
              promocodeCosts.innerText = `Итого ${basketSumValue} ₽`;
              allOrderCosts.innerText = `Итого ${basketSumValue} ₽`;
              basketSum.innerText = promocodeCosts.innerText.replace(/[^+\d]/g, '') + ' ' + '₽';
            }
          }
        }
      }
      // item remove
      document.addEventListener('click', removeGoods);
      function removeGoods(e) {
        if (e.target.closest('.addItemCard2-item__remove')) {
          const item = e.target.closest('.addItemCard2__item');
          const itemCosts = item.querySelector('.order-item__sum').nextElementSibling.innerText;
          let itemNumber = Number(itemCosts.replace(/[^+\d]/g, ''));
          item.remove();
          if (promocodeCosts) {
            data.splice(data.length - 5);
            basketSumValue -= itemNumber;
            promocodeCosts.innerText = `Итого ${basketSumValue} ₽`;
            allOrderCosts.innerText = `Итого ${basketSumValue} ₽`;
            basketSum.innerText = promocodeCosts.innerText.replace(/[^+\d]/g, '') + ' ' + '₽';
            localStorage.setItem("basket", JSON.stringify(basketSumValue));
            localStorage.setItem("array", JSON.stringify(data));
          }
        }
      }
      //startpage content
      function ready() {
        if (localStorage.getItem("basket")) {
          if (startitem) {
            startitem.style.display = 'none';
          }
          for (let i = 0; i < data.length; i += 5) {
            resultName.push((data[i + 1]));
            resultDescr.push((data[i + 2]));
            resultImg.push((data[i + 0]));
            resultPrice.push((data[i + 3]));
            datasetPrice.push((data[i + 3]));
          }
          if (localStorage.getItem("basket")) {
            const basket = JSON.parse(localStorage.getItem("basket"));
            basketSumValue = basket;
            basketSum.innerText = `${basket} ₽`
            promocodeCosts.innerText = `Итого ${basket} ₽`;
            allOrderCosts.innerText = `Итого ${basket} ₽`;
          };
          console.log(data);
          console.log(resultName);
          if (document.querySelector('.wrap__addItemCard2')) {
            for (let i = 0; i < data.length / 5; i++) {
              const addItemText = `
                <div class="addItemCard2__item">
                <div class="addItemCard2__item_wrap">
                  <img
                    class="addItemCard2-item__image"
                    src= ${(resultImg[i])} 
                    alt="${(resultName[i])}"
                  />
                  <div class="addItemCard2__text">
                    <div class="addItemCard2-text__title">
                      ${(resultName[i])}
                    </div>
                    <div class="addItemCard2-text__descr"> ${(resultDescr[i])}</div>
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
              </div>
                `;
              additem.insertAdjacentHTML('afterend', addItemText);
            }
          }
        }
      }
      ready();
    }
  }, {
  namespace: 'menuDesserts',
  beforeEnter() {
    function createitemDessert() {
      const desserts = document.querySelector('.desserts__item_wrapper');
      let dessertName = ["Рулетики с брусникой", "Рулетики с корицей", "Картофельные оладьи", "Мороженое эскимо 'Магнат'", "Мороженое эскимо 'Магнат'", "Набор Мороженое -7шт", "Мороженое 'Мишка на полюсе'", "Картофельные оладьи", ];
      let dessertDescr = ["Это задорные сладкие рулетики, в которых закрутился микс из натуральной...", "Десерт, одобренный нашими бабушками. Горячие сладкие рулетики ....", "Запеченные оладьи из картофеля в панировке, 8 шт", "Мороженое (сливки, молоко цельное, вода питьевая, сахар, молоко ...", "Мороженое (сливки, молоко цельное, вода питьевая, сахар, молоко ...", "Мороженое (сливки, молоко цельное, вода питьевая, сахар, молоко ...", "Мороженое (сливки, молоко цельное, вода питьевая, сахар, молоко ...", "Запеченные оладьи из картофеля в панировке, 8 шт", ];
      let dessertCosts = ["175 ₽", "125 ₽", "95 ₽", "75 ₽", "115 ₽", "225 ₽", "110 ₽", "100 ₽", ];
      let dessertImg = ["images/desserts/item01.png", "images/desserts/item02.png", "images/desserts/item03.png", "images/desserts/item04.png", "images/desserts/item05.png", "images/desserts/item06.png", "images/desserts/item07.png", "images/desserts/item08.png", ];
      let dessertPrice = ["175", "125", "95", "75", "115", "225", "110", "100", ];
      for (let i = 0; i < dessertName.length; i++) {
        let newItem = document.createElement('div');
        newItem.className = ('desserts__item');
        const itemText = `
    <div class="item desserts__item">
    <img draggable="false"
      src="${(dessertImg[i])}"
      alt="desserts"
      class="item__image desserts__image"
    />
    <div class="item__name desserts__name"
    >${(dessertName[i])}</div
    >
    <div class="item__descr desserts__descr"
    >${(dessertDescr[i])}</div
    >
    <div class="item__bottom_choise">
    <button  class="btnchoise desserts__button">Выбрать</button>
    <div class="item__costs desserts__costst" data-price="${(dessertPrice[i])}">${(dessertCosts[i])}</div>
    </div>
    </div>`;
        newItem.innerText = itemText;
        desserts.insertAdjacentHTML('beforeend', itemText)
      }
    }
    createitemDessert();
  }
}, {
  namespace: 'menuCombo',
  beforeEnter() {
    function createitemCombo() {
      const combo = document.querySelector('.combo__item_wrapper');
      let comboName = ["Combo pizza", "Combo triple pizza", "Double pizza and free drink", "Three dodster + one free", "Combo triple pizza", "Combo double pizza'", "4 dodster combo", "Two pizza and your drink", ];
      let comboDescr = ["2 пиццы   25 см  на выбор. Для компании из 2–4 человек", "3 пиццы 30 см на любой вкус. Для компании из 5–10 человек", "2 пиццы и напиток 2 пиццы 25 см и напиток на выбор. Для компании из 2–4 человек", "Легендарная горячая закуска с цыплёнком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке", "3 пиццы 30 см на любой вкус. Для компании из 5–10 человек", "2 пиццы   25 см  на выбор. Для компании из 2–4 человек", "Легендарная горячая закуска с цыплёнком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке", "2 пиццы и напиток 2 пиццы 25 см и напиток на выбор. Для компании из 2–4 человек", ];
      let comboCosts = ["215 ₽", "475 ₽", "325 ₽", "445 ₽", "725 ₽", "355 ₽", "365 ₽", "425 ₽", ];
      let comboImg = ["images/combo/item01.png", "images/combo/item02.png", "images/combo/item03.png", "images/combo/item04.png", "images/combo/item05.png", "images/combo/item06.png", "images/combo/item07.png", "images/combo/item08.png", ];
      let combsosale = ["до 22%", "до 18%", "до 10%", "до 15%", "до 18%", "до 22%", "до 15%", "до 10%", ]
      let dataPrice = ["215", "475", "325", "445", "725", "355", "365", "425", ]
      for (let i = 0; i < comboName.length; i++) {
        let newItem = document.createElement('div');
        newItem.className = ('item combo__item');
        const itemText = `<div class="item combo__item">
    <div class="item__sale item-sale__combo">${(combsosale[i])}</div>
    <img draggable="false"
    src="${(comboImg[i])}"
    alt="combo"
    class="item__image combo__image"/>
    <div class="item__name combo__name">${(comboName[i])}</div>
    <div class="item__descr combo__descr">${(comboDescr[i])}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise combo__button">Выбрать</button>
    <div class="item__costs combo__costs" data-price=">${(dataPrice[i])}">${(comboCosts[i])}</div>
    </div>
    </div>`;
        newItem.innerText = itemText;
        combo.insertAdjacentHTML('beforeend', itemText);
      }
    }
    createitemCombo();
  }
}, {
  namespace: 'menuDrink',
  beforeEnter() {
    function createitemDrink() {
      const drinks = document.querySelector('.drinks__item_wrapper');
      let drinkName = ["Adrenaline Game", "Pepsi dark", "Pepsi light", "Pepsi cherry", "Pepsi classic", "Mirinda", "Adrenaline Game fuel", "Pepsi dark light", ];
      let drinkDescr = ["Напиток безалкогольный, тонизирующий, газированный. Ароматизированный....", "Торговая марка, принадлежащая американской компании PepsiCo, безалкогольный....", "Безалкогольный газированный напиток, производимый американской компанией PepsiCo....", "Торговая марка, принадлежащая американской компании PepsiCo, безалкогольный....", "Безалкогольный газированный напиток, производимый американской компанией PepsiCo....", "Торговая марка, принадлежащая американской компании PepsiCo, безалкогольный.....", "Напиток безалкогольный, тонизирующий, газированный. Ароматизированный....", "Торговая марка, принадлежащая американской компании PepsiCo, безалкогольный....", ];
      let drinkCosts = ["475 ₽", "395 ₽", "425 ₽", "525 ₽", "425 ₽", "525 ₽", "425 ₽", "525 ₽", ];
      let drinkImg = ["images/drinks/item07.png", "images/drinks/item02.png", "images/drinks/item03.png", "images/drinks/item04.png", "images/drinks/item05.png", "images/drinks/item06.png", "images/drinks/item07.png", "images/drinks/item08.png", ];
      let dataPrice = ["475", "395", "425", "525", "425", "525", "425", "525", ];
      for (let i = 0; i < drinkName.length; i++) {
        let newItem = document.createElement('div');
        newItem.className = ('drinks__item');
        const itemText = `
    <div class="item drinks__item">
    <img draggable="false"
      src="${(drinkImg[i])}"
      alt="drink"
      class="item__image drinks__image"
    />
    <div  class="item__name drinks__name">${(drinkName[i])}</div>
    <div  class="item__descr drinks__descr"
    >${(drinkDescr[i])}</div
    >
    <div class="item__bottom_choise">
    <button class="btnchoise drinks__button">Выбрать</button>
    <div class="item__costs drinks__costst" data-price="${(dataPrice[i])}">${(drinkCosts[i])}</div>
    </div>
    </div>`;
        newItem.innerText = itemText;
        drinks.insertAdjacentHTML('beforeend', itemText)
      }
    }
    createitemDrink();
  }
}, {
  namespace: 'menuPizza',
  beforeEnter() {
    function createitemPizza() {
      const pizza = document.querySelector('.pizza__item_wrapper');
      let pizzaName = ["Чикен Сладкий Чили", "EASY PEASY огуречный расколбас", "EASY PEASY чикен а-ля хрен", "EASY PEASY 4&nbsp;сезона", "EASY PEASY 4&nbsp;сезона", "EASY PEASY чикен а-ля хрен", "EASY PEASY Сладкий Чили", "EASY PEASY огуречный расколбас", ];
      let pizzaDescr = ["Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...", "Курица, Лук, Перец Халапеньо..", "Курица, Лук, Соус Карбонара...", "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...", "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...", "Курица, Лук, Соус Карбонара...", "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...", "Курица, Лук, Перец Халапеньо...", ];
      let pizzaCosts = ["от 399 ₽", "от 549 ₽", "от 249 ₽", "от 630 ₽", "от 630 ₽", "от 249 ₽", "от 399 ₽", "от 549 ₽", ];
      let pizzaImg = ["images/pizza/pizza01.png", "images/pizza/pizza02.png", "images/pizza/pizza03.png", "images/pizza/pizza04.png", "images/pizza/pizza05.png", "images/pizza/pizza06.png", "images/pizza/pizza07.png", "images/pizza/pizza08.png", ];
      let dataPrice = ["399", "549", "249", "630", "630", "249", "399", "549", ];
      for (let i = 0; i < pizzaName.length; i++) {
        let newItem = document.createElement('div');
        newItem.className = ('item pizza__item');
        const itemText = `
    <div class="item pizza__item">
    <img draggable="false"
    src="${(pizzaImg[i])}"
    alt="pizza"
    class="item__image pizza__image"
    />
    <div  class="item__name pizza__name"
    >${(pizzaName[i])}</div>
    <div class="item__descr pizza__descr"
    >${(pizzaDescr[i])}</div>
    <div class="item__bottom_choise">
    <div class="btnchoise pizza__button">Выбрать</div>
    <div class="item__costs pizza__costs" data-price="${(dataPrice[i])}">${(pizzaCosts[i])}</div>
    </div>
    </div>`;
        newItem.innerText = itemText;
        pizza.insertAdjacentHTML('beforeend', itemText)
      }
    }
    createitemPizza();
  }
}, {
  namespace: 'menuSause',
  beforeEnter() {
    function createitemSause() {
      const sause = document.querySelector('.sause__item_wraper');
      let sauseName = ["Соус горчичный", "Соус барбекю", "Соус сметанный", "Соус тысяча островов", "Соус кисло-сладкий", "Соус Терияки", "Соус сметанный", "Соус горчичный", ];
      let sauseDescr = ["Масло растительное, вода, горчица, сахар, желток яичный, соль, уксус натуральный, семена горчицы", "Соус служит отличным антидепрессантом и антиоксидантом, в особенности за счет присутствия в нем томатов.", "Сливки нормализованные, закваска молочнокислых микроорганизмов", "Соус Тысяча островов очень хорошо сочетается с блюдами из птицы и мяса", "Соус состоит из сои, пшеницы, соли и воды. Соус очень темного цвета с резким запахом", "Сочетание мирин - сладкое рисовое вино, сакэ, мед или сахар, а также рыбный соус, чеснок, имбирь", "Сливки нормализованные, закваска молочнокислых микроорганизмов", "Соус служит отличным антидепрессантом и антиоксидантом, в особенности за счет присутствия в нем томатов.", ];
      let sauseCosts = ["475 ₽", "395 ₽", "425 ₽", "395 ₽", "525 ₽", "525 ₽", "425 ₽", "475 ₽", ];
      let sauseImg = ["images/sause/item01.png", "images/sause/item02.png", "images/sause/item03.png", "images/sause/item04.png", "images/sause/item05.png", "images/sause/item06.png", "images/sause/item07.png", "images/sause/item08.png", ];
      let dataPrice = ["475", "395", "425", "395", "525", "525", "425", "475", ]
      for (let i = 0; i < sauseName.length; i++) {
        if (i < 1) {
          let newItem = document.createElement('div');
          newItem.className = ('item sauce__item');
          const itemText = `<div class="item sauce__item">
    <div class="item__promo sause-item__promo">NEW</div>
    <img draggable="false"
    src="${(sauseImg[i])}"
    alt="sause"
    class="item__image sauce__image"
    />
    <div class="item__name sauce__name">${(sauseName[i])}</div>
    <div class="item__descr desserts__descr">${(sauseDescr[i])}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise sause__button">Выбрать</button>
    <div class="item__costs sauce__costst" data-price="${(dataPrice[i])}">${(sauseCosts[i])}</div>
    </div>
    </div>`;
          newItem.innerText = itemText;
          sause.insertAdjacentHTML('beforeend', itemText)
        } else if (i < 2) {
          let newItem = document.createElement('div');
          newItem.className = ('item sauce__item');
          const itemText = `<div class="item sauce__item">
    <div class="item__promo sause-item__promo">ХИТ</div>
    <img draggable="false"
    src="${(sauseImg[i])}"
    alt="sause"
    class="item__image sauce__image"
    />
    <div class="item__name sauce__name">${(sauseName[i])}</div>
    <div class="item__descr desserts__descr">${(sauseDescr[i])}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise sause__button">Выбрать</button>
    <div class="item__costs sauce__costst" data-price="${(dataPrice[i])}">${(sauseCosts[i])}</div>
    </div>
    </div>`;
          newItem.innerText = itemText;
          sause.insertAdjacentHTML('beforeend', itemText)
        } else {
          let newItem = document.createElement('div');
          newItem.className = ('item sauce__item');
          const itemText = `<div class="item sauce__item">
    <img draggable="false"
    src="${(sauseImg[i])}"
    alt="sause"
    class="item__image sauce__image"
    />
    <div class="item__name sauce__name">${(sauseName[i])}</div>
    <div class="item__descr desserts__descr">${(sauseDescr[i])}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise sause__button">Выбрать</button>
    <div class="item__costs sauce__costst" data-price="${(dataPrice[i])}">${(sauseCosts[i])}</div>
    </div>
    </div>`;
          newItem.innerText = itemText;
          sause.insertAdjacentHTML('beforeend', itemText)
        }
      }
    }
    createitemSause()
  }
}, {
  namespace: 'menuSnacks',
  beforeEnter() {
    function createitemSnacks() {
      const snacks = document.querySelector('.snacks__item_wrapper');
      let snacksName = ["Картофель Фри", "Мясной Стартер", "Оладья из картофеля", "Додстер 'Песто'", "Острый Додстер", "Пармезан байтс", "Чизбургер-пицца", "Деревенская", ];
      let snacksDescr = ["Ароматный запеченный картофель с итальянскими травами. Большая порция", "Сочное куриное филе в хрустящей панировке", "Запеченные оладьи из картофеля в панировке, 8 шт", "Горячая закуска с цыпленком, любимым соусом песто, томатами и моцареллой в тонкой зеленой лепешке", "Горячая закуска с цыпленком, перцем халапеньо, солеными огурчиками, томатами", "Пармезан байтс с добавлением сыра моцарелла и испанских трав", "Мясной соус болоньезе, моцарелла, красный лук, соленые огурчики", "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла", ];
      let snacksCosts = ["315 ₽", "475 ₽", "425 ₽", "415 ₽", "225 ₽", "525 ₽", "395 ₽", "585 ₽", ];
      let snacksImg = ["images/snacks/item01.png", "images/snacks/item02.png", "images/snacks/item03.png", "images/snacks/item04.png", "images/snacks/item05.png", "images/snacks/item06.png", "images/snacks/item07.png", "images/snacks/item08.png", ];
      let dataPrice = ["315", "475", "425", "415", "225", "525", "395", "585", ]
      for (let i = 0; i < snacksName.length; i++) {
        let newItem = document.createElement('div');
        newItem.className = ('item snacks__item');
        const itemText = `<div class="item snacks__item">
    <img draggable="false"
    src="${(snacksImg[i])}"
    alt="snacks"
    class="item__image snacks__image"
    />
    <div  class="item__name snacks__name">${(snacksName[i])}</div>
    <div  class="item__descr snacks__descr">${(snacksDescr[i])}</div>
    <div class="item__bottom_choise">
    <button class="btnchoise snacks__button">Выбрать</button>
      <div  class="item__costs snacks__costs" data-price="${(dataPrice[i])}">${(snacksCosts[i])}</div>
    </div>
    </div>`;
        newItem.innerText = itemText;
        snacks.insertAdjacentHTML('beforeend', itemText)
      }
    }
    createitemSnacks()
  }
}, {
  namespace: 'menuSushi',
  beforeEnter() {
    function createitemSushi() {
      const sushi = document.querySelector('.sushi__item_wrapper');
      let sushiName = ["Филадельфия кранч", "Филадельфия крем-брюле", "Супер Филадельфия", "Тигр мама", "Тигр мама", "Супер Филадельфия", "Филадельфия кранч", "Филадельфия крем-брюле", ];
      let sushiDescr = ["Семга, рис, сыр креметто, соус унаги, креветка, авокадо,чип...", "Сливочный сыр, семга татаки с&nbsp;тростниковым сахаром,соус&nbsp;у...", "Действительно много семги, сливочный сыр, огурец, рис, н...", "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...", "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...", "Действительно много семги, сливочный сыр, огурец, рис, н...", "Семга, рис, сыр креметто, соус унаги, креветка, авокадо,чип...", "Сливочный сыр, семга татаки с&nbsp;тростниковым сахаром,соус&nbsp;у...", ];
      let sushiCosts = ["475 ₽", "395 ₽", "425 ₽", "525 ₽", "525 ₽", "425 ₽", "475 ₽", "395 ₽", ];
      let sushiImg = ["images/sushi/item01.png", "images/sushi/item02.png", "images/sushi/item03.png", "images/sushi/item04.png", "images/sushi/item05.png", "images/sushi/item06.png", "images/sushi/item07.png", "images/sushi/item08.png", ];
      let dataPrice = ["475", "395", "425", "525", "525", "425", "475", "395", ]
      for (let i = 0; i < sushiName.length; i++) {
        let newItem = document.createElement('div');
        newItem.className = ('item sushi__item');
        const itemText = `
    <div  class="item sushi__item">
    <img draggable="false"
      src="${(sushiImg[i])}"
      alt="sushi"
      class="item__image sushi__image"
    />
    <div  class="item__name sushi__name">${(sushiName[i])}</div>
    <div class="item__descr sushi__descr"
    >${(sushiDescr[i])}</div
    >
    <div class="item__bottom_choise">
    <button class="btnchoise sushi__button">Выбрать</button>
    <div class="item__costs sushi__costs" data-price="${(dataPrice[i])}">${sushiCosts[i]}</div>
    </div>
    </div>`;
        newItem.innerText = itemText;
        sushi.insertAdjacentHTML('beforeend', itemText)
      }
    }
    createitemSushi();
  }
}, {
  namespace: 'myAcc',
  beforeEnter() {
    document.addEventListener('click', (e) => {
      if (e.target == accountProfileheaderbtnSet) {
        window.location.href = 'myAcc.html';
      }
    })
    document.addEventListener('click', (e) => {
      if (e.target == accountProfileheaderbtn) {
        window.location.href = 'accProfile.html';
      }
    })
  }
}, {
  namespace: 'myAcc2',
  beforeEnter() {
    document.addEventListener('click', (e) => {
      if (e.target == accountProfileheaderbtnSet) {
        window.location.href = 'myAcc.html';
      }
    })
    document.addEventListener('click', (e) => {
      if (e.target == accountProfileheaderbtn) {
        window.location.href = 'accProfile.html';
      }
    })
  }
}, {
  namespace: 'myAcc3',
  beforeEnter() {
    document.addEventListener('click', (e) => {
      if (e.target == accountProfileheaderbtnSet) {
        window.location.href = 'myAcc.html';
      }
    })
    document.addEventListener('click', (e) => {
      if (e.target == accountProfileheaderbtn) {
        window.location.href = 'accProfile.html';
      }
    })
  }
}]
})



