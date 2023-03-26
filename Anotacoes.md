# Primeiros passos com JavaScript 24/03/2023

### Variáveis e Operadores

node nomedoarquivo.ext = roda o programa no terminal

Imprimir no terminal 
console.log('texto/string');
console.log(variavel); 
a variavel passa o valor dela podendo ser: número, string etc...

'let' e 'const' são usados para declarar variáveis. 'let' é usado para declarar variáveis que podem ser reatribuidas, ja o 'const'não.

exemplo: 
let idade = 30;
idade = 31; 
ok!

const PI = 3,14;
pi = 3,14159; 
erro!

ou seja quando o valor da variavel NÃO for alterado vc usa o 'const', assim garante que não havera mudança.


### Bloco de comentarios 
/*   */ - oculta um bloco de texto no terminal
// - oculta a linha do texto no terminal

typeoff - indica o tipo de dado que vai ser transmitido
ex: string (texto), numero, etc...

console.log(`texto ${variavel}`);
esse comando printa o valor da variavel e o texto, vc pode mudar o texto de posição.

Arredondar o número
console.log(valorTotalGasto.toFixed(2));
quantidade de número após a vírgula
