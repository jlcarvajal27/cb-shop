'use client';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import { Swiper as SwiperObject} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import { useState } from 'react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

interface Props{
    images: string[];
    title: string;
    className?:string;
}

export const ProductSlideShow = ({images, title, className}: Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className={className}>
       <Swiper
        // style={{
        //   '--swiper-navigation-color': '#fff',
        //   '--swiper-pagination-color': '#fff',
        // } as React.CSSProperties}
        spaceBetween={10}
        autoplay={
            {delay: 2000}
        }
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {
            images.map( image => (
                <SwiperSlide key={image}>
                    <Image 
                    width={700} 
                    height={500} 
                    alt={title} 
                    src={`/products/${image}`}
                    className='rounded-lg object-fill'
                    />
                </SwiperSlide>
            ))
        }
    </Swiper>

    <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
            images.map( image => (
                <SwiperSlide key={image}>
                    <Image 
                    width={300} 
                    height={300} 
                    alt={title} 
                    src={`/products/${image}`}
                    className='rounded-lg object-fill'
                    />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )
}


