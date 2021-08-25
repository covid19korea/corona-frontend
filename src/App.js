import React from 'react';
import { Route } from 'react-router';
import routes from './routes';
import GlobalStyles from './theme/GlobalStyle';
import './App.css';
import KoreaPage from './pages/KoreaPage';
import VaccinePage from './pages/VaccinePage';
import DistancePage from './pages/DistancePage';


const App = () => {
  return (
    <>
      <GlobalStyles />
      <Route component={KoreaPage} path={routes.home} exact />
      <Route component={DistancePage} path={routes.distance} exact />
      <Route component={VaccinePage} path={routes.vaccine} exact />
    </>

  );
};

export default App;

// https://secret-ocean-49799.herokuapp.com/ 를 앞에 붙여줍니다.
