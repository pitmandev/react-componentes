var AppDispatcher = require('../dispatchers/appDispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var recomendaciones = [];

var RecomendacionesStore = assign({}, EventEmitter.prototype, {
	emitLoad: function(){
//console.warn('ciclo vida 5. Aviso a navegantes load');
		this.emit('load');
	},
	addLoadListener: function(callback){
		this.on('load',callback);
	},
	removeLoadListener: function(callback){
		this.removeListener('load',callback);
	},
	getAll: function(){
		return recomendaciones;
	}
});

AppDispatcher.register(function(action){
	switch(action.actionType){
		case "UPDATE_RECOMENDACIONES":
			console.warn('[RecomendacionesStore] ciclo vida 4' + action.recomendaciones);
			recomendaciones = (action.recomendaciones) ;
			RecomendacionesStore.emitLoad();
			break;
		default:
	}
});

module.exports = RecomendacionesStore;