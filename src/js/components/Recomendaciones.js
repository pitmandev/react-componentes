var React = require('React');
var RecomendacionesStore = require('../stores/RecomendacionesStore');

function getStateFromStore(){
	console.warn('[Recomendaciones] getStateFromStore');
	return {Recomendaciones: RecomendacionesStore.getAll()}
}


var Recomendaciones = React.createClass({

	onLoad: function() {
		console.warn('[Recomendaciones] ciclo vida 6');
		this.setState(getStateFromStore());
	},
	getInitialState: function() {
		return getStateFromStore();
	},
	componentDidMount: function(){
		RecomendacionesStore.addLoadListener(this.onLoad);
	},
	ComponentWillUnMount: function(){
		RecomendacionesStore.removeLoadListener(this.onLoad);
	},
	render: function(){

		var recomendaciones = this.state.Recomendaciones.data.map(function(recomendacion, index){
			return(
				<div className='item' key={index}>
					<a href='#' className='imglink'>
						<em className='overflow-hidden'>
							<img className='img-responsive' src={recomendacion.multimedia.url} alt='' />
						</em>
						<span>
							<strong>Id element |  MALLORCA</strong>
						</span>
					</a>
				</div>
			)
		});

		return(
				<span>
					{recomendaciones}
				</span>
		);
	}
});

module.exports = Recomendaciones;