
function verificarPalavra(frase, palavra) {
    console.log('ops'); 
    
    
    return frase.includes(palavra);
}


const frase = "O JavaScript é uma linguagem de programação muito popular.";
const palavra = "JavaScript";
const resultado = verificarPalavra(frase, palavra);

console.log(`A palavra "${palavra}" está presente na frase? ${resultado}`);
