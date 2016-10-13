var AppDispatcher = require('../dispatchers/appDispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var eventos = [];

var EventosStore = assign({}, EventEmitter.prototype, {
	emitClick: function(){
console.warn('ciclo vida 5. Aviso a navegantes click');
		this.emit('click');
	},
	addClickListener: function(callback){
		this.on('click',callback);
	},
	removeClickListener: function(callback){
		this.removeListener('click',callback);
	},
	getAll: function(){
		return eventos;
	}
});

AppDispatcher.register(function(action){
	switch(action.actionType){
		case "UPDATE_EVENTOS":
			console.warn('ciclo vida 4' + action.eventos);
			eventos = (action.eventos) ;
			EventosStore.emitClick();
			break;
		default:
	}
});

module.exports = EventosStore;