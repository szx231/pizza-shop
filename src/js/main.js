import '../styles/style.css'
import anime from 'animejs/lib/anime.es.js';
import datepicker from 'js-datepicker'
import './includes/test'

const body = document.querySelector('body');
const HTML = document.querySelector('html');
const lockPaddingValue = window.innerWidth - document.querySelector('.root').offsetWidth + 'px';
console.log(lockPaddingValue);

const bodyfilter = document.querySelectorAll('body');
const rootfilter = document.querySelector('.root');
const loginProfile = document.querySelector('.nav-list__linkLOGIN');
const btnfilter  = document.querySelectorAll('.btnfilter ');
const filterContainer = document.querySelector('.filter-container');
const filter = document.querySelector('.filter');
const filterHeaderButton = document.querySelector('.filter-header__button');


//count 
const orderCounterPlus = document.querySelectorAll('.order-counter__plus');
const orderCounterMinus = document.querySelectorAll('.order-counter__minus');
const orderCounterNumber = document.querySelector('.order-counter__number');

console.log(orderCounterPlus);
console.log(orderCounterMinus);
console.log(orderCounterNumber);

orderCounterPlus.forEach(orderCounterPlus => {
  orderCounterPlus.addEventListener('click', (event) => {
    console.log('1');
  })
})

function additemCard3Count () {
  number = 1;
  if(number > 1) {
    number++;
  }
}

loginProfile.addEventListener('click', () => {
  rootfilter.style.filter = 'blur(10px)';
})

document.addEventListener('click', function(event) {
  if(event.target == filterContainer) {
    filter.classList.remove("filter__open");
    filterContainer.classList.remove('filter-container__open');
    rootfilter.style.filter = 'blur(0px)';
    HTML.style.overflow = 'auto';
  }
})


document.addEventListener('keydown', function(event) {
  if(event.keyCode === 27){
    filter.classList.remove("filter__open");
    filterContainer.classList.remove('filter-container__open');
    rootfilter.style.filter = 'blur(0px)';
    HTML.style.overflow = 'auto';
  }
});

btnfilter.forEach(btnfilter => {
  btnfilter.addEventListener('click', (event) => {
    filterContainer.classList.add('filter-container__open');
    filter.classList.add("filter__open");
    rootfilter.style.filter = 'blur(10px)';
    HTML.style.overflow = 'hidden';
    body.style.paddingRight = lockPaddingValue;
  })
})

filterHeaderButton.addEventListener('click', (event) => {
  filter.classList.toggle("filter__open");
  filterContainer.classList.toggle('filter-container__open');
  rootfilter.style.filter = 'blur(0px)';
  HTML.style.overflow = 'auto';
  event.stopPropagation();
})




// fetch/axios 

window.addEventListener('DOMContentLoaded', () => {
  
  function req() {
    // const request = new XMLHttpRequest();
    // request.open("GET", "http://localhost:3000/people");
    // request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    // request.send();
    // request.addEventListener("load", function() {
    //   if (request.status === 200){
    //     let data = JSON.parse(request.response);
    //     console.log(data);
    //     createCards(data);
    //   }
    // });
    getResource('http://localhost:3000/people')
      .then(data => createCards(data.data))
      .catch(err => console.error(err));
    this.remove();
  }
  document.querySelector('.button').addEventListener('click', req, {'once': true});
  

// async function getResource(url) {
//   const res = await fetch(`${url}`);

//   if(!res.ok) {
//     throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//   }

//     return await res.json();
//   }
  async function getResource(url) {
  const res = await axios(`${url}`);

  if(res.status !== 200) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

    return res;
  }

  function createCards (response) {
          response.forEach(item => {
          let card = document.createElement('div');
          card.classList.add('card');
          let icon;
          if(item.sex === 'male') {
            icon = 'icons/mars.png';
          } else {
            icon ='icons/female.png';
          }
          card.innerHTML = `
          <img src="${item.photo}" alt="">
          <div class="name">${item.name} ${item.surname}</div>
          <div class="sex">
            <img src=${icon} alt="male">
          </div>
          <div class="age">${item.age}</div>
          `;
          document.querySelector('.data-container').appendChild(card);
        })
}
});


const dataContainer = document.querySelector('.data-container');

async function getResponse() {
  let  response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
  let content = await response.json();
  content = content.splice(0, 5);

  let list = document.querySelector('.posts');
  console.log(content);
  let key;
  for (key in content) {
    list.innerHTML += `
    <li class = 'post'>
      <h2>${content[key].name}</h2>
      <h3>${content[key].email}</h3>
      <h4>${content[key].body}</h4>
    </li>
    `
    console.log(content[key]);
  }
}

dataContainer.addEventListener('click', function() {
  getResponse();
});