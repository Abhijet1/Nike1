
import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import styles from './App.module.css'
import { ShoeData } from './ShoeData';
import ShoeCard  from './components/ShoeCard';
import { useNavigate } from "react-router-dom"; 

const App = () => {
    
    const navigate = useNavigate(); 
    const [front, setFront] = useState();
    console.log('hello===>>>', front, ShoeData)
  return (
    <>
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
            { navigate(`/login`) }}>Login</button>
          <button onClick={() =>  
            { navigate(`/signup`) }}>Sign Up</button>
        </div>
      </div>
      <div className={styles.slider}>
        <Carousel>
          <Carousel.Item interval={1800}>
            <img
              className="d-block"
              src="https://img.pikbest.com/origin/06/39/82/47ppIkbEsT7dJ.jpg!sw800"
              alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={1800}>
            <img
              className="d-block"
              src="https://png.pngtree.com/png-clipart/20220419/original/pngtree-national-day-sports-shoes-promotion-rotation-banner-png-image_7535317.png"
              alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1800}>
            <img
              className="d-block"
              src="https://i.pinimg.com/736x/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg"
              alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{
        height: "98px",
        marginTop: "-30px",
        zIndex: "1"
      }}>
        <h1 style={{
          marginTop:"20px",
          marginBottom:"20px",
          fontWeight: "600",
          paddingTop: "40px",
          fontSize: "30px",
          color: "black",
          textAlign: "center"
        }}>TODAY'S HOT SELLERS</h1>
      </div>
      <div className={styles.hot}>
        {
          ShoeData.map((shoe, i) => {
            return <ShoeCard
              key={i}
              url={front === shoe.id ? shoe.url : shoe.url2}
              label={shoe.name}
              shoe={shoe}
              setFront={setFront}
            />
          })
        }

      </div>
      <footer>
        <p style={{ marginTop: "5px" }}>CopyRight@2024</p>
      </footer>
    </>
  )
}

export default App