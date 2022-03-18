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

function createComboItem () {
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
    combo.insertAdjacentHTML('beforeend', itemText)
  }
}





export default createComboItem;