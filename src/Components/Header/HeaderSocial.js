import React from 'react'
import {HiMail} from 'react-icons/hi'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
       <a href='https://github.com/gunal15' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
       <a href='mailto:gunalnandakumar@gmail.com' rel="noopener noreferrer" ><HiMail /></a>
       
    </div>
  )
}

export default HeaderSocial