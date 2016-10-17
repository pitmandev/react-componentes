var appDispatcher = require('../dispatchers/appDispatcher');

module.exports = {
	updateDestacados: function(data){
		console.warn('[appActions] ciclo vida 3 (updateDestacados) destacados: ' + data);
		var action = {
			actionType: "UPDATE_DESTACADOS",
			destacados: data
		};
		console.warn('[appActions] updateDestacados ciclo vida 3 y medio, url: ' + action.destacados.data[0].link_urls.url);
		appDispatcher.dispatch(action);
	},
	updateRecomendaciones: function(data){
		var action = {
			actionType: "UPDATE_RECOMENDACIONES",
			recomendaciones: data
		};
		console.warn('[appActions] updateRecomendaciones ciclo vida 3 y medio, url: ' + action.recomendaciones.data[0].multimedia.multimedia_type.url);
		appDispatcher.dispatch(action);
	}	
};