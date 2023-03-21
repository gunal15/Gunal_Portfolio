import React from 'react'
import './footer.css'
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="/#"  className='footer_logo'>GUNAL</a>

     

      <div className='footer_socials'>
         <a href='https://www.instagram.com/ig_gunal.jr/' target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
         <a href='https://twitter.com/gunal_raina?t=cxTEK_gVfUzg0wnePjPiow&s=09' target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
         <a href='https://www.linkedin.com/in/gunal15/' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
         <a href='https://wa.me/9789418844' target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>

      <div className="footer_content">
          <small style={{color:"rgb(193, 220, 253 )"}}>Made with 🤍 using React</small>
      </div>
    </footer>
  )
}

export default Footer