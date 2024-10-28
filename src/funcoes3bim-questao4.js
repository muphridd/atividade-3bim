function palavraPresente(frase, palavra) {
    return frase.includes(palavra);
}

console.log(palavraPresente("Olá, tudo bem?", "tudo")); 
console.log(palavraPresente("Olá, tudo bem?", "nada")); 
