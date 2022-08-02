import Carousel from './home/Carousel';
import FeaturedItems from './home/FeaturedItems';
import Sponsors from './home/Sponsors';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Sponsors />
      <FeaturedItems />
    </div>
  );
};

export default Home;
