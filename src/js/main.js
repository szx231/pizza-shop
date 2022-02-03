import '../styles/style.css'

import './includes/test'

const bodyfilter = document.querySelectorAll('body');
const rootfilter = document.querySelector('.root');
const modalfilter = document.querySelector('.filter');


bodyfilter.forEach(item => {
  item.addEventListener('click', event => {
    rootfilter.style.filter = 'blur(10px)';
    modalfilter.style.display = 'block';
  })
})