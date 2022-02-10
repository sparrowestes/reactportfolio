import './portfolio.css'

import React from 'react'
import project1 from '../img/project1.jpg'
import project2 from '../img/project2.jpg'
import project3 from '../img/project3.jpg'

const Portfolio = () => {
  return (
    <div className='project-container'>
      <h1>Projects</h1>
      <div className='card-deck'>
        <div className='card'>
          <img className='card-img-top' src={project1} alt='Card image cap' />
          <div className='card-body'>
            <h5 className='card-title'>Netflix Clone</h5>
            <p className='card-text'>
              Clone of Netflix app built using React Hooks and TMDB API.
            </p>
            <a
              href='https://netflixclonebysparrow.netlify.app/'
              target='_blank'
            >
              <button type='button' className='btn btn-outline-light'>
                See live
              </button>
            </a>
            <a
              href='https://github.com/sparrowestes/netflix-clone'
              target='_blank'
            >
              <button type='button' className='btn btn-outline-light'>
                See code
              </button>
            </a>
          </div>
        </div>
        <div className='card'>
          <img className='card-img-top' src={project2} alt='Card image cap' />
          <div className='card-body'>
            <h5 className='card-title'>Task Manager App</h5>
            <p className='card-text'>
              Task Manager App built with React Hooks and Context API.
            </p>
            <a
              href='https://taskmanagerappbysparrow.netlify.app/'
              target='_blank'
            >
              <button type='button' className='btn btn-outline-light'>
                See live
              </button>
            </a>
            <a
              href='https://github.com/sparrowestes/task-manager'
              target='_blank'
            >
              <button type='button' className='btn btn-outline-light'>
                See code
              </button>
            </a>
          </div>
        </div>
        <div className='card'>
          <img className='card-img-top' src={project3} alt='Card image cap' />
          <div className='card-body'>
            <h5 className='card-title'>Responsive Website</h5>
            <p className='card-text'>
              Responsive website built using HTML and CSS.
            </p>
            <a
              href='https://responsivewebsitebysparrow.netlify.app/'
              target='_blank'
            >
              <button type='button' className='btn btn-outline-light'>
                See live
              </button>
            </a>
            <a
              href='https://github.com/sparrowestes/responsive-website'
              target='_blank'
            >
              <button type='button' className='btn btn-outline-light'>
                See code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
