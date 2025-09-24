import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import Reservations from '../pages/ReservationPage';





function Main() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/reservations/*' element={< Reservations />} />
      </Routes>
    </main>
  );
}

export default Main;
