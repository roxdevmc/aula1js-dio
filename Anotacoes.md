# Primeiros passos com JavaScript 24/03/2023

node nomedoarquivo.ext = roda o programa no terminal

Imprimir no terminal 
console.log('texto/string');
console.log(variavel); 
a variavel passa o valor dela podendo ser: número, string etc...

string sempre entre aspas simples 'string'

### Variáveis e Operadores

'let' e 'const' são usados para declarar variáveis. 'let' é usado para declarar variáveis que podem ser reatribuidas, ja o 'const'não.

exemplo: 
let idade = 30;
idade = 31; 
ok!

const PI = 3,14;
pi = 3,14159; 
erro!

ou seja quando o valor da variavel NÃO for alterado vc usa o 'const', assim garante que não havera mudança.

exemplo 2:

let nomeDoAluno = 'Renan Johannsen de Paula';
console.log(nomeDoAluno);

nomeDoAluno = 'Vitor Johansen Guerra';
console.log(nomeDoAluno); 

Quando vc definir uma variavel no let e colocar o console em seguida ele vai printar 
se vc reatribuir outro valor na variavel apos o "console" ele vai printar os dois valores


const numero = 10;
const numeroEmTexto ="10";
console.log(numero ===numeroEmTexto); 

=== vc esta aplicando uma condição
numero === numeroEmTexto
so que numeroEmTexto é um a uma string 10, não é numero

entao ele volta como false, pq não é numero 10 e sim string.

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

#### Aula 3 - aula3.js Anotações 

&& quer dizer "E", ou seja as duas condições colocadas tem que ser verdadeiras.

if - se
else if - se não

Quando for fazer comparação de numero
< 5 - menor que 5
> 5 - maior que 5
<= 5 - menor ou igual a 5
>= - maior ou igual a 5


