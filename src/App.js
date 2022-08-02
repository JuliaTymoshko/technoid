import Header from './partials/Header';
import './assets/styles/base/index.scss';
import Footer from './partials/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
};

export default App;
