import './intro.css'
import 'bootstrap/dist/css/bootstrap.css'

import React, { useEffect, useState } from 'react'

import { Link } from 'react-scroll'
import Logo from './Logo'
import Navbar from './Navbar'

const Intro = () => {
  const [bio, setBio] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/sparrowestes')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  const setData = ({ bio }) => {
    setBio(bio)
  }

  return (
    <div className='intro-container'>
      <div className='i-alt'>
        <div className='i-bg-alt'></div>
      </div>

      <div className='i-left'>
        <div className='navbar-container'>
          <Navbar />
        </div>
        <div className='i-left-wrapper'>
          <h1 className='i-name'>Sparrow Estes</h1>
          <div className='i-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-logo'>
                <Logo />
              </div>
              <div className='p'>
                {bio} ready to create high-engaging content and features that
                users find interesting, interactive, and reliable by bringing
                good mastery of HTML, CSS, JavaScript, and Java, as well as a
                robust ability to execute and complete web-based projects.
              </div>
              <div className='btn-container'>
                <button type='button' className='btn btn-outline-light'>
                  <Link to='about-container' spy={true}>
                    Know more
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='i-right'>
        <div className='i-bg'></div>
      </div>
    </div>
  )
}

export default Intro
