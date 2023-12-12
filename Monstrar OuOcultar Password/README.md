<div align='center'>

  <hr>

● [Demo](https://hcadeveloper.github.io/Monstrar-OuOcultar-Password/) ● [Licença](https://github.com/hcadeveloper/Licen-q/blob/main/README.md) ●

<hr>

</div>

# Documentação do Código HTML, CSS e JavaScript

## HTML (index.html)

### Estrutura Básica
```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <!-- Meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Título da Página -->
    <title> HCA | VERVOU OCULTAR SENHA </title>
    
    <!-- Fonte externa do Google Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    
    <!-- Estilos CSS locais -->
    <link rel="stylesheet" href="src/css/style.css">
    
    <!-- Estilos CSS internos -->
    <style>
        /* Definição de variáveis CSS personalizadas */
        :root {
            --cor-branca: #fff;
            --cor-preta: #000;
            --cor-azul: #0092ed;
            --cor-azul-a: #014975;
            --fundo-do-site: #040F16;
        }

        /* Estilos gerais do corpo da página */
        body {
            background-color: var(--fundo-do-site);
            font-family: Arial, Helvetica, sans-serif;
        }

        /* Estilos da seção principal */
        main {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: var(--cor-preta);
        }
    </style>
</head>
<body> 
    <!-- Corpo da Página -->
    <main>
        <!-- Caixa de Entrada -->
        <div class="input-box">
            <!-- Campo de Senha -->
            <input type="password" id="senha" placeholder="Senha">
            
            <!-- Ícone de Visibilidade/Ocultação de Senha -->
            <span id="visibilidade" onclick="mostrarOcultarSenha()">
                <span class="material-symbols-outlined">visibility</span>
            </span>
            
            <!-- Botão de Entrar -->
            <button type="submit">Entrar</button>
        </div>
    </main>

    <!-- Script JavaScript -->
    <script src="src/javascript/javascript.js"></script>
</body>
</html>
```

## CSS (style.css e estilos internos)

### Estilos Gerais
```css
/* Definição de variáveis CSS personalizadas */
:root {
    --cor-branca: #fff;
    --cor-preta: #000;
    --cor-azul: #0092ed;
    --cor-azul-a: #014975;
    --fundo-do-site: #040F16;
}

/* Estilos gerais do corpo da página */
body {
    background-color: var(--fundo-do-site);
    font-family: Arial, Helvetica, sans-serif;
}

/* Estilos da seção principal */
main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: var(--cor-preta);
}

/* ... Estilos adicionais ... */
```

### Estilos da Caixa de Entrada
```css
/* Estilos da caixa de entrada */
.input-box {
    background-color: var(--cor-branca);
    border-radius: 50px;
    display: flex;
    align-items: center;
}

/* Estilos do campo de senha */
input {
    padding: 10px 0 10px 20px;
    border-radius: 50px;
    border: none;
    outline: none;
    width: 100px;
    font-size: 1em;
}

/* Estilos do ícone de visibilidade/ocultação */
span {
    margin: 3px 5px 0 0;
    cursor: pointer;
    font-size: .8em;
}

/* Estilos do botão de entrar */
button {
    /* ... Estilos do botão ... */
}
```

## JavaScript (javascript.js)

### Função de Mostrar/Ocultar Senha
```javascript
// Função para alternar a visibilidade da senha
function mostrarOcultarSenha() {
    // Obter elementos do DOM
    var senhaInput = document.getElementById("senha");
    var visibilidadeIcone = document.getElementById("visibilidade");

    // Alternar entre o tipo de input 'password' e 'text'
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        visibilidadeIcone.innerHTML = '<span class="material-symbols-outlined">visibility_off</span>';
    } else {
        senhaInput.type = "password";
        visibilidadeIcone.innerHTML = '<span class="material-symbols-outlined">visibility</span>';
    }
}
```
