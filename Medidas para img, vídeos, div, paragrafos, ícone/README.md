## 1. Pixels (px)
O pixel é a unidade de medida mais básica e comum em CSS. Um pixel é uma unidade absoluta, o que significa que ele mantém seu tamanho independente do dispositivo de visualização. 

```css
div {
    width: 200px;
    height: 100px;
}
```

2. **Porcentagem (%)**: Esta unidade de medida é relativa ao elemento pai. Por exemplo, se você definir a largura de um elemento como 50%, ele ocupará metade da largura do seu elemento pai.

```css
div {
    width: 50%;
}
```

## 3. Em (em)
Esta unidade é relativa ao tamanho da fonte do elemento pai. Se a fonte do elemento pai for 16px, 1em será igual a 16px.

```css
p {
    font-size: 1.2em;
}
```

## 4. Rem (rem)
Assim como o 'em', o 'rem' é relativo ao tamanho da fonte do elemento raiz (normalmente o <html>). No entanto, ao contrário do 'em', o 'rem' não é afetado pelo tamanho da fonte dos elementos pai.

```css
div {
    font-size: 1.2rem;
}
```

## 5. Viewport Width (vw) e Viewport Height (vh)
Essas unidades são relativas ao tamanho da janela de visualização do usuário. Por exemplo, 1vw é igual a 1% da largura da viewport.

```css
div {
    width: 50vw;
    height: 50vh;
}
```

Agora, vamos ver como e quando usar cada uma dessas unidades para diferentes elementos:

1. **Divs**: Para divs, você geralmente pode usar pixels ou porcentagem, dependendo do layout que você está tentando alcançar. Se estiver criando um layout responsivo, as porcentagens podem ser mais úteis.

2. **Parágrafos**: Geralmente, você usaria 'em' ou 'rem' para definir o tamanho da fonte de um parágrafo, permitindo que ele seja dimensionado de acordo com as preferências do usuário.

3. **Ícones**: Pixels são frequentemente usados para ícones, pois eles geralmente têm tamanhos específicos e não precisam escalar com o texto ou o layout.

4. **Vídeos e Imagens**: Aqui, você pode usar uma combinação de unidades, dependendo do contexto. Por exemplo, para vídeos, você pode usar porcentagens para a largura para garantir que ele se ajuste ao contêiner, enquanto para imagens, pixels podem ser mais apropriados para controlar o tamanho exato.

5. **Títulos**: Títulos geralmente usam 'em' ou 'rem' para permitir que o tamanho da fonte seja escalável e responsivo.

Em resumo, a escolha da unidade de medida em CSS depende do contexto e do comportamento desejado para cada elemento específico. Sempre considere a responsividade e a escalabilidade ao escolher a unidade apropriada.