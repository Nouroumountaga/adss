var montant = document.querySelector("#montant");
var vu = document.querySelector("#people");
const day = document.querySelector("#jour")
day.addEventListener("click", () => {
    setTimeout(() => {
        var jour =  document.getElementById("jour").value;
        montant.value = parseInt(jour)*1250 + ' fr'
        if(parseInt(jour)<=5){
            vu.value = '1k à ' + parseInt(jour)*3000 + "k"    
        }
        else if(parseInt(jour)>5 && parseInt(jour)<10){
            vu.value = '4k à ' + parseInt(jour)*3000 + "k"
        }
        else if(parseInt(jour)>=10 && parseInt(jour)<15){
            vu.value = '8k à ' + parseInt(jour)*3000 + "k"
        }
        else{
            vu.value = '13k à ' + parseInt(jour)*3000 + "k"
        }
    }, 2000);
})

    

