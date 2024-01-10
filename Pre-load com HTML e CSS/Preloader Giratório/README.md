## [👁️ VISUALIZAR](https://hcadeveloper.github.io/Preloader-Girat-rio/)

# Documentação Interna: Preloader Giratório

## Introdução

Esta documentação interna detalha o código HTML e CSS para criar um preloader giratório simples. O preloader é uma animação que fornece feedback visual aos usuários indicando que a página está em processo de carregamento. O código utiliza HTML para a estrutura e CSS para a estilização do preloader e do texto "CARREGANDO...".

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preloader Giratório</title>
    <style>
        /* Reset de margens e preenchimentos para garantir uma base consistente */
        * {
            padding: 0;
            margin: 0;
        }

        /* Estilos para o preloader */
        .loader {
            margin: 0;
            padding: 0;
            background-color: #fff; /* Fundo branco */
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            height: 100vh;
        }

        /* Estilos para o círculo giratório */
        .spinner {
            border: 8px solid #000; /* Cor do círculo */
            border-top: 8px solid transparent;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite; /* Animação de rotação */
        }

        /* Definição da animação de rotação */
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

        /* Estilos para o texto "CARREGANDO..." */
        .loading-text {
            margin-top: 20px;
            font-size: 16px;
            font-weight: bold;
            color: #000; /* Cor do texto */
            font-family: Arial, Helvetica, sans-serif;
        }
    </style>
</head>
<body>
    <!-- Estrutura do preloader -->
    <div class="loader">
        <!-- Círculo giratório -->
        <div class="spinner"></div>
        
        <!-- Texto "CARREGANDO..." -->
        <div class="loading-text">C A R R E G A N D O . . .</div>
    </div>
</body>
</html>
```

## Conclusão

Esta documentação interna oferece insights detalhados sobre a estrutura e estilização do preloader giratório. Ao seguir este guia, você poderá compreender e personalizar o código de acordo com as necessidades específicas do projeto.
