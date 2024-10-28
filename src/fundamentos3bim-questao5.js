function verificaNumeros(n1, n2, n3) {
    if (n1 >= 50 && n1 <= 99 && n2 >= 50 && n2 <= 99 && n3 >= 50 && n3 <= 99) {
        console.log("Todos os números estão entre 50 e 99: Sucesso!");
    } else {
        console.log("Erro: Pelo menos um dos números não está no intervalo de 50 a 99.");
    }
}

const numero1 = 55;
const numero2 = 75;
const numero3 = 90;

verificaNumeros(numero1, numero2, numero3); 