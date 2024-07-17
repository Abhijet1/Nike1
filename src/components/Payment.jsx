import React from "react";
import styles from "../App.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartData } from "./CartItems";
import { useSearchParams } from "react-router-dom";

const Payment = ({ cartData, setCartData }) => {
  const [formdata, setFormdata] = useState({});
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("shoe");
  const [shoe, setShoe] = useState()

  useEffect(() => {
    window.scrollTo(0, 0);
      const dt = CartData.find((shoe) => shoe.id == params);
      setShoe(dt)
  }, [params]);

  // useEffect(() => {
  //   setCartData(CartData.map(shoe => ({ ...shoe, quantity: 1 })));
  // }, []);
  console.log("carddddd", cartData)

  const addToCart = (id) => {
    const itemToAdd = ShoeData.find(item => item.id === id);
    if (itemToAdd) {
      const updatedCart = [...cartdata, { ...itemToAdd, quantity: 1 }];
      setCartData(updatedCart);
    }
  };

  
  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure to delete this item?")) {
        const dt = cartdata.filter((shoe) => shoe.id !== id);
        setCartData(dt);
        console.log(dt);
      }
    }
  };
  const handleOnSubmit = () => {
    console.log(formdata);
  };
  const handleQuantityChange = (id, newQuantity) => {
    const updatedData = cartdata.map((shoe) => {
      if (shoe.id === id) {
        return { ...shoe, quantity: newQuantity };
      }
      return shoe;
    });
    setCartData(updatedData);
  }
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
              navigate("/login");
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
      <h1 style={{ marginLeft: "350px" }}>Billing Details</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ marginTop: "150px", marginLeft: "-130px" }}>
          <form onSubmit={(e) => e.preventDefault()}>
            <label
              style={{ marginBottom: "-16px" }}
              htmlFor="name"
              className="lable1"
            >
              Name
            </label>
            <input
              style={{ width: "100%" }}
              type="name"
              className="input1"
              value={formdata.name}
              onChange={(e) =>
                setFormdata({ ...formdata, name: e.target.value })
              }
            />
            <label
              style={{ marginBottom: "-16px" }}
              htmlFor="Mobile"
              className="lable1"
            >
              Mobile Number
            </label>
            <input
              style={{ width: "100%" }}
              type="Mobile"
              className="input1"
              value={formdata.mobNo}
              onChange={(e) =>
                setFormdata({ ...formdata, mobNo: e.target.value })
              }
            />
            <label
              style={{ marginBottom: "-16px" }}
              htmlFor="email"
              className="lable1"
            >
              E-mail
            </label>
            <input
              style={{ width: "100%" }}
              type="email"
              name="email"
              className="input1"
              value={formdata.email}
              onChange={(e) =>
                setFormdata({ ...formdata, email: e.target.value })
              }
            />
            <label
              style={{ marginBottom: "-16px" }}
              htmlFor="name"
              className="lable1"
            >
              Address
            </label>
            <input
              style={{ width: "100%" }}
              type="name"
              className="input1"
              value={formdata.address}
              onChange={(e) =>
                setFormdata({ ...formdata, address: e.target.value })
              }
            />
            <label
              style={{ marginBottom: "-16px" }}
              htmlFor="name"
              className="lable1"
            >
              City
            </label>
            <input
              style={{ width: "100%" }}
              type="name"
              className="input1"
              value={formdata.city}
              onChange={(e) =>
                setFormdata({ ...formdata, city: e.target.value })
              }
            />
            <label
              style={{ marginBottom: "-16px" }}
              htmlFor="name"
              className="lable1"
            >
              State
            </label>
            <input
              style={{ width: "100%" }}
              type="name"
              className="input1"
              value={formdata.state}
              onChange={(e) =>
                setFormdata({ ...formdata, state: e.target.value })
              }
            />

            <button
              style={{ backgroundColor: "orange", width: "100%" }}
              type="submit"
              onClick={handleOnSubmit}
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className={styles.cart} style={{ width: "600px" }}>
          <div className="tab-mar">
            <table className="table table-hover">
              <thead>
                <tr>
                  <td>Sr.no</td>
                  <td>Item</td>
                  <td>Name</td>
                  {/* <td>Quantity</td> */}
                  <td>Remove</td>
                </tr>
              </thead>
              <tbody>
                {cartData.map((shoe, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={shoe.url1}
                          alt=""
                        />
                      </td>
                      <td>{shoe.name}</td>
                      {/* <td>
                        <div style={{ display: "flex", marginLeft: "-15px" }}>
                          <button
                            style={{
                              width: "30px",
                              height: "30px",
                              backgroundColor: "orange",
                              borderRadius: "50%",
                            }}
                            onClick={() =>
                              handleQuantityChange(shoe.id, shoe.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <h3 style={{ marginLeft: "10px" }}>{shoe.quantity}</h3>
                          <button
                            style={{
                              width: "30px",
                              height: "30px",
                              backgroundColor: "orange",
                              borderRadius: "50%",
                            }}
                            onClick={() =>
                              handleQuantityChange(shoe.id, shoe.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </td> */}
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(shoe.id)}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "black",
                            marginLeft:"-10px"
                          }}
                        >
                          x
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
