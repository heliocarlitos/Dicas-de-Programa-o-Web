# DOM

O DOM (Document Object Model) é uma interface de programação que representa a estrutura de um documento HTML ou XML como uma árvore de objetos. Cada elemento no documento, como tags HTML, atributos e texto, é representado como um nó (node) na árvore, e esses nós podem ser manipulados usando JavaScript. O DOM é fundamental para interatividade em páginas web, permitindo que você acesse, modifique e atualize dinamicamente o conteúdo e a aparência da página.

**Estrutura do DOM:**
A estrutura do DOM é organizada hierarquicamente, começando pelo nó raiz (geralmente o `<html>`), que tem nós filhos representando os elementos HTML (como `<head>` e `<body>`), que por sua vez têm seus próprios nós filhos representando outros elementos e assim por diante.

**Exemplo Simples:**
Vamos considerar o seguinte HTML básico:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="titulo">Olá, Mundo!</h1>
    <p>Este é um parágrafo.</p>
</body>
</html>
```

**Como acessar e manipular elementos com JavaScript:**

1. **Seleção de Elementos:**
   - Use métodos como `getElementById`, `getElementsByClassName`, `getElementsByTagName`, ou `querySelector` para selecionar elementos do DOM.

   ```javascript
   // Selecionar por ID
   var tituloElemento = document.getElementById('titulo');
   ```

2. **Manipulação de Conteúdo:**
   - Modifique o conteúdo de um elemento usando propriedades como `innerHTML` ou `innerText`.

   ```javascript
   // Alterar o conteúdo do título
   tituloElemento.innerHTML = 'Novo Título';
   ```

3. **Atributos:**
   - Acesse ou modifique atributos de elementos.

   ```javascript
   // Obter ou definir o valor do atributo 'id'
   var idDoTitulo = tituloElemento.id;  // Obtendo
   tituloElemento.id = 'novoId';        // Definindo
   ```

4. **Estilo:**
   - Modifique o estilo de um elemento.

   ```javascript
   // Alterar a cor de fundo do título
   tituloElemento.style.backgroundColor = 'yellow';
   ```

5. **Manipulação de Classes:**
   - Adicione, remova ou verifique classes de um elemento.

   ```javascript
   // Adicionar uma classe ao título
   tituloElemento.classList.add('destaque');
   ```

**Exemplo Completo:**
Aqui está um exemplo que altera dinamicamente o conteúdo e estilo de um elemento:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulação do DOM</title>
    <style>
        .destaque {
            color: red;
            font-size: 24px;
        }
    </style>
</head>
<body>
    <h1 id="titulo">Olá, Mundo!</h1>
    <p>Este é um parágrafo.</p>

    <script>
        // Selecionar elemento pelo ID
        var tituloElemento = document.getElementById('titulo');

        // Alterar conteúdo e estilo do título
        tituloElemento.innerHTML = 'Novo Título';
        tituloElemento.style.backgroundColor = 'yellow';
        tituloElemento.classList.add('destaque');
    </script>
</body>
</html>
```

Ao abrir esse arquivo HTML no navegador, você verá que o título é alterado dinamicamente usando JavaScript. Este é apenas um exemplo básico; o DOM é vasto, e você pode realizar muitas operações diferentes para interagir com os elementos de uma página web. Conforme você avança no desenvolvimento web, a manipulação do DOM se torna uma parte essencial do seu conjunto de habilidades.