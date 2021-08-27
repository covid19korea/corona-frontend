import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import DistancePage from '../pages/DistancePage';
import KoreaPage from '../pages/KoreaPage';
import NoMatchPage from '../pages/NoMatch';
import VaccinePage from '../pages/VaccinePage';
import GlobalStyles from '../theme/GlobalStyle';

const RootRoute = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Switch>
                <Route component={KoreaPage} path='/' exact />
                <Route component={DistancePage} path='/distance' exact />
                <Route component={VaccinePage} path='/vaccine' exact />

                {/* 경료가 유효하지 않을 때 */}
                <Route component={NoMatchPage} path='*' />
            </Switch>
        </BrowserRouter>
    );
};

export default RootRoute;