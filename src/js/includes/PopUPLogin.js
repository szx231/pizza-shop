
const listItemLogin = document.querySelector('.list-item_login');
const HTML = document.querySelector('html');
console.log(listItemLogin);
function renderPopup() {
  const popup = `
    <div class="accLoginfilter__wrap">
      <div class="accLoginfilter">
        <div class="accLoginfilter__container">
          <div class="accLoginfilter__title">Вход в аккаунт</div>
          <button class="accLoginfilter__buttonClose"></button>
          <div class="accLoginfilter__descr">
            Сможете быстро оформлять заказы, использовать бонусы
          </div>
          <div class="accLoginfilter__number">Номер телефона</div>
          <input
            placeholder="+7"
            type="text"
            class="accLoginfilter-number__input"
          />
          <div class="accLoginfilter__button">Войти</div>
          <div class="accLoginfilter__agreement">
            Продолжая, вы соглашаетесь со сбором и обработкой персональных
            данных и пользовательским соглашением
          </div>
        </div>
      </div>
    </div>`
  document.body.insertAdjacentHTML('beforeend', popup);
  HTML.style.overflow = 'hidden';
}


document.addEventListener('keydown', function(event) {
  if(event.keyCode === 27){
    Node.removeChild;
    rootfilter.style.filter = 'blur(0px)';
    HTML.style.overflow = 'auto';
  }
});

listItemLogin.addEventListener('click', renderPopup);

// renderPopup();

export default renderPopup;