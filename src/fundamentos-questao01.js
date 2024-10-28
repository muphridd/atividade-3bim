const agora = new Date();

const diasDaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

const diaDaSemana = diasDaSemana[agora.getDay()]; 
const horas = String(agora.getHours()).padStart(2, '0'); 
const minutos = String(agora.getMinutes()).padStart(2, '0'); 
const segundos = String(agora.getSeconds()).padStart(2, '0'); 


console.log(`Hoje é: ${diaDaSemana}.`);
console.log(`A hora atual é: ${horas}:${minutos}:${segundos}.`);
