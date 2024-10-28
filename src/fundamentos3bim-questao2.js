
function calcularAreaTriangulo(a, b, c) {
 
    const s = (a + b + c) / 2;

  
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}


const lado1 = 5;
const lado2 = 6;
const lado3 = 7;

const areaTriangulo = calcularAreaTriangulo(lado1, lado2, lado3);
console.log(`A área do triângulo é: ${areaTriangulo.toFixed(2)}`);
