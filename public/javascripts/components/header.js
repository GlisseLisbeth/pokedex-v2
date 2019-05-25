'use strict';

const Header = () => {
  const header = $('<header></header>');
  const title = $('<h2 class="center-align red-text text-darken-1">Pokédex</h2>');
  header.append(title);
  return header;
}