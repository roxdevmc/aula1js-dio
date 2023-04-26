// crie um programa que dado um numero crie sua tabuada
/*
const numero = 7;

for (let i = 1; i <= 10; i++) {
    const tabuada = i * numero;
    console.log(tabuada);
}
*/

// crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
    
    const numero = numeros[i] ;
// se dividir por 2 e nao tiver resto é par, % resto divisao
    if (numero % 2 === 0){
        console.log(numero);
    }
}
