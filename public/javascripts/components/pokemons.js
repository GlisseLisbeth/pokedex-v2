'use strict';

const Pokemon = (event, update, name, number) => {
  const colPokemon = $('<div class ="col s12 m4 l3 xl2"></div>');
  const cardPoke = $('<div class="card-poke text-gris grey lighten-4"></div>');
  const imgPokeCont = $('<div class="img-poke"></div>');
  const imgPoke = $('<img src="https://serebii.net/art/th/' + number + '.png"/>');
  const button = $('<div class="button"></div>');
  const icons = $('<div class="icons"></div>');
  const pokeball = $('<a href="#modal1" class="modal-trigger icon pokebola"></a>');
  const pokeheart = $('<a href="#" class="icon heart"></a>');
  const pokedata = $('<a href="#" class="icon data"></a>');
  const pokeName = $('<h6 class="bold center-align">' + name + '</h6>');

  pokeball.on('click', (event) => {
    event.preventDefault();
    state.selectedPokemon = number;

    $.getJSON('https://pokeapi.co/api/v2/pokemon-species/' + state.selectedPokemon, (data) => {
      state.pokeData.name = data.name;
      state.pokeData.category = data.genera[4].genus;
      state.pokeData.sex = data.gender_rate;
      state.pokeData.description = data.flavor_text_entries[3].flavor_text;

    })
    .done(() => {
      $.getJSON('https://pokeapi.co/api/v2/pokemon/' + state.selectedPokemon, (dataPoke) => {
        state.pokeData.abilities = dataPoke.abilities;
        state.pokeData.weight = dataPoke.weight + ' m';
        state.pokeData.height = dataPoke.height + ' kg';
        state.pokeData.types = dataPoke.types;
      })
      .done(() => {
        state.pokeData.types.forEach(element => {
          let url = element.type.url;
          $.getJSON(url, (data) => {
            state.pokeData.debility = data;
          })
          .done(() => {
            state.pokeData.debility.damage_relations.double_damage_from.forEach(function (elements) {
              state.pokeData.doubleDamage.push(elements.name);
              const debility = $('<p class="col s4 center-align">' + elements.name + '</p>');
              $('.debilities').append(debility);
              debility.addClass(elements.name);
              debility.addClass('border-radius');
              $('.modal').find('.pokebola').off();
            });
          })
          .fail((error) => {
            console.log("error: " + error);
          });
        });
        $('.modal').append(ModalContent());
      })
      .fail( (error) => {
        console.log("error: " + error);
      });
    })
    .fail( (error) => {
      console.log("error: " + error);
    });
  });

  colPokemon.append(cardPoke);
  cardPoke.append(imgPokeCont);
  cardPoke.append(button)
  imgPokeCont.append(imgPoke);
  button.append(icons);
  icons.append(pokeball);
  icons.append(pokeheart);
  icons.append(pokedata);
  button.append(pokeName);

  return colPokemon;
}