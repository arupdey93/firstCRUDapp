import React, { Component } from 'react'
import styles from './mycollection.module.css'
import Header from '../../components/Header'
// import Display from '../../components/Display'
import { connect } from 'react-redux'
import { fetchGameData } from '../../redux/gameData/gameActions'
import Display from '../../components/Display'

class MyCollection extends Component {
  state = {
    isSelected:false,
    isRemoved:false,
    noAdd:true,
  }
  componentDidMount(){
    this.props.getGameData()
  }
  render() {
    console.log(this.props.filteredItem);
    return (
      <div className={styles.container}>
        <Header title="My Collection"/>
        <div className={styles.display_box}>
       {this.props.filteredItem.map((item,index)=>{
         return(
           <Display isRemoved={this.state.isRemoved} isSelected={this.state.isSelected} noAdd={this.state.noAdd} item={item} position={index} key={index}/>
         )
       })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    showGameInfo: state.gameDataBase,
    filteredItem: state.filteredItem,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    getGameData: ()=>{
      dispatch(fetchGameData())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyCollection)
