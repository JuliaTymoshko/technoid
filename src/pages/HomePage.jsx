import Carousel from './home/Carousel';
import Sponsors from './home/Sponsors';
import FeaturedItems from './home/FeaturedItems';
import GetInTouch from './home/GetInTouch';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Sponsors />
      <FeaturedItems />
      <GetInTouch />
    </div>
  );
};

export default Home;
