var React = require('react');
var ReactDOM = require('react-dom');

var Islas = require('./components/Islas');
var Destacados = require('./components/Destacados');
var Recomendaciones = require('./components/Recomendaciones');

ReactDOM.render(<Islas />,document.getElementById('islas'));
ReactDOM.render(<Destacados />,document.getElementById('grid-container'));
ReactDOM.render(<Recomendaciones />,document.getElementById('recomendaciones'));
