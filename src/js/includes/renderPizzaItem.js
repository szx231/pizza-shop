const pizza = document.querySelector('.pizza__item_wrapper');

let pizzaName = [
  "Чикен Сладкий Чили",
  "EASY PEASY огуречный расколбас",
  "EASY PEASY чикен а-ля хрен",
  "4&nbsp;сезона",
  "4&nbsp;сезона",
  "EASY PEASY чикен а-ля хрен",
  "Чикен Сладкий Чили",
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




function createPizzaiItem () {
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



export default createPizzaiItem;