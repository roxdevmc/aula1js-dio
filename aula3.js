/* 26/03/2023

    1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, 
    calcule e imprima sua média e sua classificação conforme a tabela a baixo.

    Média = (nota 1 + nota 2 + nota 3) /3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, aprovado;
*/

const nota1 = 9;
const nota2 = 9;
const nota3 = 9;

const media = (nota1 + nota2 + nota3)/3;

// se a média for menor que 5 é igual a reprovação
// se não se a media for entre 5 e 7 é igual a recuperação
// se não se a media for acima de 7 é igual a aprovado 
// && quer fizer e, ou seja as duas condições colocadas tem que ser verdadeiras


if(media < 5){
    console.log('reprovado');
}
else if(media >= 5 &&  media <= 7){
    console.log('recuperação');
}
else if (media > 7){
    console.log('aprovado');
}

console.log(`Sua média foi ${media}`);

/////////////////////////////////////////

/* Refatoração 1
Não precisa declarar novamente o > 7 pq vc ja colocou pq tudo que sobra é aprovado.
diminuir a quantidade de condições, pq quanto mais condições mais complexo fica e muitas vezes não te necessidade 
de reafirmar oq vc ja declarou anteriormente.

//////////////////////////////////////////////////

if(media < 5){
    console.log('reprovado')
}else if(media <=7){
    console.log('recuperação')
}else{
    console.log('aprovado')
}
*/

/////////////////////////////////////////

/* Refatoração 2
Qualquer valor acima de 7 automaticamente vai ser aprovado, < 5 vai ser reprovado.
o que sobre esta entre 5 - 7 é a recuperação.
novamente não precisa reafirmar uma condição que vc ja colocou.

/////////////////////////////////////////////////////////////////////

if(media > 7){
    console.log('aprovado')
}else if (media < 5){
    console.log('reprovado')
}else{
    console.log('recuperação')
}
*/