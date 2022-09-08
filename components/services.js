import Image from 'next/image';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

const content = [
  {
    src: '/checklist.svg',
    title: 'WEBSITE AUDITS',
    text: 'Looking to improve your page performance, SEO, or user experience? Request a free site audit.',
  },
  {
    src: '/pencil.svg',
    title: 'CONTENT MANAGEMENT',
    text: 'Custom WordPress theme and plugin development. Easily update content without knowing how to code.',
  },
  {
    src: '/mobile.svg',
    title: 'MOBILE FRIENDLY',
    text: 'A responsive design makes your website accessible to all users, regardless of their device.',
  },
  {
    src: '/ecommerce.svg',
    title: 'ECOMMERCE',
    text: 'Integration of eCommerce platforms, payment gateways, custom product templates, and more.',
  },
  {
    src: '/stack.svg',
    title: 'DESIGN + DEVELOPMENT',
    text: 'Clean, modern designs - optimized for performance, search engines, and converting users to customers.',
  },
  {
    src: '/analytics.svg',
    title: 'ANALYTICS',
    text: 'Get insights into who is browsing your site so that you can make smarter business decisions.',
  },
];

const Services = () => {
  return (
    <section id='services'>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className='mySwiper'
      >
        {content.map((item) => {
          return (
            <SwiperSlide>
              <li className='w-[300px] m-auto h-[400px] flex items-center justify-center flex-col text-center space-y-4'>
                <Image
                  src={item.src}
                  width={'64px'}
                  height={'64px'}
                  alt={item.title}
                />
                <h2 className='text-xl font-semibold'>{item.title}</h2>
                <p>{item.text}</p>
              </li>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Services;
