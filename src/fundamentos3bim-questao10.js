
function converterNome(nomeCompleto) {
    
    const partes = nomeCompleto.split(" ");
    
    
    const primeiroNome = partes[0];
    const sobrenome = partes[partes.length - 1];
    
    
    const iniciais = partes.slice(1, partes.length - 1).map(nome => nome.charAt(0).toUpperCase() + ".").join(" ");
    
    
    return `${sobrenome.charAt(0).toUpperCase()}. ${iniciais} ${primeiroNome}`;
}

const nomeCompleto = "Alan Mathison Turing";
const nomeFormatado = converterNome(nomeCompleto);

console.log(`Nome original: "${nomeCompleto}"`);
console.log(`Nome formatado: "${nomeFormatado}"`);
