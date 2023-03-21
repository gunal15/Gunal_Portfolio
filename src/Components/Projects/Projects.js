import React from 'react'
import './projects.css'
import {ProjectData} from './ProjectData';



const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container projects_container'>
        {
          ProjectData.map((project, i) => {
            return (
              <article key={i} className='projects_item'>
                <div className='projects_item_image'>
                  <img src={project.image} alt={project.title} />
                </div>
                <h2>{project.title}</h2>

                <h4>Made With:</h4>
                <div className='made-with'>
                {project.made.map((mad, i) => (
                <div key={i} className='made'>
                  <span>{mad}</span>
                </div>
                ))}
                </div>
                <div className='project-item-line'></div>
               <div className='projects_item_links'>
                  <a href={project.github} className='btn' target='_blank' rel="noreferrer" style={{color:"white",backgroundColor:"rgb(100, 134, 246)"}}>Github</a>
                  <a href={project.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects

