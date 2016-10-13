var appDispatcher = require('../dispatchers/appDispatcher');

module.exports = {
	redirige: function(accion){
		var action = {
			actionType: "REDIRIGIR",
			url: accion
		};
		appDispatcher.dispatch(accion);
	},
	updateEventos: function(data){
		console.warn('ciclo vida 3 eventos: ' + data.eventos);
		var action = {
			actionType: "UPDATE_EVENTOS",
			eventos: data.eventos
		};
		console.warn('ciclo vida 3 y medio, url: ' + action.eventos[0].link_urls.url);

		appDispatcher.dispatch(action);
	}
};