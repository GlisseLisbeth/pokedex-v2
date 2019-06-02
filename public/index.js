'use strict';

const state = {
  pokemons: null,
  selectedPokemon: null,
  pokeData: {
    name: null,
    description: null, 
    weight: null,
    height: null,
    sex: null,
    category: null,
    abilities: null,
    types: null,
    debility: null,
    doubleDamage: [],
  }
}

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_=> render(root)));
  wrapper.append(Search(_=> render(root)));
  wrapper.append(Container(_=> render(root)));
  wrapper.append(ModalInitial(_ => render(root)));
  root.append(wrapper);
}

$( _ => {
  const loader = $('<img src="https://media.giphy.com/media/GHBghsUxKPjva/giphy.gif" alt="pikachu loader" class="grid-loading">');
  $('body').append(loader);

  $.getJSON('https://pokeapi.co/api/v2/pokedex/1/', (data) => {
    state.pokemons = data;
    $('.grid-loading').hide();
  })
  .done(() => {
    const root = $('#root');
    render(root);
  })
  .fail( (error) => {
    console.log("error: " + error);
  });
});