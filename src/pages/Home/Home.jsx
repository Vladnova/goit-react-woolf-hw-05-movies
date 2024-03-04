import { useEffect, useState } from 'react';
import moviesApi from '../../api/movies-api';
import ListMovies from 'components/ListMovies';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesTop = await moviesApi.getMoviesInTrend();
      setMovies(moviesTop);
    };

    fetchMovies();
  }, []);
  return (
    <main>
      <h2>Trending today</h2>
      <ListMovies movies={movies} />;
    </main>
  );
};

export default Home;
