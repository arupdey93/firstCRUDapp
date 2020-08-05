import React from 'react'
import styles from './navbar.module.css'
import { FaBook, FaHome, FaSearch, FaPowerOff, FaCog , FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// import firebase from 'firebase'

class NavBar extends React.Component {

  
  
  render() {
    
    return (
      <div className={styles.nav_container}> 
          <div className={styles.menu} onClick={this.props.menuToggle}>
            {(this.props.toggleStatus) ? (<div className={styles.change_bar1}></div>):(<div className={styles.bar1}></div>)}
            {(this.props.toggleStatus) ? (<div className={styles.change_bar2}></div>):(<div className={styles.bar2}></div>)}
            {(this.props.toggleStatus) ? (<div className={styles.change_bar3}></div>):(<div className={styles.bar3}></div>)}
          </div>
          <div className={styles.title}>
            <h2>Steam Lite</h2>
          </div>
          <div className={styles.x_list}>
            <Link className={styles.linker} to='/home'>
              <li><FaHome /> Home</li>
            </Link>
            <Link className={styles.linker} to="/library">
              <li><FaSearch /> Library</li>
            </Link>
            <Link className={styles.linker} to="/mycollection">
              <li><FaBook /> My Collection</li>
            </Link>
            <div className={styles.dropdown_content}>
              <li ><FaCog /> Settings</li>
              <div className={styles.dropdown_settings}>
                <Link className={styles.linker} to="/profile">
                  <li><FaUser/> Profile</li>  
                </Link>
                <li onClick={this.props.loggedOut}><FaPowerOff /> Log Out</li>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default NavBar
