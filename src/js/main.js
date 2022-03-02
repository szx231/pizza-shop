import '../styles/style.css'
import anime from 'animejs/lib/anime.es.js';
import datepicker from 'js-datepicker'
import './includes/test'


const bodyfilter = document.querySelectorAll('body');
const rootfilter = document.querySelector('.root');
const modalfilter = document.querySelector('.filter');
const loginProfile = document.querySelector('.nav-list__linkLOGIN');


loginProfile.addEventListener('click', function() {
  console.log('1');
  rootfilter.style.filter = 'blur(10px)';
  
})

