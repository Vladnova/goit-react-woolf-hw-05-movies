import { NavLink, useLocation } from 'react-router-dom';
import DefaultMovieImg from '../../defaultImg/defaultMovieImg.jpg';
import styles from './ListMovies.module.css';

const ListMovies = ({ movies,}) => {
  const location = useLocation();
  return (
    <ul className={styles.wrapList}>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className={styles.item}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            <img
              className={styles.img}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `${DefaultMovieImg}`
              }
              alt={title}
            />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ListMovies;
