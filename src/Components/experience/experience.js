import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaBriefcase} from 'react-icons/fa'



const Experience = () => {
  return (
    <section id='experience'>
        <h5>Previous Employment</h5>
      <h2>Experience</h2>
      
         
<VerticalTimeline>
        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ color: 'gray', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}
           contentArrowStyle={{ borderRight: '7px solid rgba(0,0,0,0.4) ' }}
           date='DEC 2020 - NOV 2021'
           iconStyle={{  background: 'linear-gradient(45deg, transparent, tomato, transparent)', color: '#fff' }}
           icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">SITE SUPERVISOR</h3>
          <p className="vertical-timeline-element-subtitle">JAK Designs and construction</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ color: 'gray', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}
           contentArrowStyle={{ borderRight: '7px solid  rgba(0,0,0,0.4' }}
           date="DEC 2021 - JUN 2022"
           iconStyle={{ background: 'linear-gradient(45deg, transparent, tomato, transparent)', color: '#fff' }}
           icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">SITE ENGINEER</h3>
          <h4 className="vertical-timeline-element-subtitle">Mohan Builders</h4>
        </VerticalTimelineElement>
      
        
     </VerticalTimeline>
      </section >
  )
}

export default Experience