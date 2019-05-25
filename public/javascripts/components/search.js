'use strict';

const Search = (update) => {
  const divSearch = $('<div class="search"></div>');
  const container = $('<div class="container header"></div>');
  const rowSearch = $('<div class="row"></div>');
  const formGroup = $('<div class="form-group col s12 m7 l7"></div>');
  const icon = $('<i class="fa fa-search col s1" aria-hidden="true"></i>');
  const input = $('<input type="text" class="col s12 m11" />');

  divSearch.append(container);
  container.append(rowSearch);
  rowSearch.append(formGroup);
  formGroup.append(icon);
  formGroup.append(input);

  const grid = $('<div class="container grid"></div>');
  const content = $('<div class="row"></div>')
  grid.append(content);

  state.pokemons.pokemon_entries.map((element) => {
    content.append(Pokemon(element, update, element.pokemon_species.name, element.entry_number));
    return content;
  })
  divSearch.append(grid);
  return divSearch;
}

const reRender = ( content, pokemonFound, update ) => {
  content.empty();
  pokemonFound.forEach(element => {
    content.append(Pokemon(element, update, element.pokemon_especies.name, element.entry_number));
  });
}