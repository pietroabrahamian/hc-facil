const abrirMenuHamburguer= document.getElementById('abrirMenuHamburguer');
const fecharMenuHamburguer= document.getElementById('fecharMenuHamburguer');
const menuHamburguer= document.getElementById('menuHamburguer');

abrirMenuHamburguer.addEventListener("click", ()=>{
    menuHamburguer.style.display = "grid"
});
fecharMenuHamburguer.addEventListener("click", ()=>{
    menuHamburguer.style.display = "none"
})

