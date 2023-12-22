// import { useParams } from 'react-router-dom';
import SearchParams from 'components/SaerchParams';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchParams] = useSearchParams();

  const searshParam = searchParams.get('search');

  const [film, setFilm] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const searshParam = searchParams.get('search');
    if (searshParam !== '' && searshParam !== null) {
      // запит на бекенд
      async function searchFun() {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmZhMGNmNDU5MDk1ZmY4MjI4MTQwNzRjZThhNzI1ZiIsInN1YiI6IjY1N2Y1N2ViNjdiNjEzMDU1MjhjODE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K9tYv4W2usSl9nJR0P-Aa5-DrVa1ZLviMJNryhZEts4',
          },
        };
        await fetch(
          `https://api.themoviedb.org/3/search/movie?include_adult=true&language=en-US&page=1&query=${searshParam}`,
          options
        )
          .then(response => response.json())
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
