import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviwes = () => {
  const { kinoID } = useParams();
  const [reviwes, setReviwes] = useState([]);

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
      `https://api.themoviedb.org/3/movie/${kinoID}/reviews?language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => setReviwes(response.results))
      .catch(err => console.error(err));
  }, [kinoID]);

  return (
    <div>
      <ul>
        {reviwes.length === 0 && <p>There are no reviews :(</p>}
        {reviwes.length !== 0 &&
          reviwes.map(rev => (
            <div key={rev.id}>
              <li>Author: {rev.author}</li>
              <p>{rev.content}</p>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Reviwes;
