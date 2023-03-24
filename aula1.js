/* Faça um programa para calcular o valor de uma viagem.
- Preço do combustível;
- Gasto médio de combustível por KM;
- Distância em KM da viajem;

Imprima no console o valor que será gasto para realizar a viagem.
*/



let valorCombustivel = 5.90;
let gastoKM = 16;
let distancia = 400;
let valor_ = 0
let totalCombustivelGasto = distancia/gastoKM;

let valorTotalGasto = totalCombustivelGasto*valorCombustivel;

console.log(totalCombustivelGasto);
console.log(valorTotalGasto);
