// 27/03/2023 Funções

/*
function juros(valor, percentualJuros){
   const valorAcrecimo = (percentualJuros / 100) * valor;
   return valor + valorAcrecimo
 }
 
console.log(juros(100, 10));
console.log(juros(100, 15));

//////////////////////////////////////////////////

 O codigo principal coloca dentro de uma função main

function main(){
    console.log('Programa principal'); 
}
main()

///////////////////////////////////////////////////

Exercicio IMC, refatorar para funcoes

*/

function calcularIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc <= 30) {
    return "Acima do peso";
  } else if (imc >= 30 && imc <= 40) {
    return "Obeso";
  } else if (imc > 40) {
    return "Obesidade grave";
  }
}

(function () {
  const altura = 1.77;
  const peso = 80;

  const imc = calcularIMC(peso, altura);
  console.log(classificarIMC(imc));
})();

/* comparação das mudanças entre o arquivo imc.js e o func1.js.

nas declaraçoes das constantes principais, para rodar o codigo, todas elas foram agrupadas na 'function main'
todas as informações principais são colocadas lá.

a const imc = peso/(altura*altura);
rodava a conta do IMC foi substituido por uma função que vai exercer esse trabalho
'function calcularIMC'

perguntar pro felipe o pq agnt agrupa tudo nas funcoes assim, é para ficar mais otimizado, mais rapido, mais facil de ler?
pq basicamente so trocou console.log por return e teve q add uma funcao para a conta que antes era feita na constante, agora a conts ficou so como declaracao e a conta foi na funcao
wtf!!!

funcoes no js são valores/objetos, se vc usar o console.log ele vai retornar o nome da funcao e nao oq ta dentro dela;

na 'function main' vc inicia e fecha ela com () e ja coloca o (); no final.
ela executa a função e ja chama ela para vc usar, sem precisar escrever 'main();' no final.
pode deixar ela sem nome tambem, tirar o main
vc cria a funcao e ja executa ela imedietamente, vc isola esse codigo ali dentro, executa uma vez só
usado muito na web.

funcao anonima e invoca ela imediatamente. ele vai ser nosso 'main', codigo principal
 */
