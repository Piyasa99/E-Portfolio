//Nav scroll
let nav= document.querySelector('nav')
window.addEventListener('scroll', ()=>{
    nav.classList.toggle('nav-scroll', window.scrollY > 0);
});
//Active toggle
let AllNavLinkA = document.querySelectorAll('.nav-links li a');
//Active add
AllNavLinkA.forEach(item =>{
    item.addEventListener('click', ()=>{
        removeActive();
        item.classList.add('acitive');
    })
});
//Active remove
const removeActive =() => AllNavLinkA.forEach(item =>{
    item.classList.remove('acitive');
})
//Nav links toggler
let menuBars= document.querySelector('nav button');
let navlinks= document.querySelector('.nav-links');
menuBars.addEventListener('click', ()=>{
    navlinks.classList.toggle('nav-link-block');
});