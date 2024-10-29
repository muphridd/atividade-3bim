function inverteNumero(numero) {
    const numeroInvertido = numero.toString().split('').reverse().join('');
    return parseInt(numeroInvertido, 10);
}

console.log(inverteNumero(12356)); 
console.log(inverteNumero(987654)); 
