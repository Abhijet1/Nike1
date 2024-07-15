import React from "react";
import styles from "./Shoe.module.css";
import { useNavigate } from "react-router-dom";

const NewShoeCard = ({ url, label, shoe, setFront, onClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.outer}
      onMouseEnter={() => setFront(shoe.id)}
      onMouseLeave={() => setFront(-1)}
      onClick={() => navigate(`/details?shoe=${shoe.id}`)}
    >
      <div className={styles.inner}>
        <img src={url} alt="" />
      </div>
      <div className={styles.name}>
        <h3 style={{ textAlign: "center" }}>{label}</h3>
      </div>
    </div>
  );
};

export default NewShoeCard;
