import React, { useEffect, useState } from "react";
import styles1 from "./Shoe.module.css";
import { ShoeData, Shoes } from "../ShoeData";
import NewShoeCard from "./NewShoeCard";
import { useNavigate } from "react-router-dom";
import styles from "../App.module.css";

const Products = () => {
  const navigate = useNavigate();
  const [front, setFront] = useState();
  const [filteredShoes, setFilteredShoes] = useState(Shoes);

  const filterShoes = (searchValue) => {
    const filtered = Shoes.filter((shoe) =>
      shoe.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredShoes(filtered);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src="./nike.png" alt="" />
        </div>
        <div className={styles.list} style={{marginLeft:"290px"}}>
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
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search products...."
            onChange={(e) => filterShoes(e.target.value)}
          />
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
      <h1
        style={{ textAlign: "center", marginTop: "15px", marginBottom: "20px" }}
      >
        Products
      </h1>
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>
      {filteredShoes.map((shoe, i) => (
        <NewShoeCard
          key={i}
          url={shoe.id === front ? shoe.url1 : shoe.url2}
          label={shoe.name}
          shoe={shoe}
          setFront={setFront}
        />
      ))}

      </div>
    </>
  );
};

export default Products;
