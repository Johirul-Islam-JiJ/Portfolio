import React from 'react'
import './about.css'
import ME from '../../assets/side.png'
import {FaAward} from 'react-icons/fa'
import {FaProjectDiagram} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'


const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="About my image" />
          </div>
        </div>

        <div className='about_content'>

          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ years Working</small>

            </article>

            <article className='about_card'>
              <FaProjectDiagram className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Clients</small>

            </article>

            <article className='about_card'>
              <BsFillPeopleFill className='about_icon'/>
              <h5>Project</h5>
              <small>20+ Project</small>

            </article>

          </div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Exercitationem minima quod ab quo odit ad, 
          omnis nam alias quia expedita enim modi cumque facilis natus pariatur nostrum harum voluptatibus vero molestias 
          eos tempora sunt? Quam velit earum porro repudiandae quaerat dolor aut inventore maiores, 
          vel cum suscipit delectus magnam nostrum!

        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>



    </section>
  )
}

export default about