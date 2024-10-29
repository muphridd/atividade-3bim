function verificaNumero(num1, num2) {
    return num1 === 30 || num2 === 30 || (num1 + num2 === 30);
}

console.log(verificaNumero(30, 5)); // true
console.log(verificaNumero(15, 15)); // true
console.log(verificaNumero(10, 20)); // true
console.log(verificaNumero(10, 5)); // false
