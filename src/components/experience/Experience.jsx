import React from 'react'
import './experience.css'
import {RiCheckboxMultipleFill} from 'react-icons/ri'

const experience = () => {
  return (
    <section id='experience'>

      <h5> Skill i have achieved</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Fronend Development</h3>
          <div className='experience_content'>

            <article className='experience_details'>
              <RiCheckboxMultipleFill className='experience_detals-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <RiCheckboxMultipleFill className='experience_detals-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <RiCheckboxMultipleFill className='experience_detals-icon'/>
              <div>
                <h4>Java Script</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <RiCheckboxMultipleFill className='experience_detals-icon'/>
              <div>
                <h4>Bootsrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <RiCheckboxMultipleFill className='experience_detals-icon'/>
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <RiCheckboxMultipleFill className='experience_detals-icon'/>
              <div>
                <h4>Tainwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>


          </div>

        </div>

        <div className='experience_Backend'>

          {/*=============== End Of Front================= 
          ===================Backend Start================ */}

        <h3>Backend Development</h3>
          <div className='experience_content'>

            <article className='experience_details'>
              <RiCheckboxMultipleFill className='experience_detals-icon'/>
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <RiCheckboxMultipleFill className='experience_detals-icon'/>
              <div>
                <h4>django</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <RiCheckboxMultipleFill className='experience_detals-icon'/>
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <RiCheckboxMultipleFill className='experience_detals-icon'/>
              <div>
                <h4>My SQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <RiCheckboxMultipleFill className='experience_detals-icon'/>
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>


          </div>

        </div>

        
        {/* <div className='experience_backend'>

        </div> */}

      </div>



    </section>
  )
}

export default experience