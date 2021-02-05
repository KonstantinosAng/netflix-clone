const TMDB_API_KEY="b12c4ce548390f09a78b7fc6df9b191f";

const requests = {
  baseUrl: `https://image.tmdb.org/t/p/original/`,
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&wih_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&wih_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&wih_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&wih_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&wih_genres=99`
}

export default requests;