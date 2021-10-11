const menu = document.querySelector('.menu--close');
const trigger = document.querySelector('.trigger');


trigger.addEventListener('click', function(){
  menu.classList.toggle('menu--open');
  document.body.classList.toggle("stop-scrolling");
});


const menuLinkCross = document.querySelectorAll('.trigger');

menuLinkCross.forEach((element) => {
   element.addEventListener('click', function(){
     trigger.classList.toggle('menu--open');
 });
});
