import React from 'react'
import './nav.css'
import {GrHomeRounded} from 'react-icons/gr'
import {BsBookHalf} from 'react-icons/bs'
import {FaUserGraduate} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {RiContactsBook2Line} from 'react-icons/ri'

const nav = () => {
  return (
    <nav>
      <a href="#"><GrHomeRounded/></a>
      <a href="#about"><FaUserGraduate/></a>
      <a href="#experience"><BsBookHalf/></a>
      <a href="#portfolio"><CgProfile/></a>
      <a href="#contact"><RiContactsBook2Line/></a>
    </nav>
  )
}

export default nav