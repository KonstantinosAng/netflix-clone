import './Browse.css';
import Row from '../components/Row.js';
import Banner from '../components/Banner.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import requests from '../extras/requests.js';

function Browse() {
  return (
    <div className="browse">
      <Nav fetchUrl={requests.fetchTrending} />
      <Banner />
      <div className="rows">
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      </div>
      <Footer />
    </div>
  );
}

export default Browse;