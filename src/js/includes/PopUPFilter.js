const HTML = document.querySelector('html');
let body = document.querySelector('body');

function renderFilter() {
  const lockPaddingValue = window.innerWidth - document.documentElement.clientWidth + 'px';
  const filterHTML = `
<div class="filter-container">
  <div class="filter">
    <div class="fitler-wrap">
      <div class="filter__header">
        <h2 class="filter-header__title">Фильтры</h2>
        <button type="submit" class="filter-header__button"> <img draggable="false" src="images/filterPAGE/filter__icon_btn.svg" alt="img" class="header-button__image" /> </button>
      </div>
      <form action="" class="popup__form">
        <h3 class="filter__subtitle">Общее</h3>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Хит </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Новинка </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">С мясом </span> </label>
        </div>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Вегетарианская </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">С курицей </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Без лука </span> </label>
        </div>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">С грибами </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">С морепродуктами </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Барбекью </span> </label>
        </div>
        <h3 class="filter__subtitle">Сыр</h3>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Реджанито </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Моцарелла </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Чеддер </span> </label>
        </div>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">С голубой плесенью </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Смесь итальянских сыров </span> </label>
        </div>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Мягкий молодой сыр </span> </label>
        </div>
        <h3 class="filter__subtitle">Мясо</h3>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Пепперони </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Свинина </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Ветчина </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Бекон </span> </label>
        </div>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Говядина </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Чоризо </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Колбаски </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Куриная грудка </span> </label>
        </div>
        <h3 class="filter__subtitle">Компонент</h3>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Креветка </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Ананасы </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Шампиньоны </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Лук </span> </label>
        </div>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Перец халапеньо </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Орегано </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Зеленый перец </span> </label>
        </div>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Томаты </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Чеснок </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Красный перец </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Оливки </span> </label>
        </div>
        <div class="filter__rowbutton">
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Маслины </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Клубника </span> </label>
          <label class="filter-rowbutton__label">
            <input class="filter-rowbutton__input" type="checkbox" /> <span class="filter-rowbutton__span">Смесь итальянских трав </span> </label>
        </div>
        <button type="reset" class="filter__deliverybtn filter__btnreset"> Сбросить </button>
        <button type="submit" class="filter__deliverybtn filter__btnapply"> Применить </button>
      </form>
    </div>
  </div>
</div>
`
  document.body.insertAdjacentHTML('beforeend', filterHTML);
  body.style.paddingRight = lockPaddingValue;
  HTML.style.overflow = 'hidden';
  const filterContainer = document.querySelector('.filter-container');
  setTimeout(() => {
    filterContainer.style.opacity = '1';
  }, 100);
}

function removePopUpFilter() {
  const filterContainer = document.querySelector('.filter-container');
  filterContainer.style.opacity = '0';
  filterContainer.addEventListener('transitionend', () => filterContainer.remove());
  setTimeout(() => {
    body.style.paddingRight = '0px';
    HTML.style.overflow = 'auto';
  }, 450);
};

  //hid filter PopUP
document.addEventListener('click', (e) => {
  let filterContainer = document.querySelector('.filter-container');
  if (e.target == filterContainer) {
    removePopUpFilter();
  }
});

//closed filter popUp(if click btn)
document.addEventListener('click', (e) => {
  if (e.target.closest('.filter-header__button')) {
    let filterContainer = document.querySelector('.filter-container');
    removePopUpFilter()
  }
});

//close filter popUP on 'ESC'
document.addEventListener('keydown', (e) => {
  let filterContainer = document.querySelector('.filter-container');
  if (e.keyCode === 27 || filterContainer) {
    removePopUpFilter()
  }
});

export default renderFilter;