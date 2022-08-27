/* Visualizar senha */

var btn = document.querySelector(".fa-eye");

btn.addEventListener("click", () => {
  var inputSenha = document.querySelector("#senha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

/* <--------- */

/* acessar login */

var entralogin = document.querySelector(".acesso");

entralogin.addEventListener("click", function (event) {
  event.preventDefault();

  var email = document.querySelector("#email");
  var emaillabel = document.querySelector("#emaillabel");

  var senha = document.querySelector("#senha");
  var senhalabel = document.querySelector("#senhalabel");

  var msgError = document.querySelector("#msgError");
  var listauser = [];
  
  var uservalid = {
    email: "",
    senha: "",
  };
  listauser = JSON.parse(localStorage.getItem("listauser"));

  /*ForEach  vai vazer minha lsita item por item  em cada lista*/

  listauser.forEach((item) => {
    if (email.value == item.emailcad || senha.value == item.senhacad) {
      uservalid = {
        email: item.emailcad,
        senha: item.senhacad,
      };
    }
  });

  if (email.value == uservalid.email && senha.value == uservalid.senha) {

    window.location.href='./inicio.html'
    
  } else {

    emaillabel.setAttribute('style', 'color: red')
    email.setAttribute('style', 'border-color: red')
    senhalabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    email.focus()

  }

});


/* <--------- */
