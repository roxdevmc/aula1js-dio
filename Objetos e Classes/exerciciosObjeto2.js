/* 
Crie uma classe para representar carros.
Os carros possuem:
    - uma marca,
    - uma cor,
    - gasto medio de combustivel por Km rodado.

    Crie um método que dado a quantidade de KM e o preço do combustivel 
    nos dê o valor gasto em reais para realizar o percurso.
*/

class Carros {

    constructor(marca,cor,gastoMedioKm){
        this.marca = marca
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    resultado(precoCombustivel, distanciaKm,){
    
      const valorTotal = (distanciaKm / this.gastoMedioKm) * precoCombustivel;

      return `O valor total gasto R$${valorTotal}`;

    }
}

const march = new Carros('nissan', 'azul', 16);
// precisa passar a string separada por , uma pra cada parametro declarado.

console.log(`Seu carro é ${march.marca}, a cor é ${march.cor}`);
console.log(march.resultado(5, 160));


/*Seu carro é ____________, a cor é ________, gasto medio de Km/litro é ________ ,
seu gasto para essa viagem vai ser _________ . */
 