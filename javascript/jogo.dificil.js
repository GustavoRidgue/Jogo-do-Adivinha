function esconderDificil(valor) {
  // var tentativa = 10;
  if (valor == 0 || valor < 0) {
    document.querySelector("#textonIner").innerHTML = 
    "<h3 style='color:red'>Fim De Jogo! O número pesado era " + numSorteadoDificil + "</h3>";

    document.querySelector("#tentativaRestante").innerHTML = 
    "<a class='btn btn-success' value='Refresh Page' onClick='window.location.reload()'>Jogar novamente</a>";

    document.querySelector("#inputEnvio").style.display = 'none';

    document.querySelector("#buttonEnvio").style.display = 'none';
  }

  else if (valor > 0 && valor < 4) {
    document.querySelector("#tentativaRestante").innerHTML = "<h3 class='text-danger' >Tentativas restantes: " + valor + "</h3>";
  }

  else if (valor > 0 && valor < 6) {
    document.querySelector("#tentativaRestante").innerHTML = "<h3 class='text-warning' >Tentativas restantes: " + valor + "</h3>";
  }
  
  else {
    document.querySelector("#tentativaRestante").innerHTML = "Tentativas restantes: " + valor;
  }
}


const inputEnvio = document.getElementById("inputEnvio");
inputEnvio.addEventListener('click', function (e){
  e.preventDefault();
});

var tentativasDificil = 4;
var numSorteadoDificil = Math.round(Math.random() * 100);

function adivinhaDificil() {
  var input = document.getElementById("inputEnvio");
  if (input.value == numSorteadoDificil) {
    document.querySelector("#textonIner").innerHTML = "<h3 class='text-success'>Parabéns, você acertou! O número era " + numSorteadoDificil + "</h3>";
    document.querySelector("#jogarNovamente").innerHTML = "<a class='btn btn-success mt-3' value='Refresh Page' onClick='window.location.reload()'>Jogar novamente</a>";
    esconderDificil(tentativasDificil--);
    document.querySelector("#inputEnvio").style.display = 'none';
    document.querySelector("#buttonEnvio").style.display = 'none';
  } 
  else if (input.value < numSorteadoDificil) {
    document.querySelector("#textonIner").innerHTML = "<span class='text-warning'>Pense em um número maior</span>";
    esconderDificil(tentativasDificil--);
    input.focus();
    input.value = "";
  }
  else if (input.value > numSorteadoDificil){
    document.querySelector("#textonIner").innerHTML = "<span class='text-warning'>Pense em um número menor</span>";
    esconderDificil(tentativasDificil--);
    input.focus();
    input.value = "";
  }
}