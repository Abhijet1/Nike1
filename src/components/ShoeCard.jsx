import React from 'react'
import styles from '../App.module.css'

const ShoeCard = ({url, label}) => {
    return (

        <div className={styles.outer}>
            <div className={styles.inner}>
                <img src={url} alt="" />
            </div>
            <div className={styles.name}>
                <h3 style={{ textAlign: "center" }}>{label}</h3>
            </div>
        </div>

    )
}

export default ShoeCard