document.addEventListener('DOMContentLoaded', function(){
    const menuIcon = document.getElementById("menuIcono");
    const menu = document.getElementById("navBar")


menuIcon.addEventListener("click", function(){
    menu.classList.toggle('active');
    
});
})