
function inverterFrase(frase) {
    
    return frase.split("").reverse().join("");
}


const fraseOriginal = "Atividade dificil.";
const fraseInvertida = inverterFrase(fraseOriginal);

console.log(`Frase original: "${fraseOriginal}"`);
console.log(`Frase invertida: "${fraseInvertida}"`);
