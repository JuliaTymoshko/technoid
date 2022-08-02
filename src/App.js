import './assets/styles/base/index.scss';
import { Route, Routes } from 'react-router-dom';

import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './pages/Home';
import Gallery from 'pages/Gallery';
import Profile from 'pages/Profile';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
