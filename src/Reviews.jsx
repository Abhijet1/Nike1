import React, { useState } from 'react'
import styles from './Review.module.css'
import styles1 from './App.module.css'
// import { Comment } from './Comment'
import { Comment as initialComments } from './Comment'
const Reviews = () => {
  const [formData, setFormData] = useState({
    name:"",
    comment:""
  });

  const [comments, setComments] = useState(initialComments);

  const submit = (e)=>{
    console.log(e);
      const newObject = {
        name: formData?.name,
        date: new Date().toLocaleDateString(),
        comment: formData?.comment
      }
      // comment.push(newObject)
      setComments([...comments, newObject]);
      // console.log('===', newObject)
    setFormData({ name: "", comment: "" });
  }
      console.log('===', comments)

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
        <div style={{ width: "200px" }}></div>
      </div>
      <div className={styles.heading}><h1 style={{ fontSize: "50px", fontWeight: "890", textAlign: "center" }}>Customer Reviews</h1></div>
      <div className={styles.box}>
        {comments.map((comment, index) => (
          <div key={index} className={styles.message}>
            <h4>{comment.name}</h4>
            <p>Date: {comment.date}</p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
      <div className={styles.review}>
        <div className={styles.user} onSubmit={(e) => e.preventDefault()}>
          <h4>Add your review here</h4>
          <input type="text" name="name" id="name" placeholder='Your name' value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        } />
          <textarea rows={5} name="text" id="review" placeholder='Your review' value={formData.comment}
        onChange={(e) =>
          setFormData({ ...formData, comment: e.target.value })
        }></textarea>
          <button type="submit" onClick={submit}>Submit</button>

        </div>
      </div>
    </div>
    
  )
}

export default Reviews
