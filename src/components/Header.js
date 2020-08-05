import React from 'react'
import styles from './header.module.css'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header(props) {
  return (
    <div className={styles.container}>
      <div className={styles.header_title}>
          <div className={styles.sub_header_title1}>
            <Link className={styles.linker} to="/home">
              <FaArrowCircleLeft className={styles.back_arrow}/>
            </Link>
          </div>
          <div className={styles.sub_header_title2}>
            <h2>{props.title}</h2>
          </div>
        </div>
    </div>
  )
}
