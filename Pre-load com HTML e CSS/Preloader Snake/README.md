[VISUALIZAR](https://hcadeveloper.github.io/Preloader-Girat-rio/)

# Documentação do Preloader Snake

#### Introdução
Este documento fornece informações sobre a implementação de um preloader simples com uma animação de "cobra" em HTML e CSS. O preloader é projetado para aparecer da esquerda, mover-se para a direita e reiniciar o processo, sem recuar.

#### Estrutura do Código
O código consiste em um documento HTML e um bloco de estilo CSS incorporado. Ele cria uma página simples contendo uma "cobra" que se move da esquerda para a direita.

- **HTML:**
  - `<body>`: Contém um contêiner (`.snake-container`) para limitar o comprimento da "cobra".
  - `<div class="snake"></div>`: Representa a "cobra" em si.

- **CSS:**
  - `.snake-container`: Define o contêiner da "cobra" para limitar o comprimento e ocultar o overflow.
  - `.snake`: Define as características da "cobra", como largura, altura, cor e animação.

#### Estilo da Cobra
- **Largura e Altura:** A largura da "cobra" é definida como 100% da largura do contêiner, e a altura é configurada para 2 pixels.
- **Cor da Cobra:** A cor da "cobra" é preta (`#000`), mas você pode ajustá-la conforme necessário.
- **Animação:** A animação (`snakeMove`) move a "cobra" da esquerda para a direita. Ela usa a propriedade `transform` com `translateX` para realizar o movimento.

#### Animação da Cobra
A animação é definida com a seguinte lógica:

- **0%:** A "cobra" começa fora da tela à esquerda (`transform: translateX(-100%)`).
- **100%:** A "cobra" se move para fora da tela à direita (`transform: translateX(200%)`).

#### Utilização
1. Copie o código HTML e CSS fornecido.
2. Cole-o em seus arquivos HTML e CSS ou em sua ferramenta de desenvolvimento favorita.
3. Ajuste as propriedades conforme necessário, como cor, largura, altura, etc.
4. Visualize a página em um navegador para ver a animação da "cobra".

#### Modificações
- **Cor da Cobra:** Modifique o valor de `background-color` na classe `.snake` para alterar a cor da "cobra".
- **Largura e Altura:** Ajuste os valores de `width` e `height` em `.snake` conforme necessário.
- **Velocidade da Animação:** Modifique a duração da animação ajustando o valor em `animation: snakeMove 2s linear infinite;`.

### Fim da Documentação
Esta documentação fornece uma visão geral do preloader da "cobra" e explica como personalizar e modificar o código conforme necessário.