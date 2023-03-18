var buttonJava = document.getElementById("java")
var buttonC = document.getElementById("C")
var buttonHCJ = document.getElementById("HCJ")
var buttonPython = document.getElementById("Python")
var buttonLinux = document.getElementById("Linux")
var buttonMDP = document.getElementById("MDP")
var buttonBD = document.getElementById("BD")
var allbutton = document.querySelectorAll("nav div")
var listprojet = document.querySelector(".projet")
var portFolio = document.querySelector(".portFolio")
var detail = document.querySelector(".detail")
var contact = document.getElementById("Contact")
var ligne = document.querySelector("hr")
var boutonGithub = document.getElementById("buttonGit")
var lienGithub = document.querySelector(".Git")
var infobutton = document.querySelector(".infobutton")
var sphere = document.querySelector(".sphere")
 class ProjetJava extends React.Component {
    render(){
        const items =[
            <img class='image' src='./images/odomo.png' alt='odomo'/>,
            <img class='image' src='./images/tableBiosphère.png' alt='Biosphère'/>,
            <img class='image' src='./images/odomo.png' alt='odomo'/>,
            <img class='image' src='./images/odomo.png' alt='odomo'/>
        ]
        const java = <img class='logo' src='./images/javalogo.png' alt='javalogo'></img>
        const lis = items.map(item => <div><li>{java}{item}</li><i class="icofont-close"></i><i class="icofont-expand"></i></div>)
        return <ul>
            {lis}
        </ul>
    }
} 
class ProjetC extends React.Component {
    render(){
        const items =[
        ]
        const C = <img class='logo' src='./images/javalogo.png' alt='javalogo'/>
        const lis = items.map(item => <div><li>{C}{item}</li><i class="icofont-close"></i><i class="icofont-expand"></i></div>)
        return <ul>
            {lis}
        </ul>
    }
}


function desactiver(){
    for(var i = 0; i < allbutton.length; i++){

        allbutton[i].classList.remove("up");
        allbutton[i].style.setProperty('--h', 100+'%')
        
    } 
    listprojet.classList.remove("colorJava");
    listprojet.classList.remove("colorC")
    listprojet.classList.remove("colorPy")
    
}

var etoileHaut = document.querySelector('.Top');
var etoileBas = document.querySelector('.Bottom');
var etoileDroite = document.querySelector('.Right');
var etoileLeft = document.querySelector('.Left');
let n = 0
let r = 0;
let animation = setInterval((e)=>{
    etoileHaut.style.paddingLeft = n+'%'
    etoileBas.style.paddingLeft = n+'%'
    etoileLeft.style.paddingBottom= r+'%'
    etoileDroite.style.paddingTop = r+'%'
    if(n<90){
    n+=0.5;
    }else{
        window.clearInterval(animation)
    }
    if(r<30){
        r+=0.17; 
    }
    
}, 16)
let v = 100
function up(button){
    let monter = setInterval(()=>{
        if(v<200){
            button.style.setProperty('--h', v+'%')
        v+=6
        }else{
            window.clearInterval(monter)
        }
    }, 20)
}

buttonJava.addEventListener("click", desactiver)
buttonJava.addEventListener("click", ()=>{
    listprojet.classList.add("colorJava")
    buttonJava.classList.add("up")
    v=100
    up(buttonJava)
    ReactDOM.render(<ProjetJava/>, listprojet)
    var logo = document .querySelectorAll(".logo")
    setInterval(()=>{
    for(var i=0; i<logo.length; i++){
        logo[i].classList.toggle("move")
}}, 2000)

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
    listprojet.classList.add("colorC")
    buttonC.classList.add("up")
    v=100
    up(buttonC)
    ReactDOM.render(<ProjetC/>, listprojet)
})
buttonPython.addEventListener("click", desactiver)
buttonPython.addEventListener("click", ()=>{
    buttonPython.classList.add("active")
    listprojet.classList.add("colorPy")
    buttonPython.classList.add("up")
    v=100
    up(buttonPython)
})
buttonMDP.addEventListener("click", desactiver)
buttonMDP.addEventListener("click", ()=>{
    buttonMDP.classList.add("active")
    buttonMDP.classList.add("up")
    v=100
    up(buttonMDP)
})
buttonBD.addEventListener("click", desactiver)
buttonBD.addEventListener("click", ()=>{
    buttonBD.classList.add("active")
    buttonBD.classList.add("up")
    v=100
    up(buttonBD)
})
buttonHCJ.addEventListener("click", desactiver)
buttonHCJ.addEventListener("click", ()=>{
    buttonHCJ.classList.add("active")
    buttonHCJ.classList.add("up")
    v=100
    up(buttonHCJ)
})
buttonLinux.addEventListener("click", desactiver)
buttonLinux.addEventListener("click", ()=>{
    buttonLinux.classList.add("active")
    buttonLinux.classList.add("up")
    v=100
    up(buttonLinux)
})
contact.addEventListener("mouseover", ()=>{
    ligne.style.visibility = "visible"
    ligne.classList.add("souligner")
    
        
})
contact.addEventListener("mouseout", ()=>{
    ligne.style.visibility = "hidden"
    ligne.classList.remove("souligner")
        
})
