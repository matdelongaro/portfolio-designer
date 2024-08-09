import '../js/firebase.js'

document.addEventListener('DOMContentLoaded', function(){
    const menuIcon = document.getElementById("menuIcono");
    const menu = document.getElementById("navBar")


menuIcon.addEventListener("click", function(){
    menu.classList.toggle('active');
    
});
})
const formulario = document.querySelector('#formulario')

const procesaTodo = (event) =>{
    event.preventDefault();
    const datos = new FormData(event.target)

    const datosCompletos = Object.fromEntries(datos.entries())
    console.log(JSON.stringify(datosCompletos))
}

formulario.addEventListener('submit', procesaTodo);