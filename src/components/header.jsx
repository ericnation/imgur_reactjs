var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;
var Actions = require('../actions');
var TopicStore = require('../stores/topic-store');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(TopicStore, 'onChange')
	],
	getInitialState: function() {
		return {
			topics: []
		}
	},
	componentWillMount: function() {
		Actions.getTopics();
	},
	render: function () {
		return (
			<header>
				<nav className="navbar navbar-inverse header navbar-static-top">
					<div className="container">
						<Link to="/" className="navbar-brand">
							Imgur Browser
						</Link>
						<ul className="nav navbar-nav navbar-right">
							{this.renderTopics()}
						</ul>
					</div>
				</nav>
			</header>
		)
	},
	renderTopics: function() {
		return this.state.topics.map(function(topic) {
			return <li key={topic.id}>
				<Link activeClassName="active" to={"topics/" + topic.id}>
					{topic.name}
				</Link>
			</li>
		});
	},
	onChange: function(event, topics) {
		this.setState({
			topics: topics
		});
	}
})