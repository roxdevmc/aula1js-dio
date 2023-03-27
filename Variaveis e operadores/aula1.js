/*  24/03/2023

Faça um programa para calcular o valor de uma viagem.
- Preço do combustível;
- Gasto médio de combustível por KM;
- Distância em KM da viajem;

Imprima no console o valor que será gasto para realizar a viagem.
*/

let valorCombustivel = 5.90;
let gastoKM = 16;
let distancia = 400;
let totalCombustivelGasto = distancia/gastoKM;

let valorTotalGasto = totalCombustivelGasto*valorCombustivel;

console.log(`Quantidade de combustível necessaria ${totalCombustivelGasto} litros`);
console.log(`Valor da Gasolina da Viagem ${valorTotalGasto.toFixed(2)} Reais`);
