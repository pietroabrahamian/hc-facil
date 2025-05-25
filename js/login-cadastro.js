// variáveis botoes de cadastro e login
const irPCadastro = document.getElementById("irPCadastro");
const irPLogin = document.getElementById("irPLogin");
const formLogin = document.getElementById("formLogin");
const formCadastro = document.getElementById("formCadastro");

// variáveis do forms
const inLoginCPF = document.getElementById("inLoginCPF");
let validLoginCPF = false;
const inLoginTelefone = document.getElementById("inLoginTelefone");
let validLoginTelefone = false;
const inNome = document.getElementById("inNome");
let validNome = false;
const inEmail = document.getElementById("inEmail");
let validEmail = false;
const inCadCPF = document.getElementById("inCadCPF");
let validCadCPF = false;
const inCadTelefone = document.getElementById("inCadTelefone");
let validCadTelefone = false;

// trocando os cards de cadastro para login
irPCadastro.addEventListener("click", ()=>{
    formLogin.style.display = "none";
    formCadastro.style.display = "flex";
});

irPLogin.addEventListener("click", ()=>{
    formLogin.style.display = "flex";
    formCadastro.style.display = "none";
});

// validação de CPF
inLoginCPF.addEventListener('keyup', ()=> {
    if (inLoginCPF.value.length != 11){
        inLoginCPF.style.outline = "1px solid red";
        inLoginCPF.style.border = "1px solid red";
        document.getElementById("erroLoginCPF").style.display = "block";
        validLoginCPF = false;
    } else {
        inLoginCPF.style.outline = "#0E79C1";
        inLoginCPF.style.border = "2px solid #0E79C1";
        document.getElementById("erroLoginCPF").style.display = "none";
        validLoginCPF = true;
    }
});
inCadCPF.addEventListener('keyup', ()=> {
    if (inCadCPF.value.length != 11){
        inCadCPF.style.outline = "1px solid red";
        inCadCPF.style.border = "1px solid red";
        document.getElementById("erroCadCPF").style.display = "block";
        validCadCPF = false;

    } else {
        inCadCPF.style.outline = "#0E79C1";
        inCadCPF.style.border = "2px solid #0E79C1";
        document.getElementById("erroCadCPF").style.display = "none";
        validCadCPF = true;
    }
});

// validação de TELEFONE
inLoginTelefone.addEventListener('keyup', ()=> {
    if (inLoginTelefone.value.length != 11 || /[A-Za-z]/.test(inLoginTelefone.value)){
        inLoginTelefone.style.outline = "1px solid red";
        inLoginTelefone.style.border = "1px solid red";
        document.getElementById("erroLoginTel").style.display = "block";
        validLoginTelefone = false;
    } else {
        inLoginTelefone.style.outline = "#0E79C1";
        inLoginTelefone.style.border = "2px solid #0E79C1";
        document.getElementById("erroLoginTel").style.display = "none";
        validLoginTelefone = true;
    }
});
inCadTelefone.addEventListener('keyup', ()=> {
    if (inCadTelefone.value.length != 11 || /[A-Za-z]/.test(inCadTelefone.value)){
        inCadTelefone.style.outline = "1px solid red";
        inCadTelefone.style.border = "1px solid red";
        document.getElementById("erroCadTel").style.display = "block";
        validCadTelefone = false;
    } else {
        inCadTelefone.style.outline = "#0E79C1";
        inCadTelefone.style.border = "2px solid #0E79C1";
        document.getElementById("erroCadTel").style.display = "none";
        validCadTelefone = true;
    }
});

// validação de EMAIL
inEmail.addEventListener('keyup', ()=> {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inEmail.value)){
        inEmail.style.outline = "#0E79C1";
        inEmail.style.border = "2px solid #0E79C1";
        document.getElementById("erroEmail").style.display = "none";
        validEmail = true;
    } else {
        inEmail.style.outline = "1px solid red";
        inEmail.style.border = "1px solid red";
        document.getElementById("erroEmail").style.display = "block";
        validEmail = false;
    }
});

// validação de NOME
inNome.addEventListener('keyup', ()=> {
    if (inNome.value.length < 3){
        inNome.style.outline = "1px solid red";
        inNome.style.border = "1px solid red";
        document.getElementById("erroNome").style.display = "block";
        validNome = false;
    } else {
        inNome.style.outline = "#0E79C1";
        inNome.style.border = "2px solid #0E79C1";
        document.getElementById("erroNome").style.display = "none";
        validNome = true;
    }
});

// botões de confirmação de cadastro ou login
const buttonLogin = document.getElementById("buttonLogin");
const buttonCadastro = document.getElementById("buttonCadastro");
// verificando se cada campo está preenchido
function login(){
    if(validLoginCPF && validLoginTelefone) {
        window.location.href = "../../Index.html";
        alert("Cadastro realizado com sucesso!")
    } else {
        alert("Preencha todos os campos para seguir!")
    }
}
function cadastro(){
    if(validNome && validEmail && validCadCPF && validCadTelefone) {
        window.location.href = "../../Index.html";
        alert("Cadastro realizado com sucesso!")
    } else {
        alert("Preencha todos os campos para seguir!")
    }
}