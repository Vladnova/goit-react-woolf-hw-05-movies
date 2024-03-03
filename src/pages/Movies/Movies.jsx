import moviesApi from 'api/movies-api';
import Form from 'components/Form';
import ListMovies from 'components/ListMovies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('query') || '';
  const [baseUrl, setBaseUrl] = useState('');
  const [logoSize, setLogoSize] = useState([]);

  useEffect(() => {
    const onSearch = async () => {
      const mov = await moviesApi.searchMovies(searchMovie);
      setMovies(mov);
    };
    onSearch();

    const getImg = async () => {
      const { base_url, logo_sizes } = await moviesApi.Configuration();
      setBaseUrl(base_url);
      setLogoSize(logo_sizes);
    };
    getImg();
  }, [searchMovie]);

  const onChangeQuery = searchQuery => {
    searchQuery.length > 0 && setSearchParams({ query: searchQuery });
  };

  return (
    <main>
      <Form onSubmit={onChangeQuery} />
      <ListMovies movies={movies} baseUrl={baseUrl} logoSize={logoSize}/>
    </main>
  );
};

export default Movies;
