import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>My Resume</a>
        <a href="#contact" className='btn btn-primary'>Talk With Me</a>       
    </div>
  )
}

export default CTA