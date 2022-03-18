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



function createsnackItem () {
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



export default createsnackItem;