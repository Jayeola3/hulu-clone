const API_KEY = '5542202722d37080cc3fa73e17c82a61'

export const requests = [
	 {
		title: "Trending",
		url: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
	},
	 {
		title: "Top Rated",
		url: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
	},
	 {
		title: "Action",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	 {
		title: "Comedy",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	},
	 {
		title: "Horror",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	},
	 {
		title: "Romance",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	},
	 {
		title: "Mystery",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	},
	 {
		title: "SciFi",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
	},
	 {
		title: "Western",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
	},
	 {
		title: "Animation",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	},
	 {
		title: "TV Movie",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
	},
];

export const search = {
	url : `/search/movie?api_key=${API_KEY}&query=`
}