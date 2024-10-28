
function ordenarNumeros(lista) {
    return lista.sort((a, b) => a - b);
}

const numeros = [34, 12, 5, 67, 23, 8, 45]; 
const numerosOrdenados = ordenarNumeros(numeros.slice()); 

console.log(`Números originais: ${JSON.stringify(numeros)}`);
console.log(`Números ordenados: ${JSON.stringify(numerosOrdenados)}`);
