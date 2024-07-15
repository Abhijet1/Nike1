import React from 'react'
import styles from '../App.module.css'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
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
      <div className={styles.about}>
        <div className={styles.left1}>
        <h1 style={{textAlign:"center"}}>About Us</h1>
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat molestias a laboriosam! Nesciunt ab corporis voluptates dolorum tenetur tempore veritatis sed magni, consequatur facilis expedita natus saepe quas corrupti nostrum quibusdam soluta fugiat ad. Voluptatum at, atque quos voluptatem officiis deleniti ipsa error molestias perferendis corporis, veniam debitis nesciunt quas!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat molestias a laboriosam! Nesciunt.
          </h4>
        </div>
        <div className={styles.right1}>
          <img src="https://media.istockphoto.com/id/1286378180/vector/website-information-concept.jpg?s=612x612&w=0&k=20&c=6v9Hcbp0zp5itIPIywobPQF13YsHIQ4j_srF5VbQusY=" alt="" />
        </div>
      </div>

      <footer>
        <p style={{ marginTop: "5px" }}>CopyRight@2024</p>
        <div className={styles.links}>
        <section>
            <h3>Support</h3>
            <p>111, Bijoy Colony</p>
            <p>nike@support.com</p>
            <p>32123113213221</p>
            <p>Get 10% off</p>
          </section>
          <section>
            <h3>Exclusive </h3>
            <p>Subscribe</p>
            <p>Get 10% off</p>
            <p>Map</p>
          </section>
          <section>
            <h3>Support</h3>
            <p>111, Bijoy Colony</p>
            <p>nike@support.com</p>
            <p>32123113213221</p>
            <p>Get 10% off</p>
          </section>
          <section>
            <h3>Account</h3>
            <p>My Account</p>
            <p>Login/Register</p>
            <p>Cart</p>
          </section>
          <section>
            <h3>Quick Links</h3>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </section>
          <section>
            <h3>Support</h3>
            <p>111, Bijoy Colony</p>
            <p>nike@support.com</p>
            <p>32123113213221</p>
            <p>Get 10% off</p>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default About