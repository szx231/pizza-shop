import '../styles/style.css'
import anime from 'animejs/lib/anime.es.js';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import './includes/test'


const bodyfilter = document.querySelectorAll('body');
const rootfilter = document.querySelector('.root');
const modalfilter = document.querySelector('.filter');


// bodyfilter.forEach(item => {
//   item.addEventListener('click', event => {
//     rootfilter.style.filter = 'blur(10px)';
//     modalfilter.style.display = 'block';
//   })
// })

// const logo = document.querySelectorAll('.delevery__logo');

// logo.forEach(item => {
//   item.addEventListener('click', event => {
//     rootfilter.style.filter = 'blur(10px)';
//     modalfilter.style.display = 'block';
//   })
// })


// let a = function () {
//   anime({
//   targets: '.dir-alternate',
//   translateX: 250,
//   direction: 'alternate',
//   easing: 'easeInOutSine'
// });
// }