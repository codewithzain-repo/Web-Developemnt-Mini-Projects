const menuBtn = document.querySelector(".menu-btn");
const navItem2 = document.querySelector(".nav-item2");

menuBtn.addEventListener("click",function(){
   navItem2.classList.toggle("active");

     if (menuBtn.textContent === "☰") {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});