import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  ButtonBack,
  Container,
  Photo,
  MainContainer,
  InformatoinContainer,
} from './filmItem.styled.components';

const FilmItem = () => {
  const [film, setFilm] = useState([]);

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
    <MainContainer>
      <Link to={linkBackLocation.current}>
        <ButtonBack>Back</ButtonBack>
      </Link>
      <Container>
        <div>
          {film && (
            <Photo
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt={`${film.name}`}
              width={250}
            />
          )}
        </div>

        <InformatoinContainer>
          <h2>{film.title}</h2>
          <p>User score - {`${film.vote_average}`}</p>
          <h2>Owerview</h2>
          <p>{film.overview}</p>

          <h3> Ganeres:</h3>

          <ul>
            {film.genres &&
              film.genres.map(fil => <li key={fil.id}>{fil.name}</li>)}
          </ul>
        </InformatoinContainer>
      </Container>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="rewievs">Reviwes</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default FilmItem;
