/*27/03/2023
Formula IMC:
 IMC = peso / (altura * altura)

 Elabore um algoritmo que dado o peso e a altura de um adulto monstre
 sua condição de acordo com a tabela abaixo:

 IMC em adultos:
 - Abaixo de 18.5: Abaixo do peso;
 - Entre 18.5 e 25: Peso normal;
 - Entre 25 e 30: Acima do peso;
 - Entre 30 e 40: Obeso;
 - Acimda de 50: Obesidade grave;
*/
const altura = 1.77;
const peso = 80;
const imc =peso/(altura*altura);

console.log(`Seu IMC é ${imc .toFixed((2))}`);

if (imc < 18.5) {
    console.log ('Abaixo do peso');
}
else if (imc >= 18.5 && imc <= 25){
    console.log('Peso normal');
}
else if (imc >= 25 && imc <= 30){
    console.log('Acima do peso');
}
else if (imc >= 30 && imc <= 40){
    console.log('Obeso');
}
else if (imc > 40){
    console.log('Obesidade grave');
}