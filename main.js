const formConsultarCep = document.querySelector('#consultarCep');
const inputCep = formConsultarCep.cep;
const divDados = document.querySelector('#dados');

formConsultarCep.addEventListener('submit', function(event){
  
  //prevenindo o comportamento padrão de envio do form  
  event.preventDefault();
  consultarCep(inputCep.value);

  //alert('enviou');
});

async function consultarCep(cep){

  //Passando o enderço da api -> https://viacep.com.br/ws/01001000/json/ 
  let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  let dadosCep = await response.json();

  divDados.innerHTML = `
  <p> Endereço: ${dadosCep.logradouro}</p>
  <p> Endereço: ${dadosCep.localidade}</p>
  `

  //console.log(data);
  //console.log(data.bairro);
};

//consultarCep();