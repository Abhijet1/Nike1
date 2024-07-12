import React from 'react'
import styles from '../App.module.css'
import styles1 from './Details.module.css'
import { useNavigate } from 'react-router-dom'

const Details = () => {
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
      <div style={{display:"flex", justifyContent:"space-evenly"}}>
      <div className={styles1.box}>
        <div className={styles1.small}>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className={styles1.big}>
          <img src="" alt="" />
        </div>
      </div>
      <div className={styles1.info}>
        <h1>Mountaineer</h1>        
        <a href="/reviews">(145 reviews)</a>
        <h2 style={{marginTop:"20px"}}>₹ 6500.00</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam nemo error provident, perspiciatis dolorum vero esse sapiente corporis aliquam veritatis recusandae iure maiores asperiores eius eos repellat necessitatibus voluptatem illo harum? Magnam, harum eum!</p>
        <div style={{height:"2px", width:"100%", backgroundColor:"gray"}}></div>
        <div className={styles1.size}>
        <h2>Size : </h2>
        <label htmlFor="text"><h3>S</h3>
        </label>
        <input type="checkbox" name="size" id="s"/>
        <label htmlFor="text"><h3>M</h3>
        </label>
        <input type="checkbox" name="size" id="m"/>
        <label htmlFor="text"><h3>L</h3>
        </label>
        <input type="checkbox" name="size" id="l"/>
        </div>
        <div className={styles1.counter}>
          <button>-</button>
          <h3>1</h3>
          <button>+</button>
        </div>
        <div className={styles1.buy}>
        <button>Buy Now</button>
        <button>Add To Cart</button>

        </div>
      </div>
      </div>
      <div className={styles1.similar}>
        <h1>Similar Products</h1>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <div className={styles.outer} onClick={() =>  
            { navigate(`/details`) }}>
            <div className={styles.inner}>
                <img src="" alt="" />
            </div>
            <div className={styles.name}>
                <h3 style={{ textAlign: "center" }}></h3>
            </div>
        </div>
        <div className={styles.outer} onClick={() =>  
            { navigate(`/details`) }}>
            <div className={styles.inner}>
                <img src="" alt="" />
            </div>
            <div className={styles.name}>
                <h3 style={{ textAlign: "center" }}></h3>
            </div>
        </div>
        <div className={styles.outer} onClick={() =>  
            { navigate(`/details`) }}>
            <div className={styles.inner}>
                <img src="" alt="" />
            </div>
            <div className={styles.name}>
                <h3 style={{ textAlign: "center" }}></h3>
            </div>
        </div>
        <div className={styles.outer} onClick={() =>  
            { navigate(`/details`) }}>
            <div className={styles.inner}>
                <img src="" alt="" />
            </div>
            <div className={styles.name}>
                <h3 style={{ textAlign: "center" }}></h3>
            </div>
        </div>
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
export default Details