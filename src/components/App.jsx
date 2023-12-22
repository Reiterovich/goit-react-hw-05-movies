import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Home from 'pages/Home';
import Movies from '../pages/Movies';
import FilmItem from './filmItem';
// import Cast from './Cast';
// import Reviwes from './Reviwes';

// const Home = lazy(() => import('pages/Home'));
// const Movies = lazy(() => import('../pages/Movies'));
// const FilmItem = lazy(() => import('./filmItem'));
const Cast = lazy(() => import('./Cast'));
const Reviwes = lazy(() => import('./Reviwes'));

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:kinoID" element={<FilmItem />}>
          <Route path="cast" element={<Cast />} />
          <Route path="rewievs" element={<Reviwes />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
