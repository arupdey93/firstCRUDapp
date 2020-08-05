import React from 'react'
import styles from './sidebar.module.css'
import { Link } from 'react-router-dom'

class SideBar extends React.Component {
  render() {
    return (
      <div className={(this.props.toggleStatus) ? styles.side_container_on : styles.side_container_off}>
        <div className={styles.side_list}>
            <Link className={styles.linker} to="/home">
              <li>Home</li>
            </Link>
            <Link className={styles.linker} to="/library">
              <li>Library</li>
            </Link>
            <Link className={styles.linker} to="/mycollection">
              <li>My Collection</li>
            </Link>
            <Link className={styles.linker} to="/profile">
              <li>Profile</li>
            </Link>
            <li onClick={this.props.loggedOut}>Log out</li>
          </div>
      </div>
    )
  }
}

export default SideBar
