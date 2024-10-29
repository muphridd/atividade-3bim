function comparaNumeros(num1, num2) {
    if (num1 > num2) {
        return `${num1} é maior que ${num2}`;
    } else if (num2 > num1) {
        return `${num2} é maior que ${num1}`;
    } else {
        return "Os números são iguais";
    }
}

console.log(comparaNumeros(10, 5)); 
console.log(comparaNumeros(3, 8));  
console.log(comparaNumeros(7, 7));   
