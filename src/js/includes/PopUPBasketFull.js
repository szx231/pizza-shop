function basketIsFull() {
let newItem = document.createElement('div');
newItem.className = 'basketIsFull';
newItem.innerText = 'Корзина заполнена!'
document.body.insertAdjacentElement('beforeend', newItem);
setTimeout(() => {
  newItem.classList.add('basketIsFull-hidden');
}, 1500);
}


export default basketIsFull;