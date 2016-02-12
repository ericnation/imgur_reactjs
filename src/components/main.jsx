var React = require('react');
var Header = require('./header');
var TopicList = require('./topic-list');

module.exports = React.createClass({
	render: function() {
		return (
			<span>
			<Header/>
				{this.content()}
			</span>
		)
	},
	content: function() {
		if(this.props.children) {
			return this.props.children
		} else {
			return <TopicList />
		}
	}
})