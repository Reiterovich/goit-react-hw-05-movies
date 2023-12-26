import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { homeSearchFun } from '../services/homeFun';

const Home = () => {
  const [film, setFilm] = useState([]);

  const location = useLocation();

  useEffect(() => {
    homeSearchFun()
      .then(response => setFilm(response.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {' '}
      <ul>
        {film.length !== 0 &&
          film.map(fil => (
            <li key={fil.id}>
              <Link to={`movies/${fil.id}`} state={{ from: location }}>
                {fil.title}
              </Link>
            </li>
          ))}{' '}
      </ul>
    </div>
  );
};

export default Home;
