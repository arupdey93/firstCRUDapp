import React, { Component } from 'react'
import styles from './library.module.css'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { fetchGameData} from '../../redux/gameData/gameActions'
import Display from '../../components/Display'

class Library extends Component {
  state = {
    isRemoved:true,
  }
  componentDidMount(){
    this.props.getGameData() 
  }

  render() {
    return (
      <div className={styles.container}>
        <Header title="Library"/>
        <div className={styles.display_box}>
                {this.props.showGameInfo.map((item,index)=>{
                  return(
                    <Display isRemoved={this.state.isRemoved} item={item} position={index} key={index}/>
                  )
                })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    showGameInfo: state.gameDataBase
  }
}

const mapDispatchToProps = dispatch => {
  return{
    getGameData: () => {
      dispatch(fetchGameData())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Library)
