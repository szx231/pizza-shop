const HTML = document.querySelector('html');
const rootfilter = document.querySelector('.root');
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
          <a href="addItemCard2.html" class="accLoginfilter__button">Войти</a>
          <div class="accLoginfilter__agreement">
            Продолжая, вы соглашаетесь со сбором и обработкой персональных
            данных и пользовательским соглашением
          </div>
        </div>
      </div>
    </div>`
document.body.insertAdjacentHTML('beforeend', popup);
HTML.style.overflow = 'hidden';
const accLoginfilterwrap = document.querySelector('.accLoginfilter__wrap');

document.addEventListener('click', function(event) {
  if(event.target == accLoginfilterwrap) {
    console.log('1');
    accLoginfilterwrap.remove();
    rootfilter.style.filter = 'blur(0px)';
    HTML.style.overflow = 'auto';
  }
});
}


document.addEventListener('keydown', function(event) {
  if(event.keyCode === 27){
    Node.removeChild;
    rootfilter.style.filter = 'blur(0px)';
    HTML.style.overflow = 'auto';
  }
});


export default renderPopup;