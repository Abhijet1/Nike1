import React from "react";
import styles1 from "../App.module.css";
import styles from "./Contact.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Contact = () => {
  const [formdata, setFormdata] = useState({});
  const navigate = useNavigate();

  const handleOnSubmit = () => {
    console.log(formdata);
  };
  return (
    <>
      {/* <div> */}
      <div className={styles1.navbar}>
        <div className={styles1.logo}>
          <img src="./nike.png" alt="" />
        </div>
        <div className={styles1.list}>
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
        <div className={styles1.btn}>
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
      {/* </div> */}
      <h1 style={{textAlign:"center"}}>Contact From</h1>
      <div  style={{marginTop:"155px", display:"flex"}}>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name" className="lable1">
            Name
          </label>
          <input style={{width:"100%"}}
            type="name"
            className="input1"
            value={formdata.name}
            onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
          />
          <label htmlFor="Mobile" className="lable1">
            Mobile Number
          </label>
          <input style={{width:"100%"}}
            type="Mobile"
            className="input1"
            value={formdata.mobNo}
            onChange={(e) =>
              setFormdata({ ...formdata, mobNo: e.target.value })
            }
          />
          <label htmlFor="email" className="lable1">
            E-mail
          </label>
          <input style={{width:"100%"}}
            type="email"
            name="email"
            className="input1"
            value={formdata.email}
            onChange={(e) =>
              setFormdata({ ...formdata, email: e.target.value })
            }
          />
          <label htmlFor="textarea">Text</label>
          <textarea style={{width:"100%"}}
            name="text"
            id="text"
            rows={3}
            value={formdata.text}
            onChange={(e) => setFormdata({ ...formdata, text: e.target.value })}
          ></textarea>
          <button style={{backgroundColor:"orange"}} type="submit" onClick={handleOnSubmit}>
            SUBMIT
          </button>
        </form>

        <div className={styles1.image1}>
          <img
            src="https://img.freepik.com/premium-vector/technical-support-system-vector-illustration-with-software-development-technology-help_2175-16622.jpg?w=996"
            alt="" style={{width:"600px", height:"600px", marginTop:"-100px"}}
          />
        </div>
      </div>
      <footer>
        <p style={{ marginTop: "5px" }}>CopyRight@2024</p>
        <div className={styles1.links}>
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

export default Contact;
