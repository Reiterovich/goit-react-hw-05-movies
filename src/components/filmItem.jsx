import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const FilmItem = () => {
  const [film, setFilm] = useState([]);
  const [genres, setGenres] = useState([]);

  console.log(film);
  const { kinoID } = useParams();

  const location = useLocation();
  const linkBackLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function detailsFilm() {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmZhMGNmNDU5MDk1ZmY4MjI4MTQwNzRjZThhNzI1ZiIsInN1YiI6IjY1N2Y1N2ViNjdiNjEzMDU1MjhjODE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K9tYv4W2usSl9nJR0P-Aa5-DrVa1ZLviMJNryhZEts4',
        },
      };

      await fetch(
        `https://api.themoviedb.org/3/movie/${kinoID}?language=en-US`,
        options
      )
        .then(response => response.json())
        .then(response => setFilm(response))
        .catch(err => console.error(err));
    }
    detailsFilm();
  }, [kinoID]);

  return (
    <div>
      <div>
        <Link to={linkBackLocation.current}>Back</Link>
      </div>

      {film && (
        <img
          src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
          alt=""
        />
      )}
      <h2>{film.title}</h2>
      <p>User score</p>
      <h2>Owerview</h2>
      <p>{film.overview}</p>
      <h3>Genres ?????</h3>
      <p>{}</p>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            {' '}
            <Link to="cast">Cast</Link>
          </li>
          <li>
            {' '}
            <Link to="rewievs">Reviwes</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default FilmItem;
