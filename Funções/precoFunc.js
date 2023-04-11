/* 10/04/2023
Elabore um algoritmo que calcule o que deve ser pago por um produto, 
considerando o preço normal de etiqueta e a escolha da condição de pagamento.

Ultilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida
e efetuar o cálculo adequado.

Código Condição de Pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal da etiqueta sem juros;
- Acima de duas vezes, preço da etiqueta mais juros de 10%;

const valor = 10;
const pagamento = 1;

if (pagamento === 1) {
    console.log (`O valor é R$${preco - (preco * 0.1)} reais`); 
} else if (pagamento === 2){
    console.log(`O valor é R$${preco - (preco * 0.15)} reais`);
}else if (pagamento === 3) {
    console.log(`O valor é R$${preco} reais`);
}else if (pagamento === 4){
    console.log(`O valor é R$${preco + (preco * 0.10)} reais`);
}
*/
/// o USUARIO  pode passar o valor do desconto como 10,20 e bla bla e nao 0.1, fazendo uma funcao so e nao 3 if else

const valor = 10;
const pagamento = 3

function aplicarDesconto(valor,desconto){
    return (valor - (valor * (desconto / 100)))
}

function aplicarJuros(valor,desconto){
    return (valor + (valor * (desconto / 100)))
}
/*
if (pagamento === 1){
    console.log(`O valor é R$${aplicarDesconto(valor,10)}`)
} else if (pagamento === 2){
    console.log(`O valor é R$${aplicarDesconto(valor,15)}`)
} else if (pagamento === 3){
    console.log(`O valor é R$${aplicarDesconto(valor,0)}`)
}  else if (pagamento === 4){
    console.log(`O valor é R$${aplicarJuros(valor,10)}`)
}
*/

//// USAR CRASE SEMPRE 24HRS 7 DIAS POR SEMANA PQ ELA FAZ O ${} FUNCIONAR 

function valorFinal(metodoDePagamento, valor){
    if (metodoDePagamento === 1){
        return (`O valor é R$${aplicarDesconto(valor,10)}`)
    } else if (metodoDePagamento === 2){
        return (`O valor é R$${aplicarDesconto(valor,15)}`)
    } else if (metodoDePagamento === 3){
        return (`O valor é R$${aplicarDesconto(valor,0)}`)
    }  else if (metodoDePagamento === 4){
        return (`O valor é R$${aplicarJuros(valor,10)}`)
    }
}

const resultado = valorFinal(1,10);
console.log(resultado);
