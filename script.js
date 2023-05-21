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

var gorev_ekle_btn = document.querySelector("#gorev_ekle_btn");
var gorev_gir = document.querySelector("#gorev_gir");
var gorev_listesi = [];
gorev_ekle_btn.addEventListener("click", (event)=>{
    gorev_listesi.push({
        id:gorev_listesi.length + 1,
        gorev_adi:gorev_gir.value,
        durum:"pending",
    })
    event.preventDefault();
    console.log(gorev_listesi)
})