function encontrarMaiorEMenor(numeros) {
    let maior = numeros[0];
    let menor = numeros[0];

    for (const numero of numeros) {
        if (numero > maior) {
            maior = numero;
        }
        if (numero < menor) {
            menor = numero;
        }
    }

    return { maior, menor };
}

console.log(encontrarMaiorEMenor([10, 5, 8, 23, 4, 42, 16, 2, 99, 1])); 
