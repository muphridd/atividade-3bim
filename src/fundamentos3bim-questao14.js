function verificaPalavraNaFrase(frase, palavra) {
    return frase.includes(palavra);
}

console.log(verificaPalavraNaFrase("O céu é azul", "céu")); 
console.log(verificaPalavraNaFrase("O céu é azul", "verde")); 
