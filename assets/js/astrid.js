


let contactos = document.querySelectorAll("ul.icons > li > a");
contactos.forEach( function(item) {
    item.addEventListener("mouseover", function(){
        let p = document.getElementById("contacto");
        switch (item.dataset["contacto"]){
            case "mail": p.innerHTML = "agonzal@dcom.upv.es"; break;
            case "github": p.innerHTML = "https://github.com/GTAC-ITEAM-UPV/Astrid"; break;
            case "web": p.innerHTML = "http://www.iteam.upv.es/group/gtac/";  break;
            case "twitter": p.innerHTML = "http://www.iteam.upv.es/group/gtac/"; break;
            case "facebook": p.innerHTML = "http://www.iteam.upv.es/group/gtac/"; break;
            case "instagram": p.innerHTML = "http://www.iteam.upv.es/group/gtac/"; break;
        }
    });
    item.addEventListener("mouseleave", function() {
        document.getElementById("contacto").innerHTML = "&nbsp;"
    })
})


document.getElementById("anyo").innerHTML = new Date().getFullYear();