### Documentação Completa para Padrões de Validação em Inputs HTML

Os padrões de validação são definidos no atributo `pattern` de elementos `<input>` em HTML, utilizando expressões regulares (regex). Esta documentação descreve cada componente, como configurar o atributo `pattern`, e oferece exemplos de uso. No final, uma explicação detalhada de cada caractere ou símbolo é fornecida.

---

### **Estrutura Básica do Pattern**
O atributo `pattern` utiliza expressões regulares para definir restrições nas entradas do usuário. A sintaxe é:

```html
<input type="text" pattern="regex" title="Mensagem de erro personalizada">
```

- **`type="text"`**: Define o tipo de entrada como texto.
- **`pattern="regex"`**: Contém a expressão regular que valida o input.
- **`title="Mensagem de erro personalizada"`**: Exibe uma mensagem quando o padrão é violado.

---

### **Exemplos de Uso**
#### 1. **Apenas Letras Minúsculas**
Aceita entradas que contêm apenas letras minúsculas de `a` a `z`.
```html
<input type="text" pattern="[a-z]+" title="Apenas letras minúsculas são permitidas.">
```

#### 2. **Apenas Números (0-9)**
Permite que apenas números sejam inseridos.
```html
<input type="text" pattern="\d+" title="Apenas números são permitidos.">
```

#### 3. **Email Válido**
Verifica se o input está no formato de email (exemplo: `usuario@dominio.com`).
```html
<input type="email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" title="Insira um email válido.">
```

#### 4. **Número de Telefone com 9 Dígitos**
Aceita apenas números de telefone de 9 dígitos.
```html
<input type="text" pattern="\d{9}" title="Insira um número de telefone válido com 9 dígitos.">
```

#### 5. **Senha Forte**
Exige uma senha com pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial.
```html
<input type="password" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}" title="A senha deve conter pelo menos 8 caracteres, incluindo uma maiúscula, uma minúscula, um número e um símbolo.">
```

---

### **Explicação dos Componentes de Expressões Regulares**
Aqui está a descrição detalhada de cada caractere ou estrutura utilizada:

#### **Caractere Comum**
- **a-z / A-Z**: Representam letras minúsculas (`a` a `z`) e maiúsculas (`A` a `Z`) do alfabeto.
- **0-9**: Representa os números de 0 a 9.

#### **Símbolos e Estruturas Especiais**
- **[ ] (Colchetes)**: Define um grupo ou gama de caracteres permitidos.
  - Exemplo: `[a-z]` aceita qualquer letra minúscula.

- **{ } (Chavetas)**: Especifica o número de repetições desejado.
  - Exemplo: `{4}` exige exatamente 4 ocorrências do caractere.

- **^ (Circunflexo)**:
  - Dentro de colchetes: Indica negação.
    - Exemplo: `[^0-9]` aceita qualquer caractere que **não seja número**.
  - Fora de colchetes: Exige que o padrão comece no início do texto.

- **$ (Cifrão)**: Exige que o padrão termine no final do texto.

- **. (Ponto)**: Representa qualquer caractere (exceto nova linha).

- **\ (Barra Invertida)**: Escapa caracteres especiais ou ativa sequências predefinidas.
  - Exemplo: `\d` aceita qualquer número.

- **| (Barra Vertical)**: Indica alternativas ("ou").
  - Exemplo: `(a|b)` aceita `a` ou `b`.

- **( ) (Parênteses)**: Agrupa partes do padrão.
  - Exemplo: `(abc){2}` exige duas repetições exatas de `abc`.

#### **Quantificadores**
- **?**: O caractere anterior é opcional.
  - Exemplo: `colou?r` aceita `color` ou `colour`.

- **+**: O caractere anterior deve aparecer pelo menos uma vez.
  - Exemplo: `[a-z]+` aceita uma ou mais letras minúsculas.

- *** (Asterisco)**: O caractere anterior pode aparecer 0 ou mais vezes.
  - Exemplo: `[0-9]*` aceita qualquer quantidade de números (incluindo vazio).

#### **Conjuntos Predefinidos**
- **\d**: Qualquer dígito (0-9).
- **\D**: Qualquer caractere que **não seja dígito**.
- **\w**: Qualquer caractere alfanumérico ou sublinhado.
- **\W**: Qualquer caractere que **não seja alfanumérico**.
- **\s**: Qualquer espaço em branco.
- **\S**: Qualquer caractere que **não seja espaço**.

---

### **Combinações Importantes**
- **[ ]+**: Um ou mais caracteres do grupo especificado.
- **[ ]?**: Um ou nenhum caractere do grupo especificado.
- **[ ]{n,m}**: Entre `n` e `m` caracteres do grupo especificado.
- **^pattern$**: Exige que toda a entrada corresponda ao padrão.

---

Esta documentação oferece uma base para criar padrões complexos ou simples e garantir que as entradas em formulários sejam validadas de acordo com as especificações desejadas. Combine as técnicas acima para adaptar as validações às necessidades do seu projeto.

