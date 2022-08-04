import classNames from 'classnames';
import styles from 'assets/styles/pages/home/sponsors.module.scss';

// Partials & Utils
import SectionTitle from 'partials/SectionTitle';
import technologies from 'utils/jsons/technologies.json';

// Import swiper
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Sponsors = () => {
  return (
    <section className={classNames(styles.sponsors)}>
      <SectionTitle title="Technologies we are" highlightedText="adept in" />
      <div>
        <Swiper
          modules={[Autoplay]}
          centeredSlides={true}
          spaceBetween={50}
          loop={true}
          autoplay={{ delay: 1500 }}
          className="swiperCustomWrap"
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 8,
            },
            1400: {
              slidesPerView: 10,
            },
          }}
        >
          {technologies.map((technology) => {
            return (
              <SwiperSlide key={technology.id}>
                <img
                  src={technology.url}
                  alt={technology.title}
                  className={classNames(styles.technologyImage)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Sponsors;
