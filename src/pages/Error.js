import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section>
      <h2>404</h2>
      <p>Stránka nenalezena</p>
      <p>
        <Link to="/">Domovska stránka</Link>
      </p>
    </section>
  );
};

export default Error;
