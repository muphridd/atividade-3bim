
function verificarNumeros(num1, num2) {
    
    return num1 === 30 || num2 === 30 || (num1 + num2 === 30) || (num1 === 12 && num2 === 12);
}


const numero1 = 12; 
const numero2 = 12;
const resultado = verificarNumeros(numero1, numero2);

console.log(`Os números ${numero1} e ${numero2} atendem às condições? ${resultado}`);
