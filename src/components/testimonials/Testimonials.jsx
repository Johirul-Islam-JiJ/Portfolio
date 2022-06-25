import React from 'react'
import './testimonials.css'
import avt1 from '../../assets/avater.png'
import avt2 from '../../assets/avater.png'
import avt3 from '../../assets/avater.png'
import avt4 from '../../assets/avater.png'

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [

  {
    avatar:avt1,
    name:'Johirul Islam',
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,minima reiciendis. Numquam veniam  repudiandae itaque iusto nobis exercitationem animi sit doloribus aliquam tempora quos non delectus minus expedita eius sunt nisi quibusdam,aspernatur molestias officia. Magnam dicta voluptatem distinctio totam? "
  },
  {
    avatar:avt2,
    name:'Taye Kayesh',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,minima reiciendis. Numquam veniam repudiandae itaque iusto nobis exercitationem animi sit doloribus aliquam tempora quos non delectus minus expedita eius sunt nisi quibusdam,aspernatur molestias officia. Magnam dicta voluptatem distinctio totam? '
  },
  {
    avatar:avt3,
    name:'Surove Sultana',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,minima reiciendis. Numquam veniam repudiandae itaque iusto nobis exercitationem animi sit doloribus aliquam tempora quos non delectus minus expedita eius sunt nisi quibusdam,aspernatur molestias officia. Magnam dicta voluptatem distinctio totam? '
  },
  {
    avatar:avt4,
    name:'Afzal Hossen',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,minima reiciendis. Numquam veniam repudiandae itaque iusto nobis exercitationem animi sit doloribus aliquam tempora quos non delectus minus expedita eius sunt nisi quibusdam,aspernatur molestias officia. Magnam dicta voluptatem distinctio totam? '
  }
]


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container' 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
          <div className='client_avater'>
            <img src={avatar} />
          </div>
          <h5 className='client_name'>{name}</h5>
          <small className='client_review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials
