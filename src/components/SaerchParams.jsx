// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchParam, setSearchParam] = useState('');
  // const search = searchParams.get('search') ?? '';
  const search = searchParams.get('search');

  const hendleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ search: searchParam });
    setSearchParam('');
  };

  useEffect(() => {
    if (search == '') {
      setSearchParams();
      return;
    }
  }, [search]);

  return (
    <div>
      <form onSubmit={hendleSubmit}>
        <input
          onChange={e => setSearchParam(e.target.value)}
          value={searchParam}
          type="text"
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchParams;
