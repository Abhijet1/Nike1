import React from 'react'
import styles from '../App.module.css'
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  
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
          <button onClick={() =>  
            { navigate('/login') }}>Login</button>
        </div>
      </div>
      <div className={styles.left}>
        <img src="https://s3-alpha-sig.figma.com/img/ccd9/e7f6/9d4cbfcf331c69b8e21db35d2e158410?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pSaP8uNTk9a5~56DG2VtPBhOXiDYBvqVpVnHrfdR86SxxPu6eVu6lgdQ5vYL1bHhKUhuwWQ5HlmIvzd8xTtM8gJpJfaU2Vu3kiDm2CPrtDvdCrQ837tSLa~FketjqnTrUMskc03J6y7w2~9j7fPc-qq~6lLp3IFKAh~r4s0yzSvwpSKmzRpccMsq5RzgFGpw~4XjYYt53MTvUgRMFtxKLWk2D7lUeThkhom49yol3cH7osY~HvC-ZKnal3bZta9EbNSEox6q8kGOl-ZrFdee8kP3lfwcG0Y5tPGzMG4nAXTKuw7OQQ4dmfFhqQEBtucsHNI4FO9CVbhRgTr0WX4zQg__" alt="" />
        <form style={{marginTop:"40px"}}>
            <h1>Create an Account</h1>
            <h3>Enter Your Details Here</h3>
            <input type="text" name="name" id="name" placeholder='Name'/>
            <input type="text" name="name" id="name" placeholder='Email or Phone Number'/>
            <input type="password" name="password" id="password" placeholder='Password'/>
            <button type="submit">Sign Up</button>
            <button style={{backgroundColor:"white", border:"1px solid gray", display:"flex", justifyContent:"center", alignItems:"center"}} type="submit">
              <img style={{width:"23px", height:"23px", marginRight:"15px"}} src="https://www.svgrepo.com/show/353812/google-gmail.svg" alt="asd" />
              Sign Up With Google</button>
            <p>Already have an account? <a href="/login">Log in</a></p>
        </form>
      </div>
    </div>
  )
}

export default SignUp