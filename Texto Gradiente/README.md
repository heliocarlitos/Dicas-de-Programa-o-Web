# Documentação: Texto com Efeito Degrade em HTML e CSS

O código do index.html, cria um efeito degradê em um texto específico dentro de uma página HTML usando CSS. Abaixo, cada parte do código será explicada em detalhes.

## Estrutura Básica do HTML

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HCA | TEXTO GRADIENTE</title>

    <!-- Estilos CSS -->
    <style>
        /* Resetando margens e preenchimentos padrão */
        *{
            padding: 0;
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
        }

        /* Estilizando o contêiner principal da página */
        main {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh; /* 100% da altura da viewport (janela do navegador) */
        }

        /* Estilizando o texto com efeito degradê */
        h1 {
            letter-spacing: 2px;
            font-weight: 900;
            font-size: 3em;
            color: transparent; /* Torna o texto transparente para permitir o efeito degradê */
            background: linear-gradient(to right, #0091ff 0%, #ff6f00 100%);
            background-clip: text; /* Define a área onde o plano de fundo (degradê) será aplicado como o texto */
        }
    </style>
</head>
<body>

    <!-- Contéudo principal -->
    <main>
        <!-- Texto com efeito degradê -->
        <h1>HCA</h1>
    </main>
    
</body>
</html>
```

## Explicação Detalhada

1. **`*` - Resetando Margens e Preenchimentos Padrão:**
   - `*` é um seletor universal que afeta todos os elementos da página.
   - `padding: 0;` e `margin: 0;` são usados para remover margens e preenchimentos padrão, proporcionando uma base mais consistente.

2. **`main` - Estilizando o Contêiner Principal:**
   - `main` é um elemento que envolve o conteúdo principal da página.
   - `display: flex;` cria um contêiner flexível, permitindo o alinhamento e distribuição do conteúdo.
   - `justify-content: center;` e `align-items: center;` centralizam o conteúdo vertical e horizontalmente.
   - `height: 100vh;` define a altura do contêiner principal como 100% da altura da viewport (janela do navegador).

3. **`h1` - Estilizando o Texto com Efeito Degrade:**
   - `letter-spacing: 2px;` define um espaçamento entre as letras.
   - `font-weight: 900;` define a espessura da fonte como negrito.
   - `font-size: 3em;` define o tamanho da fonte.
   - `color: transparent;` torna o texto transparente para aplicar o efeito degradê no próximo passo.
   - `background: linear-gradient(to right, #0091ff 0%, #ff6f00 100%);` cria um plano de fundo com um degradê horizontal que vai de azul (#0091ff) a laranja (#ff6f00).
   - `background-clip: text;` define a área onde o plano de fundo (degradê) será aplicado como o texto, criando o efeito degradê no texto.

O código resultante produz uma página com um texto "HCA" centralizado, onde as letras têm um efeito degradê que vai de azul a laranja. Este é um exemplo básico de como criar um efeito degradê em texto usando HTML e CSS.