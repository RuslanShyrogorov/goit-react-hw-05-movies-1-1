import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LayoutHeader from './LayoutHeader/LayoutHeader';
import MovieInfo from './MovieInfo/MovieInfo';
import SearchMovie from './SearchMovie/SearchMovie';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutHeader />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<SearchMovie />} />
          <Route path="/movies:id" element={<MovieInfo />}>
            <Route path="cast" element={<div>Cast</div>}></Route>
            <Route path="rewiews" element={<div>Rewiews</div>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
