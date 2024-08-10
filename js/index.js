import '../js/firebase.js'

document.addEventListener('DOMContentLoaded', function(){
    const menuIcon = document.getElementById("menuIcono");
    const menu = document.getElementById("navBar")


menuIcon.addEventListener("click", function(e){
        e.stopPropagation();
        menu.classList.toggle('active')
    }); 
    
    document.addEventListener("click", function(e){
        if(menu.classList.contains('active') && !menu.contains(e.target) && e.target !== menuIcon){
            menu.classList.remove('active')
        }
    })

});

const formulario = document.querySelector('#formulario')

const procesaTodo = (event) =>{
    event.preventDefault();
    const datos = new FormData(event.target)

    const datosCompletos = Object.fromEntries(datos.entries())
    console.log(JSON.stringify(datosCompletos))
}

formulario.addEventListener('submit', procesaTodo);