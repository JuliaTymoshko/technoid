import './assets/styles/base/index.scss';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from 'utils/context/AuthProvider';

import LinearProgress from '@mui/material/LinearProgress';

// Components
import Header from './partials/Header';
import Footer from './partials/Footer';
import Profile from 'pages/ProfilePage';
import { RequireAuth } from 'utils/context/RequireAuth';

// Lazy Components
const Gallery = lazy(() => import('pages/GalleryPage'));
const Home = lazy(() => import('./pages/HomePage'));
const Bonus = lazy(() => import('./pages/BonusPage'));

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <div className="container">
          <Suspense fallback={<LinearProgress color="warning" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route
                path="/bonus"
                element={
                  <RequireAuth>
                    <Bonus />
                  </RequireAuth>
                }
              />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
