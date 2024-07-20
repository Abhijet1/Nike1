import React from "react";
import styles from "../App.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartData } from "./CartItems";
import { useSearchParams } from "react-router-dom";

const Payment = ({ cartData, setCartData, total, setTotal }) => {
  const [formdata, setFormdata] = useState({});
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedOption, setSelectedOption] = useState();
  const params = searchParams.get("shoe");
  const [shoe, setShoe] = useState();


  useEffect(() => {
    window.scrollTo(0, 0);
    const dt = CartData.find((shoe) => shoe.id == params);
    setShoe(dt);
  }, [params]);

  useEffect(() => {
    let sum = 0;
    cartData.forEach((item) => {
      sum += item.price;
    });

    setTotal(sum);
  }, [cartData]);

  const addToCart = (id) => {
    const itemToAdd = ShoeData.find((item) => item.id === id);
    if (itemToAdd) {
      const updatedCart = [...cartData, { ...itemToAdd, quantity: 1 }];
      setCartData(updatedCart);
    }
  };
  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
    console.log(setSelectedOption);
  };

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure to delete this item?")) {
        const dt = CartData.filter((shoe) => shoe.id !== id);
        setCartData(dt);
        console.log(dt);
      }
    }
  };
  const handleOnSubmit = () => {
    // console.log(formdata);
  };
  const handleQuantityChange = (id, newQuantity) => {
    const updatedData = cartdata.map((shoe) => {
      if (shoe.id === id) {
        return { ...shoe, quantity: newQuantity };
      }
      return shoe;
    });
    setCartData(updatedData);
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
            {/* <li>
              <a href="reviews">Reviews</a>
            </li> */}
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
        <div
          className={styles.cart}
          style={{ width: "600px", alignItems: "center", marginTop: "50px" }}
        >
          <div className="tab-mar">
            <table className="table table-hover">
              <thead>
                <tr>
                  <td>Action</td>
                  <td>Sr.no</td>
                  <td>Item</td>
                  <td>Name</td>
                  <td>Price</td>
                </tr>
              </thead>
              <tbody>
                {cartData.map((shoe, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(shoe.id)}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "black",
                            marginLeft: "-10px",
                            marginTop: "-10px",
                          }}
                        >
                          x
                        </button>
                      </td>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={shoe.url1}
                          alt=""
                        />
                      </td>
                      <td>{shoe.name}</td>
                      <td>{shoe.price}.00</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h5>Sub Total</h5>
              <h6 style={{ marginRight: "60px" }}>₹{total}.00</h6>
            </div>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#ccc",
                margin: "15px 0",
              }}
            ></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h5>Shipping</h5>
              <h6 style={{ marginRight: "60px" }}>Free</h6>
            </div>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#ccc",
                margin: "15px 0",
              }}
            ></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h5>Total</h5>
              <h6 style={{ marginRight: "60px" }}>₹{total}.00</h6>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "15px",
                lineHeight: "2",
              }}
            >
              <div>
                <input
                  type="radio"
                  name="Bank"
                  id="Bank"
                  checked={selectedOption === "option1"}
                  onChange={() => handleCheckboxChange("option1")}
                />
                <label style={{ marginLeft: "20px" }} htmlFor="Bank">
                  Bank
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="Cash"
                  id="Cash "
                  checked={selectedOption === "option2"}
                  onChange={() => handleCheckboxChange("option2")}
                />
                <label style={{ marginLeft: "20px" }} htmlFor="Cash">
                  Cash on Delivery
                </label>
              </div>
            </div>
            <button
              style={{
                backgroundColor: "orange",
                width: "100%",
                borderRadius: "6px",
                marginTop: "15px",
              }}
              type="submit"
              onClick={() => {
                navigate("/order");
              }}
            >
              Place Order
            </button>
            <button
              style={{
                backgroundColor: "orange",
                width: "100%",
                borderRadius: "6px",
                marginTop: "15px",
              }}
              type="submit"
              onClick={() => {
                navigate("/products");
              }}
            >
              Add More Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
