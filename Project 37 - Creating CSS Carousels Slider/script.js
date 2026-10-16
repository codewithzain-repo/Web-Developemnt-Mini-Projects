const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const slider = document.querySelector(".cards");

leftBtn.addEventListener("click",()=>{
    slider.scrollBy({
        left: -500,
        behavior: "smooth"
    });
});

rightBtn.addEventListener("click",()=>{
    slider.scrollBy({
        left: 500,
        behavior: "smooth"
    });
});
