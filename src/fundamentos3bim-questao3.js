function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function conversaoTemperatura() {
    const temperatura = parseFloat(prompt("Digite a temperatura:"));
    const tipoConversao = prompt("Digite 'C' para converter de Celsius para Fahrenheit ou 'F' para converter de Fahrenheit para Celsius:").toUpperCase();

    if (tipoConversao === 'C') {
        const resultado = celsiusParaFahrenheit(temperatura);
        console.log(`${temperatura}°C é igual a ${resultado.toFixed(2)}°F`);
    } else if (tipoConversao === 'F') {
        const resultado = fahrenheitParaCelsius(temperatura);
        console.log(`${temperatura}°F é igual a ${resultado.toFixed(2)}°C`);
    } else {
        console.log("Tipo de conversão inválido. Por favor, digite 'C' ou 'F'.");
    }
}


conversaoTemperatura();
