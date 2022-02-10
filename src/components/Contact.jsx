import './contact.css'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-scroll'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='contact-container '>
      <div className='c-left'>
        <div className='c-bg-left'></div>
      </div>

      <div className='c-center'>
        <h1>Contact</h1>
        <h5 className='text'>Would you like to work with me? Awesome!</h5>
        <a href='mailto: sparrowestes@gmail.com' target='_blank'>
          <button type='button' className='btn btn-outline-light'>
            Let's talk
          </button>
        </a>
        <div className='social-icons'>
          <div className='linkedin'>
            <a
              href='https://www.linkedin.com/in/sparrow-estes/'
              target='_blank'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className='github'>
            <a href='https://github.com/sparrowestes' target='_blank'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className='arrow'>
          <Link to='intro-container' spy={true}>
            <FontAwesomeIcon icon={faArrowUp} />
          </Link>
        </div>
        <sub>Back to top</sub>
      </div>
      <div className='c-right'>
        <div className='c-bg-right'></div>
      </div>
    </div>
  )
}

export default Contact
