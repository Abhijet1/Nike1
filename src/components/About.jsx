import React from 'react'
import styles from '../App.module.css'

const About = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src="./nike.png" alt="" />
        </div>
        <div className={styles.list}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="about">About</a></li>
            <li><a href="reviews">Reviews</a></li>
          </ul>
        </div>
        <div className={styles.btn}>

          <button onClick={() => { navigate(`/login`) }}>Login</button>
          <button onClick={() => { navigate(`/signup`) }}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default About