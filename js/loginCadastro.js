const irPCadastro = document.getElementById("irPCadastro");
const irPLogin = document.getElementById("irPLogin");
const formLogin = document.getElementById("formLogin");
const formCadastro = document.getElementById("formCadastro");

irPCadastro.addEventListener("click", ()=>{
    formLogin.style.display = "none";
    formCadastro.style.display = "flex";
});

irPLogin.addEventListener("click", ()=>{
    formLogin.style.display = "flex";
    formCadastro.style.display = "none";
});

const buttonLogin = document.getElementById("buttonLogin");
const buttonCadastro = document.getElementById("buttonCadastro");

buttonCadastro.addEventListener("click", ()=>{
    window.location.href = "../../Index.html";
});
buttonLogin.addEventListener("click", ()=>{
    window.location.href = "../../Index.html";
});
