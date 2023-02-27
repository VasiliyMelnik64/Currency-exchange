import { Routes, Route } from 'react-router';
import { lazy } from 'react';
import { Header } from '../shared/ui/complex/header';

const HomePage = lazy(() => import('./ui/home-page'));
const HistoryPage = lazy(() => import('./ui/history-page'));

export const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/history' element={<HistoryPage />} />
      </Routes>
    </>
  );
};
