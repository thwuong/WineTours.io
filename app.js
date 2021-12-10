const modalUser = document.querySelector('.header-about__user-link');
const modalOpen = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');

modalUser.addEventListener('click',function(){
    modalOpen.classList.toggle('open');
})
modalOpen.addEventListener('click',function(){
    modalOpen.classList.toggle('open');
})
modalContent.addEventListener('click',function(event){
    event.stopPropagation();
})

const jsLogin = document.querySelector('.js-login');
const jsRegister = document.querySelector('.js-register');
const modalLogin = document.querySelector('.modal-login');
const modalRegister = document.querySelector('.modal-register');

jsRegister.addEventListener('click',function(){
        modalLogin.classList.add('close');
        modalLogin.classList.remove('open');
        modalRegister.classList.add('open');
        modalRegister.classList.remove('close');
})
jsLogin.addEventListener('click',function(){
        modalLogin.classList.remove('close');
        modalLogin.classList.add('open');
        modalRegister.classList.remove('open');
        modalRegister.classList.add('close');
})
// slider
const sliderLeft = document.querySelector('.select-slider__left');
const sliderRight = document.querySelector('.select-slider__right');
const sliders = document.querySelectorAll('.body-slider__section');
var indexSlider = 0 ;
var sliderLength = sliders.length;

sliderRight.addEventListener('click',function(){
    indexSlider++;
    for (const slider of sliders) {
        if(indexSlider >= sliders.length){
            return indexSlider = sliders.length - 1;
        } 
        slider.style.transform = 'translateX('+ -indexSlider * 100 + '%)';
    }

})
sliderLeft.addEventListener('click',function(){
    indexSlider--;
    for (const slider of sliders) {
        if(indexSlider < 0) return indexSlider = 0;
        slider.style.transform = 'translateX('+ -indexSlider * 100 + '%)';
    }
})
// fade in
let animationChart = document.querySelectorAll('.body-highlight__render');
// console.log(animationChart);
let appear = document.querySelector('.related');
let hide = document.querySelector('.related__auth');
window.addEventListener('scroll',function(){
    const scrolled = window.scrollY;
    if(scrolled > 700){
        appear.classList.add('first');
        animationChart[0].classList.add('ratio-76');
        animationChart[1].classList.add('ratio-92');
        animationChart[2].classList.add('ratio-86');
    }
    else 
    appear.classList.remove('first');
})

// related fade in out
var openrelated = document.querySelector('.related__sale');
openrelated.addEventListener('click',function(){
    appear.classList.toggle('seconds');
    hide.classList.toggle('third');
})


// js tablet
let menuTablet = document.querySelector('.menu-tablet');
let hideMenu = document.querySelector('.body-nav__list');
let hideSubMenus = document.querySelectorAll('.body-subnav__list');
let changeIcon = document.querySelectorAll('.body-nav__item-icon');
let clickItem = document.querySelectorAll('.body-nav__item');
menuTablet.addEventListener('click',function(){
    hideMenu.classList.toggle('js-hidemenu');
    window.scrollTo({
        top : 0,
        left : 0,
        behavior : 'smooth'
    })
})
clickItem.forEach(function(event,index){
    event.addEventListener('click',function(){
        event.classList.remove('active');
        event.classList.toggle('active');
        hideSubMenus.forEach(function(e){
            e.classList.remove('js-showsubnav');
        })
        hideSubMenus[index].classList.toggle('js-showsubnav');
        changeIcon[index].classList.toggle('fa-angle-down');
        changeIcon[index].classList.toggle('fa-angle-right');
    })
})

let scrollHeader = document.querySelector('.header');
let scrollControl = document.querySelector('.control');
window.addEventListener('scroll',function(){
    const scrollValue = window.scrollY;
    if(scrollValue > 600){
        scrollHeader.classList.add('js-header');
    }
    else scrollHeader.classList.remove('js-header');
    if(scrollValue > 1200){
        scrollControl.style.visibility= 'visible';
    }
    else{
        scrollControl.style.visibility= 'hidden';
    }
    
})
scrollControl.addEventListener('click',function(){
    window.scrollTo({
        top : 0,
        left : 0,
        behavior : 'smooth'
    })
})