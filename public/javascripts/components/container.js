'use strict';

const Container = (update) => {
  const grid = $('<div class="grid"></div>');
  const content = $('<div class="content-poke row"></div>')
  grid.append(content);

  state.pokemons.pokemon_entries.map((element) => {
    content.append(Pokemon(element, update, element.pokemon_species.name, element.entry_number, false));
    return content;
  })
  return grid;
}