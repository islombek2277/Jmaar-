
let horizontScroll = document.querySelector('.kantener');
let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');

rightBtn.addEventListener('click', ()=> {
    horizontScroll.style.scrollBehavior = "smooth"
    horizontScroll.scrollLeft += 520;
});
leftBtn.addEventListener('click', ()=> {
    horizontScroll.style.scrollBehavior = "smooth"
    horizontScroll.scrollLeft -= 520;
});
////////////////////////////////////////////////////////////////// 2
let horizontScroll2 = document.querySelector('.kantener2');
let leftBtn2 = document.getElementById('leftBtn2');
let rightBtn2 = document.getElementById('rightBtn2');

rightBtn2.addEventListener('click', ()=> {
    horizontScroll2.style.scrollBehavior = "smooth"
    horizontScroll2.scrollLeft += 520;
});
leftBtn2.addEventListener('click', ()=> {
    horizontScroll2.style.scrollBehavior = "smooth"
    horizontScroll2.scrollLeft -= 520;
});
////////////////////////////////////////////////////////////////// 3
let horizontScroll3 = document.querySelector('#kantener3');
let leftBtn3 = document.getElementById('leftBtn3');
let rightBtn3 = document.getElementById('rightBtn3');

rightBtn3.addEventListener('click', ()=> {
    horizontScroll3.style.scrollBehavior = "smooth"
    horizontScroll3.scrollLeft += 520;
});
leftBtn3.addEventListener('click', ()=> {
    horizontScroll3.style.scrollBehavior = "smooth"
    horizontScroll3.scrollLeft -= 520;
});

////////////////////////////////////////////////////////////////// 4
let horizontScroll4 = document.querySelector('#kantener4');
let leftBtn4 = document.getElementById('leftBtn4');
let rightBtn4 = document.getElementById('rightBtn4');

rightBtn4.addEventListener('click', ()=> {
    horizontScroll4.style.scrollBehavior = "smooth"
    horizontScroll4.scrollLeft += 520;
});
leftBtn4.addEventListener('click', ()=> {
    horizontScroll4.style.scrollBehavior = "smooth"
    horizontScroll4.scrollLeft -= 520;
});

const Ul = document.querySelector("ul")
console.log(Ul);

const Toggle = () =>{
    Ul.classList.toggle("toggle")
}