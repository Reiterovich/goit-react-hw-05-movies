import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import Home from 'pages/Home';
// import Movies from '../../pages/Movies';
// import FilmItem from '../../pages/FilmItem/filmItem';

import { Container, List, ListItem } from './App.styled.components';

const Cast = lazy(() => import('../Cast'));
const Reviwes = lazy(() => import('../Reviwes'));
const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const FilmItem = lazy(() => import('../../pages/FilmItem/filmItem'));

const App = () => {
  return (
    <div>
      <Container>
        <List>
          <ListItem>
            <NavLink to="/">Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/movies">Movies</NavLink>
          </ListItem>
        </List>
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:kinoID" element={<FilmItem />}>
            <Route path="cast" element={<Cast />} />
            <Route path="rewievs" element={<Reviwes />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
