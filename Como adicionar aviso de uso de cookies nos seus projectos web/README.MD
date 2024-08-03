# Aviso de Cookies

Este repositório contém um exemplo simples de um aviso de cookies para websites. O código inclui HTML e JavaScript para exibir um aviso aos usuários sobre o uso de cookies, oferecendo opções para aceitar ou recusar.

## Estrutura do Projeto

O projeto é composto por duas partes:

1. **HTML**: Estrutura do aviso de cookies.
2. **JavaScript**: Lógica para exibir e esconder o aviso, e para armazenar a decisão do usuário.

## Código

### Código HTML

```html
<div id="cookie-banner">
        <p>Este site utiliza cookies para garantir que você tenha a melhor experiência. Ao continuar a navegar, você concorda com o uso de cookies.</p>
        <button id="accept-btn">ACEITAR</button>
        <button id="decline-btn">RECUSAR</button>
</div>
```

### Código JavaScript

```js
function showCookieBanner() {
    document.getElementById('cookie-banner').style.display = 'block';
}
// Verifica a decisão do usuário
if (localStorage.getItem('cookieConsent') !== 'accepted') {
    showCookieBanner();
}
document.getElementById('accept-btn').addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookie-banner').style.display = 'none';
});
document.getElementById('decline-btn').addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    window.location.href = 'https://www.google.com';
});
```

# Como Funciona

1. **Exibição do Aviso**: O aviso aparece até que o usuário aceite os cookies.
2. **Aceitação dos Cookies**: Oculta o aviso e salva a aceitação.
3. **Recusa dos Cookies**: Redireciona o usuário para o Google e salva a recusa.

# Estilização

1. **Posicionamento**: position: fixed; bottom: 0;.
2. **Visibilidade**: Inicialmente oculto com display: none;.
3. **Z-index**: 1000 para garantir que o aviso fique acima de outros elementos.
4. **Botões**: Estilos para distinguir "ACEITAR" e "RECUSAR".

<br/>

> [!WARNING]
> Certifique-se de que a abordagem de cookies esteja em conformidade com as regulamentações locais, como o GDPR ou a CCPA, se aplicável.
