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

const preco = 10;

const debito = preco - (preco * 0.1);
const dinheiroPIX = preco - (preco * 0.15);
const duasVezes = preco;
const maisVezes = preco + (preco * 0.10);

console.log (`Valor no Débito é R$${debito}`);
console.log (`Valor no Dinheiro ou PIX é R$${dinheiroPIX}`);
console.log (`Valor em 2x sem juros é R$${duasVezes}`);
console.log (`Valor acima de 2x é R$${maisVezes}`);

