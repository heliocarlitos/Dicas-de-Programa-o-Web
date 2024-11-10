# Guia Completo de Flexbox: `justify-content` e `align-items`

Este guia cobre todas as possibilidades de centralização e alinhamento com `display: flex`, detalhando para que serve cada valor de `justify-content` e `align-items`, e como usar essas propriedades para organizar seus elementos com CSS.

## Estrutura Básica

Para começar, precisamos definir um contêiner com `display: flex`, que será a base de todas as propriedades e valores de alinhamento.

**HTML:**
```html
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
```

**CSS:**
```css
.container {
    display: flex;
    height: 200px; /* Exemplo de altura para visualização */
    border: 1px solid #333;
}

.item {
    padding: 20px;
    background-color: #4CAF50;
    margin: 5px;
    color: #fff;
}
```


## Propriedades e Valores para `justify-content`

A propriedade `justify-content` controla o alinhamento dos itens no eixo horizontal (eixo principal) quando `display: flex` está aplicado.

### Valores Comuns de `justify-content`

1. **`justify-content: flex-start`**
   - Alinha os itens à esquerda do contêiner (padrão).
   ```css
   .container {
       display: flex;
       justify-content: flex-start;
   }
   ```

2. **`justify-content: flex-end`**
   - Alinha os itens à direita do contêiner.
   ```css
   .container {
       display: flex;
       justify-content: flex-end;
   }
   ```

3. **`justify-content: center`**
   - Centraliza os itens horizontalmente no contêiner.
   ```css
   .container {
       display: flex;
       justify-content: center;
   }
   ```

4. **`justify-content: space-between`**
   - Distribui os itens com espaço igual entre eles, colocando o primeiro item no início e o último no fim.
   ```css
   .container {
       display: flex;
       justify-content: space-between;
   }
   ```

5. **`justify-content: space-around`**
   - Distribui os itens com espaço ao redor deles, mas com menos espaço nas extremidades do contêiner.
   ```css
   .container {
       display: flex;
       justify-content: space-around;
   }
   ```

6. **`justify-content: space-evenly`**
   - Distribui os itens com espaço igual entre todos, incluindo as bordas do contêiner.
   ```css
   .container {
       display: flex;
       justify-content: space-evenly;
   }
   ```


## Propriedades e Valores para `align-items`

A propriedade `align-items` controla o alinhamento dos itens no eixo vertical (eixo cruzado) em relação ao contêiner `flex`.

### Valores Comuns de `align-items`

1. **`align-items: flex-start`**
   - Alinha os itens ao topo do contêiner.
   ```css
   .container {
       display: flex;
       align-items: flex-start;
   }
   ```

2. **`align-items: flex-end`**
   - Alinha os itens ao final (fundo) do contêiner.
   ```css
   .container {
       display: flex;
       align-items: flex-end;
   }
   ```

3. **`align-items: center`**
   - Centraliza os itens verticalmente no contêiner.
   ```css
   .container {
       display: flex;
       align-items: center;
   }
   ```

4. **`align-items: baseline`**
   - Alinha os itens de acordo com a linha de base do texto dentro de cada um.
   ```css
   .container {
       display: flex;
       align-items: baseline;
   }
   ```

5. **`align-items: stretch`**
   - Estica os itens para preencher a altura total do contêiner.
   ```css
   .container {
       display: flex;
       align-items: stretch;
   }
   ```


## Exemplos Combinando `justify-content` e `align-items`

Estas combinações permitem o controle completo sobre o posicionamento dos itens dentro do contêiner `flex`.

### Exemplo 1: Centralizar Horizontal e Verticalmente
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Exemplo 2: Espaço Igual Entre Itens e Alinhamento Inferior
```css
.container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
```

### Exemplo 3: Espaço Ao Redor com Alinhamento no Topo
```css
.container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}
```


Estas propriedades e valores de `flexbox` ajudam a organizar o layout de elementos, oferecendo versatilidade e precisão no design das interfaces. A centralização e o alinhamento facilitam a criação de layouts esteticamente agradáveis e intuitivos para os utilizadores.
