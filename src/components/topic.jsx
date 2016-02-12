var React = require('react');

module.exports = React.createClass({
	render: function() {
		return  (
			<div className="container">
				<div className="row">
					<div className="col-md-12">	
						I am a topic with ID {this.props.params.id}
					</div>
				</div>
			</div>
		)
	}
})