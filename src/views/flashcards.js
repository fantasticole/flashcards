var React = require('react');

var Parent = React.createClass({
	render: function(){
		return (
			<div className='parent'>
				<Decks/>
				<Cards/>
			</div>
		);
	}
});

var Decks = React.createClass({
	render: function(){
		return (
			<div className='decks'>
				<h1>You have Decks!</h1>
			</div>
		);
	}
});

var Cards = React.createClass({
	render: function(){
		return (
			<div className='cards'>
				<h1>Cards, too!</h1>
				<p>Oh yeah, you do.</p>
			</div>
		);
	}
});

React.render(<Parent/>, document.body);

window.React = React;