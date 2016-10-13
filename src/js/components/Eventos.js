var React = require('React');
var EventosStore = require('../stores/EventosStore');

function getStateFromStore(){
	console.warn('ciclo vida 7');
	return {eventos: EventosStore.getAll()}
}


var Eventos = React.createClass({

	onClick: function() {
		console.warn('ciclo vida 6');
		this.setState(getStateFromStore());
	},
	getInitialState: function() {
		return getStateFromStore();
	},
	componentDidMount: function(){
		EventosStore.addClickListener(this.onClick);
	},
	ComponentWillUnMount: function(){
		EventosStore.removeClickListener(this.onClick);
	},
	render: function(){

		var imagenes = this.state.eventos.map(function(evento, index){
			return(
				<img className='img-responsive' key={index} src={evento.link_urls.url} alt=''/>				
				)
		});

		var divStyle = {
			width: '285px'
		};
		var wrapperStyle = {
			width: '4560px',
			left: '0px',
			display: 'block'
		};

		return(
			<div className='owl-wrapper' style={wrapperStyle}>
				<div className='owl-item' style={divStyle}>
					<div className='item'>
						<a href='#' className='imglink'>
							<em className='overflow-hidden'>

								{imagenes}

							</em>
							<span>
								<strong>Id element |&nbsp;</strong>
							</span>
						</a>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Eventos;