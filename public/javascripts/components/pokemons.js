'use strict';

const Pokemon = (event, update, name, number ) => {
    const colPokemon = $('<div class ="col s12 m4 l3 xl2 grey lighten-4 gris-text"></div>');
    const imgPokeCont = $('<div class="img-poke"></div>');
    const imgPoke = $('<img src="https://serebii.net/art/th/' + number + '.png"/>');
    const button = $('<div class="button"></div>');
    const icons = $('<div class="icons"></div>');
    const pokeName = $('<h6 class="bold center-align">' + name + '</h6>');
    
    colPokemon.append(imgPokeCont);
    colPokemon.append(button);
    imgPokeCont.append(imgPoke);
    button.append(icons);
    button.append(pokeName)

    return colPokemon;
}