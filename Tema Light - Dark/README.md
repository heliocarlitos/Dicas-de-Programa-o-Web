## [Visualizar](https://hcadeveloper.github.io/Tema-Light-Dark/)

# Documentação do Código HTML, CSS e JS para Alteração de Tema Light/Dark:

Este código HTML, CSS e JavaScript é projetado para criar um tema light/dark alternável em uma página da web. A estrutura geral do código consiste em três partes principais: HTML para a estrutura da página, CSS para estilização e JavaScript para a lógica de alternância de tema. Vamos analisar cada parte:

## HTML (index.html)


```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tema Light/Dark</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <!-- Contêiner principal -->
        <div class="container">
            <!-- Título do Tema -->
            <h3 translate="no">Tema Light/Dark</h3>
            
            <!-- Botão para Alternar o Tema -->
            <button onclick="toggleTheme()">Alternar Tema</button>
        </div>
    </main>
</body>
</html>
```

- Um botão que, quando clicado, chama a função toggleTheme().


## CSS (style.css)

```css
/* Definição de variáveis de tema */
:root {
    --bg-light: #ffffff;
    --text-light: #333333;
    --btn-light: #3498db;

    --bg-dark: #333333;
    --text-dark: #ffffff;
    --btn-dark: #e74c3c;
}

/* Estilos globais do corpo da página */
body {
    background-color: var(--bg-light);
    color: var(--text-light);
    transition: background-color 0.5s, color 0.5s;
    margin: 0;
    font-family: Arial, sans-serif;
}

/* Estilos para o conteúdo principal */
main {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
}

/* Estilos para o contêiner central */
.container {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
    margin: 50px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Estilos para o botão */
button {
    background-color: var(--btn-light);
    color: #ffffff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.5s;
    margin-top: 10px;
}

/* Estilos do botão ao passar o mouse */
button:hover {
    background-color: #2980b9;
}

/* Estilos específicos para o modo escuro */
body.dark {
    background-color: var(--bg-dark);
    color: var(--text-dark);
}

body.dark button {
    background-color: var(--btn-dark);
}
```

- Declara variáveis CSS para as cores de fundo, texto e botão em ambos os temas.
- Estiliza o corpo da página, o botão e define estilos específicos para o modo escuro.

## JS(javascript.js)

```js
<script>
  // Função para Alternar o Tema
  function toggleTheme() {
      const body = document.body;
      const isDarkMode = body.classList.contains('dark');

      // Alterna entre os temas
      if (isDarkMode) {
          body.classList.remove('dark');
      } else {
          body.classList.add('dark');
      }
  }
</script>
```


- A função `toggleTheme` é acionada pelo botão.
- Obtém uma referência ao elemento `<body>` e verifica se a classe 'dark' está presente.
- Alterna entre adicionar e remover a classe 'dark' no `<body>`, alternando assim entre os temas.


Essas são as partes essenciais relacionadas à alteração do tema. O botão dispara a função que alterna a classe 'dark' no corpo da página, ativando ou desativando o modo escuro. As variáveis CSS fornecem flexibilidade para personalizar as cores em ambos os temas.
