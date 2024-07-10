import React from 'react'
import styles from './Review.module.css'
import styles1 from './App.module.css'

const Reviews = () => {
  return (
    <div>
        <div className={styles1.navbar}>
        <div className={styles1.logo}>
          <img src="./nike.png" alt="" />
        </div>
        <div className={styles1.list}>
          <ul>
          <li><a href="/">Home</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="about">About</a></li>
            <li><a href="reviews">Reviews</a></li>
          </ul>
        </div> 
        <div></div>       
      </div>
      <div className={styles.heading}><h1 style={{fontSize:"50px", fontWeight:"890", textAlign:"center"}}>Customer Reviews</h1></div>
        <div className={styles.box}>
        <div className={styles.message}>
            <h4>Mohan Patil</h4>
            <p>Date : 02 Aug, 2023</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, doloremque neque quaerat maiores incidunt aliquam voluptates veritatis illum harum, impedit nam suscipit inventore facere quo?</p>
        </div>
        <div className={styles.message}>
            <h4>Mohan Patil</h4>
            <p>Date : 02 Aug, 2023</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, doloremque neque quaerat maiores incidunt aliquam voluptates veritatis illum harum, impedit nam suscipit inventore facere quo?</p>
        </div>
        <div className={styles.message}>
            <h4>Mohan Patil</h4>
            <p>Date : 02 Aug, 2023</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, doloremque neque quaerat maiores incidunt aliquam voluptates veritatis illum harum, impedit nam suscipit inventore facere quo?</p>
        </div>
        <div className={styles.message}>
            <h4>Mohan Patil</h4>
            <p>Date : 02 Aug, 2023</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, doloremque neque quaerat maiores incidunt aliquam voluptates veritatis illum harum, impedit nam suscipit inventore facere quo?</p>
        </div>
        <div className={styles.message}>
            <h4>Mohan Patil</h4>
            <p>Date : 02 Aug, 2023</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, doloremque neque quaerat maiores incidunt aliquam voluptates veritatis illum harum, impedit nam suscipit inventore facere quo?</p>
        </div>
        </div>
    </div>
  )
}

export default Reviews