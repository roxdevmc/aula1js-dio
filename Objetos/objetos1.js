/* Objeto 
const pessoa = {
    nome: 'maria cristina lima',
    idade: 27,
    altura: 1.75,
   
    descricao(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

// delete maria.nome;  
// ele vai printar somente a idade e altura
pessoa.descricao()
*/

// Classes
// ñ precisa colocar descrito nome, idade etcc, 
//pq vc ja esta declarando no constructor (exercicioObjetos2.js)

class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade;
    }
    descrição() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const maria = new Pessoa('Maria', 27);
const felipe = new Pessoa('Felipe', 31);

maria.descrição();
felipe.descrição();

console.log(maria);
console.log(felipe);