/* 27/03/2023
Elabore um algoritmo que calcule o que deve ser pago por um produto, 
considerando o preço normal de etiqueta e a escolha da condição de pagamento.

Ultilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida
e efetuar o cálculo adequado.

Código Condição de Pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal da etiqueta sem juros;
- Acima de duas vezes, preço da etiqueta mais juros de 10%;
*/
 
//////////////////////////////////////////////////////////////////

/*
Nesse codigo, vai printar todos os valores final respectivos 
a forma de pagamento escolhida.

const preco = 10;

const debito = preco - (preco * 0.1);
const dinheiroPIX = preco - (preco * 0.15);
const duasVezes = preco;
const maisVezes = preco + (preco * 0.10);

console.log (`Valor no Débito é R$${debito} reais`);
console.log (`Valor no Dinheiro ou PIX é R$${dinheiroPIX} reais`);
console.log (`Valor em 2x sem juros é R$${duasVezes} reais`);
console.log (`Valor acima de 2x é R$${maisVezes} reais`);

*/

/////////////////////////////////////////////////////

// esse codigo vai mostrar somente o valor de uma forma de pagamento escolhida
const preco = 10;
const pagamento = 3;


if (pagamento === 1) {
    console.log (`O valor é R$${preco - (preco * 0.1)} reais`); 
} 

else if (pagamento === 2){
    console.log(`O valor é R$${preco - (preco * 0.15)} reais`);
}
else if (pagamento === 3) {
    console.log(`O valor é R$${preco} reais`);
}

else if (pagamento === 4){
    console.log(`O valor é R$${preco + (preco * 0.10)} reais`);
}