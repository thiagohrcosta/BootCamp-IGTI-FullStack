
#  Manipulação do DOM e CSS com JS

O **DOM** (Document Object Model) representa uma espécie de estrutura feita em formato de árvore onde há a possibilidade de se navegar conforme suas conexões. Este processo é um pouco demorado.
  

##  querySelector()

É o principal comando de acesso aos elementos DOM *um-a-um*.

> var FirstParagraph = document.querySelector("p");
> ***
> var content = document.querySelector(".content");

## querySelectorAll()
Por padrão o retorno será uma NodeList, desta forma, uma forma simples de se converter é a *"Array.from(allParagraphs)"*.

## textContent
Se refere ao conteúdo do elemento, por exemplo:
> var element(...)
> element.textContent = "Texto alterado aqui".

# Manipulando CSS com JavaScript

O **CSS** pode ser alterado diretamente com o JavaScript, apesar de não ser o ideal. 

> var p = document.querySelector("p");
> p.style.color = "red";

O ideial é usar o comando **classList.add() e classList.remove()**.
