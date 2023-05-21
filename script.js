var list_items = document.querySelectorAll(".list-group-item");

list_items.forEach((items)=>{
    items.addEventListener("click", ()=>{
        if(items.classList.contains("cizik")){
            items.classList.remove("cizik")
        }else{
            items.classList.add("cizik")
        }
    })
})

