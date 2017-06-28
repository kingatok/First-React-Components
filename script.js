var movies = [
	{
		id: 1,
		title: 'Iluzjonista',
		desc: 'Film o iluzjoniście',
		image: 'iluzjonista.jpeg'
	},
	{
		id: 2,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		image: 'harrypotter.jpeg'
	},
	{
		id: 3,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		image: 'krollew.jpeg'
	},
	{
		id: 4,
		title: 'Wonderwoman',
		desc: 'Film o superbohaterce',
		image: 'wonderwoman.jpeg'
	}
];

var Movies = React.createClass({
	propTypes: {
		moviesX: React.PropTypes.array.isRequired,
	},

	render: function() {
		var movies = this.props.moviesX.map(function(movie) {
			return React.createElement(Movie, {key: movie.id, movieX: movie})
		});

		return  (
			React.createElement('div', {},
				React.createElement('h1', {}, 'Lista filmów'),
				React.createElement('ul', {}, movies)
			)
		);
	},
});

var Movie = React.createClass({
	propTypes: {
		movieX: React.PropTypes.object.isRequired,
	},

	render: function() {
		return  (
			React.createElement('li', {},
				React.createElement(MovieTitle, {titleX: this.props.movieX.title}),
				React.createElement(MovieDescription, {descX: this.props.movieX.desc}),
				React.createElement(MovieImage, {srcX: this.props.movieX.image})
			)
		)
	},
});

var MovieTitle = React.createClass({
	propTypes: {
		titleX: React.PropTypes.string.isRequired,
	},

	render: function() {
		return  (
			React.createElement('h2', {}, 'Tytuł: ', this.props.titleX)
		)
	},
});

var MovieDescription = React.createClass({
	propTypes: {
		descX: React.PropTypes.string.isRequired,
	},

	render: function() {
		return  (
			React.createElement('p', {}, 'Opis filmu: ', this.props.descX)
		)
	},
});

var MovieImage = React.createClass({
	propTypes: {
		srcX: React.PropTypes.string.isRequired,
	},

	render: function() {
		return  (
			React.createElement('img', {src: this.props.srcX})
		)
	},
});

var element = React.createElement(Movies, {moviesX: movies});
ReactDOM.render(element, document.getElementById('app'));

