var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var Actions = require('../actions');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(ImageStore, 'onChange')
	],
	getInitialState:function() {
		return {
			images: []
		}
	},
	componentWillMount: function() {
		Actions.getImages(this.props.params.id);
	},
	render: function() {
		return  (
			<div className="container">
				<div className="row">
					<div className="col-md-12">	
						
					</div>
				</div>
			</div>
		)
	},
	onChange: function(event, images) {
		this.setState({
			images: images
		})
	}
});