function inverterNumero(numero) {
    let numeroInvertido = '';
    const strNumero = numero.toString();

    for (let i = strNumero.length - 1; i >= 0; i--) {
        const digito = strNumero[i];

        switch (digito) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                numeroInvertido += digito;
                break;
            default:
                break;
        }
    }
    return Number(numeroInvertido);
}


console.log(inverterNumero(12356)); 
