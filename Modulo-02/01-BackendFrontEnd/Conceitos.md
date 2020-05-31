# Backend, Frontend e API´s

O **backend** diz respeito a parte que fica hospedada no servidor, onde não há interação com o usuário. Encontra-se ligada com a regra de negócio da aplicação, inclusive sendo, por exemplo, responsável pela interação com o banco de dados.

Já o **frontend** é a parte da aplicação onde existe a interação com o usuário, podendo a página ser criada do lado do servidor **server side rendering** ou no próprio lado do usuário **client side rendering**.

## APIs

A sigla **API** significa *Application Programming Interface*, ou seja, é um conjunto de serviços que são expostos para permitir a comunicação entre sistemas, permitindo que outra aplicação ou browser consiga consumir a API. 

Na verdade, uma determinada aplicação acessa outra sem que saiba como se deu sua implementação, consumindo os dados que são expostos. A exposição destes dados é controlada.

Os serviços que fazem parte de uma API são chamdos de **Webservices**, que somente transmite as informações, não sendo uma aplicação por si só. 

Uma das vantagens de seu uso é a integração dos sistemas, determinando o que será fornecido para as demais aplicações. Há também o favorecimento a reutilização de software e melhora na segurança da integração.

Já o **REST** é a sigla para Representational State Transfer, sendo que ele utiliza uma URI (Uniform Resource Identifier) para realizar uma chamada de serviço. Estas URIs que uma API disponibiliza são conhecidas como endpoints.

Alémd do endpoint o cliente fornece pelo método HPTT: GET, POST, PUT, DELETE.