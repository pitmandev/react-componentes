var React = require('React');
var ActionsCreator = require('../actions/appActions');

var recomendaciones = [];
var destacados = [];

// Obtiene los recursos para 'descubre'.
function cargarRecomendaciones(){
  $.ajax({
    url: "https://private-afe481-atbsugerencias.apiary-mock.com/sugerencias",
    dataType: 'json',
    cache: false,
    async: false,
    success: function(data){
		recomendaciones = data;
		console.info('[Recomendaciones] ciclo vida 1. success '+recomendaciones);		
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(this.props.url, status, err.toString());
    }.bind(this),
    complete: function(xhr, status){
		console.info('ciclo vida 1 '+status+' '+recomendaciones);		
    }.bind(this)
  });
}

// Obtiene los recursos para los cubos 'Destacados'.
function cargarDestacados(){
  $.ajax({
    url: "https://private-e61b95-atbdestacados.apiary-mock.com/destacado",
    dataType: 'json',
    cache: false,
    async: false,
    success: function(data){
		destacados = data;
		console.info('ciclo vida 1 destacados. success '+destacados);		
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(this.props.url, status, err.toString());
    }.bind(this),
    complete: function(xhr, status){
		console.info('ciclo vida 1 '+status+' '+destacados);		
    }.bind(this)
  });
}

var Islas = React.createClass({
	// Obtiene los recomendaciones asociados a una isla
	componentDidMount: function(){
			cargarDestacados();
			cargarRecomendaciones();			

      ActionsCreator.updateDestacados({data:destacados});
      ActionsCreator.updateRecomendaciones({data:recomendaciones});      
	},
	render: function(){
		var isla1 = 'Mallorca';
		var isla2 = 'Menorca';
		var isla3 = 'Ibiza';				
		var isla4 = 'Formentera';
		return(
			<div id="filters-container" className="cbp-l-filters-text">
				<div data-filter="*" className="cbp-filter-item-active cbp-filter-item dn"></div> 
				<div data-filter=".mallorca" className="cbp-filter-item">{isla1}</div> |
				<div data-filter=".menorca" className="cbp-filter-item">{isla2} </div> |
				<div data-filter=".ibiza" className="cbp-filter-item">{isla3} </div> |
				<div data-filter=".formentera" className="cbp-filter-item"> {isla4} </div>
			</div>
		);
	}
});

module.exports = Islas;