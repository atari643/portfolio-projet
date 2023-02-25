var buttonJava = document.getElementById("java")
var buttonC = document.getElementById("C#")
var buttonHCJ = document.getElementById("HCJ")
var buttonPython = document.getElementById("Python")
var buttonMDP = document.getElementById("MDP")
var buttonBD = document.getElementById("BD")
var allbutton = document.querySelectorAll("nav div")
var projet = document.querySelector(".projet")
var portFolio = document.querySelector(".portFolio")
var detail = document.querySelector(".detail")
var contact = document.getElementById("Contact")
var ligne = document.querySelector("hr")
var boutonGithub = document.getElementById("buttonGit")
var lienGithub = document.querySelector(".Git")
var infobutton = document.querySelector(".infobutton")





function desactiver(){
    for(var i = 0; i < allbutton.length; i++){
        allbutton[i].classList.remove("active");
    } 
    
}
portFolio.addEventListener("click", ()=>{
    detail.style.visibility = "hidden"
    portFolio.style.visibility = "hidden"
})


buttonJava.addEventListener("click", desactiver)
buttonJava.addEventListener("click", ()=>{
    buttonJava.classList.add("active")
    projet.innerHTML = "<img class='image' src='./images/odomo.png' alt='odomo'>"
    var odomo = document.querySelectorAll(".image")
    for(var i = 0; i < odomo.length; i++){

    odomo[i].addEventListener("click", ()=>{
        detail.innerHTML = "<img src='./images/projet-odomo.png' alt='projet-odomo'>"
        detail.style.visibility = "visible"
        portFolio.style.visibility = "visible"
    })
    odomo[i].addEventListener("mouseover", ()=>{
        infobutton.classList.add("infovisible")
    })
    odomo[i].addEventListener("mouseout", ()=>{
        infobutton.classList.remove("infovisible")
    })
}
infobutton.addEventListener("mouseover", ()=>{
    infobutton.classList.add("infovisible")
})
infobutton.addEventListener("mouseout", ()=>{
    infobutton.classList.remove("infovisible")
})
    
    
})
buttonC.addEventListener("click", desactiver)
buttonC.addEventListener("click", ()=>{
    buttonC.classList.add("active")
})
buttonPython.addEventListener("click", desactiver)
buttonPython.addEventListener("click", ()=>{
    buttonPython.classList.add("active")
})
buttonMDP.addEventListener("click", desactiver)
buttonMDP.addEventListener("click", ()=>{
    buttonMDP.classList.add("active")
})
buttonBD.addEventListener("click", desactiver)
buttonBD.addEventListener("click", ()=>{
    buttonBD.classList.add("active")
})
buttonHCJ.addEventListener("click", desactiver)
buttonHCJ.addEventListener("click", ()=>{
    buttonHCJ.classList.add("active")
    projet.innerHTML = "<img id='odomo' src='./images/odomo.png' alt='odomo'><img id='odomo' src='./images/odomo.png' alt='odomo'><img id='odomo' src='./images/odomo.png' alt='odomo'><img id='odomo' src='./images/odomo.png' alt='odomo'><img id='odomo' src='./images/odomo.png' alt='odomo'><img id='odomo' src='./images/odomo.png' alt='odomo'><img id='odomo' src='./images/odomo.png' alt='odomo'>"
})
contact.addEventListener("mouseover", ()=>{
    ligne.style.visibility = "visible"
    ligne.classList.add("souligner")
    
        
})
contact.addEventListener("mouseout", ()=>{
    ligne.style.visibility = "hidden"
    ligne.classList.remove("souligner")
        
})