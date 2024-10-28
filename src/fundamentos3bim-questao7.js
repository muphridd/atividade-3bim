
function modificarFrase(frase) {
    
    const palavras = frase.split(" ");
    
    
    const palavrasModificadas = palavras.map(palavra => {
        if (palavra.length < 5) {
            return palavra.toUpperCase(); 
        } else {
            return palavra.toLowerCase(); 
        }
    });
    
    
    return palavrasModificadas.join(" ");
}


const fraseOriginal = "Hoje é um dia ensolarado";
const fraseModificada = modificarFrase(fraseOriginal);

console.log(`Frase original: "${fraseOriginal}"`);
console.log(`Frase modificada: "${fraseModificada}"`);
