const HTML = document.querySelector('html');
let body = document.querySelector('body');
function renderPopup() {
  const lockPaddingValue = window.innerWidth - document.documentElement.clientWidth + 'px';
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
          <a href="myAcc.html" class="accLoginfilter__button">Войти</a>
          <div class="accLoginfilter__agreement">
            Продолжая, вы соглашаетесь со сбором и обработкой персональных
            данных и пользовательским соглашением
          </div>
        </div>
      </div>
    </div>`
document.body.insertAdjacentHTML('beforeend', popup);
HTML.style.overflow = 'hidden';
body.style.paddingRight = lockPaddingValue;
const accLoginfilterwrap = document.querySelector('.accLoginfilter__wrap');
accLoginfilterwrap.style.backdropFilter =  'blur(15px)';
const accLoginfilterButtonClose = document.querySelector('.accLoginfilter__buttonClose');
const accLoginfilterButton = document.querySelector('.accLoginfilter__button');
const accLoginfilter = document.querySelector('.accLoginfilter');
setTimeout(() => {
  accLoginfilter.style.opacity = '1';
}, 100);


function removePopUpLogin() {
  accLoginfilter.style.opacity = '0';
  accLoginfilter.addEventListener('transitionend', () => accLoginfilterwrap.remove());
  setTimeout(() => {
    accLoginfilterwrap.style.backdropFilter = 'blur(0px)';
    HTML.style.overflow = 'auto';
    body.style.paddingRight = '0px';
  }, 450);
};

document.addEventListener('keydown', function(e) {
  if(e.keyCode === 27){
    removePopUpLogin();
  }
});

document.addEventListener('click', function(e) {
  if(e.target == accLoginfilterwrap) {
    removePopUpLogin();
  }
});

document.addEventListener('click', (e) => {
  if(e.target == accLoginfilterButtonClose) {
    removePopUpLogin();
  }
})

document.addEventListener('click', (e) => {
  if(e.target == accLoginfilterButton) {
    removePopUpLogin();
  }
})
}



export default renderPopup;