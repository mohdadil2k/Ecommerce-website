const bar=document.getElementById("bar");
const close=document.getElementById("close");
const mainImg=document.querySelector('.main-image');
const smallImg=document.querySelectorAll('.small-img');
const navBar=document.querySelector('.navbar')

bar.addEventListener('click',()=>{
    navBar.classList.add("active")
})


close.addEventListener('click',()=>{
    navBar.classList.remove("active")
})


smallImg.forEach(e=>e.addEventListener('click',()=>{
    mainImg.src=e.src;
}))





