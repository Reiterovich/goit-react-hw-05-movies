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
import { searchDetalisFilm } from '../../services/apiFun';

const FilmItem = () => {
  const [film, setFilm] = useState([]);

  const { kinoID } = useParams();

  const location = useLocation();
  const linkBackLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function detailsFilm() {
      searchDetalisFilm(kinoID)
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
          {film.poster_path !== null && (
            <Photo
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt={`${film.name}`}
              width={250}
            />
          )}
          {film.poster_path === null && (
            <Photo
              src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
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

          <h3>Genres:</h3>

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
