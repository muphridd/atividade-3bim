
const alunos = [
    ["Aluno1", [10, 50, 100]],
    ["Aluno2", [55, 78, 90]],
    ["Aluno3", [70, 80, 90]],
    ["Aluno4", [30, 40, 50]],
    ["Aluno5", [88, 92, 95]],
];


function calcularMedias(alunos) {
    for (let i = 0; i < alunos.length; i++) {
        const nome = alunos[i][0];
        const notas = alunos[i][1];
        
        
        const soma = notas.reduce((acc, nota) => acc + nota, 0);
        const media = soma / notas.length;

        
        const status = media < 70 ? "Reprovado" : "Aprovado";

        
        console.log(`${nome}, média ${media.toFixed(2)}, ${status}.`);
    }
}

calcularMedias(alunos);
