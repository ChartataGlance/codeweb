const card = document.querySelector('.card')
const container = document.querySelector('.container')


const sneaker = document.querySelector('.sneaker')
const purchess = document.querySelector('.purchess')

const info = document.querySelector('.info')


//
container.addEventListener('mousemove',(e) =>{
    let xAxis =  (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis =  (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


container.addEventListener('mouseenter',(e)=>{
    card.style.transition = 'none';
    purchess.style.transform = "translateZ(55px)";
    sneaker.style.transform = "translateZ(150px) rotateZ(-9deg)";
    info.style.transform = "translateZ(80px)";

})

container.addEventListener('mouseleave',(e) =>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotatex(0deg)`;
    purchess.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    info.style.transform = "translateZ(0px)";
    
})