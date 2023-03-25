import React from 'react'
import github from '../image/githubwhite.png'
import link from '../image/externallink.png'

const Project = (props) => {
  return (
      <a className="project-card" href={props.externallink} target='_blank'>
          <img src={props.image} alt={props.alt} className='img-card' />
            <div className="detail-card">
              <div className="title">
                  <p>{props.title}</p>
                <div className="icons-card">
                      <a href={props.github} target='_blank'><img src={github} alt="github"/></a>
                      <a href={props.externallink} target='_blank'><img src={link} alt="link"/></a>
                  </div>
              </div>
              <div className="tools">
                  {props.tool1}
                  {props.tool2}
                  {props.tool3}
                  {props.tool4}
              </div>
              <p className='detail-project'>{props.detail}</p>
            </div>
          </a>
  )
}

export default Project
