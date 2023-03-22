import React from 'react'
import './about.css'
import ME from '../../Asserts/p11.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me_image'>
            <img src={ME} alt="About_image" />
          </div>
        </div>

        <div className='about_content'>
          <p>
            An aspiring Full stack developer with background knowledge of MERN stacks . I thrive on
            challenge and constantly set goals for myself, so I
            have something to strive towards. I am always
            looking for an opportunity to do better and
            achieve greatness. I build websites using HTML, CSS, JavaScript, and other frameworks and libraries.
          </p>
          <h3>Here are a Few Highlights:</h3>
          <ul>
            <li>Full Stack web and mobile development</li>
            <li>Interactive Front End as per the design</li>
            <li>React</li>
            <li>Building REST API</li>
            <li>Managing database</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About;

