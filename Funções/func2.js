/* Exercicios Funções 28/03/2023 
usar a estrutura da aula do dia 27 para contruir os exercicios

*/

// função para escrever o nome

function meuNome(nome) {
  return nome;
}
const nome = meuNome("maria");
console.log('Meu nome é ' + nome);

function verificarIdade(idade = 10) {
  if (idade < 18) {
    return 'Menor de idade';
  } else if (idade >= 18) {
    return 'Adulto';
  }
}

const resultado = verificarIdade();

console.log(resultado);

/* function nomeDaFunção (parametros) {

    corpo da função pode ser 
    return (parametro);
    ou
    if (parametro)
    return "string";

    não esquecer de invocar a função com () no final
    console.log(nomeDaFunção(invocar função e passa o valor));
}*/

////////////////////////////////////////
