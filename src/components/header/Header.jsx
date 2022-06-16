import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/myself.jpg'
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className="container.header_container">
        <h5> Hello I'm</h5>
        <h1> Johirul Islam</h1>
        <h5 className='text-light'> Frontend Developer</h5>
        <CTA />
        
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

        <HeaderSocial/>

      </div>
    </header>
  )
}

export default Header