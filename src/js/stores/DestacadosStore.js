var AppDispatcher = require('../dispatchers/appDispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var destacados = [];

var DestacadosStore = assign({}, EventEmitter.prototype, {
	emitLoad: function(){
		this.emit('load');
	},
	addLoadListener: function(callback){
		this.on('load',callback);
	},
	removeLoadListener: function(callback){
		this.removeListener('load',callback);
	},
	getAll: function(){
		return destacados;
	}
});

AppDispatcher.register(function(action){
	switch(action.actionType){
		case "UPDATE_DESTACADOS":
			console.warn('[DestacadosStore] ciclo vida 4' + action.destacados);
			destacados = (action.destacados) ;
			DestacadosStore.emitLoad();
			break;
		default:
	}
});

module.exports = DestacadosStore;