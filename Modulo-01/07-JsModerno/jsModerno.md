# JavaScript Moderno

## ES6+

O ECMAScript encontra-se em constante evolução, contudo, há um cuidado para que não se "quebre" os navegadores. Há um transpilador (BABEL, TYPESCRIPT) para converter uma linguagem para ela mesma em outra versão. 

## VAR x CONST x LET

O **VAR** tem um escopo mais amplo, o que pode atrapalhar em certas aplicações, podendo usar a **LET** para menor amplitude. Contudo a melhor técnica é utilizar o **CONST**, para garantir a imutabilidade de um dado resultado. Contudo, isso não se aplica a array e objetos.


## ARROW FUNCTIONS

São funções com sintaxe mais simples.

> const makeBeer = function beerFun(qty) {
>    return ''.repeat(qty);
> }
> const makeWine = (qt) => ''.repeat(qty);

## TEMPLATE LITERALS

É uma forma mais elegante para se realizar a concatenação, sendo usado as crases com **${}**.


## DEFAULT PARAMETRS

Caso o usuário não defina um valor, é possível que se defina por padrão um determinado valor.