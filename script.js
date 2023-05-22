
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
})

function gorevleri_göster(){
    listem = document.querySelector("#ul_gorevler");
    listem.innerHTML = "";
            for(let gorev of gorev_listesi){
                let gorevlerim = `
                <li class="list-group-item ${gorev.durum}"  onclick="yapildimi(this)" id="${gorev.id}" >
                ${gorev.gorev_adi}
                </li>
                `
                listem.insertAdjacentHTML("beforeend", gorevlerim)
        }
        var items = document.querySelectorAll(".list-group-item")
        items.forEach((m)=>{
            if(m.classList.contains("completed")){
                m.classList = "list-group-item cizik"
            }
        })
        
        
        
    
}

function yapildimi(tiklandi){
    
        for(let gorev of gorev_listesi){
            if(tiklandi.id == gorev.id){
                if(tiklandi.classList.contains("cizik")){
                    tiklandi.classList.remove("cizik") 
                    gorev.durum = "pending"
                }else{
                    tiklandi.classList.add("cizik") 
                    gorev.durum = "completed" 
                }
            }
            localStorage.setItem("gorev_listesi", JSON.stringify(gorev_listesi))
        }   
}
