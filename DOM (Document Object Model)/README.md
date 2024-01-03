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

<hr>

# IMPORTANTE

> [!IMPORTANT]
> O uso excessivo de `innerHTML` pode resultar em problemas de segurança e desempenho. É recomendável, sempre que possível, adotar abordagens mais seguras e eficientes para manipulação do DOM.

Ao criar novos elementos HTML dinamicamente no JavaScript, a abordagem com `createElement` e `appendChild` é preferível. Isso ajuda a evitar ataques de injeção de código e melhora a legibilidade e a manutenção do código.

Aqui está um exemplo básico de como criar um elemento e adicioná-lo ao DOM usando `createElement` e `appendChild`:

```javascript
// Criar um novo elemento <div>
const newDiv = document.createElement('div');

// Definir propriedades do elemento, se necessário
newDiv.textContent = 'Este é um novo elemento!';

// Adicionar o novo elemento ao final do corpo da página
document.body.appendChild(newDiv);
```

Essa abordagem é mais segura e eficiente do que manipular diretamente o `innerHTML`. Obrigado por trazer isso à tona para garantir boas práticas de codificação!

Vamos criar um exemplo prático onde usaremos `createElement` e `appendChild` para adicionar dinamicamente um novo item de lista (`<li>`) a uma lista não ordenada (`<ul>`). Este é um caso bastante comum ao trabalhar com a manipulação do DOM.

### HTML Inicial:

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo com createElement e appendChild</title>
</head>
<body>
    <h2>Lista de Itens</h2>
    <ul id="lista-itens">
        <!-- Itens existentes -->
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <script src="script.js"></script>
</body>
</html>
```

### JavaScript (script.js):

```javascript
// Função para adicionar um novo item à lista
function adicionarNovoItem() {
    // Criar um novo elemento <li>
    const novoItem = document.createElement('li');

    // Definir o conteúdo do novo item
    novoItem.textContent = 'Novo Item';

    // Adicionar o novo item à lista (<ul>)
    const lista = document.getElementById('lista-itens');
    lista.appendChild(novoItem);
}

// Chamada da função ao carregar a página (apenas para fins de demonstração)
adicionarNovoItem();
```

Neste exemplo, temos uma página HTML com uma lista não ordenada (`<ul>`) contendo três itens. O JavaScript incluído (`script.js`) contém uma função chamada `adicionarNovoItem` que cria um novo item de lista (`<li>`), define seu conteúdo como "Novo Item" e o adiciona à lista existente.

Ao carregar a página, a função `adicionarNovoItem` é chamada, resultando na adição de um novo item à lista. A chamada da função está lá apenas para fins de demonstração; em um cenário real, você chamaria essa função em resposta a algum evento, como um clique em um botão.

Essa abordagem é preferível ao uso de `innerHTML` porque é mais segura contra ataques de injeção de código e é mais eficiente em termos de desempenho.
