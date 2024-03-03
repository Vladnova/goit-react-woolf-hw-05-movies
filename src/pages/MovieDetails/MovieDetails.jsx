import moviesApi from 'api/movies-api';
import Button from 'components/Button';
import { ReactComponent as GoBackIcon } from '../../icons/goBack.svg';
import { useEffect, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [baseUrl, setBaseUrl] = useState('');
  const [logoSize, setLogoSize] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from ?? '/movies';



  useEffect(() => {
    const getMovieInfo = async () => {
      const details = await moviesApi.getMovieDetail(movieId);
      setMovieDetails(details);
    };

    const getImg = async () => {
      const { base_url, logo_sizes } = await moviesApi.Configuration();
      setBaseUrl(base_url);
      setLogoSize(logo_sizes);
    };
    getMovieInfo();
    getImg();
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  const goBack = () => {
    navigate(from);
  };

  const { title, poster_path, release_date, overview, genres, backdrop_path } =
    movieDetails;

  return (
    <>
      <div
        className={styles.wrap}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(3, 37, 65, 0.7), rgba(3, 37, 65, 0.7)),url(${baseUrl}${logoSize[6]}${backdrop_path})`,
        }}
      >
        <Button type="button" className={styles.goBackBtn} onClick={goBack} >
          <GoBackIcon width="40" height="40" />
        </Button>
        <img
          className={styles.img}
          src={`${baseUrl}${logoSize[4]}${poster_path}`}
          alt={title}
        />
        <div className={styles.inner}>
          <h2 className={styles.titleFilm}>
            {title}: ({release_date.slice(0, 4)})
          </h2>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </div>
      </div>
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to="cast" state={{ from }}>Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from }}>Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
