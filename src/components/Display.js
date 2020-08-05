import React from 'react'
import styles from './display.module.css'
import {connect} from 'react-redux'
import { filterItem } from '../redux/gameData/gameActions'

class Display extends React.Component{
  // constructor(props){
  //   super(props)
  state = {
    buttonClicked:false,
  }
  // }
  addGameToCollect = (id) => {
    // console.log(id);
    this.props.selectItem(id)
    this.setState({
      buttonClicked:true,
    })
    
  }

  render(){
    return(
      <div className={styles.container} key={this.props.index}>
        <div>
          <li><img className={styles.box_image} src={this.props.item.image} alt='wallpaper'/></li>
          <li>{this.props.item.name}</li>
          <li>Ratings: {this.props.item.rating}</li>
          <li>Genre: {this.props.item.genre}</li>
          <li>Platform: {this.props.item.platform}</li>
          <li>Release Date: {this.props.item.r_date}</li>
        </div>
        <div className={styles.add_box} >
          {this.state.buttonClicked ? 
              <button 
                className={`${styles.selected_btn}`} 
                type="button">Selected</button> : 
              <button 
                className={`${styles.add_btn} ${styles.sweep_right}`} 
                type="button" 
                onClick={()=>this.addGameToCollect(this.props.position)}>Add to Collection</button>}
          {this.props.isRemoved ? <button style={{display:'none'}}>Remove</button>:<button className={styles.remove_btn}>Remove</button>}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    selectItem: (id) => {
      dispatch(filterItem(id)) 
    }
  }
}

export default connect(null,mapDispatchToProps)(Display)
