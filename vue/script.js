let listIconMenu = Array.from(document.getElementById("list-menu").querySelectorAll("svg"));
let boutons = Array.from(document.getElementById("boutons").children);
const message = document.body.lastElementChild;
class ButtonMenu{
    constructor(element,ElementsTab){
        this.element = element;
        this.ElementsTab = ElementsTab;
    }
    click(){
        /*
        this.ElementsTab.filter(e=>{
            if(e!=this.element){
                e.style.outline = e.style.outline = "none";
            }else{
                e.style.outline = e.style.outline = "5px solid #0d6efd";
            }
        })
        */
    }
    mouseover(){
        const parent = this.element.parentElement.parentElement;
        parent.lastElementChild.style.visibility = "visible"
    }
    mouseout(){
        const parent = this.element.parentElement.parentElement;
        parent.lastElementChild.style.visibility = "hidden"
    }
}

listIconMenu.forEach(e=>{
    let iconMenu = new ButtonMenu(e,listIconMenu);
    iconMenu.element.addEventListener("click",()=>{
        iconMenu.click();
        boutons[0].style.display = "none";
        boutons[1].style.display = "none";
        boutons[3].innerHTML = "Demarrer";
    })
    iconMenu.element.addEventListener("mouseover",()=>{
        iconMenu.mouseover();
    });
    iconMenu.element.addEventListener("mouseout",()=>{
        iconMenu.mouseout();
    })
})


function resizeDocument(){
    if(parseInt(window.innerWidth)<1000){
        document.body.style.display = "none"
        alert("Open with a screen greater than 100px\nouvrir avec un ecran supérieur à 100px");
    }else{
        document.body.style.display = "block";
    }
}
function checkWidth(){
    if(parseInt(window.innerWidth)<1000){
        document.body.style.display = "none"
        alert("Open with a screen greater than 100px\nouvrir avec un ecran supérieur à 100px");
    }else{
        document.body.style.display = "block";
    }
}
window.addEventListener("resize",resizeDocument);
document.addEventListener("DOMContentLoaded",checkWidth);