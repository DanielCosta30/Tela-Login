var btn = document.querySelector('#verSenha')
var confirmbtn = document.querySelector('#verConfirmSenha')


var email = document.querySelector('#email')
var labelemail = document.querySelector('#labelemail')
var validemail = false

var senha = document.querySelector('#senha')
var labelsenha = document.querySelector('#labelSenha')
var validsenha = false

var confirmsenha = document.querySelector('#confirmsenha')
var labelconfirmsenha = document.querySelector('#labelconfirmsenha')
var validconfirmsenha = false


let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

/* validação dos input---->*/

email.addEventListener('keyup', () => {
    if(email.value.length <= 5){
    labelemail.setAttribute('style', 'color: red ')
    labelemail.innerHTML = 'email *Email inválido'
    validemail = false
   
 } else {
    labelemail.setAttribute('style', 'color: #000 ')
    labelemail.innerHTML ='Email:'
    validemail = true
 }

})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
    labelsenha.setAttribute('style', 'color: red ')
    labelsenha.innerHTML = 'Senha *com no minímo 6 digito'
    validsenha = false
   
 } else {
    labelsenha.setAttribute('style', 'color: #000 ')
    labelsenha.innerHTML ='Senha:'
    validsenha = true; 

 }

})

confirmsenha.addEventListener('keyup', () => {
    if(senha.value != confirmsenha.value){
    labelconfirmsenha.setAttribute('style', 'color: red ')
    labelconfirmsenha.innerHTML = 'Confirma sua senha *Não conferem'
    validconfirmsenha = false
   
    } else {
    labelconfirmsenha.setAttribute('style', 'color: #000 ')
    labelconfirmsenha.innerHTML ='Confirme sua senha :'
    validconfirmsenha = true      
    }   
})

/*  <------*/

/*  função cadstrar ---->*/

var cadastrarusuario = document.querySelector('.cadastrar-usuario');

cadastrarusuario.addEventListener ("click", function(event) {
    event.preventDefault();
 
    if (validemail && validconfirmsenha && validsenha){
        var listauser = JSON.parse(localStorage.getItem('listauser') || '[]')

        listauser.push(
            {

             emailcad: email.value,
             senhacad: senha.value
        }      
        )

        localStorage.setItem('listauser', JSON.stringify(listauser))


        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = 'Cadastro realizado com sucesso'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        
        setTimeout(()=> {

        window.location.href='file:///C:/Users/Daniel%20Costa/Desktop/MENTORIA/Tela_Login/index.html'

        }, 1000)
        
    
    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Prencha todos so campos corretamente'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
})

/*  <------*/


/*  visualizar senha ---->*/

btn.addEventListener('click',()=>{
    var inputSenha = document.querySelector('#senha')

if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
} else {
    inputSenha.setAttribute('type', 'password')
  }
})


confirmbtn.addEventListener('click',()=>{
    var inputConfirmSenha = document.querySelector('#confirmsenha')

if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
} else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})

/*  <------*/



