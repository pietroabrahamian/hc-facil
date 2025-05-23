const abrirMenuHamburguer= document.getElementById('abrirMenuHamburguer');
const fecharMenuHamburguer= document.getElementById('fecharMenuHamburguer');
const menuHamburguer= document.getElementById('menuHamburguer');

abrirMenuHamburguer.addEventListener("click", ()=>{
    menuHamburguer.style.display = "grid"
    document.body.style.overflow = "hidden"
});
fecharMenuHamburguer.addEventListener("click", ()=>{
    menuHamburguer.style.display = "none"
})

