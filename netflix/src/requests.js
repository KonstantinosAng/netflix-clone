const TMDB_API_KEY="b12c4ce548390f09a78b7fc6df9b191f";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&wih_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${TMDB_API_KEY}&wih_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${TMDB_API_KEY}&wih_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${TMDB_API_KEY}&wih_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${TMDB_API_KEY}&wih_genres=99`
}

export default requests;