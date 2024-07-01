// ! Bar Slider Start
barBtn=document.querySelector(".bars")
navCenter=document.querySelector(".nav-center")
xmark=document.querySelector(".fa-xmark")

barBtn.addEventListener("click",()=>{
    navCenter.classList.toggle("activeCenterNav")
})
xmark.addEventListener("click",()=>{
    navCenter.classList.toggle("activeCenterNav")
})
// ! Bar Slider End
// ! Position Arrow Start
const positionArrow=document.querySelector(".circle")
document.addEventListener("scroll",()=>{
    if(window.scrollY>=200){
        positionArrow.style.opacity="1"
    }
    else{
        positionArrow.style.opacity="0"
    }
})
// ! Position Arrow End