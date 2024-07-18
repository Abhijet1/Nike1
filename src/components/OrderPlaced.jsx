import React, { useEffect, useState } from "react";
import { ShoeData } from "../ShoeData";
import styles from "./OrderPlacedPage.module.css";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const OrderPlacedPage = ({ total }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("shoe");

  const orderDate = format(new Date(), "MMMM d, yyyy h:mm a");
  const orderNumber = Math.floor(Math.random() * 100000000000);

  useEffect(() => {}, [params]);

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        Go To Home
      </button>
      <div className={styles.content}>
        <h1>Order Placed Successfully!</h1>
        <p>Your order details:</p>
        <div className={styles.details}>
          <p>Order Number: {orderNumber}</p>
          <p>Order Date and Time: {orderDate}</p>
          <p>Total Amount: ₹{total}.00</p>
        </div>
        <p>Thank you for shopping with us!</p>
      </div>
    </div>
  );
};

export default OrderPlacedPage;
