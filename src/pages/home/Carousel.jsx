import classNames from 'classnames';
import styles from 'assets/styles/pages/home/carousel.module.scss';

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
import images from 'utils/jsons/images.json';
import Slide from 'partials/Slide';
import SectionTitle from 'partials/SectionTitle';

const Carousel = () => {
  return (
    <div>
      <SectionTitle title="This is" highlightedText="swiper" />
      <div className="arrowflex">
        <div className={classNames(styles.slider, styles.swiper)}>
          <div className={classNames(styles.cards, styles.container)}>
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
              {images.map((card) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
