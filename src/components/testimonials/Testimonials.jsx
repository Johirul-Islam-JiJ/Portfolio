import React from 'react'
import './testimonials.css'
import avater1 from '../../assets/avater.png'
import avater2 from '../../assets/avater.png'
import avater3 from '../../assets/avater.png'
import avater4 from '../../assets/avater.png'

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h1>Testimonials</h1>

      <div className='container testimonials_container'>
        <article className='testimonial'>
          <div className='client_avater'>
            <img src={avater1} alt="Avater one" />
            <h5 className='client_name'>Afzal Hossain</h5>
            <small className='client_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
             minima reiciendis. Numquam veniam repudiandae itaque iusto nobis exercitationem animi sit doloribus 
             aliquam tempora quos non delectus minus expedita eius sunt nisi quibusdam,
             aspernatur molestias officia. Magnam dicta voluptatem distinctio totam?</small>
          </div>
        </article>
        <article className='testimonial'>
          <div className='client_avater'>
            <img src={avater2} alt="Avater one" />
            <h5 className='client_name'>Afzal Hossain</h5>
            <small className='client_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
             minima reiciendis. Numquam veniam repudiandae itaque iusto nobis exercitationem animi sit doloribus 
             aliquam tempora quos non delectus minus expedita eius sunt nisi quibusdam,
             aspernatur molestias officia. Magnam dicta voluptatem distinctio totam?</small>
          </div>
        </article>
        <article className='testimonial'>
          <div className='client_avater'>
            <img src={avater3} alt="Avater one" />
            <h5 className='client_name'>Afzal Hossain</h5>
            <small className='client_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
             minima reiciendis. Numquam veniam repudiandae itaque iusto nobis exercitationem animi sit doloribus 
             aliquam tempora quos non delectus minus expedita eius sunt nisi quibusdam,
             aspernatur molestias officia. Magnam dicta voluptatem distinctio totam?</small>
          </div>
        </article>
        <article className='testimonial'>
          <div className='client_avater'>
            <img src={avater4} alt="Avater one" />
            <h5 className='client_name'>Afzal Hossain</h5>
            <small className='client_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
             minima reiciendis. Numquam veniam repudiandae itaque iusto nobis exercitationem animi sit doloribus 
             aliquam tempora quos non delectus minus expedita eius sunt nisi quibusdam,
             aspernatur molestias officia. Magnam dicta voluptatem distinctio totam?</small>
             
          </div>
        </article>
      </div>
    </section>
  )
}

export default testimonials
