/* Arrays - listas de conteudo - 22/04/23

listas são representadas por []
posição sempre comeca em zero 

ex: console.log(alunos[0]);
printa o 1 nome da lista.

alunos.push(oq vc quer add na lista);

alunos[posicao]= oq for add;
as duas formas add na lista 

a lista pode comecar vazia 

.pop - remove o ultimo item da lista e remove
.shift - remove o primeiro item da lista

*/
 
const notas = [];

notas.push(5);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(7);
notas.push(8);

//const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

// .length - tamanho da lista
// console.log(soma / notas.length);

//estrutura de repetição, para percorrer a lista de forma dinamica
// é uma variavel let, pq a cada interação estamos modificando
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length
console.log(media.toFixed(1));

/*
estrutura do for, usado para percorrer uma quantidade especifica de vezes

for (let index = 0; index < array.length; index++) {
    const element = array[index];   
}

looping
let i = 0  declaração da variavel de controle, posição zero da lista;
i < 10    estrutura condicional se entra ou nao desse for , enquanto i < 10 ele entra no codgio;
i++ condição que vai alterar, ai volta para testar a condicao novamente, roda o codigo e novo 

quando chega em uma condicao false ele sai do for.

exemplo:
const nome = 'Maria Cristina Ribeiro e Lima';

for (let i= 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}
*/

//depurar o codigo, ver se a execução esta correta.
/*  ponto vermelho do lado das linhas, ponto de interrupção
Run and Debug crtl + shift + D

painel
excuta e sai
contornar, proxima linha
intervir, executa se for funcao ele entra
sair, ele sai da funcao que vc entrou,
reiniciar, comeca do zero
parar


*/