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

function compararPessoa(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);

    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);

    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}
const maria = new Pessoa('Maria', 27);
const felipe = new Pessoa('Felipe',31);

compararPessoa (maria,felipe);