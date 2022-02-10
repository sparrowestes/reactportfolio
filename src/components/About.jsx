import './about.css'

import React, { useEffect, useState } from 'react'

const About = () => {
  const [hireable, setHireable] = useState('')
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/sparrowestes')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  const setData = ({ hireable, avatar_url }) => {
    setHireable(hireable)
    setAvatar(avatar_url)
  }

  return (
    <>
      <div className='about-container'>
        <div className='a-left'>
          <div className='text'>
            <h2>Hello! I'm Sparrow.</h2>
            <p>
              I was a graphic designer for over 10 years. In early 2020, I began
              taking HTML and CSS courses on Free Code Camp. Later in the year,
              I attended a full stack-web development bootcamp where I learned
              Javascript, Nodejs, and React.
              <br></br>
              <br></br>I landed my first software development job in early 2021
              where I worked primarily with Java, Spring Boot, and Javascript.
              There I headed an Angularjs to React migration in an effort to
              eliminate tech debt.
              <br></br>
              <br></br>At the start of 2022, I began a fast track certification
              program with Cook’s Systems in which I was able to solidify my
              skills in Java, Spring Boot, and React.
              <br></br>
              <br></br>A proud member BASE (Birmingham Area Software
              Enthusiasts), when I am not coding or learning how to code, I
              enjoy reading, exercising, and hanging out with my two cats.
              <br></br>
              <br></br>I am hireable, it's {hireable.toString()}.
            </p>
            <div className='btn-container'>
              <a
                href='https://drive.google.com/file/d/1LU-temfmvtkXM3kFNWp7ilKuASh0UukL/view?usp=sharing'
                target='_blank'
              >
                <button type='button' className='btn btn-outline-light'>
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className='a-right'>
          <img className='img' src={avatar} alt='' />
        </div>
      </div>
    </>
  )
}

export default About
