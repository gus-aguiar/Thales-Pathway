# Exercício: Mini Pokédex com HTML, CSS e JavaScript

Este exercício foi pensado para praticar os primeiros passos com **HTML**, **CSS** e **JavaScript** usando uma API pública real: a [PokéAPI](https://pokeapi.co/).

## Objetivo

Criar uma pequena Pokédex onde o usuário possa digitar o nome ou o número de um Pokémon e visualizar:

- Imagem oficial
- Número e nome
- Tipos
- Altura e peso
- Habilidades

Tudo isso é carregado dinamicamente a partir da API.

## Estrutura dos arquivos

- `index.html`: marcação da página, contendo o formulário e o espaço onde os resultados aparecem.
- `style.css`: estilos visuais da Pokédex (cores, layout, responsividade, etc.).
- `script.js`: código responsável por buscar as informações na API e montar o cartão com o resultado.

Cada arquivo está repleto de comentários para explicar o que está acontecendo. Aproveite para ler tudo com calma e tentar reproduzir o raciocínio.

## Como rodar

1. Abra esta pasta no VS Code.
2. Abra o `index.html` no editor.
3. Clique com o botão direito no arquivo e escolha **"Open with Live Server"**.
4. O navegador vai abrir com a Pokédex rodando.
5. Digite o nome (ex.: `pikachu`) ou o número (ex.: `25`) de um Pokémon e clique em "Buscar".

## Onde praticar mais

- **Manipulação da DOM:** tente adicionar novas informações (por exemplo, os status base ou os movimentos do Pokémon).
- **CSS:** experimente mudar cores, fontes, bordas ou criar um tema escuro.
- **JavaScript:** valide melhor o formulário, adicione loading, implemente navegação entre Pokémons (anterior/próximo).
- **Acessibilidade:** melhore o uso do teclado, leia sobre aria-labels e testes com leitores de tela.

## 15 exercícios práticos para evoluir

1. Mude a cor de fundo do `body` para outra combinação de roxos ou crie um tema totalmente diferente.
2. Altere a mensagem de boas-vindas no `index.html` (procure pelo comentário **EDITE AQUI**) para deixar o texto mais pessoal.
3. Troque a fonte padrão do projeto por outra do Google Fonts e ajuste os tamanhos para manter a leitura confortável.
4. Adicione um efeito `hover` diferente no botão de busca (por exemplo, uma leve rotação ou aumento de escala).
5. Faça com que o cartão do Pokémon pisque suavemente quando um novo resultado for carregado (use `@keyframes`).

   > **💡 Dica:** Este exercício pode ser feito apenas editando o `style.css`! O JavaScript recria o cartão (`.pokemon-card`) toda vez que um novo Pokémon é carregado, então você pode adicionar uma animação CSS que roda quando o elemento aparece na tela. Exemplo:
  
6. Inclua um contorno colorido diferente para cada tipo de Pokémon (fogo, água, planta...) usando classes dinâmicas no JavaScript.
7. Mostre o **ID** do Pokémon com zeros à esquerda (por exemplo, `#025`) praticando manipulação de strings.
8. Converta a altura e o peso do Pokémon para outras unidades (metros/pés e quilos/libras) para treinar cálculos simples.
9. Adicione um indicador de "carregando" enquanto a requisição à PokéAPI é feita e remova-o quando o resultado chegar.
10. Faça um tratamento de erro diferente para quando o Pokémon não for encontrado (troque o texto, mude as cores, adicione um emoji).
11. Crie um histórico das últimas três buscas exibindo pequenas miniaturas abaixo do cartão principal.
12. Permita navegar para o Pokémon anterior ou próximo adicionando dois botões e reutilizando o valor atual da busca.
13. Substitua a imagem padrão do Gengar por outro Pokémon favorito usando apenas CSS (dica: `background-image`).
14. Adicione um atalho de teclado (por exemplo, pressionar `/`) para focar o campo de busca imediatamente.
15. Crie uma animação no texto do rodapé para que ele apareça com um efeito de digitação quando a página carregar.

## Desafios extras

- Mostrar uma lista com os últimos Pokémons pesquisados.
- Permitir que o usuário navegue usando as setas do teclado entre os resultados anteriores.
- Utilizar `localStorage` para salvar as pesquisas recentes.

Bom estudo e divirta-se criando sua própria Pokédex! 
..