import SearchParams from 'components/SaerchParams';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { moviesSearchFun } from '../services/moviesFun';

const Movies = () => {
  const [searchParams] = useSearchParams();

  const searshParam = searchParams.get('search');

  const [film, setFilm] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const searshParam = searchParams.get('search');
    if (searshParam !== '' && searshParam !== null) {
      async function searchFun() {
        moviesSearchFun(searshParam)
          .then(response => setFilm(response.results))
          .catch(err => console.error(err));
      }
      if (film === '') return;
      searchFun();
    }
  }, [searshParam, film, searchParams]);

  return (
    <div>
      <SearchParams />
      <ul>
        {film.length !== 0 &&
          film.map(fil => (
            <li key={fil.id}>
              <Link to={`${fil.id}`} state={{ from: location }}>
                {fil.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
