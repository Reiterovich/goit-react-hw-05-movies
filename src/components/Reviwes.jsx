import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reviwesFun } from '../services/reviwesFun';

const Reviwes = () => {
  const { kinoID } = useParams();
  const [reviwes, setReviwes] = useState([]);

  useEffect(() => {
    reviwesFun(kinoID)
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
