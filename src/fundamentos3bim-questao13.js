
function somarCubos(numeros) {
 
    let somaTotal = 0;

    
    for (const numero of numeros) {
        somaTotal += Math.pow(numero, 3); 
    }

    return somaTotal; 
}


const numeros = [1, 2, 3, 4]; 
const resultado = somarCubos(numeros);

console.log(`Números: ${JSON.stringify(numeros)}`);
console.log(`Soma dos cubos: ${resultado}`);
