import classNames from 'classnames';
import styles from 'assets/styles/pages/home/carousel.module.scss';

// ! Import swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// ! Import styles for swiper
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

//
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
              className="placesSwiper"
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              navigation={{
                nextEl: '.review-swiper-button-next',
                prevEl: '.review-swiper-button-prev',
              }}
            >
              {images.map((card) => {
                return (
                  <SwiperSlide key={card.id}>
                    <Slide
                      title={card.title}
                      description={card.description}
                      btnText={card.btnText}
                      url={card.url}
                    />
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
