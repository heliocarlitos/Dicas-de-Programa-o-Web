# Configurando Rotas em Sites Criados com React e Vite para Deploy no Netlify e Vercel

## **Introdução**
Ao desenvolver aplicações com React e Vite, é comum utilizar **rotas no lado do cliente** (client-side routing) para navegar entre diferentes páginas, como `/sobre` ou `/contato`. No entanto, após realizar o **deploy** da aplicação em plataformas como **Netlify** ou **Vercel**, pode surgir o erro **404 - Página não encontrada** ao acessar diretamente essas URLs.

Este guia explica por que isso acontece e apresenta soluções detalhadas para corrigir o problema, garantindo que suas rotas funcionem perfeitamente.

---

## **A Situação**
Imagine que você criou uma aplicação React com Vite que possui as seguintes rotas:
- `/` (Página inicial)
- `/sobre` (Página Sobre)
- `/contato` (Página de Contato)

Ao testar localmente, todas as rotas funcionam perfeitamente. No entanto, ao acessar diretamente `www.seusite.com/sobre` ou `www.seusite.com/contato` após o deploy, a página retorna um **erro 404**.

---

## **O Problema**
Esse problema ocorre porque **Netlify** e **Vercel** tentam acessar um arquivo físico correspondente à URL requisitada. No caso de `www.seusite.com/sobre`, o servidor busca um arquivo `sobre.html` ou uma pasta `sobre`, mas como o React gerencia as rotas no lado do cliente, esses arquivos não existem. Por isso, o servidor retorna um erro **404 - Página não encontrada**.

---

## **Por que isso acontece?**
Aplicações React utilizam **Client-Side Rendering (CSR)**, onde as rotas são processadas no navegador pelo JavaScript. O servidor precisa ser configurado para redirecionar todas as requisições para o arquivo `index.html`, permitindo que o React carregue o conteúdo apropriado com base na URL.

Sem essa configuração, as plataformas não sabem redirecionar corretamente as requisições, resultando em erros.

---

## **A Solução**
Para corrigir o problema, é necessário configurar os arquivos específicos para cada plataforma. Esses arquivos informam ao servidor como tratar as requisições de rotas, redirecionando-as corretamente para o React.

### **1. Configuração para o Netlify**
Crie um arquivo chamado **`netlify.toml`** na raiz do projeto (mesmo nível de `package.json` e `vite.config.js`) com o seguinte conteúdo:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### **Explicação:**
- **`[[redirects]]`:** Define uma regra de redirecionamento.
- **`from = "/*"`:** Redireciona todas as requisições feitas ao servidor.
- **`to = "/index.html"`:** Instrui o servidor a carregar sempre o arquivo `index.html`, permitindo que o React gerencie as rotas.
- **`status = 200`:** Informa ao servidor que a resposta é bem-sucedida (status HTTP 200).

#### **Exemplo de Funcionamento:**
Se um usuário acessar `www.seusite.com/sobre`, o Netlify redirecionará a requisição para `index.html`. O React, então, interpretará a URL e renderizará o componente correto da rota `/sobre`.

---

### **2. Configuração para o Vercel**
Crie um arquivo chamado **`vercel.json`** na raiz do projeto com o seguinte conteúdo:

```json
{
  "rewrites": [
    { "source": "/sitemap.xml", "destination": "/sitemap.xml" },
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

#### **Explicação:**
- **`rewrites`:** Define regras para redirecionar as requisições do servidor.
- **`{ "source": "/sitemap.xml", "destination": "/sitemap.xml" }`:** Exceção para a rota `sitemap.xml`, útil para SEO. Essa rota é redirecionada para si mesma.
- **`{ "source": "/(.*)", "destination": "/" }`:** Redireciona todas as outras requisições para a página raiz (`/` ou `index.html`).

#### **Exemplo de Funcionamento:**
Se um usuário acessar `www.seusite.com/sobre`, o Vercel redirecionará a requisição para a página inicial. O React, ao ser carregado, interpretará a URL e exibirá o componente da rota `/sobre`.

---

## **Conclusão**
Com as configurações acima, você pode garantir que as rotas da sua aplicação React com Vite funcionarão corretamente em ambas as plataformas, **Netlify** e **Vercel**.

### **Resumo das Configurações:**
- Para **Netlify**, use o arquivo `netlify.toml` com a regra de redirecionamento.
- Para **Vercel**, use o arquivo `vercel.json` com as regras de reescrita.

Agora, suas rotas estarão sempre acessíveis, mesmo ao recarregar ou acessar diretamente URLs específicas.
