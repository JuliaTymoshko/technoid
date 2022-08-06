import { useEffect, useState } from 'react';

// ! Import swiper
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
  Lazy,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// ! Import styles for swiper
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';
import 'swiper/scss/lazy';
import Slide from 'partials/Slide';
import SectionTitle from 'partials/SectionTitle';
import { getDataFromJSONserver } from 'utils/fetching/getData';

const Carousel = () => {
  const [swiperCards, setSwiperCards] = useState([]);

  const loadResult = async () => {
    const result = await getDataFromJSONserver('swipercards');
    setSwiperCards(result);
  };

  useEffect(() => {
    loadResult();
  }, []);

  return (
    <section>
      <SectionTitle title="This is" highlightedText="swiper" />

      <Swiper
        className="customSwiperWrap"
        lazy={true}
        effect={'fade'}
        slidesPerView={1}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          Autoplay,
          Lazy,
          EffectFade,
        ]}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation={true}
        autoplay={{ delay: 2000 }}
      >
        {swiperCards.map((card) => {
          return (
            <SwiperSlide key={card.id}>
              <Slide
                title={card.title}
                description={card.description}
                btnText={card.btnText}
                url={card.url}
                lazyClassForImage="swiper-lazy"
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Carousel;
