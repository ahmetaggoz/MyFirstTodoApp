
var gorev_listesi = [];
if(localStorage.getItem("gorev_listesi") !== null){
    gorev_listesi = JSON.parse(localStorage.getItem("gorev_listesi"))
}


gorevleri_göster();
var gorev_ekle_btn = document.querySelector("#gorev_ekle_btn");
var gorev_gir = document.querySelector("#gorev_gir");

gorev_ekle_btn.addEventListener("click", (event)=>{
    gorev_listesi.push({
        id:gorev_listesi.length + 1,
        gorev_adi:gorev_gir.value,
        durum:"pending",
    })
    gorev_gir.value = "";
    localStorage.setItem("gorev_listesi", JSON.stringify(gorev_listesi))
    gorevleri_göster();
    event.preventDefault();
    console.log(gorev_listesi)
})

function gorevleri_göster(){

    listem = document.querySelector("#ul_gorevler");
    listem.innerHTML = "";
    for(let gorev of gorev_listesi){
        let gorevlerim = `
            <li class="list-group-item" onclick="yapildimi(this)" >
                ${gorev.gorev_adi}
            </li>
        `
        listem.insertAdjacentHTML("beforeend", gorevlerim)
    }
}

function yapildimi(tiklandi){
    if(tiklandi.classList.contains("cizik")){
        tiklandi.classList.remove("cizik")
    }else{
        tiklandi.classList.add("cizik")
    }
}
