var React = require('React');
var DestacadosStore = require('../stores/DestacadosStore');

function getStateFromStore(){
	console.warn('[Destacados] getStateFromStore');
	return {destacados: DestacadosStore.getAll()}
}


var Destacados = React.createClass({

	onLoad: function() {
		console.warn('[Destacados] ciclo vida 6');
		this.setState(getStateFromStore());
	},
	getInitialState: function() {
		return getStateFromStore();
	},
	componentDidMount: function(){
		console.warn('[Destacados] componentDidMount');		
		DestacadosStore.addLoadListener(this.onLoad);
	},
	ComponentWillUnMount: function(){
		DestacadosStore.removeLoadListener(this.onLoad);
	},
	render: function(){
		
		var styleSpan = {
			"float":"left"
		};
		var estilo = {
			"position":"relative"
		};
		var cubos = this.state.destacados.data.map(function(destacado, index){
			
			var tipoClase = 'cbp-item '+ destacado.island;

			return(
				<div className={tipoClase} key={index} style={estilo}>
					<a href='#' className='cbp-caption' data-title='Cathedral San Seu'>
						<div className='cbp-caption-defaultWrap'>

							<img src={destacado.multimedia.url} alt='' />

						</div>
						<div className='cbp-caption-activeWrap'>
							<div className='cbp-l-caption-alignLeft'>
								<div className='cbp-l-caption-body'>

									<div className='cbp-l-caption-title'>{destacado.titles.title}</div>
									<div className='cbp-l-caption-desc'>{destacado.island}</div>

								</div>
							</div>
						</div>
					</a>
				</div>
			)
		});

		return(
					<span style={styleSpan}>{cubos}</span>
		);
	}
});

module.exports = Destacados;