# Projeto Arte com Pixels 🎨

Um editor de arte com pixels: a pessoa usuária escolhe uma cor em uma paleta e pinta o que quiser em um quadro branco.

Projeto de estudos para praticar **HTML**, **CSS** e **JavaScript** (manipulação do DOM, eventos e `localStorage`).

## 👨‍💻 O que você vai construir

Você vai implementar um editor de arte com pixels em que a pessoa usuária poderá escolher uma cor em uma paleta e pintar em um quadro de pixels.

## 🗂 Estrutura do projeto

- Crie os arquivos `index.html`, `style.css` e `script.js`, que conterão seu código HTML, CSS e JavaScript, respectivamente.

⚠️ **É importante que seus arquivos tenham exatamente estes nomes**, pois os testes esperam encontrá-los.

- Você pode adicionar outros arquivos se julgar necessário.
- Recomenda-se desenvolver na resolução de tela `1366 x 768`.
- Atenção a `ids` e `classes`: não troque `id` por `class` ou vice-versa.

## ▶️ Como rodar os testes

Os testes usam **Cypress** e carregam diretamente o seu `index.html`.

Antes de tudo, instale as dependências:

```bash
npm install
```

Rodar os testes no terminal:

```bash
npm test
```

Rodar os testes em uma janela do navegador (interativo):

```bash
npm run cypress:open
```

## 🎛 Linter

O projeto usa `ESLint` (JavaScript) e `StyleLint` (CSS). O lint **não é avaliado**, mas ajuda a manter o código limpo:

```bash
npm run lint
npm run lint:styles
```

## ⚛️ Dicas

- Evite usar `table` para construir a grade de pixels — semanticamente uma tabela não representa um quadro de desenho.
- Use um *loop* ou a técnica de *event bubbling* com `classList` para adicionar o mesmo evento a vários elementos.
- Para ler valores de CSS de um elemento via JavaScript, veja `getComputedStyle`.
- Para alterar o CSS de um elemento via JavaScript, use o atributo `style` (ex.: `elemento.style.backgroundColor`).
- Se algum teste falhar por falta de memória, verifique se as imagens usadas não são grandes demais (redimensione para menos de 500Kb).

---

# Requisitos

⚠️ Leia todos os requisitos atentamente e **atente-se aos nomes de `ids` e `classes`** exigidos.

## Requisitos obrigatórios

### 1 - Adicione à página o título "Paleta de Cores"

- O título deve ficar dentro de uma tag `h1` com o `id` `title`.
- O texto deve ser **exatamente** "Paleta de Cores".

### 2 - Adicione à página uma paleta contendo quatro cores distintas

- A paleta deve ser um elemento com `id` `color-palette`, e cada cor deve ter a classe `color`.
- A cor de fundo de cada elemento deve ser a cor que ele representa. **A cor branca não é permitida na paleta.**
- Cada elemento da paleta deve ter borda preta, sólida e de 1px.
- As cores devem estar lado a lado, posicionadas abaixo do título.
- A paleta não pode conter cores repetidas.

### 3 - Adicione a cor preta como a primeira cor da paleta

- A primeira cor da paleta deve ter `background-color` preto. As demais podem ser escolhidas livremente.

### 4 - Adicione um botão para gerar cores aleatórias para a paleta

- O botão deve ter o `id` `button-random-color` e o texto `Cores aleatórias`.
- As cores geradas devem ser diferentes a cada clique.
- A cor preta deve ser mantida como a primeira da paleta.

### 5 - Mantenha a paleta gerada após recarregar a página (localStorage)

- A paleta gerada deve ser salva no `localStorage` com a chave `colorPalette`.
- A paleta deve ser mantida ao recarregar a página.

### 6 - Adicione à página um quadro contendo 25 pixels

- O quadro deve ter 5x5 elementos, com `id` `pixel-board`, e cada pixel deve ter a classe `pixel`.
- A cor inicial dos pixels deve ser branca.
- O quadro deve aparecer abaixo da paleta de cores.

### 7 - Cada pixel deve ter 40px de largura e altura e borda preta de 1px

- Os pixels devem ter 40px de altura e largura (conteúdo, excluindo a borda).
- Cada pixel deve ter borda preta sólida de 1px.

### 8 - Defina a cor preta como cor inicial selecionada

- O elemento da cor preta deve ter, inicialmente, a classe `selected`.
- Nenhuma outra cor pode ter a classe `selected` ao carregar a página.

### 9 - Crie uma função para selecionar uma cor na paleta

- A cor clicada recebe a classe `selected` e a anterior perde a classe.
- Somente uma cor pode ter a classe `selected` por vez.
- Os pixels do quadro não devem receber a classe `selected` quando clicados.

### 10 - Preencha um pixel do quadro com a cor selecionada

- Ao carregar a página, deve ser possível pintar os pixels de preto.
- Após selecionar outra cor, deve ser possível pintar com ela.
- Somente o pixel clicado deve ter a cor alterada.

### 11 - Crie um botão que limpa o quadro

- O botão deve ter o `id` `clear-board` e o texto `Limpar`.
- Deve estar posicionado entre a paleta de cores e o quadro de pixels.
- Ao ser clicado, deve deixar todos os pixels brancos.

### 12 - Salve e recupere o desenho atual (localStorage)

- Os pixels pintados devem ser salvos no `localStorage` com a chave `pixelBoard`.
- Ao recarregar a página, o quadro deve ser recuperado com as mesmas cores e posições.

## Requisitos bônus

### 13 - Input para definir um novo tamanho para o quadro

- Crie um `input` com `id` `board-size` posicionado entre a paleta e o quadro.
- Crie um botão com `id` `generate-board` e o texto `VQV`, ao lado direito do input.
- Ao clicar, gera um quadro de N x N pixels, onde N é o valor do input.
- O input só deve aceitar números maiores que zero (use atributos do `input`).
- Se o input estiver vazio ao clicar, mostre um `alert` com o texto: `Board inválido!`.
- O novo quadro deve ter todos os pixels brancos, e o quadro salvo no `localStorage` deve ser apagado.

### 14 - Limite o tamanho mínimo e máximo do quadro

- O quadro não pode ter menos de 5 nem mais de 50 pixels.
- Valor menor que 5 → considere 5; valor maior que 50 → considere 50.

### 15 - Mantenha o novo tamanho do board ao recarregar a página

- O tamanho gerado deve ser salvo no `localStorage` com a chave `boardSize`.
- O quadro deve manter o mesmo tamanho ao recarregar a página.
