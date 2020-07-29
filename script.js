var ranDomPass = document.getElementById("generate"); 
var specialChars = "#!@~$%^&*)-_"

function writePassword() { 
    ranDomPass.innerHTML = 
        Math.random().toString(36).slice(2) + 
        Math.random().toString(36).toUpperCase().slice(2)+
        specialChars.slice(Math.floor(Math.random()* specialChars.length));
    } 

  