import React from 'react'
import styles from '../App.module.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); 
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
          <div style={{width:"100px"}}></div>
          <button onClick={() =>  
            { navigate('/signup') }}>Sign Up</button>
        </div>
      </div>
      <div className={styles.left}>
        <img src="https://s3-alpha-sig.figma.com/img/ccd9/e7f6/9d4cbfcf331c69b8e21db35d2e158410?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pSaP8uNTk9a5~56DG2VtPBhOXiDYBvqVpVnHrfdR86SxxPu6eVu6lgdQ5vYL1bHhKUhuwWQ5HlmIvzd8xTtM8gJpJfaU2Vu3kiDm2CPrtDvdCrQ837tSLa~FketjqnTrUMskc03J6y7w2~9j7fPc-qq~6lLp3IFKAh~r4s0yzSvwpSKmzRpccMsq5RzgFGpw~4XjYYt53MTvUgRMFtxKLWk2D7lUeThkhom49yol3cH7osY~HvC-ZKnal3bZta9EbNSEox6q8kGOl-ZrFdee8kP3lfwcG0Y5tPGzMG4nAXTKuw7OQQ4dmfFhqQEBtucsHNI4FO9CVbhRgTr0WX4zQg__" alt="" />
        <form style={{marginTop:"100px", marginLeft:"50px"}}>
            <h1>Login To NIKE</h1>
            <h3>Enter Your Details Here</h3>
            <input type="text" name="name" id="name" placeholder='Email or Phone Number'/>
            <input type="password" name="password" id="password" placeholder='Password'/>
            <button style={{width:"88%", backgroundColor:"orange"}} type="submit">Login</button>
            <button style={{width:"88%", backgroundColor:"orange"}} type="submit">Forgot Password</button>
        </form>
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

export default Login