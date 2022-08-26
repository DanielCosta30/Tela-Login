var btn = document.querySelector('#verSenha')
var Confirmbtn = document.querySelector('#verConfirmSenha')


var email = document.querySelector('#email')
var labelemail = document.querySelector('#labelemail')
var validemail = false;

var senha = document.querySelector('#senha')
var labelsenha = document.querySelector('#labelSenha')

var confirmsenha = document.querySelector('#confirmsenha')
var labelconfirmsenha = document.querySelector('#labelconfirmsenha')
var validconfirmsenha = false;


/* validação dos input---->*/

email.addEventListener('keyup', () => {
    if(email.value.length <= 5){
    labelemail.setAttribute('style', 'color: red ')
    labelemail.innerHTML = 'email *Email inválido'
    validemail = false;
   
 } else {
    labelemail.setAttribute('style', 'color: #000 ')
    labelemail.innerHTML ='Email:'
    validemail = true;  

 }

})

confirmsenha.addEventListener('keyup', () => {
    if(senha.value != confirmsenha.value){
    labelconfirmsenha.setAttribute('style', 'color: red ')
    labelconfirmsenha.innerHTML = 'Confirma sua senha *Não conferem'
    validconfirmsenha = false;
   
    } else {
    labelconfirmsenha.setAttribute('style', 'color: #000 ')
    labelconfirmsenha.innerHTML ='Confirme sua senha :'
    validconfirmsenha = true;      
    }   
})

/*  <------*/


function cadastrar(){  
    if (validemail && validconfirmsenha )

}

/*  visualizar senha ---->*/

btn.addEventListener('click',()=>{
    var inputSenha = document.querySelector('#senha')

if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
} else {
    inputSenha.setAttribute('type', 'password')
  }
})


Confirmbtn.addEventListener('click',()=>{
    var inputConfirmSenha = document.querySelector('#confirmsenha')

if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
} else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})

/*  <------*/



