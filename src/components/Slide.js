import React, { Component } from 'react'
// import landingData  from "./Landing";
import styles from './slide.module.css'

 class Slide extends Component {
  // constructor(props){
  //   super(props)
    
  // }
  render() {
    
    return (
      <div className={styles.container}>
        {
          this.props.data.map((data,index)=>{
            return(
              <div className={(this.props.activeIndex === index) ? styles.active : styles.hidden} key={index}>
                <p className={styles.p_box}>
                  <img src={data.src} alt="logo" />
                </p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Slide