
$(function(){

  // FUNKCJE POMOCNICZE
  function initSortable() {
    $('.card-list').sortable({
      connectWith: '.card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }

  function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
    var str = '', i;
    for (i = 0; i < 10; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }

  // KANBAN
  var board = {
    name: 'Tablica Kanban',
    createColumn: function(column) {
      this.element.append(column.element);
      initSortable();
    },
    element: $('#board .column-container')
  };

  $('.create-column')
  .click(function(){
    board.createColumn(new Column(prompt('Wpisz nazwę kolumny')));
  });

  // KLASA KANBAN COLUMN
  function Column(name) {
    var self = this;

    this.id = randomString();
    this.name = name;
    this.element = createColumn();
