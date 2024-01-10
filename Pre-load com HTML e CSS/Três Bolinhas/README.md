## [👁️ VISUALIZAR](https://hcadeveloper.github.io/Pre-load-Tr-s-Bolinhas/)

# HTML Documentação:

1. **DOCTYPE Declaration:**
   ```html
   <!DOCTYPE html>
   ```
   Declara o tipo de documento HTML sendo utilizado (HTML5 neste caso).

2. **HTML Tag:**
   ```html
   <html lang="en">
   ```
   Define o início do documento HTML e especifica a linguagem como inglês (`en`).

3. **Head Section:**
   ```html
   <head>
       <!-- Meta Tags -->
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">

       <!-- Title Tag -->
       <title>Preloader</title>

       <!-- Style Tag (CSS Embedded) -->
       <style>
           <!-- CSS Rules -->
       </style>
   </head>
   ```
   Contém informações sobre o documento, como codificação, viewport e o título da página. Também inclui o estilo CSS incorporado.

4. **Body Section:**
   ```html
   <body>
       <!-- Preloader -->
       <div class="preloader">
           <!-- Three Balls -->
           <div class="ball"></div>
           <div class="ball"></div>
           <div class="ball"></div>
       </div>

       <!-- Loading Text -->
       <div class="loading-text">
           C A R R E G A N D O <span class="blink">.</span><span class="blink">.</span><span class="blink">.</span>
       </div>
   </body>
   ```
   Contém o conteúdo visível da página. Inclui o preloader com três bolinhas e o texto de carregamento.

### CSS Documentação:

1. **Body Styles:**
   ```css
   body {
       margin: 0;
       padding: 0;
       background-color: #fff;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       height: 100vh;
   }
   ```
   Estilos para o corpo da página, removendo margens e preenchimentos, definindo um fundo branco e centralizando o conteúdo na tela.

2. **Preloader Styles:**
   ```css
   .preloader {
       display: flex;
       align-items: center;
   }

   .ball {
       width: 20px;
       height: 20px;
       background-color: #000;
       border-radius: 50%;
       margin: 0 8px;
       animation: bounce 0.5s alternate infinite ease-in-out;
   }

   .ball:nth-child(2) {
       animation-delay: 0.2s;
   }

   .ball:nth-child(3) {
       animation-delay: 0.4s;
   }

   @keyframes bounce {
       to {
           transform: translateY(-20px);
       }
   }
   ```
   Estilos para o preloader, definindo as características das bolinhas e a animação de movimento para cima e para baixo.

3. **Loading Text Styles:**
   ```css
   .loading-text {
       margin-top: 20px;
       font-size: 16px;
       font-weight: bold;
       color: #000;
       display: flex;
       align-items: center;
   }

   .blink {
       animation: blink 0.8s infinite;
   }

   @keyframes blink {
       50% {
           opacity: 0;
       }
   }
   ```
   Estilos para o texto de carregamento, definindo margens, tamanho da fonte, peso da fonte, cor e a animação de piscar para o último ponto.

Essa documentação explica cada parte do código, detalhando as tags HTML e as propriedades CSS utilizadas para criar o preloader com o texto de carregamento.
