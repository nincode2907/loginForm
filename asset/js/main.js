const routers = document.querySelectorAll(".form_heading_router")
const classOuter = document.querySelector(".classouter")
const formInputs = document.querySelectorAll(".form_content_input_group_input")
const formInputLabels = document.querySelectorAll(".form_content_input_group_label")

// Router 
for(const router of routers) {
    router.onclick = () => {
        classOuter.classList.toggle("change")
    }
}

//Form Input 
formInputs.forEach((formInput,index) => {
    formInput.onchange = (e) => {
        if(e.target.value !== "") {
         formInputLabels[index].style.top = -8 + 'px'
        } else  formInputLabels[index].style.top = 8 + 'px'
    }
})
