var AppDispatcher = require('../dispatchers/appDispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var Eventos = [];

function obtenerEventos(filtro){
  $.ajax({
    url: filtro,
    dataType: 'json',
    cache: false,
    success: function(data){
      Eventos = data[0];
    }.bind(this),
    error: function(xhr, status, err) {
    }.bind(this)
  });
}

var GenericosStore = assign({}, EventEmitter.prototype, {
	addClickListener: function(callback){
		this.on('click',callback);
	}
};

AppDispatcher.register(function(action){
	switch(action.actionType){
		case: "REDIRIGIR":
			Eventos.push(obtenerEventos(action.url));

		default:
	}
});