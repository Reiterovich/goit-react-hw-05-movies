import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { kinoID } = useParams();
  const [cast, setCast] = useState([]);

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
      `https://api.themoviedb.org/3/movie/${kinoID}/credits?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => setCast(response.cast))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <ul>
        {cast.length !== 0 &&
          cast.map(cas => (
            <div key={cas.id}>
              <li>{cas.name}</li>
              <p>{cas.character}</p>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
