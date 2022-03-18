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


function createSushiItem () {
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



export default createSushiItem;