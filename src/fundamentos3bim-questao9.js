
function somaTamanhosPalavras(frase) {
    
    const palavras = frase.split(" ");
    
    
    const soma = palavras.reduce((total, palavra) => total + palavra.length, 0);
    
    return soma;
}


const fraseOriginal = "A programação é cansativa mas boa";
const somaTotal = somaTamanhosPalavras(fraseOriginal);

console.log(`Frase: "${fraseOriginal}"`);
console.log(`Soma dos tamanhos das palavras: ${somaTotal}`);
