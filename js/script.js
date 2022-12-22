//! operazioni preliminari
const galleryElement = document.getElementById('gallery');
const next = document.getElementById('arrow-right');
const prev = document.getElementById('arrow-left');
// recupero le immagini

//* array 
const data = [
  {
    image: 'img/01.webp',
    title: "Marvel\'s Spiderman Miles Morale",
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: "Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  }
];
const createCarousel = (data, galleryElement) => {
  let carousel = '';
  for (let i = 0; i < data.length; i++) {
    const dataField = data[i];
    carousel += ` 
      <img src="${dataField.image}" alt="${dataField.title}">
      <div class="description d-none">
        <h3>${dataField.title}</h3>
        <p>${dataField.text}</p>
      </div>
    `;
  }
  galleryElement.innerHTML = carousel;
}




createCarousel(data, galleryElement)

let activeIndex = 0;
const img = document.querySelectorAll('#gallery img');
const description = document.querySelectorAll('.description');

img[activeIndex].classList.add('active');
description[activeIndex].classList.remove('d-none');
description[activeIndex].classList.add('active');
//incremento l'indice per cambbiare immagine
next.addEventListener("click" , function () {
  img[activeIndex].classList.remove('active');
  description[activeIndex].classList.add('d-none');
  description[activeIndex].classList.remove('active');
  activeIndex++;
  if(activeIndex === data.length){
    activeIndex = 0;
  } 
  img[activeIndex].classList.add('active');
  description[activeIndex].classList.remove('d-none');
  description[activeIndex].classList.add('active');
  console.log(activeIndex)
});
prev.addEventListener("click" , function () {
  img[activeIndex].classList.remove('active');
  description[activeIndex].classList.add('d-none');
  description[activeIndex].classList.remove('active');
  activeIndex--;
  if(activeIndex < 0){
    activeIndex = data.length-1;
  } 
  img[activeIndex].classList.add('active');
  description[activeIndex].classList.remove('d-none');
  description[activeIndex].classList.add('active');
  console.log(activeIndex)
});