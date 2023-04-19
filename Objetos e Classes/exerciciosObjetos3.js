/* Crie uma classe para representar pessoas.
Para cada pessoa teremos atributos como: nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC = peso / (altura * altura);
Instancie uma pessoa chamada José, que tenha 70kg, 1,75 e peça a José dizer o valor do seu IMC.
 */
class pessoa {
  constructor(altura, peso) {
    this.altura = altura;
    this.peso = peso;
  }

  imc() {
    const imc2 = this.peso / (this.altura * this.altura);
    return `O imc de José é ${imc2}`;
  }
}
const jose = new pessoa(1.75, 70);
console.log(jose.imc());
