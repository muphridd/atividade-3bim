function maiorPalavra(frase) {
    const palavras = frase.split(' ');
    let maior = '';

    for (const palavra of palavras) {
        if (palavra.length > maior.length) {
            maior = palavra;
        }
    }

    return maior;
}

console.log(maiorPalavra("A programação é muito divertida!")); 
