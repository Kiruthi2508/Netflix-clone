const faqsection=document.querySelectorAll(".faq")

faqsection.forEach((faq)=>{
    faq.addEventListener("click",()=>{
        if(faq.classList.contains("active")){
            faq.classList.remove("active")
        }else{
            faq.classList.add("active")
            faqsection.forEach((otherfaq)=>{
                if(otherfaq != faq){
                    otherfaq.classList.remove("active")
                }
            })
        }

    })
})