let valor1 = parseInt(prompt('Insira o primeiro número')); console.log(`Valor 1 é ${valor1}`);
let valor2 = parseInt(prompt('Insira o segundo número')); console.log(`Valor 2 é ${valor2}`);

function maiorNumero(valor1, valor2) {
    if (valor1 > valor2) {
        return alert(`${valor1} é maior que ${valor2}`);
    } else if (valor1 < valor2) {
        return alert(`${valor2} é maior que ${valor1}`);
    } else {
        return alert('Os dois valores que você inseriu são iguais.');
    }
}

maiorNumero(valor1, valor2);