import './navbar.css'

import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link'>
              <Link to='about-container' spy={true}>
                About
              </Link>
            </a>
          </li>
          <li className='nav-item'>
            <div className='nav-link nav-line'>|</div>
          </li>
          <li className='nav-item'>
            <a className='nav-link'>
              <Link to='project-container' spy={true}>
                Projects
              </Link>
            </a>
          </li>
          <li className='nav-item'>
            <div className='nav-link nav-line'>|</div>
          </li>
          <li className='nav-item'>
            <a className='nav-link'>
              <Link to='contact-container' spy={true}>
                Contact
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
