var React = require('react');
var ReactDOM = require('react-dom');

var IslasAgenda = require('./components/Islas');
var Eventos = require('./components/Eventos');

ReactDOM.render(<IslasAgenda />,document.getElementById('islas'));
ReactDOM.render(<Eventos />,document.getElementById('eventos'));