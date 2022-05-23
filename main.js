// header
const navMenu = document.querySelector('#nav-menu'),
      navToggle= document.querySelector('#nav-toggle'),
      navClose= document.querySelector('#nav-close'),
      navbtns=document.querySelector('#nav-btns');
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
        navbtns.classList.add('hidden-menu');
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
        navbtns.classList.remove('hidden-menu');
    })
}
// swiper home
let homeSwiper= new Swiper(".home-swiper",{
    spaceBetween: 30,
    loop:'true',
    pagination: {
        el:".swiper-pagination",
        clickable:true
    },
});
// nav
const navLink=document.querySelectorAll('.nav__link');
function linkAction(){
    navMenu.classList.remove('show-menu');
    navbtns.classList.remove('hidden-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction));


const sections= document.querySelectorAll('section[id]');
const mains= document.querySelector('.main');
function scrollActive(){
    const scrollY = mains.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop =current.offsetTop - 50,
        sectionId=current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
mains.addEventListener('scroll',scrollActive);

// home
// const home= document.querySelector("#home");

// document.querySelector("#nav-home").addEventListener("click",showHome)

// function showHome(){
//     home.style.display="block";
//     home.style.top="-1%";
// }


// dark
const themeButton=document.getElementById('theme-button');
const darkTheme= 'dark-theme';
const iconTheme= 'bx-sun';
    // select topic
const selectedTheme=localStorage.getItem('selected-theme');
const selectedIcon= localStorage.getItem('selected-icon');
    // validating
const getCurrentTheme=()=> document.body.classList.contains(darkTheme)? 'dark' : 'ligth';
const getCurrentIcon=()=> themeButton.classList.contains(iconTheme)?'bx bx-moon':'bx bx-sun';
    // validating previous
if(selectedTheme){
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme);
    themeButton.classList[selectedIcon==='moon'?'add':'remove'](iconTheme);
}
themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // save
    localStorage.setItem('selected-theme',getCurrentTheme());
    localStorage.setItem('selected-icon',getCurrentIcon());
})

const stars= document.querySelector('.stars')
// estrellas
for(let fila=0; fila<window.innerHeight; fila+=60){
    // console.log(fila);
    for(let columna=0; columna<window.innerWidth; columna++){
        let estrella= document.createElement('div');
        estrella.className='star';
        let size =Math.random()*10;
        estrella.style.cssText=
        `left:${columna*30}px;
        top:${Math.random()*50+fila}px;
        width:${size}px; height:${size}px;
        opacity:${Math.random()*5}`;

        stars.appendChild(estrella);
    }   
}

// scroll revele
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // interval: 100,
    // reset: true
})
sr.reveal(`.home-swiper, .about__container`);