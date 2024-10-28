
function encontrarNumeroMaisFrequente(arr) {
    const contagem = {};

    
    arr.forEach(num => {
        contagem[num] = (contagem[num] || 0) + 1;
    });

    let numeroMaisFrequente = null;
    let maxOcorrencias = 0;

    
    for (const num in contagem) {
        if (contagem[num] > maxOcorrencias) {
            maxOcorrencias = contagem[num];
            numeroMaisFrequente = num;
        }
    }

    return {
        numero: numeroMaisFrequente,
        ocorrencias: maxOcorrencias
    };
}


const numeros = [1, 3, 7, 1, 2, 3, 1, 3, 7, 2];
const resultado = encontrarNumeroMaisFrequente(numeros);

console.log(`O número mais frequente é: ${resultado.numero} com ${resultado.ocorrencias} ocorrências.`);
