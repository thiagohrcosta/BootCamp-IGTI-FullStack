# Eventos

A ideia de eventos é o "quando", ou seja, quando deve ocorrer, em outras palavras, é uma configuração para acontecer e iniciar quando algo ocorrer.

- onload = após o carregamento
- onchange = conteúdo do elemento alterado
- onfocus = elemento recebe foco
- onblur = elemento perde o foco
- onselect = elemento é selecionado
- onsubmit = dados do formulário são enviados ao servidor
- onkeydown = tecla pressionada
- onkeypress = tecla pressionada e solta
- onkeyup = tecla solta
- onclick = clique do mouse em um elemento
- ondbclick = clique duplo do mouse no elmento
- onmousemove = mouse se moveu sobre o elemento
- onmouseout = mouse saiu do elemento
- onmouseover = mouse passou sobre o elemento
- etc

## Evitando envio de dados ao servidor

Quando o evento acontecer, ele é capturado e *evento.preventDefault* evitando seu comportamento padrão e seguindo o que foi determinado pelo código. 

