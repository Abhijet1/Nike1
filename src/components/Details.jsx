import React, { useEffect, useState } from "react";
import styles from "../App.module.css";
import styles1 from "./Details.module.css";
import { ShoeData } from "../ShoeData";
import ShoeCard from "../components/ShoeCard";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Details = ({ setCartData }) => {
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [selectedOption, setSelectedOption] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("shoe");
  const [shoe, setShoe] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    const dt = ShoeData.find((item) => item.id == params);
    setShoe(dt);
    setImage(dt?.url1);
  }, [params]);

  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };
  const handleClickedImage = (e) => {
    setImage(e);
  };
  return (
    <div>
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
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className={styles1.box}>
          <div className={styles1.small}>
            <img
              src={shoe?.url1}
              alt=""
              onClick={() => handleClickedImage(shoe?.url1)}
            />
            <img
              src={shoe?.url2}
              alt=""
              onClick={() => handleClickedImage(shoe?.url2)}
            />
            <img
              src={shoe?.url3}
              alt=""
              onClick={() => handleClickedImage(shoe.url3)}
            />
          </div>
          <div className={styles1.big}>
            {image && <img src={image} alt="image" />}
          </div>
        </div>
        <div className={styles1.info}>
          <h1>{shoe?.name}</h1>
          <a href="/reviews">(145 reviews)</a>
          <h2 style={{ marginTop: "20px" }}>₹ {shoe?.price}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam
            nemo error provident, perspiciatis dolorum vero esse sapiente
            corporis aliquam veritatis recusandae iure maiores asperiores eius
            eos repellat necessitatibus voluptatem illo harum? Magnam, harum
            eum!
          </p>
          <div
            style={{ height: "2px", width: "100%", backgroundColor: "gray" }}
          ></div>
          <div className={styles1.size}>
            <h2>Size : </h2>
            <label htmlFor="text">
              <h3>S</h3>
            </label>
            <input
              type="checkbox"
              name="size"
              id="s"
              checked={selectedOption === "option1"}
              onChange={() => handleCheckboxChange("option1")}
            />
            <label htmlFor="text">
              <h3>M</h3>
            </label>
            <input
              type="checkbox"
              name="size"
              id="m"
              checked={selectedOption === "option2"}
              onChange={() => handleCheckboxChange("option2")}
            />
            <label htmlFor="text">
              <h3>L</h3>
            </label>
            <input
              type="checkbox"
              name="size"
              id="l"
              checked={selectedOption === "option3"}
              onChange={() => handleCheckboxChange("option3")}
            />
          </div>
          <div className={styles1.counter}>
            <button onClick={DecNum}>-</button>
            <h3>{count}</h3>
            <button onClick={IncNum}>+</button>
          </div>
          <div className={styles1.buy}>
            <button
              onClick={() => {
                setCartData((prevData) => [...prevData, shoe]);
                navigate(`/payment`);
              }}
            >
              Buy Now
            </button>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
      <div className={styles1.similar}>
        <h1>Similar Products</h1>
        <div className={styles.hot}>
          {ShoeData.map((shoe, i) => {
            return (
              <ShoeCard
                key={i}
                url={shoe.url1}
                label={shoe.name}
                shoe={shoe}
                onClick={() => navigate(`/edit?edit=${e.id}`)}
              />
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              width: "250px",
              backgroundColor: "orange",
              color: "white",
              borderRadius: "6px",
              marginTop: "15px",
            }}
            onClick={() => {
              navigate(`/products`);
            }}
          >
            See All
          </button>
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
  );
};
export default Details;
