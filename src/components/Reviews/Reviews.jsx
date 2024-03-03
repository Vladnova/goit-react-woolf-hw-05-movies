import moviesApi from 'api/movies-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const reviews = async () => {
      const data = await moviesApi.getReviews(movieId);
      setReviews(data);
    };

    reviews();
  }, [movieId]);

  return (
    <div className={styles.wrap}>
    {reviews.length !== 0 && (
      <ul>
        {reviews.map(({ author, content, id }) => (
          <li key={id}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    )}

    {!reviews.length && (
      <h2 className={styles.titleDefault}>
        We don't have any reviews for this movie
      </h2>
    )}
  </div>
  )
};

export default Reviews;
