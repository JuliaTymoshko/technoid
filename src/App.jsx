import './assets/styles/base/index.scss';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

import Header from './partials/Header';
import Footer from './partials/Footer';
import Profile from 'pages/ProfilePage';
import { AuthProvider } from 'utils/context/AuthProvider';
import { useAuth } from 'utils/hooks/useAuth';
import Bonus from 'pages/BonusPage';

const Gallery = lazy(() => import('pages/GalleryPage'));
const Home = lazy(() => import('./pages/HomePage'));

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/profile" state={{ from: location }} replace />;
  }

  return children;
}

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
