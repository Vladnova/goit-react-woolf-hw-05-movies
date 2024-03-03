import { useEffect, useState } from 'react';
import moviesApi from '../../api/movies-api';
import ListMovies from 'components/ListMovies';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [baseUrl, setBaseUrl] = useState('');
  const [logoSize, setLogoSize] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesTop = await moviesApi.getMoviesInTrend();
      setMovies(moviesTop);
    };

    const getImg = async () => {
      const { base_url, logo_sizes } = await moviesApi.Configuration();
      setBaseUrl(base_url);
      setLogoSize(logo_sizes);
    };
    getImg();
    fetchMovies();
  }, []);
  return (
    <main>
      <h2>Trending today</h2>
      <ListMovies movies={movies} baseUrl={baseUrl} logoSize={logoSize}/>;
    </main>
  );
};

export default Home;
