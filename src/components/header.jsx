var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
	render: function () {
		return (
			<header>
				<nav className="navbar navbar-inverse header navbar-static-top">
					<div className="container">
						<Link to="/" className="navbar-brand">
							Imgur Browser
						</Link>
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a href="#">Category 1</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		)
	}
})