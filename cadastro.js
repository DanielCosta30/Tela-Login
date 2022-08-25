var btn = document.querySelector('#verSenha')

btn.addEventListener('click',()=>{
    var inputSenha = document.querySelector('#senha')

if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
} else {
    inputSenha.setAttribute('type', 'password')
  }
})

var btn = document.querySelector('#verConfirmSenha')

btn.addEventListener('click',()=>{
    var inputSenha = document.querySelector('#confirmsenha')

if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
} else {
    inputSenha.setAttribute('type', 'password')
  }
})