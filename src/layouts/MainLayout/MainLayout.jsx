import Header from 'components/Header';
import Loader from 'components/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback = {<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainLayout;
