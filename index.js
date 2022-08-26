
/* Visualizar senha */

var btn = document.querySelector('.fa-eye')

btn.addEventListener('click',()=>{
    var inputSenha = document.querySelector('#senha')

if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
} else {
    inputSenha.setAttribute('type', 'password')
  }
})

/* <--------- */

/* acessar login */


function entrar(){
var email = document.querySelector('#email')
var emaillabel = document.querySelector('#emaillabel')

var senha = document.querySelector ('#senha')
var senhalabel = document.querySelector('#senhalabel')

var msgError = document.querySelector('#msgError')
var listauser = []

var uservalid = {
    email:'',
    senha:''
}
    listauser = JSON.parse(localStorage.getItem('listauser'))

    /*ForEach  vai vazer minha lsita item por item  em cada lista*/

    listauser.forEach((item) =>{    
        if (email.value == item.emailcad || senha.value == item.senhacad){
            uservalid={
                email: item.emailcad,
                senha: item.senhacad
            }
            
        }
  }) 

}

/* <--------- */