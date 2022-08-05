import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import store, { persistor } from '../../store/store';
import NavigationComponent from '../../components/navigation-component/NavigationComponent';
import HomePage from '../home-page/HomePage';
import { routes } from '../../utils/routes';
import AboutPage from '../about-page/AboutPage';
import WorkoutsPage from '../workouts-page/WorkoutsPage';
import PricingPage from '../pricing-page/PricingPage';
import CommunityPage from '../community-page/CommunityPage';
import FaqPage from '../faq-page/FaqPage';
import LoginPage from '../login-page/LoginPage';
import RegistrationPage from '../registration-page/RegistrationPage';
import NavigationMenuComponent from '../../components/navigation-component/navigation-menu/NavigationMenuComponent';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRoutes: React.FC = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <PersistGate persistor={persistor} loading={null} />
      <Router>
        <ScrollToTop />
        <NavigationComponent />
        <Routes>
          <Route path={routes.HOME_ROUTE} element={<HomePage />} />
          <Route path={routes.ABOUT_ROUTE} element={<AboutPage />} />
          <Route path={routes.WORKOUTS_ROUTE} element={<WorkoutsPage />} />
          <Route path={routes.PRICING_ROUTE} element={<PricingPage />} />
          <Route path={routes.COMMUNITY_ROUTE} element={<CommunityPage />} />
          <Route path={routes.FAQ_ROUTE} element={<FaqPage />} />
          <Route path={routes.LOGIN_ROUTE} element={<LoginPage />} />
          <Route path={routes.SIGN_UP_ROUTE} element={<RegistrationPage />} />
          <Route
            path={routes.MENU_ROUTE}
            element={<NavigationMenuComponent />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default AppRoutes;
