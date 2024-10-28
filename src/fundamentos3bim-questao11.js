function ultimosNElementos(numeros, n) {
    
    return numeros.slice(-n);
}

const numeros = [10, 58, 68, 88, 25, 45];
const n = 3;
const resultado = ultimosNElementos(numeros, n);

console.log(`Números: ${JSON.stringify(numeros)}`);
console.log(`Últimos ${n} elementos: ${JSON.stringify(resultado)}`);
