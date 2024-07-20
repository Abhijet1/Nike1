import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import styles from "./App.module.css";
import { ShoeData } from "./ShoeData";
import ShoeCard from "./components/ShoeCard";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [front, setFront] = useState();
  
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src="./nike.png" alt="" />
        </div>
        <div className={styles.list}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            {/* <li>
              <a href="reviews">Reviews</a>
            </li> */}
          </ul>
        </div>
        <div className={styles.btn}>
          
          <button
            onClick={() => {
              navigate(`/login`);
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate(`/signup`);
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className={styles.slider}>
        <Carousel>
          <Carousel.Item interval={1800}>
            <img
              className="d-block"
              src="https://img.pikbest.com/origin/06/39/82/47ppIkbEsT7dJ.jpg!sw800"
              alt="First slide"
              onClick={() => {
                navigate(`/details?shoe=9`);
              }}
            />
          </Carousel.Item>
          <Carousel.Item interval={1800}>
            <img
              className="d-block"
              src="https://png.pngtree.com/png-clipart/20220419/original/pngtree-national-day-sports-shoes-promotion-rotation-banner-png-image_7535317.png"
              alt="Second slide"
              onClick={() => {
                navigate(`/details?shoe=10`);
              }}
            />
          </Carousel.Item>
          <Carousel.Item interval={1800}>
            <img
              className="d-block"
              src="https://i.pinimg.com/736x/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg"
              alt="Third slide"
              onClick={() => {
                navigate(`/details?shoe=11`);
              }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div
        style={{
          height: "98px",
          marginTop: "-30px",
          zIndex: "1",
        }}
      >
        <h1
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            fontWeight: "600",
            paddingTop: "40px",
            fontSize: "30px",
            color: "black",
            textAlign: "center",
          }}
        >
          TODAY'S HOT SELLERS
        </h1>
      </div>
      <div className={styles.hot}>
        {ShoeData.map((shoe, i) => {
          return (
            <ShoeCard
              key={i}
              url={front === shoe.id ? shoe.url1 : shoe.url2}
              label={shoe.name}
              shoe={shoe}
              setFront={setFront}
            />
          );
        })}
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <button style={{width:"250px", backgroundColor:"orange", color:"white", borderRadius:"6px", marginTop:"15px"}} onClick={() => {
            navigate(`/products`);
          }}>See All</button>
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
    </>
  );
};

export default App;
