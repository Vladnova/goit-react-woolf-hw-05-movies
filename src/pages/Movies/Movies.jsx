import moviesApi from 'api/movies-api';
import Form from 'components/Form';
import ListMovies from 'components/ListMovies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('query') || '';

  useEffect(() => {
    const onSearch = async () => {
      const mov = await moviesApi.searchMovies(searchMovie);
      setMovies(mov);
    };
    onSearch();
  }, [searchMovie]);

  const onChangeQuery = searchQuery => {
    searchQuery.length > 0 && setSearchParams({ query: searchQuery });
  };

  return (
    <main>
      <Form onSubmit={onChangeQuery} />
      <ListMovies movies={movies} />
    </main>
  );
};

export default Movies;
