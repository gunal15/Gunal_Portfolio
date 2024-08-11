import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'
//import { FaCss3Alt, FaHtml5, FaJava } from 'react-icons/fa'

const Skills = () => {
  return (
    <section id='skills'>
      <h2>My Skills</h2>

      <div className='container skills_container'>
        <div className='skills_frontend'>
          <h3>Frontend</h3>
          <div className='skills_content'>
             <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon' />
               <div>
                 <h4>React Js</h4>
               </div>
             </article>
             <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon'/>
               <div>
                 <h4>Next Js</h4>
               </div>
             </article>
             <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon'/>
               <div>
                 <h4>Material UI</h4>
               </div>
             </article>
             
             // <article className='skills_details'>
             //   <BsPatchCheckFill className='skills_details_icon'/>
             //   <div>
             //     <h4>React JS</h4>
             //   </div>
             // </article>
          </div>
        </div>
        <div className='skills_backend'>
          <h3>Backend</h3>
          <div className='skills_content'>
             <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon'/>
               <div>
                 <h4>Node JS</h4>
               </div>
             </article>
             <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon'/>
               <div>
                 <h4>MongoDB</h4>
               </div>
             </article>
             <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon'/>
               <div>
                 <h4>Postgres Sql</h4>
               </div>
             </article>
             // <article className='skills_details'>
             //   <BsPatchCheckFill className='skills_details_icon'/>
             //   <div>
             //     <h4>Express Js</h4>
             //   </div>
             // </article>
          </div>
        </div>
        <div className='skills_backend'>
          <h3>Other Skills</h3>
          <div className='skills_content'>
          <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon'/>
               <div>
                 <h4>Bootstrap</h4>
                </div>
             </article>
             <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon'/>
               <div>
                 <h4>AWS</h4>
               </div>
             </article>
             <article className='skills_details'>
               <BsPatchCheckFill className='skills_details_icon'/>
               <div>
                 <h4>Python</h4>
               </div>
             </article>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

