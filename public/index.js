'use strict';

const state = {
  pokemons: null,
  selectedPokemon: null,
}

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_=> render(root)));
  root.append(wrapper);
}

$( _ => {
  $.getJSON('https://pokeapi.co/api/v2/pokedex/1/', (data) => {
    state.pokemons = data;
  })
  .done(() => {
    const root = $('#root');
    render(root);
  })
  .fail( (error) => {
    console.log("error: " + error);
  });
});