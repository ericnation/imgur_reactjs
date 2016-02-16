var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = require('./apikey');

module.exports = window.api =  {
	get: function(url) {
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Client-ID ' + apiKey,
				'Accept' : 'application/json'
			}
		})
		.then(function(response) {
			return response.json();
		})

	}
};
