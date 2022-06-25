import React from 'react'
import './testimonials.css'
import avt1 from '../../assets/avater.png'
import avt2 from '../../assets/avater.png'
import avt3 from '../../assets/avater.png'
import avt4 from '../../assets/avater.png'


const data = [

  {
    avatar:avt1,
    name:'Johirul Islam',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,minima reiciendis. Numquam veniam repudiandae itaque iusto nobis exercitationem animi sit doloribus aliquam tempora quos non delectus minus expedita eius sunt nisi quibusdam,aspernatur molestias officia. Magnam dicta voluptatem distinctio totam? '
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
      <h1>Testimonials</h1>

      <div className='container testimonials_container'>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <article key={index} className='testimonial'>
          <div className='client_avater'>
            <img src={avatar} />
          </div>
          <h5 className='client_name'>{name}</h5>
          <small className='client_review'>{review}</small>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default testimonials
