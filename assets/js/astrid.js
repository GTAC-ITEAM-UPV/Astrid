

let contactos = document.querySelectorAll("ul.icons > li > a");
contactos.forEach( function(item) {    
    item.addEventListener("mouseover", function(){       
        let url = "";
        switch (item.dataset["contacto"]){
            case "mail":      url = "agonzal@dcom.upv.es"; break;
            case "github":    url = "https://github.com/GTAC-ITEAM-UPV/Astrid"; break;
            case "web":       url = "https://gtac.webs.upv.es/";  break;
            case "twitter":   url = "https://gtac.webs.upv.es/"; break;
            case "facebook":  url = "https://gtac.webs.upv.es/"; break;
            case "instagram": url = "https://gtac.webs.upv.es/"; break;
        }

        navigator.clipboard.writeText(url);        
        console.log("clipboard: " + url);
        document.getElementById("contacto").innerHTML = "<b>" + url + "</b> copied to the clipboard";
    });
    item.addEventListener("mouseleave", function() {
        document.getElementById("contacto").innerHTML = "&nbsp;"
    })
    
})


document.getElementById("anyo").innerHTML = new Date().getFullYear();

