var React = require('React');
var ActionsCreator = require('../actions/appActions');

var eventos = [];
// Obtiene los recursos.
function cargarDescubre(){
  $.ajax({
    url: "https://private-87076b-atbdescubre.apiary-mock.com/descubre",
    dataType: 'json',
    cache: false,
    async: false,
    success: function(data){
		eventos = data;
		console.info('ciclo vida 1. success '+eventos);		
    }.bind(this),
    error: function(xhr, status, err) {
      //console.error(this.props.url, status, err.toString());
    }.bind(this),
    complete: function(xhr, status){
		console.info('ciclo vida 1 '+status+' '+eventos);		
    }.bind(this)
  });
}

var Islas = React.createClass({
	// Obtiene los eventos asociados a una isla
	descubrir: function(e){
		cargarDescubre();
		console.warn('ciclo vida 2, eventos '+eventos);
		ActionsCreator.updateEventos({eventos:eventos});
	},
	componentWillMount: function(){

	},
	render: function(){
		var isla1 = 'mallorca';
		var isla2 = 'menorca';
		var isla3 = 'ibiza';				
		var isla4 = 'formentera';
		return(
				<div>
					<input type='button' onClick={this.descubrir} value={isla1} /> | 
					<input type='button' onClick={this.descubrir} value={isla2} /> | 
					<input type='button' onClick={this.descubrir} value={isla3} /> |
					<input type='button' onClick={this.descubrir} value={isla4} />
				</div>
			);
	}
});

module.exports = Islas;