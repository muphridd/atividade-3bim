
function compararNumeros(num1, num2) {
  
    const isNum1Impar = num1 % 2 !== 0;
    const isNum2Impar = num2 % 2 !== 0;

    if (isNum1Impar && !isNum2Impar) {
        return `${num1} é maior (ímpar)`;
    } else if (!isNum1Impar && isNum2Impar) {
        return `${num2} é maior (ímpar)`;
    } else {
      
        if (num1 > num2) {
            return `${num1} é maior`;
        } else if (num2 > num1) {
            return `${num2} é maior`;
        } else {
            return 'Os números são iguais';
        }
    }
}

const numero1 = 5; 
const numero2 = 4;
const resultado = compararNumeros(numero1, numero2);

console.log(resultado);
