import React, { useState } from "react";
import styles1 from "./Shoe.module.css";
import { ShoeData } from "../ShoeData";
import NewShoeCard from "./NewShoeCard";
import { useNavigate } from "react-router-dom";
import styles from "../App.module.css";

const Products = () => {
    const navigate = useNavigate();
  const [front, setFront] = useState();
  return (
    <><div className={styles.navbar}>
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
        <li>
          <a href="reviews">Reviews</a>
        </li>
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
      <h1 style={{ textAlign: "center", marginTop: "15px", marginBottom:"20px" }}>Products</h1>
      <div className={styles1.Products}>
        {ShoeData.map((shoe, i) => {
          return (
            <NewShoeCard
              key={i}
              url={front === shoe.id ? shoe.url1 : shoe.url2}
              label={shoe.name}
              shoe={shoe}
              setFront={setFront}
            />
          );
        })}
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

export default Products;
