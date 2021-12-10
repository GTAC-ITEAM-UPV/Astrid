

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

        //navigator.clipboard.writeText(url);       
        
        copyTextToClipboard(url)
        
        console.log("clipboard: " + url);
        document.getElementById("contacto").innerHTML = "<b>" + url + "</b> copied to the clipboard";
    });
    item.addEventListener("mouseleave", function() {
        document.getElementById("contacto").innerHTML = "&nbsp;"
    })
    
})


document.getElementById("anyo").innerHTML = new Date().getFullYear();




function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

