const desserts = document.querySelector('.desserts__item_wrapper');

let dessertName = [
  "Рулетики с брусникой",
  "Рулетики с корицей",
  "Картофельные оладьи",
  "Мороженое эскимо 'Магнат'",
  "Мороженое эскимо 'Магнат'",
  "Набор Мороженое эскимо Мини -7шт",
  "Мороженое эскимо ванильное 'Мишка на полюсе'",
  "Картофельные оладьи",
] ;

let dessertDescr = [
  "Это задорные сладкие рулетики, в которых закрутился микс из натуральной брусники и сгущенного молока",
  "Десерт, одобренный нашими бабушками. Горячие сладкие рулетики с пряной корицей и сахаром",
  "Запеченные оладьи из картофеля в панировке, 8 шт",
  "Мороженое (сливки, молоко цельное, вода питьевая, сахар, молоко цельное сгущенное с сахаром, молоко сухое обезжиренное, глюкозный сироп, масло сливочное...",
  "Мороженое (сливки, молоко цельное, вода питьевая, сахар, молоко цельное сгущенное с сахаром, молоко сухое обезжиренное, глюкозный сироп, масло сливочное...",
  "Мороженое (сливки, молоко цельное, вода питьевая, сахар, молоко цельное сгущенное с сахаром, молоко сухое обезжиренное, глюкозный сироп, масло сливочное...",
  "Мороженое (сливки, молоко цельное, вода питьевая, сахар, молоко цельное сгущенное с сахаром, молоко сухое обезжиренное, глюкозный сироп, масло сливочное...",
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



function createDessertIItem () {
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



export default createDessertIItem;