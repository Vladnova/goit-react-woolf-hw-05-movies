
import { Route, Routes } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import { lazy } from 'react';

const Home = lazy(()=>import('../pages/Home'));
const Movies = lazy(()=>import('../pages/Movies'))
const MovieDetails = lazy(()=>import('../pages/MovieDetails'));
const Cast = lazy(()=>import('./Cast'));
const Reviews = lazy(()=>import('./Reviews'));


export const App = () => {


  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path='/movies/:movieId' element={<MovieDetails/>}>
          <Route path='/movies/:movieId/cast' element={<Cast/>}/>
          <Route path='/movies/:movieId/reviews' element={<Reviews/>}/>
        </Route>
      </Route>
    </Routes>
  );
};
