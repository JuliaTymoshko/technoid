import './assets/styles/base/index.scss';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

import Header from './partials/Header';
import Footer from './partials/Footer';
import Profile from 'pages/Profile';
import { AuthProvider } from 'utils/context/AuthProvider';
import { useAuth } from 'utils/hooks/useAuth';

const Gallery = lazy(() => import('pages/Gallery'));
const Home = lazy(() => import('./pages/Home'));

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/" state={{ from: location }} replace />;
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
              {/* <Route
                path="/gallery"
                element={
                  <RequireAuth>
                    <Gallery />
                  </RequireAuth>
                }
              /> */}
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
