const marqueSuaConsulta = document.getElementById("marqueSuaConsulta");
const facaSeuLogin = document.getElementById("facaSeuLogin");
const esqueciSenha = document.getElementById("esqueciSenha");
const videos = document.getElementById("videos");

marqueSuaConsulta.addEventListener("click", ()=>{
    window.location.href = "./assets/home-pages/marque-sua-consulta/marque-sua-consulta.html";
});
facaSeuLogin.addEventListener("click", ()=>{
    window.location.href = "./assets/home-pages/faca-seu-login/faca-seu-login.html";
});
esqueciSenha.addEventListener("click", ()=>{
    window.location.href = "./assets/home-pages/esqueci-senha/esqueci-senha.html";
});
videos.addEventListener("click", ()=>{
    window.location.href = "./assets/home-pages/videos/videos.html";
});