import moviesApi from 'api/movies-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaulActorImg from '../../defaultImg/defaulActorImg.jpg';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const cast = async () => {
      const actors = await moviesApi.getCast(movieId);
      setCast(actors);
    };
    cast();
  }, [movieId]);

  return (
    <>
      {!cast.length ? (
        <h2>We don't have any cast for this movie</h2>
      ) : (
        <ul className={styles.wrapper}>
          {cast.map(({ name, id, character, profile_path }) => (
              <li key={id} className={styles.list}>
                <img
                  className={styles.link}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : `${defaulActorImg}`
                  }
                  alt={name}
                />
                <h4>{name}</h4>
                <p>Character: {character}</p>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
