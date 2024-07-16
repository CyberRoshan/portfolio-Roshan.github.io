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

//  ! GSAP Features Start
gsap.from("header",{
    y:-300,
    duration:1.5,
    delay:0.2,
    ease: "bounce"
})

gsap.from(".mid-aboutus > h2",{
    y:100,
    duration:1,
    ease: "bounce",
    scrollTrigger: "#About-me",
    trigger:"top top"
})
gsap.from(".mid-hero--section h1",{
    x:-100,
    duration:1,
})
gsap.from(".mid-hero--section > p",{
    x: 100,
    duration:1
})
gsap.from(".btn-box",{
    y:100,
    duration:1
})
gsap.from(".about-left img",{
    x: -800,
    duration:1,
    scrollTrigger:"#About-me",
    trigger:"top top"
})

gsap.from(".about-right",{
    x: 1200,
    duration: 2,
    delay:0.5,
    scrollTrigger:"#About-me",
    trigger: "top top"
})
//  ! GSAP Features End