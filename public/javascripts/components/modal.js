'use strict';

const ModalContent = () => {
  const modal1 = $('#modal1');
  const modalContent = $('<div class="modal-content container"></div>');
  const rowContent = $('<div class="row"></div>');
  const title = $('<h3 class="center-align" id="pokename">' + state.pokeData.name + '</h3>');

  modalContent.append(rowContent);
  rowContent.append(title);

  const rowSubContent = $('<div class="row"></div>');
  const colInfo = $('<div class="col s5 pokemon"></div>');

  modalContent.append(rowSubContent);
  rowSubContent.append(colInfo);
  colInfo.append(Pokemon(null, null, state.pokeData.name, state.selectedPokemon));

  const colDescription = $('<div class="col s7"></div>');
  const description = $('<p class="col s12 medium-size-text marg-bot" id="description">' + state.pokeData.description + '</p>');
  const data = $('<div class="data-poke col s12 light-blue white-text pad-top-bot marg-bot border-radius"></div>');
  const type = $('<h5 class="col s12 medium-size-text marg-bot">Tipo:</h5>');
  const typeDiv = $('<div class="col s12 types"></div>');
  const debility = $('<h5 class="col s12 medium-size-text marg-bot">Debilidad:</h5>');
  const debilityDiv = $('<div class="col s12 debilities"></div>');

  rowSubContent.append(colDescription);
  colDescription.append(description);
  colDescription.append(data);
  colDescription.append(type);
  colDescription.append(typeDiv);
  colDescription.append(debility);
  colDescription.append(debilityDiv);

  const col4 = $('<div class="col s4"></div>');
  const col8 = $('<div class="col s8"></div>');
  const height = $('<h6>Altura:</h6>');
  const heightData = $('<p id="height">' + state.pokeData.height + '</p>');
  const weight = $('<h6>Peso:</h6>');
  const weightData = $('<p id="weight">' + state.pokeData.weight + '</p>');
  const sex = $('<h6>Sexo:</h6>');
  const category = $('<h6>Categoría:</h6>');
  const categoryData = $('<p id="category">' + state.pokeData.category + '</p>');
  const hability = $('<h6>Habilidad:</h6>');

  data.append(col4);
  data.append(col8);
  col4.append(height);
  col4.append(heightData);
  col4.append(weight);
  col4.append(weightData);
  col4.append(sex);
  col8.append(category);
  col8.append(categoryData);
  col8.append(hability);

  if (state.pokeData.gender_rate == 1) {
    $('<i class="fa fa-mars" aria-hidden="true"></i>').insertAfter(sex);
    $('<i class="fa fa-venus" aria-hidden="true"></i>').insertAfter(sex);
  } else {
    $('<p>Asexual</p>').insertAfter(sex);
  }
  state.pokeData.abilities.forEach(function (e) {
    const habilityData = $('<p>' + e.ability.name + '</p>');
    col8.append(habilityData);
  });

  state.pokeData.types.forEach(function (e) {
    const typeData = $('<p class="col s4 center-align marg-bot">' + e.type.name + '</p>');
    typeData.addClass(e.type.name);
    typeData.addClass('border-radius');
    typeDiv.append(typeData);
  });

  return modalContent;
}

const ModalInitial = () => {
  const modal = $('<div id="modal1" class="modal"></div>');
  const close = $('<a href="#!" class="modal-close icon close"></a>');

  modal.append(close);

  modal.modal({
    dismissible: true,
    opacity: .5,
    inDuration: 300,
    outDuration: 200,
    startingTop: '4%',
    endingTop: '10%',
    ready: function (modal, trigger) { },

    complete: function () {
      $('.modal-content').remove();
      state.selectedPokemon = null;
      state.pokeData.name = null;
      state.pokedata.description = null;
      state.pokeData.weight = null;
      state.pokeData.height = null;
      state.pokeData.sex = null;
      state.pokeData.category = null;
      state.pokeData.abilities = null;
      state.pokeData.types = null;
      state.pokeData.debility = null;
      state.pokeData.doubleDamage = [];
    }
  });

  return modal;
}