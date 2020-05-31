# NODEJS

Criado em 2009, seu objetivo foi resolver um problema de arquiteturas bloqueantes, que tem por padrão o fato de que quando recebem uma requisição do servidor ela cria uma nova thread para realizar uma determinada ação. Ao longo desse processamento a thread ficará parada aguardando, mesmo se houver um processo de I/O no servidor. 

O **Node.Js** possui uma arquitetura não bloqueante, apresentando uma boa performance em consumo de memória e usando o máximo o poder de processamentos dos servidores. Cada aplicação possui um único processo.

## Event Loop

O **Node.Js** é uma plataforma baseada em evendos, ou seja, tudo é uma reação a um evento, seguindo a mesma ideia do JavaScript.

- EventEmmitter : Responsável por ficar emitindo um evento, que pode não ser realizado naquele instante, ficando na fila de eventos aguardando a sua hora de ser executado, e assim realizar o callback.

## Módulos do Node.js

Um módulo no Node.js é o mesmo que uma biblioteca no JavaScript, ou seja, é um conjunto de funções que podem ser incluídas em uma aplicação.

A **função require** importará um outro módulo, dentro da aplicação. 