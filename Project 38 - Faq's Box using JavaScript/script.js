const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        if(box.classList.contains("active")){
            box.classList.remove("active")
        }

        else{
            faqBoxes.forEach((item)=>{
                item.classList.remove("active");
            })
            box.classList.add("active");
        }

    });
});