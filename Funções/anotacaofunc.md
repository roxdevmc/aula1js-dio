# Funçoes JavaScript 27/03/2023

trecho de codigo que podemos executar quando quiser

como declarar uma função:

function nome(){}  

executar a função de forma simples
nome('teste'); 


exemplo:
    function nome(name){
        console.log('Meu nome é:' + nome);
    }

    nome('Maria');
    nome ('Felipe');

Funções que não retornam nada é chamado de Procedimentos, ele executam a função e pronto, n tem retorno.

Tudo dentro do 'function' se torna uma função que vc pode executar quando quiser
oq vc coloca dentro da função chama parametros

no 'return' vc vai indicar o que vai acontecer com esses parametros da 'function'

exemplo:
function resultado = somar(a, b){
    return a+b;
}
para exibir o resultado no console
console.log(resultado);


Math.pow - eleva o nuemro à potencia 
Math.pow(base, expoente)
base - o numerou ou variavel que vc vai elevar
expoente - quantas vezes

exemplo:
Math.pow(altura, 2);  ----- altura(variavel) elevado a 2.

ctrl + D  - altera linha de codigo iguais, no doc inteiro - cuidado!!!!

todo trecho de codigo que tenha uma responsabilidade só vc isola ele.
na função 'main' vc coloca tudo que for necessario para rodar as outras funcoes, diminui a complexidade e fica mais legivel, exemplo no arquivo func1.js

# Funçoes JavaScript 10/04/2023