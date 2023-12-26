import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { custSearchFun } from '../services/custFun';

const Cast = () => {
  const { kinoID } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    custSearchFun(kinoID)
      .then(response => setCast(response.cast))
      .catch(err => console.error(err));
  }, [kinoID]);

  return (
    <div>
      <ul id="cast">
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
