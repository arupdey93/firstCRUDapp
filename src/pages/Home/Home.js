import React from 'react'
import NavBar from '../../components/NavBar'
import Showcase from '../../components/Showcase'
import SideBar from '../../components/SideBar'
import Footer from './Footer'
// import styles from './home.module.css'
import firebase from 'firebase/app'
// import { connect } from 'react-redux'
// import { fetchGameData } from '../../redux/gameData/gameActions'


class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      toggle:false,
    }
    this.menuToggleFunction = this.menuToggleFunction.bind(this)
  }

  componentDidMount(){
    // this.props.getGameData()
    //1st iterate over every object and store it into firebase
    //2nd extract the data that you want to save and store it into firebase
    //use the data model and store it into global store


    firebase
    .auth()
    .onAuthStateChanged((user)=>{
      if(!user){
        this.props.history.push('/login')
        console.log('User Redirected')
      }
    })
  }

  logout = () =>{ 
    firebase
    .auth()
    .signOut()
    console.log('Signed Out')
  }

  menuToggleFunction(){
    this.setState({
      toggle:!this.state.toggle
    })
  }


  render() {
    
    return (
      <div>
        <NavBar menuToggle={this.menuToggleFunction} toggleStatus={this.state.toggle} loggedOut={this.logout}/>
        <div style={{position:"relative"}}>
          <SideBar toggleStatus={this.state.toggle} loggedOut={this.logout}/>
        </div>
        <Showcase />
        <Footer />
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return{
//     getGameData: () => {
//       dispatch(fetchGameData())
//     }
//   }
// }
 
// export default connect(null, mapDispatchToProps)(Home)

export default Home