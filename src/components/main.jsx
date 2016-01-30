var React = require('react');
var Header = require('./header');

module.exports = React.createClass({
	render: function() {
		return (
			<span>
			<Header/>
			{this.props.children}
			</span>
		)
	}
})