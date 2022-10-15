import { Route, Routes } from 'react-router-dom';
import LayoutHeader from './LayoutHeader/LayoutHeader';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieInfoPage from 'pages/MovieInfoPage';
import CastPage from 'pages/CastPage';
import ReviewsPage from 'pages/ReviewsPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutHeader />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieInfoPage />}>
            <Route path="cast" element={<CastPage />}></Route>
            <Route path="reviews" element={<ReviewsPage />}></Route>
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
};
