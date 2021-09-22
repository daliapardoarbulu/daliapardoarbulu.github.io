//Javascipt
// const menu = document.querySelector('.menu');
// const trigger = document.querySelector('.trigger');

// function toggle() {
//   menu.classList.toggle('menu--open');
// }

// trigger.addEventListener('click', toggle);


//Javascipt
//1° querySelector va chercher ce qui est dans les parenthèses, ce qui peut être une class, ou un id ou un autre selecteur comme les div.
const menu = document.querySelector('.menu')
const trigger = document.querySelector('.anim__icon-menu')


//2°console.log affiche sur la console ce qui se trouve sur la const menu
console.log(menu);

//2° addEventListener prend la const trigger qui répresente l'icone menu et ajoute un autre évenement, dans ce cas, lorsqu'on fait un click, on retourne l'élément grâce à element.classList.toggle, toogle qui est une bascule (comme un intérupteur électrique), elle ouvre le menu.
trigger.addEventListener('click', function(){
  menu.classList.toggle('menu--open');
  
});


const menuLink = document.querySelectorAll('.anim__icon-menu');
menuLink.forEach((element) => {
   element.addEventListener('click', function(){
     trigger.classList.toggle('menu--open');
 });
});

// sources: https://codepen.io/daliapardo/pen/XWWYVeX
