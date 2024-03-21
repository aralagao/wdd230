const gridViewButton = document.getElementById('grid-view');
const listViewButton = document.getElementById('list-view');
const cardsContainer = document.getElementById('cards');

gridViewButton.addEventListener('click', function() {
  cardsContainer.classList.remove('list-view');
  cardsContainer.classList.add('grid-view');
});

listViewButton.addEventListener('click', function() {
  cardsContainer.classList.remove('grid-view');
  cardsContainer.classList.add('list-view');
});
