import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LayoutHeader from './LayoutHeader/LayoutHeader';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutHeader />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<div>Movies</div>} />
          <Route path="/movies:id" element={<div>Movies:ID</div>}>
            <Route path="cast" element={<div>Cast</div>}></Route>
            <Route path="rewiews" element={<div>Rewiews</div>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
