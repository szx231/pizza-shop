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
  "Напиток безалкогольный, тонизирующий, газированный. Ароматизированный. Пастеризованный",
  "Торговая марка, принадлежащая американской компании PepsiCo, безалкогольный сильногазированный прохладительный напиток.",
  "Безалкогольный газированный напиток, производимый американской компанией PepsiCo.",
  "Торговая марка, принадлежащая американской компании PepsiCo, безалкогольный сильногазированный прохладительный напиток.",
  "Безалкогольный газированный напиток, производимый американской компанией PepsiCo.",
  "Торговая марка, принадлежащая американской компании PepsiCo, безалкогольный сильногазированный прохладительный напиток.",
  "Напиток безалкогольный, тонизирующий, газированный. Ароматизированный. Пастеризованный",
  "Торговая марка, принадлежащая американской компании PepsiCo, безалкогольный сильногазированный прохладительный напиток.",
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



function createDrinkIItem () {
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



export default createDrinkIItem;