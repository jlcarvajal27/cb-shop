'use client';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import { Autoplay, FreeMode, Pagination} from 'swiper/modules';
import Image from 'next/image';

interface Props{
    images: string[];
    title: string;
    className?:string;
}

export const ProductMobileSlideShow = ({images, title, className}: Props) => {
  return (
    <div className={className}>
       <Swiper
       style={{
        height: '500px',
        width: '100vh'
      }}
      pagination
        autoplay={
            {delay: 2000}
        }
        modules={[FreeMode,Pagination, Autoplay]}
        className="mySwiper2"
      >
        {
            images.map( image => (
                <SwiperSlide key={image}>
                    <Image 
                    width={500} 
                    height={400} 
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


