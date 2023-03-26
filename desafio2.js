// Variaveis e Operadores & Condicionais 26/06/23

/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
    1 - Preço do Etanol;
    2 - Preço da Gasolina;
    3 - O Tipo de combustivel que está no seu carro;
    4 - Gasto médio do combustivel do carro por Km;
    5 - Distancia em Km da viagem;

 Imprima no console o valor que será gasto para realizar está viagem.
*/

 const valorEtanol = 5;
 const valorGasolina = 10;
 const tipoCombustivel = 'Gasolina';
 const gastoKmPorLitro = 16;
 const distancia = 400;

 const totalCombustivelGasto = distancia/gastoKmPorLitro;
 
 /*
 const valorTotalGastoEtanol = totalCombustivelGasto*valorEtanol;
 const valorTotalGastoGasolina = totalCombustivelGasto*valorGasolina;

 esse codigo vc coloca dentro do log do if/else pq diminui o tempo de roda o programa, fica mais otimizado.
*/

if (tipoCombustivel === 'Etanol') {
    
    const valorTotalGastoEtanol = totalCombustivelGasto*valorEtanol;

    console.log(`Valor do Etanol da Viagem ${valorTotalGastoEtanol.toFixed(2)} Reais`);
}


else {
    const valorTotalGastoGasolina = totalCombustivelGasto*valorGasolina;

    console.log(`Valor da Gasolina da Viagem ${valorTotalGastoGasolina.toFixed(2)} Reais`);
}


console.log(`Quantidade de combustível necessaria ${totalCombustivelGasto} litros`);



