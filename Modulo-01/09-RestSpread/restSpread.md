## JavaScript Moderno REST/SPREAD

O **Spread** é bastante útil para trabalhar com arrays e objetos, que nada mais é do que "espalhar" os itens do array, para que posteriormente seja recuperado por outro.

> const array1 = [1,2,3];
> const array2 = [4,5,6];
> const array3 = [...array1, ...array2];
> array3 [1,2,3,4,5,6];

Já o **Rest** ao contrário de espalhar ele *agrupa* objetos, servindo principalmente para funções com números infinitos de parâmetros. 

> const superSum = (...numbers) => numbers.reduce((acc, curr) => acc + cur, 0);
> superSum(1,2,3);  
> 6
> superSum(1,2,3,4,5,6,7,8,9,10,100,1000);
> 1155

## Destructuring

Ele facilita a escrita principalmente quando se precisa criar variáveis a partir de elementos de objetos.

> const object = [nome: "Joao", idade: 50];
> const nome = object.nome;
> const {nome, idade} = object