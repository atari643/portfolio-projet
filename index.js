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
function desactiver(){
    for(var i = 0; i < allbutton.length; i++){
        allbutton[i].classList.remove("active");
    } 
    
}
buttonJava.addEventListener("click", desactiver)
buttonJava.addEventListener("click", ()=>{
    buttonJava.classList.add("active")
    projet.innerHTML = "<img id='odomo' src='./images/odomo.png' alt='odomo'>"
    var odomo = document.getElementById("odomo")
    odomo.addEventListener("click", ()=>{
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
})