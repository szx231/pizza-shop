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





function createSauseItem () {
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

{/* <div class="item__promo sause-item__promo">NEW</div>
<div class="item__promo sause-item__promo">ХИТ</div> */}


export default createSauseItem;