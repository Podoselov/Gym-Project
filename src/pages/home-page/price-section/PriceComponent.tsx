import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  StyledCardWraper,
  StyledHeading,
  StyledSwiper,
  StyledWraper,
} from './StyledPriceComponent';
import { StyledSpan } from '../mission-section/StyledMissionSection';
import PriceComponentCard from './price-component/PriceComponentCard';

const PriceComponent: React.FC = () => {
  return (
    <StyledWraper>
      <StyledHeading>
        Pricing plan
        <StyledSpan>.</StyledSpan>
      </StyledHeading>
      <StyledSwiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <PriceComponentCard
            name="Basic"
            price={20}
            listItem={[
              'unlimited gym access',
              '1 training programs',
              'free fitness consultation',
            ]}
            styledBox={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PriceComponentCard
            name="Premium"
            price={35}
            listItem={[
              'unlimited gym access',
              '5 training programs',
              'free fitness consultation',
              'personal trainer',
            ]}
            styledBox
          />
        </SwiperSlide>
        <SwiperSlide>
          <PriceComponentCard
            name="Elite"
            price={49}
            listItem={[
              'free fitness consultation',
              'personal trainer',
              '50% off drinks',
            ]}
            styledBox={false}
          />
        </SwiperSlide>
      </StyledSwiper>
      <StyledCardWraper>
        <PriceComponentCard
          name="Basic"
          price={20}
          listItem={[
            'unlimited gym access',
            '1 training programs',
            'free fitness consultation',
          ]}
          styledBox={false}
        />
        <PriceComponentCard
          name="Premium"
          price={35}
          listItem={[
            'unlimited gym access',
            '5 training programs',
            'free fitness consultation',
            'personal trainer',
          ]}
          styledBox
        />
        <PriceComponentCard
          name="Elite"
          price={49}
          listItem={[
            'free fitness consultation',
            'personal trainer',
            '50% off drinks',
          ]}
          styledBox={false}
        />
      </StyledCardWraper>
    </StyledWraper>
  );
};

export default PriceComponent;
