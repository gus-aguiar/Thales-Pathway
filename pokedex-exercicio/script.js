// Seleciona o formulário, o campo de texto e a área onde o resultado vai aparecer
const searchForm = document.querySelector("#search-form");
const pokemonInput = document.querySelector("#pokemon-input");
const resultContainer = document.querySelector("#pokemon-result");

// Função auxiliar que cria elementos HTML com classes e conteúdo
const createElement = (tag, className, textContent) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
};

// Função responsável por montar o cartão com as informações do Pokémon
const renderPokemonCard = (pokemon) => {
  // Limpa o conteúdo anterior antes de renderizar o novo resultado
  resultContainer.innerHTML = "";

  // Cria o cartão principal
  const card = createElement("article", "pokemon-card");

  // Cria a imagem (sprite) oficial do Pokémon
  const sprite = createElement("img", "pokemon-card__sprite");
  sprite.src =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.front_default ||
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
  sprite.alt = `Sprite oficial de ${pokemon.name}`;

  // Cria o container com as informações textuais
  const info = createElement("div", "pokemon-card__info");

  // Nome e número do Pokémon
  const name = createElement(
    "h2",
    "pokemon-card__name",
    `${pokemon.name} #${pokemon.id.toString().padStart(3, "0")}`
  );

  // Tipos (ex.: elétrico, fogo)
  const typesWrapper = createElement("div", "pokemon-card__meta");
  typesWrapper.textContent = "Tipos:";
  const typesList = createElement("div", "pokemon-types");
  pokemon.types.forEach(({ type }) => {
    const typeBadge = createElement("span", "pokemon-type", type.name);
    typesList.appendChild(typeBadge);
  });
  typesWrapper.appendChild(typesList);

  // Altura e peso (convertidos para metros e quilogramas)
  const stats = createElement(
    "p",
    "pokemon-card__stats",
    `Altura: ${(pokemon.height / 10).toFixed(1)} m | Peso: ${(pokemon.weight / 10).toFixed(1)} kg`
  );

  // Lista das habilidades principais
  const abilities = createElement("p", "pokemon-card__stats");
  const abilitiesNames = pokemon.abilities
    .map(({ ability }) => ability.name.replace("-", " "))
    .join(", ");
  abilities.textContent = `Habilidades: ${abilitiesNames}`;

  // Adiciona todos os elementos dentro do container de informações
  info.append(name, typesWrapper, stats, abilities);

  // Monta o cartão final e coloca na tela
  card.append(sprite, info);
  resultContainer.appendChild(card);
};

// Função que mostra um estado de erro simples para o usuário
const renderError = (message) => {
  resultContainer.innerHTML = "";
  const card = createElement("article", "pokemon-card pokemon-card--placeholder");
  card.textContent = message;
  resultContainer.appendChild(card);
};

// Função principal que faz a chamada à API e trata o fluxo
const fetchPokemon = async (identifier) => {
  try {
    // Faz a requisição usando o identificador (nome ou número) transformado em minúsculas
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${identifier.toLowerCase()}`
    );

    // Se a resposta não for OK (404, por exemplo), gera um erro para cair no catch
    if (!response.ok) {
      throw new Error("Pokémon não encontrado.");
    }

    // Converte a resposta em JSON e envia para renderização
    const data = await response.json();
    renderPokemonCard(data);
  } catch (error) {
    // Mostra uma mensagem amigável se algo der errado (nome errado, falta de internet, etc.)
    renderError(error.message || "Não foi possível carregar os dados agora.");
  }
};

// Escuta o envio do formulário e impede o comportamento padrão do navegador (recarregar a página)
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Pega o valor digitado, remove espaços extras e verifica se há algo para buscar
  const query = pokemonInput.value.trim();
  if (!query) {
    renderError("Digite um nome ou número válido para pesquisar.");
    return;
  }

  // Chama a função que faz a busca na API
  fetchPokemon(query);
});
