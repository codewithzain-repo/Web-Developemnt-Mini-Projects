
const themeBtn = document.querySelector(".theme-btn");
const saveTheme = localStorage.getItem("theme")

if(saveTheme === "dark"){
    document.body.classList.add("dark-mode")
    themeBtn.textContent = "☀️ Light Mode"
}

else{
    themeBtn.textContent = "🌙 Dark Mode";

}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme", "dark")
        themeBtn.textContent = "☀️ Light Mode"
        
    }
    
    else{
        localStorage.setItem("theme", "light")
        themeBtn.textContent = "🌙 Dark Mode"

    }
   
});