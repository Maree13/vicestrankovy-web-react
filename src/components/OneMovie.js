import './OneMovie.css';
import { useParams } from 'react-router-dom';

const OneMovie = () => {
  const { movieId } = useParams();

  return (
    <section>
      <h1>{movieId}</h1>
    </section>
  );
};

export default OneMovie;
