# Programação assíncrona

Existem operações que são lentas, mas que são resolvidas pelo JavaScript com alguns recursos, tais como **event loop** e **callbacks**.

Algumas operações lentas são: 
- Requisição de dados à APIs;
- Processamento intenso de dados;
- Comunicação com bancos de dados (Node.js).

Não é possível prever quando haverá o retorno das solicitações, contudo, é de grande importância que o JS não espere o término das instruções, para tanto a principal técnica é utilizar o **event loop**.

## Event loop

As funções a serem executadas ficam em uma pilha lógica de invocações (call stack). Quando a função utiliza Web APIs, ela precisa passar pelo event loop, pois está sujeita à lentidões. O event loop executa uma função por vez e faz orquestração que permite execução assíncrona. Em geral, funções que usam WEB APIs, possuem callbacks (funções passadas por parâmetros).

## setTimeout e setInterval

O **setTimeout** é usado para postergar a execução de uma dada função, para que ela seja executada após um dado período de tempo. Já o **setInterval** é para executar algo repetidamente, ou seja, uma mensagem a cada 2 segundos, sendo interrompido pelo comando **clearInterval**. 

