// import axios from 'axios';
// import { API_KEY } from 'components/ApiKey';
// import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const [film, setFilm] = useState([]);

  // const { kinoID } = useParams();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmZhMGNmNDU5MDk1ZmY4MjI4MTQwNzRjZThhNzI1ZiIsInN1YiI6IjY1N2Y1N2ViNjdiNjEzMDU1MjhjODE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K9tYv4W2usSl9nJR0P-Aa5-DrVa1ZLviMJNryhZEts4',
      },
    };

    fetch(
      'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
      options
    )
      .then(response => response.json())
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
              <Link to={`movies/${fil.id}`}>{fil.title}</Link>
            </li>
          ))}{' '}
      </ul>
    </div>
  );
};

export default Home;
