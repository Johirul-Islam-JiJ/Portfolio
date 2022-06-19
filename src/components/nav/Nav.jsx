import React from 'react'
import './nav.css'
import {MdHome} from 'react-icons/md'
import {BsBookHalf} from 'react-icons/bs'
import {FaUserGraduate} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {RiContactsBook2Line} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className = {activeNav === '#' ? 'active':''}><MdHome/></a>
      <a href="#about" onClick={()=>setActiveNav('about')} className={activeNav==='about' ? 'active':''}><FaUserGraduate/></a>
      <a href="#experience" onClick={()=>setActiveNav('experience')} className={activeNav==='experience' ? 'active':''}><BsBookHalf/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('portfolio')} className={activeNav==='portfolio' ? 'active':''}><CgProfile/></a>
      <a href="#contact" onClick={()=>setActiveNav('contact')} className={activeNav==='contact' ? 'active':''}><RiContactsBook2Line/></a>
    </nav>
  )
}

export default Nav