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
    projet.innerHTML = "<img id='odomo' src='./images/odomo.png' alt='odomo'>"
    var odomo = document.getElementById("odomo")
    odomo.addEventListener("click", ()=>{
        detail.innerHTML = "<img src='./images/projet-odomo.png' alt='projet-odomo'>"
        detail.style.visibility = "visible"
        portFolio.style.visibility = "visible"
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
    projet.innerHTML = "<img id='odomo' src='./images/odomo.png' alt='odomo'>"
})
contact.addEventListener("mouseover", ()=>{
    ligne.style.visibility = "visible"
    ligne.classList.add("souligner")
    
        
})
contact.addEventListener("mouseout", ()=>{
    ligne.style.visibility = "hidden"
    ligne.classList.remove("souligner")
        
})