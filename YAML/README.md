# YAML

**YAML (YAML Ain't Markup Language)**

O YAML é uma linguagem de serialização de dados legíveis por humanos e é comumente usada para configuração de software, dados estruturados e troca de informações entre linguagens de programação. YAML é um acrônimo recursivo que significa "YAML Ain't Markup Language". A simplicidade e a legibilidade são características fundamentais do YAML, o que o torna adequado para configuração e dados onde a clareza é essencial.

Aqui está uma documentação completa sobre o YAML:

### Estrutura Básica:

O YAML utiliza espaços em branco para estruturar os dados e utiliza uma abordagem indentada para representar a hierarquia. Não são permitidos caracteres de tabulação para a indentação, apenas espaços.

Exemplo:
```yaml
nome: João
idade: 30
ocupacao: desenvolvedor
```

### Tipos de Dados:

O YAML suporta vários tipos de dados, incluindo:

- **String:**
  ```yaml
  nome: "Alice"
  ```

- **Número:**
  ```yaml
  idade: 25
  ```

- **Booleano:**
  ```yaml
  ativo: true
  ```

- **Lista:**
  ```yaml
  linguagens:
    - Python
    - JavaScript
    - Java
  ```

- **Dicionário (Mapa):**
  ```yaml
  pessoa:
    nome: Alice
    idade: 25
  ```

### Comentários:

Comentários em YAML começam com o caractere `#` e vão até o final da linha.

Exemplo:
```yaml
# Isso é um comentário
nome: Bob
```

### Aninhamento:

A hierarquia em YAML é definida pelo nível de indentação. Itens indentados no mesmo nível são considerados do mesmo bloco.

Exemplo:
```yaml
pessoa:
  nome: Carol
  idade: 28
  endereco:
    cidade: São Paulo
    rua: Av. Principal
```

### Referências:

- [YAML Official Website](https://yaml.org/)
- [YAML Specification](https://yaml.org/spec/1.2/spec.html)

### Uso em Configurações:

O YAML é frequentemente usado para configurar aplicações e serviços. Abaixo está um exemplo de um arquivo de configuração YAML para um servidor web:

```yaml
server:
  porta: 8080
  host: localhost
  logs:
    ativo: true
    nivel: info
  database:
    nome: mydatabase
    usuario: usuario123
    senha: senha123
```

### Conclusão:

O YAML é uma linguagem versátil, popular na configuração de software devido à sua legibilidade e simplicidade. Ele é usado em uma variedade de contextos, desde configurações de aplicativos até arquivos de definição para ferramentas de automação. Sua estrutura amigável ao humano facilita a criação e manutenção de arquivos de configuração.