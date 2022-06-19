import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/smile.png'
import HeaderSocial from './HeaderSocial';
var textalign ='right'
const Header = () => {
  return (
    <section>
      <div className="container.header_container">
        <h4> Hello I'm</h4>
        <h1> Johirul Islam</h1>
        <h5 className='text-light'> Frontend Developer</h5>
        <CTA />
        
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

        <HeaderSocial/>

      </div>
    </section>
  )
}

export default Header