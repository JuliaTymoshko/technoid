import Carousel from './home/Carousel';
import FeaturedItems from './home/FeaturedItems';
import GetInTouch from './home/GetInTouch';
import Sponsors from './home/Sponsors';

const Home = () => {
  return (
    <div>
      {/* <Carousel /> */}
      <Sponsors />
      <FeaturedItems />
      <GetInTouch />
    </div>
  );
};

export default Home;
