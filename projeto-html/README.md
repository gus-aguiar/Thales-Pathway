# 🎯 Projeto Lições Aprendidas - HTML & CSS

Este é um projeto de prática para desenvolver habilidades em HTML e CSS, criando uma página pessoal sobre suas lições aprendidas.

## 🚀 Como começar

### 1. Instale as dependências

```bash
npm install
```

### 2. Crie os arquivos do projeto

Na raiz do projeto, crie os arquivos:

```bash
touch index.html style.css
```

⚠️ **IMPORTANTE**: Os arquivos **DEVEM** se chamar `index.html` e `style.css` exatamente assim para que os testes funcionem!

### 3. Desenvolva seu projeto

Abra o `index.html` e comece a desenvolver sua página seguindo os requisitos abaixo.

## 🧪 Como rodar os testes

### Opção 1: Modo interativo (recomendado durante desenvolvimento)

Abre uma janela do Cypress onde você pode ver os testes rodando em tempo real:

```bash
npm run cypress:open
```

Depois é só clicar no arquivo `project.spec.js` para rodar os testes obrigatórios ou `bonus.spec.js` para os testes bônus.

### Opção 2: Modo terminal

Roda todos os testes direto no terminal:

```bash
npm test
```

## 📋 Requisitos Obrigatórios

### 1. Cor de fundo da página
- A página deve ter cor de fundo: `rgb(253, 251, 251)`

### 2. Barra superior fixa
- Crie uma barra superior com `id="cabecalho"`
- Ela deve ser fixa no topo da página com `top: 0`
- Dentro dela, adicione um título `h1` com `id="titulo"`

### 3. Foto sua
- Adicione uma imagem usando a tag `img` com `id="minha_foto"`

### 4. Lista de lições aprendidas
- Crie uma lista **numerada** com `id="licoes_aprendidas"`
- Deve conter **exatamente 10 itens**

### 5. Lista de lições a aprender
- Crie uma lista **não numerada** com `id="licoes_a_aprender"`
- Deve conter **exatamente 10 itens**

### 6. Rodapé
- Use a tag `footer` com `id="rodape"`

### 7. Link externo
- Adicione pelo menos um link que abra em **nova aba** (use `target="_blank"`)

### 8. Artigo sobre seu aprendizado
- Use a tag `article`
- Deve ter entre **300 e 600 caracteres** (contando o texto todo)

### 9. Seção aside com sua descrição
- Use a tag `aside`
- Deve ter entre **100 e 300 caracteres**

### 10. Elementos semânticos
- Sua página deve conter: `article`, `header`, `aside` e `footer`

### 11. Semântica correta
- Teste sua página no [CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/)
- Deve passar com **0 errors**

## 🌟 Requisitos Bônus

### 12. Tabela
- Adicione uma tabela usando a tag `table`

### 13. Box Model
- Pelo menos um elemento com `margin` modificado
- Pelo menos um elemento com `padding` modificado
- Pelo menos um elemento com `border` modificado

### 14. Estilização de fonte
- Altere o tamanho da letra
- Altere a cor da letra
- Altere o espaçamento entre linhas
- Use uma `font-family` diferente

### 15. Posicionamento lado a lado
- Adicione classe `lado-esquerdo` no elemento posicionado à esquerda
- Adicione classe `lado-direito` no elemento posicionado à direita
- Os elementos devem ficar um ao lado do outro

## 📝 Dicas Importantes

- **Resolução**: Desenvolva usando resolução de `1366 x 768` pixels
- **Imagens**: Não use imagens maiores que 500KB
- **IDs específicos**: Preste MUITA atenção nos IDs exigidos pelos testes
- **Caracteres**: Contagem de caracteres inclui tudo dentro da tag (texto, espaços, etc)

## 🔧 Comandos úteis

```bash
# Instalar dependências
npm install

# Rodar testes em modo interativo
npm run cypress:open

# Rodar testes no terminal
npm test

# Verificar problemas de estilo (opcional)
npm run lint:styles
```

## 🎨 Exemplo visual

Você pode ver como o projeto pode ficar olhando o arquivo `exemplo.png` na raiz do projeto.

## 💡 Estrutura básica sugerida

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liçãoções Aprendidas</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Seu código aqui -->
</body>
</html>
```

Boa sorte com o projeto! 🚀
