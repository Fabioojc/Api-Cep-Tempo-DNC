const chave = "viacep.com.br"
const Tempo = url = "https://api.open-meteo.com/v1/forecast?latude=-10&longitude-55"




async function buscarCep(cep) {
  const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(resposta => resposta.json())
  colocarDadosNaTela(dados);
};





function colocarDadosNaTela(dados) {
  document.querySelector(".nome").innerHTML = dados.logradouro;
  document.querySelector(".bairro").innerHTML = dados.bairro;
  document.querySelector(".cidade").innerHTML = dados.localidade;
  console.log(dados)
};


function cliqueiNoBotao() {
  const cep = document.querySelector(".input-cep").value
  const latitude = document.querySelector("#latitude").value
  const longitude = document.querySelector("#longitude").value
  buscarCep(cep)
  buscarTempo(latitude, longitude)

};


async function buscarTempo(latitude, longitude) {
  const dados = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}.41&hourly=temperature_2m&timeformat=unixtime&forecast_days=1`).then(resposta => resposta.json());
  console.log(dados)

  document.querySelector(".nume-graus").innerHTML = dados.hourly.temperature_2m[0];
}


const handleSubmit = (event) => {        //Evento para Não deixar a pagina atualizar
  event.preventDefault();

  const name = document.querySelector('input[name=name]').value
  const email = document.querySelector('input[name=email]').value


  fetch('https://api.sheetmonkey.io/form/cxrGEmpwnpbRyUAYSSTZ45', {

    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name, email }),  //JSON.Stringify-> vai converter um objeto em estringi

  });
}

document.querySelector('form').addEventListener('submit', handleSubmit);


// async avisando que vai acessar um servidor
//await= espere
// fetch -> Ferramenta do javaScript para acessar servidores
//then-> então
// Json ->JavaScript object notation(formato javaScript entende)

// VAR=variavel-> Pedacinho de memoria que guardamos o que quisermod //
//Um trecho do codigo, que só executa quando é chamado//