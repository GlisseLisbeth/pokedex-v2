'use strict';

const Search = (update) => {
  const divSearch = $('<div class="search"></div>');
  const rowSearch = $('<div class="row"></div>');
  const formGroup = $('<div class="input-field col s12 m7 l7"></div>');
  const icon = $('<i class="fa fa-search col s1" aria-hidden="true"></i>');
  const input = $('<input type="text" class="input-poke col s12 m11" />');

  divSearch.append(rowSearch);
  rowSearch.append(formGroup);
  formGroup.append(icon);
  formGroup.append(input);

  input.on("keyup", () => {
    let pokemonFound = filterByName(state.pokemons.pokemon_entries,input.val());
    const content = $('.row.content-poke');
    reRender(content, pokemonFound, update);
  });

  return divSearch;
}

const reRender = ( content, pokemonFound, update ) => {
  content.empty();
  pokemonFound.forEach(element => {
    content.append(Pokemon(element, update, element.pokemon_species.name, element.entry_number));
  });
}

const filterByName = (pokemons,query) => {
  return pokemons.filter((e) => {
    if (e.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
      return e;
    }
  });
}
