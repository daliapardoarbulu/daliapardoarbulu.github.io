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

const navLink = document.querySelectorAll('a.link-close');
navLink.forEach((element) => {
  
  element.addEventListener('click', function(){
    if(window.innerWidth >= 1000){
      
    }else{  
      menu.classList.toggle('menu--open');
        trigger.classList.toggle('menu--open');
        document.body.classList.toggle("stop-scrolling");
        
    }
 });
});

console.log(navLink);
